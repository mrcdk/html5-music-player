package app;
import doom.Node;
import Doom.*;
import thx.ReadonlyArray;
import app.App.*;

class PlaylistComponent extends Doom {
	
	@:state var appState:AppState;
	@:api var appApi:MyApi;
	
	override public function render() {
		return ul(["class" => "mdl-list demo-list"], [for (track in appState.tracks) PlaylistEntry.with (function() {
				if (appState.playState.track == track) return;
				appApi.playTrack(track);
			},
			{
				track:track,
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
			"click" => click,
		],
		span(["class" => "mdl-list__item-primary-content"], span(Utils.formatTrackName(track))));
	}
}