package app;

import dots.Query;
import haxe.ds.Option;
import haxe.xml.Fast;
import js.html.AudioElement;
import thx.Arrays;
import thx.Floats;
import thx.load.Loader;
import app.App.PlaylistState;
import thx.promise.Promise;
import app.App.*;

class MyApi {
	
	public var state(default, null):Dynamic;
	public var player(default, null):AudioElement;
	public var onUpdate:Void->Void;
	
	var currentLoader:Promise<String>;
	
	public function new() {
		onUpdate = function() { };
	}
	
	public function playTrack(track:TrackInfo, ?forcePlay:Bool = false) {
		state.playState.track = track;
		player.src = track.file;
		player.play();
		onUpdate();
	}
	
	public function playRandomTrack() {
		if (state.tracks == null || state.tracks.length == 0) return;
		var t = Arrays.sampleOne(state.tracks);
		while (state.playState.track == t) {
			t = Arrays.sampleOne(state.tracks);
		}
		playTrack(t);
	}
	
	public function togglePause() {
		if (player.paused) {
			player.play();
		} else {
			player.pause();
		}
		onUpdate();
	}
	
	public function volumeChange(v:Float) {
		player.volume = Floats.clamp(player.volume+v, 0., 1.);
		state.playState.volume = player.volume;
		onUpdate();
	}
	
	public function loadPlaylist(playlist:Playlist, ?success:Void->Void) {
		state.playlistState = Loading;
		state.currentPlaylist = playlist;
		state.playState.track = null;
		state.playState.times.current = 0;
		state.playState.times.total = 0;
		state.tracks = null;
		
		if (currentLoader != null && !currentLoader.isResolved()) {			
			currentLoader.success(function(_) {}).failure(function(_) {}).always(function() {});
		}
		
		currentLoader = Loader.getText(playlist.tracks_url)
			.success(function(data) {
				var tracks:Array<TrackInfo> = [];
				try {
					var xml = new Fast(Xml.parse(data).firstElement()).node.trackList;			
					for(track in xml.nodes.track) {
						tracks.push({
							title: track.node.title.innerData,
							author: track.node.creator.innerData,
							file: track.node.location.innerData,
						});
					}
				} catch (e:Dynamic) {
					state.playlistState = Error("Error parsing XML: " + Std.string(e));
					return;
				}
				
				state.playlistState = Loaded;
				state.tracks = tracks;
				
				if (success != null) success();
			})
			.failure(function(error) {
				state.playlistState = Error("Error loading XML: " + Std.string(error));
			})
			.always(onUpdate);
			
		onUpdate();
	}
	
	public function bindAudioEvents(player:AudioElement) {
		this.player = player;
		player.volume = state.playState.volume;
		
		player.onplay = function() {
			state.playState.paused = false;
			onUpdate();
		}
		player.onpause = function() {
			state.playState.paused = true;
			onUpdate();
		}
		
		player.onended = function() {
			playRandomTrack();
		}
		player.ontimeupdate = function() {
			state.playState.times.current = player.currentTime;
			state.playState.times.total = player.duration;
			onUpdate();
		}
	}
}