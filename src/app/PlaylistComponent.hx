package app;
import app.App.*;
import Doom.*;
import js.html.Event;
import js.Lib;

class PlaylistComponent extends Doom {
	
	@:state var appState:AppState;
	@:api var appApi:MyApi;
	
	override public function didRefresh() {
		untyped componentHandler.upgradeAllRegistered();
	}
	
	override public function render() {
		return ul(["class" => "mdl-list demo-list"], [for (track in appState.tracks) PlaylistEntry.with (function() {
				if (appState.playState.track == track) return;
				appApi.playTrack(track);
			},
			{
				track: track,
				active: appState.playState.track == track,
			})
		]);
	}
	
}

class PlaylistEntry extends Doom {
	
	@:state(opt) var track:TrackInfo;
	@:state(false) var active:Bool;
	@:api var click:Void->Void;
	
	override public function render() {
		
		return li([
			"class" => "mdl-list__item" + (active ? " active" : ""),
			"click" => function(e:Event) {
				if (e.target != Lib.nativeThis) return;
				click();
			},
		],
		[
			span(["class" => "mdl-list__item-primary-content"], span(Utils.formatTrackName(track))),
			span(["class" => "mdl-list__item-secondary-content"], [
				a([
					"class" => "mdl-button mdl-js-button mdl-button--icon",
					"href" => track.file,
					"target" => "_blank",
					"download" => true,
				], 
					i(["class" => "material-icons"], "file_download")
				),
			]),
		]);
	}
}