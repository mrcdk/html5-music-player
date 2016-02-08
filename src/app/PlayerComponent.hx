package app;

import app.App.*;
import Doom.*;
import doom.Node;

/**
 * ...
 * @author MrCdK
 */
class PlayerComponent extends Doom {
	
	@:state var appState:AppState;
	@:api var appApi:MyApi;
	
	override public function render():Node {
		return div(["class" => "controls mdl-card mdl-shadow--16dp"], [
			audio(["preload" => "auto", "id" => "player"]),
			div(["class" => "mdl-card__supporting-text  mdl-typography--text-center"], [
				h4(appState.playState.track == null ? "-----" : Utils.formatTrackName(appState.playState.track)),
			]),
			div(["class" => "mdl-card__supporting-text  mdl-typography--text-center"], [
				span(Utils.formatTime(appState.playState.times.current, appState.playState.times.total)),
			]),
			div(["class" => "mdl-card__actions mdl-card--border"], [
				div(["class" => "play-skip-buttons"], [
					button(
						[
							"class" => "play-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--colored",
							"click" => function() appApi.togglePause(),
						],
						i(["class" => "material-icons"], (appState.playState.paused ? "play_arrow" : "pause"))
					),
					button(
						[
							"class" => "skip-next-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab",
							"click" => function() appApi.playRandomTrack(),
						],
						i(["class" => "material-icons"], "skip_next")
					),
				]),
				div(["class" => "volume-buttons mdl-typography--text-center"], [
					button(
						[
							"class" => "volume-down-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon",
							"click" => function() appApi.volumeChange(-0.1),
						],
						i(["class" => "material-icons"], "volume_down")
					),
					span(["class" => "volume-txt"],'${Math.round(appState.playState.volume * 100)}%'),
					button(
						[
							"class" => "volume-up-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon",
							"click" => function() appApi.volumeChange(0.1),
						],
						i(["class" => "material-icons"], "volume_up")
					),
				]),
			]),
		]);
	}
	
}