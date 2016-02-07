import js.html.*;
import js.Browser.*;
import haxe.Http;
import haxe.xml.*;

class Player {
    
    static var playlists:Array<Playlist> = [
		{host: 'Aersia', name:'VIP', src:'http://vip.aersia.net/roster.xml'},
		{host: 'Aersia', name:'Mellow', src:'http://vip.aersia.net/roster-mellow.xml'},
		{host: 'Aersia', name:'Source', src:'http://vip.aersia.net/roster-source.xml'},
		{host: 'Aersia', name:'Exiled', src:'http://vip.aersia.net/roster-exiled.xml'},
		{host: 'Aersia', name:'WAP', src:'http://wap.aersia.net/roster.xml'},
		{host: 'Aersia', name:'CPP', src:'http://cpp.aersia.net/roster.xml'},
    ];
	
	static var player:AudioElement;
	static var list:UListElement;
	
	static var playedTracks:Array<TrackInfo> = [];
	
	static var currentTrack:TrackInfo;
	static var currentPlaylist:Playlist;
	static var nav:Element;
	
    static function main() {
        player = cast document.getElementById("player");
		list = cast document.getElementById("playlist");
		
		initControls();
		
		nav = document.getElementsByClassName("demo-navigation")[0];
		
		clear(nav);
		
		var hash = window.location.hash == null ? "" : window.location.hash.substr(1);
		var init = false;
		for (playlist in playlists) {			
			var a = document.createAnchorElement();
			a.classList.add("mdl-navigation__link");
			a.innerHTML = '${playlist.host} - ${playlist.name}';
			a.href = '';
			a.setAttribute("data-playlist", playlist.name);
			a.onclick = function(e) {
				e.preventDefault();
				if (currentPlaylist != playlist) {
					loadPlaylist(playlist);
				}
			};
			
			nav.appendChild(a);
			
			if (hash.toLowerCase() == playlist.name.toLowerCase()) {
				loadPlaylist(playlist);
				init = true;
			}
			
		}
		
		if (!init) {
			loadPlaylist(playlists[0]);
		}
    }
    
    static function loadPlaylist(playlist:Playlist) {
		
		if (!Lambda.exists(playlists, function(p) return p == playlist)) {
			trace('Playlist $playlist doesn\'t exist');
			return;
		}
		
		document.getElementsByClassName("demo-list")[0].style.display = "none";
		document.getElementById("loading").style.display = "block";
		
		currentPlaylist = playlist;
		
		for (child in nav.children) {
			child.classList.remove("active");
			var data = child.getAttribute("data-playlist");
			if (currentPlaylist.name == data) {
				child.classList.add("active");
			}
		}
		
		playedTracks = [];
		
		player.pause();
		player.src = null;
		
		var http = new Http(playlist.src);
		http.async = true;
		
		http.onData = function(str) {
			var tracks:Array<TrackInfo> = [];
			try {
				var xml = new Fast(Xml.parse(str).firstElement()).node.trackList;			
				for(track in xml.nodes.track) {
					tracks.push({
						title: track.node.title.innerData,
						author: track.node.creator.innerData,
						file: track.node.location.innerData,
					});
				}
			}catch (e:Dynamic) {
				trace(e);
			}
			
			currentTrack = null;
			player.onended = playRandomTrack.bind(tracks);
			document.getElementById("skip_next").onclick = playRandomTrack.bind(tracks);
			/*
			document.getElementById("skip_previous").onclick = function() {
				var last = playedTracks.pop();
				playTrack(last == null ? randomTrack(tracks) : last);
			}
			*/
			
			clear(list);
			
			for (track in tracks) {
				list.appendChild(createLI(track));
			}
			
			document.getElementsByClassName("demo-list")[0].style.display = "block";
			document.getElementById("loading").style.display = "none";
			
			playRandomTrack(tracks);
		}
		
		http.request();
    }
	
	static function createLI(track:TrackInfo) {
		var li = document.createLIElement();
		li.classList.add("mdl-list__item");
		
		var span1 = document.createSpanElement();
		span1.classList.add("mdl-list__item-primary-content");
		
		var span2 = document.createSpanElement();
		span2.innerHTML = '${track.author} - ${track.title}';
		
		li.onclick = playTrack.bind(track, false);
		
		track.li = li;
		
		li.appendChild(span1);
		span1.appendChild(span2);
		
		return li;
	}
	
	static function initControls() {
		var play_button:ButtonElement =  cast document.getElementById("play_button");
		var percentage:InputElement = cast document.getElementById("percentage");
		
		play_button.onclick = function() {
			if (player.paused) {
				player.play();
			} else {
				player.pause();
			}
		}
		
		document.getElementById("volume_up").onclick = function() {
			player.volume += 0.1;
		}
		document.getElementById("volume_down").onclick = function() {
			player.volume -= 0.1;
		}
		
		function seek() {
			var playing = !player.paused;
			if(playing) player.pause();
			player.fastSeek(player.duration * percentage.valueAsNumber / 100);
			if(playing) player.play();
		}
		
		percentage.onclick = seek;
		percentage.onchange = seek;
		
		inline function updateInfo() {
			document.getElementById("info").innerHTML = '${currentTrack.author} - ${currentTrack.title}';
		}
		player.onpause = function() {
			play_button.firstElementChild.innerHTML = "play_arrow";
			updateInfo();
		}
		player.onplay = function() {
			play_button.firstElementChild.innerHTML = "pause";
			updateInfo();
		}
		player.ontimeupdate = function() {
			document.getElementById("time").innerHTML = formatTime(player.currentTime, player.duration);
			untyped percentage.MaterialSlider.change(Math.isNaN(player.duration) ? 0 : player.currentTime / player.duration * 100);
		}
	}
    
    static function playTrack(track:TrackInfo, scroll:Bool = true) {
		if (currentTrack != null) {
			currentTrack.li.classList.remove("playing");
			playedTracks.push(currentTrack);
		}
		track.li.classList.add("playing");
		if(scroll) track.li.scrollIntoView({block: "start", behavior: "smooth"});
		currentTrack = track;
		player.src = track.file;
		player.play();
    }
	
	static inline function clear<T:Element>(e:Element) {
		while (e.firstChild != null) {
			e.removeChild(e.firstChild);
		}
	}
	
	static inline function formatTime(current:Float, ?end:Float) {
		inline function fmt(t:Float) {
			var min = Math.floor(t / 60);
			var sec = Math.floor(t - min * 60);
			return '${min<10?"0":""}$min:${sec<10?"0":""}$sec';
		}
		return '${fmt(current)} / ${fmt(end == null || Math.isNaN(end) ? 0 : end)}';
	}
	
	static function playRandomTrack(tracks:Array<TrackInfo>) {
		var t = Random.fromArray(tracks);
		while (currentTrack == t) {
			t = Random.fromArray(tracks);
		}
		playTrack(t);
	}
}

typedef TrackInfo = {
	var title:String;
    @:optional var author:String;
    var file:String;
	@:optional var li:LIElement;
}

typedef Playlist = { host:String, name:String, src:String };
