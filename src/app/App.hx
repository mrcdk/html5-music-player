package app;

import app.App.*;
import app.MyApi;
import Doom.*;
import dots.Query;
import haxe.xml.Fast;
import thx.load.Loader;

import doom.Component;
import doom.Node;

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

		appApi.onUpdate = function() {
			update(appApi.state);
		}
		appApi.bindAudioEvents(Query.find("#player"));
		appApi.loadPlaylist(Main.playlists[0], function() appApi.playRandomTrack());
	}
	
	override public function render():Node {
		
		var content = switch(playlistState) {
			case Loading:		LoadingComponent.with();
			case Loaded:		PlaylistComponent.with(appApi, state);
			case Error(msg):	p(msg);
		};
		
		return div(["class" => "demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"], [
			HeaderComponent.with ("VIP Aersia - HTML5 Player"),
			MenuComponent.with (appApi, state),
			div(["class" => "mdl-layout__content mdl-color--grey-100"], [
				div(["class" => "mdl-grid"], div(["class" => "mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col"], content)),
			]),
			PlayerComponent.with(appApi, state),
		]);
	}
}