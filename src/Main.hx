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
		{host: 'Aersia', name:'VIP', tracks_url:'http://vip.aersia.net/roster.xml', source: 'http://vip.aersia.net'},
		{host: 'Aersia', name:'Mellow', tracks_url:'http://vip.aersia.net/roster-mellow.xml', source: 'http://vip.aersia.net'},
		{host: 'Aersia', name:'Source', tracks_url:'http://vip.aersia.net/roster-source.xml', source: 'http://vip.aersia.net'},
		{host: 'Aersia', name:'Exiled', tracks_url:'http://vip.aersia.net/roster-exiled.xml', source: 'http://vip.aersia.net'},
		{host: 'Aersia', name:'WAP', tracks_url:'http://wap.aersia.net/roster.xml', source: 'http://vip.aersia.net'},
		{host: 'Aersia', name:'CPP', tracks_url:'http://cpp.aersia.net/roster.xml', source: 'http://vip.aersia.net'}
	];
	
	public static function main() {
		Doom.mount(
			new App({appApi: new MyApi()}, {}),
			Query.find("#root")
		);
	}
	
}