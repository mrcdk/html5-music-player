package;
import app.App;
import app.MyApi;
import dots.Query;

/**
 * ...
 * @author MrCdK
 */
class Main{

	public static var playlists(default, null):Array<Playlist> = [
		{host: 'Aersia', name:'VIP', tracks_url:'http://vip.aersia.net/roster.xml', source: 'http://vip.aersia.net/vip.swf'},
		{host: 'Aersia', name:'Mellow', tracks_url:'http://vip.aersia.net/roster-mellow.xml', source: 'http://vip.aersia.net/vip-mellow.swf'},
		{host: 'Aersia', name:'Source', tracks_url:'http://vip.aersia.net/roster-source.xml', source: 'http://vip.aersia.net/vip-source.swf'},
		{host: 'Aersia', name:'Exiled', tracks_url:'http://vip.aersia.net/roster-exiled.xml', source: 'http://vip.aersia.net/vip-exiled.swf'},
		{host: 'Aersia', name:'WAP', tracks_url:'http://wap.aersia.net/roster.xml', source: 'http://wap.aersia.net/wap.swf'},
		{host: 'Aersia', name:'CPP', tracks_url:'http://cpp.aersia.net/roster.xml', source: 'http://cpp.aersia.net/cpp.swf'},
		{host: 'JetSetRadio', name:'Live', tracks_url:'http://jetsetradio.live/audioplayer/audio/~list.js', source: 'http://jetsetradio.live'},
	];
	
	public static function main() {
		Doom.mount(
			new App({appApi: new MyApi()}, {}),
			Query.find("#root")
		);
	}
	
}