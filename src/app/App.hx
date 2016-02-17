package app;

import app.App.*;
import app.MyApi;
import Doom.*;
import dots.Query;
import haxe.xml.Fast;
import js.html.Element;
import pushstate.PushState;
import thx.load.Loader;
import thx.Timer;

import doom.Component;
import doom.Node;

using StringTools;

enum PlaylistState {
	Loading;
	Loaded;
	Error(msg:String);
}

class App extends Doom {
	
	@:state(opt) public var currentPlaylist:Playlist;
	@:state(opt) public var tracks:Array<TrackInfo>;
	@:state(Loading) public var playlistState:PlaylistState;
	
	@:state({
		track: null,
		times: { current:0, total:0 },
		volume: 1,
		paused: true,
	}) 
	public var playState:PlayState;
	
	@:api public var appApi:MyApi;
	
	override public function didMount() {
		
		@:privateAccess appApi.state = state;
		@:privateAccess appApi.zenscroll = untyped __js__('new Zenscroll({0}, 1000, 9)', Query.find(".playlist"));

		appApi.onUpdate = function() {
			update(appApi.state);
		}
		appApi.bindAudioEvents(Query.find("#player"));
		
		PushState.addEventListener(function(url) {
			var decoded:String = url.urlDecode().substr(4).trim();
			
			var playlist:Playlist = Main.playlists[0];
			var trackStr:String = null;
			if (decoded.length > 0) {
				var plStr:String  = decoded.substring(0, decoded.indexOf("/"));
				var plHost:String = plStr.substring(0, plStr.indexOf("-")).trim();
				var plName:String = plStr.substring(plStr.indexOf("-")+1).trim();
				playlist = Lambda.find(Main.playlists, function(pl) {
					return pl.host == plHost && pl.name == plName;
				});
				
				if (playlist == null) playlist = Main.playlists[0];
				
				trackStr = decoded.substring(decoded.indexOf("/") + 1);
			}
			
			appApi.loadPlaylist(playlist, function() {
				if (trackStr == null) {
					appApi.playTrack(null);
					return;
				}
				var track = Lambda.find(state.tracks, function(t) {
					return (Utils.formatTrackName(t).toLowerCase() == trackStr.toLowerCase());
				});
				appApi.playTrack(track);
			});
		});
		
	}
	
	override public function render():Node {
		
		var content = switch(playlistState) {
			case Loading:		div();
			case Loaded:		PlaylistComponent.with(appApi, state);
			case Error(msg):	p(msg);
		};
		
		return div(["class" => "demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"], [
			HeaderComponent.with ("HTML5 Music Player", {playlistState:playlistState}),
			MenuComponent.with (appApi, state),
			div(["class" => "playlist mdl-layout__content mdl-color--grey-100"], [
				div(["class" => "mdl-grid"], div(["class" => "mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col"], [
					content,
				])),
			]),
			PlayerComponent.with(appApi, state),
		]);
	}
}