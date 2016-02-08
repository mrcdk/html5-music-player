package app;
import app.App.*;
import doom.Node;

import Doom.*;

/**
 * ...
 * @author MrCdK
 */
class MenuComponent extends Doom {
	
	@:state var appState:AppState;
	@:api var appApi:MyApi;
	
	override public function render() {
		return div(["class" => "demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"], [
			span(["class" => "mdl-layout-title"], "Playlists"),
			nav(["class" => "demo-navigation mdl-navigation mdl-color--blue-grey-800"], [
				for (playlist in Main.playlists) {
					MenuEntry.with (function() {
						if (appState.currentPlaylist == playlist) return;
						appApi.loadPlaylist(playlist, function() appApi.playRandomTrack());
					},
					{
						playlist: (playlist:Playlist), 
						active: appState.currentPlaylist == playlist
					});
				}
			]),
			div(["class" => "mdl-typography--text-center"], "Made by Justo Delgado Baudí"),
		]);
	}
}

class MenuEntry extends Doom {
	
	@:state(opt) public var playlist:Playlist;
	@:state(false) public var active:Bool;
	
	@:api public var click:Void->Void;
	
	override public function render() {
		return a([
			"class" => "mdl-navigation__link" + (active ? " active" : ""),
			"click" => click,
			"href" => "",
		], '${playlist.host} - ${playlist.name}');
	}
}