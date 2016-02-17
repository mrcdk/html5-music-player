package;
import pushstate.PushState;

/**
 * ...
 * @author MrCdK
 */
class Utils{

	public static inline function formatTrackName(track:TrackInfo) {
		return (track.author == null ? '' : '${track.author} - ') + '${track.title}';
	}
	
	public static function formatTime(current:Float, ?end:Float) {
		inline function fmt(t:Float) {
			var min = Math.floor(t / 60);
			var sec = Math.floor(t - min * 60);
			return '${min<10?"0":""}$min:${sec<10?"0":""}$sec';
		}
		return '${fmt(current)} / ${end == null || Math.isNaN(end) || end == 0 ? "--:--" : fmt(end)}';
	}
	
	public static inline function createURI(playlist:Playlist, track:TrackInfo) {
		return '${@:privateAccess PushState.basePath}/#!/${playlist.host} - ${playlist.name}/${formatTrackName(track)}';
	}
	
}