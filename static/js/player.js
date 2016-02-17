(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var doom_IComponent = function() { };
doom_IComponent.__name__ = ["doom","IComponent"];
doom_IComponent.prototype = {
	__class__: doom_IComponent
};
var doom_ComponentBase = function(children) {
	this.isUnmounted = false;
	this.children = null == children?[]:children;
};
doom_ComponentBase.__name__ = ["doom","ComponentBase"];
doom_ComponentBase.__interfaces__ = [doom_IComponent];
doom_ComponentBase.prototype = {
	init: function(post) {
		post.splice(0,0,$bind(this,this.didMount));
		this.element = doom_HtmlNode.toHtml(this.node,post);
	}
	,render: function() {
		throw new thx_error_AbstractMethod({ fileName : "ComponentBase.hx", lineNumber : 26, className : "doom.ComponentBase", methodName : "render"});
	}
	,didMount: function() {
	}
	,didRefresh: function() {
	}
	,didUnmount: function() {
	}
	,toString: function() {
		var cls = Type.getClassName(js_Boot.getClass(this)).split(".").pop();
		var node = null == this.node?"":doom__$Node_Node_$Impl_$.toString(this.node);
		return "" + cls + "(" + thx_Strings.ellipsisMiddle(node,80,"...") + ")";
	}
	,updateNode: function(oldNode) {
		var newNode = this.render();
		switch(newNode[1]) {
		case 0:
			break;
		case 3:
			break;
		default:
			throw new thx_Error("Component " + this.toString() + " must return only element nodes",null,{ fileName : "ComponentBase.hx", lineNumber : 46, className : "doom.ComponentBase", methodName : "updateNode"});
		}
		var patches = doom__$Node_Node_$Impl_$.diff(oldNode,newNode);
		doom_HtmlNode.applyPatches(patches,this.element);
		this.node = newNode;
	}
	,__class__: doom_ComponentBase
};
var Doom = function(children) {
	doom_ComponentBase.call(this,children);
};
Doom.__name__ = ["Doom"];
Doom.mount = function(node,ref) {
	if(null == ref) throw new js__$Boot_HaxeError("reference element is set to null");
	switch(node[1]) {
	case 3:
		var comp = node[2];
		ref.innerHTML = "";
		var post = [];
		comp.node = comp.render();
		comp.init(post);
		ref.appendChild(comp.element);
		var _g = 0;
		while(_g < post.length) {
			var f = post[_g];
			++_g;
			f();
		}
		break;
	default:
		var post1 = [];
		var dom = doom_HtmlNode.toHtml(node,post1);
		ref.innerHTML = "";
		ref.appendChild(dom);
		var _g1 = 0;
		while(_g1 < post1.length) {
			var f1 = post1[_g1];
			++_g1;
			f1();
		}
	}
};
Doom.__super__ = doom_ComponentBase;
Doom.prototype = $extend(doom_ComponentBase.prototype,{
	__class__: Doom
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		var tmp;
		if(this.r.m != null && n >= 0 && n < this.r.m.length) tmp = this.r.m[n]; else throw new js__$Boot_HaxeError("EReg::matched");
		return tmp;
	}
	,matchedPos: function() {
		if(this.r.m == null) throw new js__$Boot_HaxeError("No string matched");
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		var tmp;
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) this.r.s = s;
			tmp = b;
		} else {
			var b1 = this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			tmp = b1;
		}
		return tmp;
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,map: function(s,f) {
		var offset = 0;
		var buf_b = "";
		while(true) {
			if(offset >= s.length) break; else if(!this.matchSub(s,offset)) {
				var x = HxOverrides.substr(s,offset,null);
				buf_b += x == null?"null":"" + x;
				break;
			}
			var p = this.matchedPos();
			var x1 = HxOverrides.substr(s,offset,p.pos - offset);
			buf_b += x1 == null?"null":"" + x1;
			var x2 = f(this);
			buf_b += x2 == null?"null":"" + x2;
			if(p.len == 0) {
				var x3 = HxOverrides.substr(s,p.pos,1);
				buf_b += x3 == null?"null":"" + x3;
				offset = p.pos + 1;
			} else offset = p.pos + p.len;
			if(!this.r.global) break;
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			var x4 = HxOverrides.substr(s,offset,null);
			buf_b += x4 == null?"null":"" + x4;
		}
		return buf_b;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.__name__ = ["Lambda"];
Lambda.find = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		if(f(v)) return v;
	}
	return null;
};
var List = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
};
var Main = function() { };
Main.__name__ = ["Main"];
Main.main = function() {
	pushstate_PushState.init("/html5_music_player",true,false);
	pushstate_PushState.clearEventListeners();
	var api = new app_MyApi();
	var tmp;
	var comp = new app_App({ appApi : api},{ });
	tmp = doom_NodeImpl.ComponentNode(comp);
	Doom.mount(tmp,dots_Query.find("#root"));
};
Math.__name__ = ["Math"];
var Reflect = function() { };
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.random = function(x) {
	return x <= 0?0:Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = ["StringTools"];
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var Utils = function() { };
Utils.__name__ = ["Utils"];
Utils.formatTime = function(current,end) {
	var tmp;
	var min = Math.floor(current / 60);
	var sec = Math.floor(current - min * 60);
	tmp = "" + (min < 10?"0":"") + min + ":" + (sec < 10?"0":"") + sec;
	var tmp1;
	if(end == null || isNaN(end) || end == 0) tmp1 = "--:--"; else {
		var min1 = Math.floor(end / 60);
		var sec1 = Math.floor(end - min1 * 60);
		tmp1 = "" + (min1 < 10?"0":"") + min1 + ":" + (sec1 < 10?"0":"") + sec1;
	}
	return "" + tmp + " / " + tmp1;
};
var Xml = function(nodeType) {
	this.nodeType = nodeType;
	this.children = [];
	this.attributeMap = new haxe_ds_StringMap();
};
Xml.__name__ = ["Xml"];
Xml.parse = function(str) {
	return haxe_xml_Parser.parse(str);
};
Xml.createElement = function(name) {
	var xml = new Xml(Xml.Element);
	if(xml.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + xml.nodeType);
	xml.nodeName = name;
	return xml;
};
Xml.createPCData = function(data) {
	var xml = new Xml(Xml.PCData);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createCData = function(data) {
	var xml = new Xml(Xml.CData);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createComment = function(data) {
	var xml = new Xml(Xml.Comment);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createDocType = function(data) {
	var xml = new Xml(Xml.DocType);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createProcessingInstruction = function(data) {
	var xml = new Xml(Xml.ProcessingInstruction);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createDocument = function() {
	return new Xml(Xml.Document);
};
Xml.prototype = {
	set: function(att,value) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		var _this = this.attributeMap;
		if(__map_reserved[att] != null) _this.setReserved(att,value); else _this.h[att] = value;
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		var tmp;
		var _this = this.attributeMap;
		if(__map_reserved[att] != null) tmp = _this.existsReserved(att); else tmp = _this.h.hasOwnProperty(att);
		return tmp;
	}
	,elementsNamed: function(name) {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		var tmp;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.children;
		while(_g1 < _g2.length) {
			var child = _g2[_g1];
			++_g1;
			var tmp1;
			if(child.nodeType == Xml.Element) {
				var tmp2;
				if(child.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + child.nodeType);
				tmp2 = child.nodeName;
				tmp1 = tmp2 == name;
			} else tmp1 = false;
			if(tmp1) _g.push(child);
		}
		tmp = _g;
		var ret = tmp;
		return HxOverrides.iter(ret);
	}
	,firstElement: function() {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nodeType == Xml.Element) return child;
		}
		return null;
	}
	,addChild: function(x) {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		if(x.parent != null) x.parent.removeChild(x);
		this.children.push(x);
		x.parent = this;
	}
	,removeChild: function(x) {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		if(HxOverrides.remove(this.children,x)) {
			x.parent = null;
			return true;
		}
		return false;
	}
	,__class__: Xml
};
var app_PlaylistState = { __ename__ : ["app","PlaylistState"], __constructs__ : ["Loading","Loaded","Error"] };
app_PlaylistState.Loading = ["Loading",0];
app_PlaylistState.Loading.toString = $estr;
app_PlaylistState.Loading.__enum__ = app_PlaylistState;
app_PlaylistState.Loaded = ["Loaded",1];
app_PlaylistState.Loaded.toString = $estr;
app_PlaylistState.Loaded.__enum__ = app_PlaylistState;
app_PlaylistState.Error = function(msg) { var $x = ["Error",2,msg]; $x.__enum__ = app_PlaylistState; $x.toString = $estr; return $x; };
var app_App = function(api,state,children) {
	if(state.playlistState == null) state.playlistState = app_PlaylistState.Loading;
	if(state.playState == null) state.playState = { track : null, times : { current : 0, total : 0}, volume : 1, paused : true};
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_App.__name__ = ["app","App"];
app_App.__super__ = Doom;
app_App.prototype = $extend(Doom.prototype,{
	didMount: function() {
		var _g = this;
		this.api.appApi.state = this.state;
		this.api.appApi.zenscroll = new Zenscroll(dots_Query.find(".playlist"), 1000, 9);
		this.api.appApi.onUpdate = function() {
			_g.update(_g.api.appApi.state);
		};
		this.api.appApi.bindAudioEvents(dots_Query.find("#player"));
		pushstate_PushState.addEventListener(null,null,function(url) {
			var decoded = StringTools.trim((function($this) {
				var $r;
				var _this = decodeURIComponent(url.split("+").join(" "));
				$r = HxOverrides.substr(_this,4,null);
				return $r;
			}(this)));
			var playlist = Main.playlists[0];
			var trackStr = null;
			if(decoded.length > 0) {
				var plStr = decoded.substring(0,decoded.indexOf("/"));
				var plHost = StringTools.trim(plStr.substring(0,plStr.indexOf("-")));
				var plName = StringTools.trim(plStr.substring(plStr.indexOf("-") + 1));
				playlist = Lambda.find(Main.playlists,function(pl) {
					return pl.host == plHost && pl.name == plName;
				});
				if(playlist == null) playlist = Main.playlists[0];
				trackStr = decoded.substring(decoded.indexOf("/") + 1);
			}
			_g.api.appApi.loadPlaylist(playlist,function() {
				if(trackStr == null) {
					_g.api.appApi.playTrack(null);
					return;
				}
				var track = Lambda.find(_g.state.tracks,function(t) {
					return ((t.author == null?"":"" + t.author + " - ") + ("" + t.title)).toLowerCase() == trackStr.toLowerCase();
				});
				_g.api.appApi.playTrack(track);
			});
		});
	}
	,render: function() {
		var tmp;
		var _g = this.state.playlistState;
		switch(_g[1]) {
		case 0:
			tmp = doom__$Node_Node_$Impl_$.el("div",null,null,null);
			break;
		case 1:
			tmp = app_PlaylistComponent["with"](this.api.appApi,this.state);
			break;
		case 2:
			var msg = _g[2];
			var child = doom_NodeImpl.Text(msg);
			tmp = doom__$Node_Node_$Impl_$.el("p",null,null,child);
			break;
		}
		var content = tmp;
		var tmp1;
		var tmp2;
		var _g1 = new haxe_ds_StringMap();
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header");
		if(__map_reserved["class"] != null) _g1.setReserved("class",value); else _g1.h["class"] = value;
		tmp2 = _g1;
		var attributes = tmp2;
		var tmp3;
		var tmp4;
		var _g11 = new haxe_ds_StringMap();
		var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("playlist mdl-layout__content mdl-color--grey-100");
		if(__map_reserved["class"] != null) _g11.setReserved("class",value1); else _g11.h["class"] = value1;
		tmp4 = _g11;
		var attributes1 = tmp4;
		var tmp5;
		var tmp6;
		var _g2 = new haxe_ds_StringMap();
		var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-grid");
		if(__map_reserved["class"] != null) _g2.setReserved("class",value2); else _g2.h["class"] = value2;
		tmp6 = _g2;
		var attributes2 = tmp6;
		var tmp7;
		var tmp8;
		var _g4 = new haxe_ds_StringMap();
		var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col");
		if(__map_reserved["class"] != null) _g4.setReserved("class",value3); else _g4.h["class"] = value3;
		tmp8 = _g4;
		var attributes3 = tmp8;
		tmp7 = doom__$Node_Node_$Impl_$.el("div",attributes3,[content],null);
		var child1 = tmp7;
		tmp5 = doom__$Node_Node_$Impl_$.el("div",attributes2,null,child1);
		var children1 = [tmp5];
		tmp3 = doom__$Node_Node_$Impl_$.el("div",attributes1,children1,null);
		var children = [app_HeaderComponent["with"]("HTML5 Music Player",{ playlistState : this.state.playlistState}),app_MenuComponent["with"](this.api.appApi,this.state),tmp3,app_PlayerComponent["with"](this.api.appApi,this.state)];
		tmp1 = doom__$Node_Node_$Impl_$.el("div",attributes,children,null);
		return tmp1;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(this.isUnmounted || !this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: app_App
});
var app_HeaderComponent = function(api,state,children) {
	if(state.playlistState == null) state.playlistState = app_PlaylistState.Loaded;
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_HeaderComponent.__name__ = ["app","HeaderComponent"];
app_HeaderComponent["with"] = function(title,state,children) {
	var apiVar = { };
	if(state == null) state = { };
	var stateVar = { title : title, playlistState : state.playlistState};
	var tmp;
	var comp = new app_HeaderComponent(apiVar,stateVar,children);
	tmp = doom_NodeImpl.ComponentNode(comp);
	return tmp;
};
app_HeaderComponent.__super__ = Doom;
app_HeaderComponent.prototype = $extend(Doom.prototype,{
	render: function() {
		var tmp;
		var tmp1;
		var _g = new haxe_ds_StringMap();
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600");
		if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
		tmp1 = _g;
		var attributes = tmp1;
		var tmp2;
		var tmp3;
		var _g1 = new haxe_ds_StringMap();
		var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout__header-row");
		if(__map_reserved["class"] != null) _g1.setReserved("class",value1); else _g1.h["class"] = value1;
		tmp3 = _g1;
		var attributes1 = tmp3;
		var tmp4;
		var tmp8;
		var _g2 = new haxe_ds_StringMap();
		var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout-title");
		if(__map_reserved["class"] != null) _g2.setReserved("class",value2); else _g2.h["class"] = value2;
		tmp8 = _g2;
		var attributes2 = tmp8;
		var child = doom_NodeImpl.Text(this.state.title);
		tmp4 = doom__$Node_Node_$Impl_$.el("div",attributes2,null,child);
		var tmp5;
		var tmp9;
		var _g3 = new haxe_ds_StringMap();
		var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout-spacer");
		if(__map_reserved["class"] != null) _g3.setReserved("class",value3); else _g3.h["class"] = value3;
		tmp9 = _g3;
		var attributes3 = tmp9;
		tmp5 = doom__$Node_Node_$Impl_$.el("div",attributes3,null,null);
		var tmp6;
		var tmp10;
		var _g4 = new haxe_ds_StringMap();
		var value4 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("hdrbtn");
		if(__map_reserved.id != null) _g4.setReserved("id",value4); else _g4.h["id"] = value4;
		var value5 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon");
		if(__map_reserved["class"] != null) _g4.setReserved("class",value5); else _g4.h["class"] = value5;
		tmp10 = _g4;
		var attributes4 = tmp10;
		var tmp11;
		var tmp12;
		var _g6 = new haxe_ds_StringMap();
		var value6 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
		if(__map_reserved["class"] != null) _g6.setReserved("class",value6); else _g6.h["class"] = value6;
		tmp12 = _g6;
		var attributes5 = tmp12;
		var child2 = doom_NodeImpl.Text("more_vert");
		tmp11 = doom__$Node_Node_$Impl_$.el("i",attributes5,null,child2);
		var child1 = tmp11;
		tmp6 = doom__$Node_Node_$Impl_$.el("button",attributes4,null,child1);
		var tmp7;
		var tmp13;
		var _g7 = new haxe_ds_StringMap();
		var value7 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("hdrbtn");
		if(__map_reserved["for"] != null) _g7.setReserved("for",value7); else _g7.h["for"] = value7;
		var value8 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right");
		if(__map_reserved["class"] != null) _g7.setReserved("class",value8); else _g7.h["class"] = value8;
		tmp13 = _g7;
		var attributes6 = tmp13;
		var tmp14;
		var tmp16;
		var _g8 = new haxe_ds_StringMap();
		var value9 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-menu__item");
		if(__map_reserved["class"] != null) _g8.setReserved("class",value9); else _g8.h["class"] = value9;
		tmp16 = _g8;
		var attributes7 = tmp16;
		var tmp17;
		var tmp18;
		var _g10 = new haxe_ds_StringMap();
		var value10 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-button mdl-js-button mdl-button--primary");
		if(__map_reserved["class"] != null) _g10.setReserved("class",value10); else _g10.h["class"] = value10;
		var value11 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("https://twitter.com/jdbaudi");
		if(__map_reserved.href != null) _g10.setReserved("href",value11); else _g10.h["href"] = value11;
		var value12 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("_blank");
		if(__map_reserved.target != null) _g10.setReserved("target",value12); else _g10.h["target"] = value12;
		tmp18 = _g10;
		var attributes8 = tmp18;
		var child4 = doom_NodeImpl.Text("Twitter");
		tmp17 = doom__$Node_Node_$Impl_$.el("a",attributes8,null,child4);
		var child3 = tmp17;
		tmp14 = doom__$Node_Node_$Impl_$.el("li",attributes7,null,child3);
		var tmp15;
		var tmp19;
		var _g11 = new haxe_ds_StringMap();
		var value13 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-menu__item");
		if(__map_reserved["class"] != null) _g11.setReserved("class",value13); else _g11.h["class"] = value13;
		tmp19 = _g11;
		var attributes9 = tmp19;
		var tmp20;
		var tmp21;
		var _g13 = new haxe_ds_StringMap();
		var value14 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-button mdl-js-button mdl-button--primary");
		if(__map_reserved["class"] != null) _g13.setReserved("class",value14); else _g13.h["class"] = value14;
		var value15 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("https://github.com/mrcdk");
		if(__map_reserved.href != null) _g13.setReserved("href",value15); else _g13.h["href"] = value15;
		var value16 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("_blank");
		if(__map_reserved.target != null) _g13.setReserved("target",value16); else _g13.h["target"] = value16;
		tmp21 = _g13;
		var attributes10 = tmp21;
		var child6 = doom_NodeImpl.Text("Github");
		tmp20 = doom__$Node_Node_$Impl_$.el("a",attributes10,null,child6);
		var child5 = tmp20;
		tmp15 = doom__$Node_Node_$Impl_$.el("li",attributes9,null,child5);
		var children2 = [tmp14,tmp15];
		tmp7 = doom__$Node_Node_$Impl_$.el("ul",attributes6,children2,null);
		var children1 = [tmp4,tmp5,tmp6,tmp7];
		tmp2 = doom__$Node_Node_$Impl_$.el("div",attributes1,children1,null);
		var children = [tmp2];
		tmp = doom__$Node_Node_$Impl_$.el("header",attributes,children,null);
		return tmp;
	}
	,__class__: app_HeaderComponent
});
var app_MenuComponent = function(api,state,children) {
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_MenuComponent.__name__ = ["app","MenuComponent"];
app_MenuComponent["with"] = function(appApi,appState,children) {
	var apiVar = { appApi : appApi};
	var stateVar = { appState : appState};
	var tmp;
	var comp = new app_MenuComponent(apiVar,stateVar,children);
	tmp = doom_NodeImpl.ComponentNode(comp);
	return tmp;
};
app_MenuComponent.__super__ = Doom;
app_MenuComponent.prototype = $extend(Doom.prototype,{
	render: function() {
		var _g6 = this;
		var tmp;
		var tmp1;
		var _g = new haxe_ds_StringMap();
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50");
		if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
		tmp1 = _g;
		var attributes = tmp1;
		var tmp2;
		var tmp5;
		var _g1 = new haxe_ds_StringMap();
		var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout-title");
		if(__map_reserved["class"] != null) _g1.setReserved("class",value1); else _g1.h["class"] = value1;
		tmp5 = _g1;
		var attributes1 = tmp5;
		var child = doom_NodeImpl.Text("Playlists");
		tmp2 = doom__$Node_Node_$Impl_$.el("span",attributes1,null,child);
		var tmp3;
		var tmp6;
		var _g2 = new haxe_ds_StringMap();
		var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-navigation mdl-navigation mdl-color--blue-grey-800");
		if(__map_reserved["class"] != null) _g2.setReserved("class",value2); else _g2.h["class"] = value2;
		tmp6 = _g2;
		var attributes2 = tmp6;
		var tmp7;
		var _g3 = [];
		var _g4 = 0;
		var _g5 = Main.playlists;
		while(_g4 < _g5.length) {
			var playlist = [_g5[_g4]];
			++_g4;
			_g3.push(app_MenuEntry["with"]((function(playlist) {
				return function() {
					if(_g6.state.appState.currentPlaylist == playlist[0]) return;
					_g6.api.appApi.loadPlaylist(playlist[0],(function() {
						return function() {
							_g6.api.appApi.playRandomTrack();
						};
					})());
				};
			})(playlist),{ playlist : playlist[0], active : this.state.appState.currentPlaylist == playlist[0], source : playlist[0].source}));
		}
		tmp7 = _g3;
		var children1 = tmp7;
		tmp3 = doom__$Node_Node_$Impl_$.el("nav",attributes2,children1,null);
		var tmp4;
		var tmp8;
		var _g41 = new haxe_ds_StringMap();
		var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-typography--text-center");
		if(__map_reserved["class"] != null) _g41.setReserved("class",value3); else _g41.h["class"] = value3;
		tmp8 = _g41;
		var attributes3 = tmp8;
		var child1 = doom_NodeImpl.Text("Made by Justo Delgado Baudí");
		tmp4 = doom__$Node_Node_$Impl_$.el("div",attributes3,null,child1);
		var children = [tmp2,tmp3,tmp4];
		tmp = doom__$Node_Node_$Impl_$.el("div",attributes,children,null);
		return tmp;
	}
	,__class__: app_MenuComponent
});
var app_MenuEntry = function(api,state,children) {
	if(state.active == null) state.active = false;
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_MenuEntry.__name__ = ["app","MenuEntry"];
app_MenuEntry["with"] = function(click,state,children) {
	var apiVar = { click : click};
	if(state == null) state = { };
	var stateVar = { playlist : state.playlist, active : state.active, source : state.source};
	var tmp;
	var comp = new app_MenuEntry(apiVar,stateVar,children);
	tmp = doom_NodeImpl.ComponentNode(comp);
	return tmp;
};
app_MenuEntry.__super__ = Doom;
app_MenuEntry.prototype = $extend(Doom.prototype,{
	render: function() {
		var _g1 = this;
		var tmp;
		var tmp1;
		var _g = new haxe_ds_StringMap();
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-navigation__link" + (this.state.active?" active":""));
		if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
		var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromEventHandler(function(e) {
			var cls = (js_Boot.__cast(e.target , HTMLElement)).className;
			if(cls.length > 0 && !(cls.indexOf("navigation__link") >= 0)) return;
			_g1.api.click();
		});
		if(__map_reserved.click != null) _g.setReserved("click",value1); else _g.h["click"] = value1;
		tmp1 = _g;
		var attributes = tmp1;
		var tmp2;
		var child = doom_NodeImpl.Text("" + this.state.playlist.host + " - " + this.state.playlist.name);
		tmp2 = doom__$Node_Node_$Impl_$.el("span",null,null,child);
		var tmp3;
		var tmp5;
		var _g11 = new haxe_ds_StringMap();
		var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout-spacer");
		if(__map_reserved["class"] != null) _g11.setReserved("class",value2); else _g11.h["class"] = value2;
		tmp5 = _g11;
		var attributes1 = tmp5;
		tmp3 = doom__$Node_Node_$Impl_$.el("div",attributes1,null,null);
		var tmp4;
		var tmp6;
		var _g2 = new haxe_ds_StringMap();
		var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-button mdl-js-button mdl-button--icon");
		if(__map_reserved["class"] != null) _g2.setReserved("class",value3); else _g2.h["class"] = value3;
		var value4 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString(this.state.source);
		if(__map_reserved.href != null) _g2.setReserved("href",value4); else _g2.h["href"] = value4;
		var value5 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("_blank");
		if(__map_reserved.target != null) _g2.setReserved("target",value5); else _g2.h["target"] = value5;
		tmp6 = _g2;
		var attributes2 = tmp6;
		var tmp7;
		var tmp8;
		var _g4 = new haxe_ds_StringMap();
		var value6 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
		if(__map_reserved["class"] != null) _g4.setReserved("class",value6); else _g4.h["class"] = value6;
		tmp8 = _g4;
		var attributes3 = tmp8;
		var child2 = doom_NodeImpl.Text("open_in_new");
		tmp7 = doom__$Node_Node_$Impl_$.el("i",attributes3,null,child2);
		var child1 = tmp7;
		tmp4 = doom__$Node_Node_$Impl_$.el("a",attributes2,null,child1);
		var children = [tmp2,tmp3,tmp4];
		tmp = doom__$Node_Node_$Impl_$.el("div",attributes,children,null);
		return tmp;
	}
	,__class__: app_MenuEntry
});
var app_MyApi = function() {
	this.onUpdate = function() {
	};
	this.onPlayerUpdate = function() {
	};
};
app_MyApi.__name__ = ["app","MyApi"];
app_MyApi.prototype = {
	playTrack: function(track) {
		if(track == null) {
			this.playRandomTrack();
			return;
		}
		this.state.playState.track = track;
		this.player.src = track.file;
		this.player.play();
		this.onUpdate();
		this.zenscroll.to(dots_Query.find(".demo-list li.active"));
		var tmp;
		var playlist = this.state.currentPlaylist;
		tmp = "" + pushstate_PushState.basePath + "/#!/" + playlist.host + " - " + playlist.name + "/" + ((track.author == null?"":"" + track.author + " - ") + ("" + track.title));
		var uri = tmp;
		if(decodeURIComponent(("" + pushstate_PushState.basePath + pushstate_PushState.currentPath).split("+").join(" ")) != uri) pushstate_PushState.push(uri);
	}
	,playRandomTrack: function() {
		if(this.state.tracks == null || this.state.tracks.length == 0) return;
		var tmp;
		var array = this.state.tracks;
		var index = Std.random(array.length);
		tmp = array[index];
		var t = tmp;
		while(this.state.playState.track == t) {
			var tmp1;
			var array1 = this.state.tracks;
			var index1 = Std.random(array1.length);
			tmp1 = array1[index1];
			t = tmp1;
		}
		this.playTrack(t);
	}
	,togglePause: function() {
		if(this.player.paused) this.player.play(); else this.player.pause();
		this.onUpdate();
	}
	,volumeChange: function(v) {
		var tmp;
		var v1 = this.player.volume + v;
		if(v1 < 0.) tmp = 0.; else if(v1 > 1.) tmp = 1.; else tmp = v1;
		this.player.volume = tmp;
		this.state.playState.volume = this.player.volume;
		this.onPlayerUpdate();
	}
	,loadPlaylist: function(playlist,success) {
		if(playlist == this.state.currentPlaylist) {
			if(success != null) success();
			return;
		}
		this.state.playlistState = app_PlaylistState.Loading;
		this.state.currentPlaylist = playlist;
		this.state.playState.track = null;
		this.state.playState.times.current = 0;
		this.state.playState.times.total = 0;
		this.state.tracks = null;
		this.player.pause();
		var _g = playlist.host.toLowerCase();
		switch(_g) {
		case "aersia":
			this.loadAersia(playlist,success);
			break;
		case "jetsetradio":
			this.loadJetsetradio(playlist,success);
			break;
		}
		this.onUpdate();
	}
	,bindAudioEvents: function(player) {
		var _g = this;
		this.player = player;
		player.volume = this.state.playState.volume;
		player.onplay = function() {
			_g.state.playState.paused = false;
			_g.onPlayerUpdate();
		};
		player.onpause = function() {
			_g.state.playState.paused = true;
			_g.onPlayerUpdate();
		};
		player.onended = function() {
			_g.playRandomTrack();
		};
		player.ontimeupdate = function() {
			_g.state.playState.times.current = player.currentTime;
			_g.state.playState.times.total = player.duration;
			_g.onPlayerUpdate();
		};
	}
	,loadAersia: function(playlist,success) {
		var _g = this;
		thx_promise__$Promise_Promise_$Impl_$.always(thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(thx_load_Loader.getText(playlist.tracks_url),function(data) {
			var tracks = [];
			try {
				var xml = new haxe_xml_Fast(Xml.parse(data).firstElement()).node.resolve("trackList");
				var _this = xml.nodes.resolve("track");
				var _g_head = _this.h;
				var _g_val = null;
				while(_g_head != null) {
					var tmp;
					_g_val = _g_head[0];
					_g_head = _g_head[1];
					tmp = _g_val;
					var track = tmp;
					tracks.push({ title : track.node.resolve("title").get_innerData(), author : track.node.resolve("creator").get_innerData(), file : track.node.resolve("location").get_innerData()});
				}
			} catch( e ) {
				haxe_CallStack.lastException = e;
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				_g.state.playlistState = app_PlaylistState.Error("Error parsing XML: " + Std.string(e));
				return;
			}
			_g.state.playlistState = app_PlaylistState.Loaded;
			_g.state.tracks = tracks;
			if(success != null) success();
		}),function(error) {
			_g.state.playlistState = app_PlaylistState.Error("Error loading XML: " + Std.string(error));
		}),this.onUpdate);
	}
	,loadJetsetradio: function(playlist,success) {
		var _g = this;
		var filesListArray = window.filesListArray;
		if(filesListArray == null) window.filesListArray = filesListArray = [];
		var load = function() {
			var tracks = [];
			var _g1 = 0;
			while(_g1 < filesListArray.length) {
				var file = filesListArray[_g1];
				++_g1;
				tracks.push({ title : file, author : null, file : "http://jetsetradio.live/audioplayer/audio/" + file + ".mp3"});
			}
			_g.state.playlistState = app_PlaylistState.Loaded;
			_g.state.tracks = tracks;
			_g.onUpdate();
			if(success != null) success();
		};
		var id = "" + playlist.host + "-" + playlist.name;
		if(dots_Query.find("#" + id) == null) {
			var script = (function($this) {
				var $r;
				var _this = window.document;
				$r = _this.createElement("script");
				return $r;
			}(this));
			script.id = id;
			script.src = "http://jetsetradio.live/audioplayer/audio/~list.js";
			script.type = "text/javascript";
			script.async = true;
			script.onload = load;
			var e = dots_Query.find("head");
			e.appendChild(script);
		} else load();
		this.onUpdate();
	}
	,__class__: app_MyApi
};
var app_PlayerComponent = function(api,state,children) {
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_PlayerComponent.__name__ = ["app","PlayerComponent"];
app_PlayerComponent["with"] = function(appApi,appState,children) {
	var apiVar = { appApi : appApi};
	var stateVar = { appState : appState};
	var tmp;
	var comp = new app_PlayerComponent(apiVar,stateVar,children);
	tmp = doom_NodeImpl.ComponentNode(comp);
	return tmp;
};
app_PlayerComponent.__super__ = Doom;
app_PlayerComponent.prototype = $extend(Doom.prototype,{
	didMount: function() {
		var _g = this;
		this.api.appApi.onPlayerUpdate = function() {
			_g.update({ appState : _g.api.appApi.state});
		};
	}
	,render: function() {
		var _g7 = this;
		var tmp;
		var tmp1;
		var _g = new haxe_ds_StringMap();
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("controls mdl-card mdl-shadow--16dp");
		if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
		tmp1 = _g;
		var attributes = tmp1;
		var tmp2;
		var tmp6;
		var _g1 = new haxe_ds_StringMap();
		var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("auto");
		if(__map_reserved.preload != null) _g1.setReserved("preload",value1); else _g1.h["preload"] = value1;
		var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("player");
		if(__map_reserved.id != null) _g1.setReserved("id",value2); else _g1.h["id"] = value2;
		tmp6 = _g1;
		var attributes1 = tmp6;
		tmp2 = doom__$Node_Node_$Impl_$.el("audio",attributes1,null,null);
		var tmp3;
		var tmp7;
		var _g2 = new haxe_ds_StringMap();
		var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-card__supporting-text  mdl-typography--text-center");
		if(__map_reserved["class"] != null) _g2.setReserved("class",value3); else _g2.h["class"] = value3;
		tmp7 = _g2;
		var attributes2 = tmp7;
		var tmp8;
		var tmp9;
		if(this.state.appState.playState.track == null) tmp9 = doom_NodeImpl.Text("Nothing playing"); else {
			var tmp10;
			var track = this.state.appState.playState.track;
			tmp10 = (track.author == null?"":"" + track.author + " - ") + ("" + track.title);
			tmp9 = doom_NodeImpl.Text(tmp10);
		}
		var child = tmp9;
		tmp8 = doom__$Node_Node_$Impl_$.el("h4",null,null,child);
		var children1 = [tmp8];
		tmp3 = doom__$Node_Node_$Impl_$.el("div",attributes2,children1,null);
		var tmp4;
		var tmp11;
		var _g3 = new haxe_ds_StringMap();
		var value4 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-card__supporting-text  mdl-typography--text-center");
		if(__map_reserved["class"] != null) _g3.setReserved("class",value4); else _g3.h["class"] = value4;
		tmp11 = _g3;
		var attributes3 = tmp11;
		var tmp12;
		var tmp13;
		var content = Utils.formatTime(this.state.appState.playState.times.current,this.state.appState.playState.times.total);
		tmp13 = doom_NodeImpl.Text(content);
		var child1 = tmp13;
		tmp12 = doom__$Node_Node_$Impl_$.el("span",null,null,child1);
		var children2 = [tmp12];
		tmp4 = doom__$Node_Node_$Impl_$.el("div",attributes3,children2,null);
		var tmp5;
		var tmp14;
		var _g4 = new haxe_ds_StringMap();
		var value5 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-card__actions mdl-card--border");
		if(__map_reserved["class"] != null) _g4.setReserved("class",value5); else _g4.h["class"] = value5;
		tmp14 = _g4;
		var attributes4 = tmp14;
		var tmp15;
		var tmp17;
		var _g5 = new haxe_ds_StringMap();
		var value6 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("play-skip-buttons");
		if(__map_reserved["class"] != null) _g5.setReserved("class",value6); else _g5.h["class"] = value6;
		tmp17 = _g5;
		var attributes5 = tmp17;
		var tmp18;
		var tmp20;
		var _g6 = new haxe_ds_StringMap();
		var value7 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("play-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--colored");
		if(__map_reserved["class"] != null) _g6.setReserved("class",value7); else _g6.h["class"] = value7;
		var value8 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
			_g7.api.appApi.togglePause();
		});
		if(__map_reserved.click != null) _g6.setReserved("click",value8); else _g6.h["click"] = value8;
		tmp20 = _g6;
		var attributes6 = tmp20;
		var tmp21;
		var tmp22;
		var _g8 = new haxe_ds_StringMap();
		var value9 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
		if(__map_reserved["class"] != null) _g8.setReserved("class",value9); else _g8.h["class"] = value9;
		tmp22 = _g8;
		var attributes7 = tmp22;
		var child3 = this.state.appState.playState.paused?doom_NodeImpl.Text("play_arrow"):doom_NodeImpl.Text("pause");
		tmp21 = doom__$Node_Node_$Impl_$.el("i",attributes7,null,child3);
		var child2 = tmp21;
		tmp18 = doom__$Node_Node_$Impl_$.el("button",attributes6,null,child2);
		var tmp19;
		var tmp23;
		var _g9 = new haxe_ds_StringMap();
		var value10 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("skip-next-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab");
		if(__map_reserved["class"] != null) _g9.setReserved("class",value10); else _g9.h["class"] = value10;
		var value11 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
			_g7.api.appApi.playRandomTrack();
		});
		if(__map_reserved.click != null) _g9.setReserved("click",value11); else _g9.h["click"] = value11;
		tmp23 = _g9;
		var attributes8 = tmp23;
		var tmp24;
		var tmp25;
		var _g11 = new haxe_ds_StringMap();
		var value12 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
		if(__map_reserved["class"] != null) _g11.setReserved("class",value12); else _g11.h["class"] = value12;
		tmp25 = _g11;
		var attributes9 = tmp25;
		var child5 = doom_NodeImpl.Text("skip_next");
		tmp24 = doom__$Node_Node_$Impl_$.el("i",attributes9,null,child5);
		var child4 = tmp24;
		tmp19 = doom__$Node_Node_$Impl_$.el("button",attributes8,null,child4);
		var children4 = [tmp18,tmp19];
		tmp15 = doom__$Node_Node_$Impl_$.el("div",attributes5,children4,null);
		var tmp16;
		var tmp26;
		var _g12 = new haxe_ds_StringMap();
		var value13 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-buttons mdl-typography--text-center");
		if(__map_reserved["class"] != null) _g12.setReserved("class",value13); else _g12.h["class"] = value13;
		tmp26 = _g12;
		var attributes10 = tmp26;
		var tmp27;
		var tmp30;
		var _g13 = new haxe_ds_StringMap();
		var value14 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-down-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon");
		if(__map_reserved["class"] != null) _g13.setReserved("class",value14); else _g13.h["class"] = value14;
		var value15 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
			_g7.api.appApi.volumeChange(-0.1);
		});
		if(__map_reserved.click != null) _g13.setReserved("click",value15); else _g13.h["click"] = value15;
		tmp30 = _g13;
		var attributes11 = tmp30;
		var tmp31;
		var tmp32;
		var _g15 = new haxe_ds_StringMap();
		var value16 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
		if(__map_reserved["class"] != null) _g15.setReserved("class",value16); else _g15.h["class"] = value16;
		tmp32 = _g15;
		var attributes12 = tmp32;
		var child7 = doom_NodeImpl.Text("volume_down");
		tmp31 = doom__$Node_Node_$Impl_$.el("i",attributes12,null,child7);
		var child6 = tmp31;
		tmp27 = doom__$Node_Node_$Impl_$.el("button",attributes11,null,child6);
		var tmp28;
		var tmp33;
		var _g16 = new haxe_ds_StringMap();
		var value17 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-txt");
		if(__map_reserved["class"] != null) _g16.setReserved("class",value17); else _g16.h["class"] = value17;
		tmp33 = _g16;
		var attributes13 = tmp33;
		var tmp34;
		var content1 = "" + Math.round(this.state.appState.playState.volume * 100) + "%";
		tmp34 = doom_NodeImpl.Text(content1);
		var child8 = tmp34;
		tmp28 = doom__$Node_Node_$Impl_$.el("span",attributes13,null,child8);
		var tmp29;
		var tmp35;
		var _g17 = new haxe_ds_StringMap();
		var value18 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-up-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon");
		if(__map_reserved["class"] != null) _g17.setReserved("class",value18); else _g17.h["class"] = value18;
		var value19 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
			_g7.api.appApi.volumeChange(0.1);
		});
		if(__map_reserved.click != null) _g17.setReserved("click",value19); else _g17.h["click"] = value19;
		tmp35 = _g17;
		var attributes14 = tmp35;
		var tmp36;
		var tmp37;
		var _g19 = new haxe_ds_StringMap();
		var value20 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
		if(__map_reserved["class"] != null) _g19.setReserved("class",value20); else _g19.h["class"] = value20;
		tmp37 = _g19;
		var attributes15 = tmp37;
		var child10 = doom_NodeImpl.Text("volume_up");
		tmp36 = doom__$Node_Node_$Impl_$.el("i",attributes15,null,child10);
		var child9 = tmp36;
		tmp29 = doom__$Node_Node_$Impl_$.el("button",attributes14,null,child9);
		var children5 = [tmp27,tmp28,tmp29];
		tmp16 = doom__$Node_Node_$Impl_$.el("div",attributes10,children5,null);
		var children3 = [tmp15,tmp16];
		tmp5 = doom__$Node_Node_$Impl_$.el("div",attributes4,children3,null);
		var children = [tmp2,tmp3,tmp4,tmp5];
		tmp = doom__$Node_Node_$Impl_$.el("div",attributes,children,null);
		return tmp;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(this.isUnmounted || !this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: app_PlayerComponent
});
var app_PlaylistComponent = function(api,state,children) {
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_PlaylistComponent.__name__ = ["app","PlaylistComponent"];
app_PlaylistComponent["with"] = function(appApi,appState,children) {
	var apiVar = { appApi : appApi};
	var stateVar = { appState : appState};
	var tmp;
	var comp = new app_PlaylistComponent(apiVar,stateVar,children);
	tmp = doom_NodeImpl.ComponentNode(comp);
	return tmp;
};
app_PlaylistComponent.__super__ = Doom;
app_PlaylistComponent.prototype = $extend(Doom.prototype,{
	didRefresh: function() {
		componentHandler.upgradeAllRegistered();
	}
	,render: function() {
		var _g4 = this;
		var tmp;
		var tmp1;
		var _g = new haxe_ds_StringMap();
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-list demo-list");
		if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
		tmp1 = _g;
		var attributes = tmp1;
		var tmp2;
		var _g1 = [];
		var _g2 = 0;
		var _g3 = this.state.appState.tracks;
		while(_g2 < _g3.length) {
			var track = [_g3[_g2]];
			++_g2;
			_g1.push(app_PlaylistEntry["with"]((function(track) {
				return function() {
					if(_g4.state.appState.playState.track == track[0]) return;
					_g4.api.appApi.playTrack(track[0]);
				};
			})(track),{ track : track[0], active : this.state.appState.playState.track == track[0]}));
		}
		tmp2 = _g1;
		var children = tmp2;
		tmp = doom__$Node_Node_$Impl_$.el("ul",attributes,children,null);
		return tmp;
	}
	,__class__: app_PlaylistComponent
});
var app_PlaylistEntry = function(api,state,children) {
	if(state.active == null) state.active = false;
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_PlaylistEntry.__name__ = ["app","PlaylistEntry"];
app_PlaylistEntry["with"] = function(click,state,children) {
	var apiVar = { click : click};
	if(state == null) state = { };
	var stateVar = { track : state.track, active : state.active};
	var tmp;
	var comp = new app_PlaylistEntry(apiVar,stateVar,children);
	tmp = doom_NodeImpl.ComponentNode(comp);
	return tmp;
};
app_PlaylistEntry.__super__ = Doom;
app_PlaylistEntry.prototype = $extend(Doom.prototype,{
	render: function() {
		var _g1 = this;
		var tmp;
		var tmp1;
		var _g = new haxe_ds_StringMap();
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-list__item" + (this.state.active?" active":""));
		if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
		var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromEventHandler(function(e) {
			var cls = (js_Boot.__cast(e.target , HTMLElement)).className;
			if(cls.length > 0 && !(cls.indexOf("list__item") >= 0)) return;
			_g1.api.click();
		});
		if(__map_reserved.click != null) _g.setReserved("click",value1); else _g.h["click"] = value1;
		tmp1 = _g;
		var attributes = tmp1;
		var tmp2;
		var tmp4;
		var _g11 = new haxe_ds_StringMap();
		var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-list__item-primary-content");
		if(__map_reserved["class"] != null) _g11.setReserved("class",value2); else _g11.h["class"] = value2;
		tmp4 = _g11;
		var attributes1 = tmp4;
		var tmp5;
		var tmp6;
		var track = this.state.track;
		tmp6 = (track.author == null?"":"" + track.author + " - ") + ("" + track.title);
		var child1 = doom_NodeImpl.Text(tmp6);
		tmp5 = doom__$Node_Node_$Impl_$.el("span",null,null,child1);
		var child = tmp5;
		tmp2 = doom__$Node_Node_$Impl_$.el("span",attributes1,null,child);
		var tmp3;
		var tmp7;
		var _g2 = new haxe_ds_StringMap();
		var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-list__item-secondary-content");
		if(__map_reserved["class"] != null) _g2.setReserved("class",value3); else _g2.h["class"] = value3;
		tmp7 = _g2;
		var attributes2 = tmp7;
		var tmp8;
		var tmp9;
		var _g3 = new haxe_ds_StringMap();
		var value4 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-button mdl-js-button mdl-button--icon");
		if(__map_reserved["class"] != null) _g3.setReserved("class",value4); else _g3.h["class"] = value4;
		var value5 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString(this.state.track.file);
		if(__map_reserved.href != null) _g3.setReserved("href",value5); else _g3.h["href"] = value5;
		var value6 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("_blank");
		if(__map_reserved.target != null) _g3.setReserved("target",value6); else _g3.h["target"] = value6;
		var value7 = doom__$AttributeValue_AttributeValue_$Impl_$.fromBool(true);
		if(__map_reserved.download != null) _g3.setReserved("download",value7); else _g3.h["download"] = value7;
		tmp9 = _g3;
		var attributes3 = tmp9;
		var tmp10;
		var tmp11;
		var _g5 = new haxe_ds_StringMap();
		var value8 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
		if(__map_reserved["class"] != null) _g5.setReserved("class",value8); else _g5.h["class"] = value8;
		tmp11 = _g5;
		var attributes4 = tmp11;
		var child3 = doom_NodeImpl.Text("file_download");
		tmp10 = doom__$Node_Node_$Impl_$.el("i",attributes4,null,child3);
		var child2 = tmp10;
		tmp8 = doom__$Node_Node_$Impl_$.el("a",attributes3,null,child2);
		var children1 = [tmp8];
		tmp3 = doom__$Node_Node_$Impl_$.el("span",attributes2,children1,null);
		var children = [tmp2,tmp3];
		tmp = doom__$Node_Node_$Impl_$.el("li",attributes,children,null);
		return tmp;
	}
	,__class__: app_PlaylistEntry
});
var doom__$AttributeValue_AttributeValue_$Impl_$ = {};
doom__$AttributeValue_AttributeValue_$Impl_$.__name__ = ["doom","_AttributeValue","AttributeValue_Impl_"];
doom__$AttributeValue_AttributeValue_$Impl_$.fromString = function(s) {
	return doom_AttributeValueImpl.StringAttribute(s);
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromBool = function(b) {
	return doom_AttributeValueImpl.BoolAttribute(b);
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler = function(f) {
	return null == f?doom_AttributeValueImpl.BoolAttribute(false):doom_AttributeValueImpl.EventAttribute(function(e) {
		e.preventDefault();
		f();
	});
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromEventHandler = function(f) {
	return null == f?doom_AttributeValueImpl.BoolAttribute(false):doom_AttributeValueImpl.EventAttribute(f);
};
doom__$AttributeValue_AttributeValue_$Impl_$.equalsTo = function(this1,that) {
	var tmp;
	if(this1 == null) tmp = false; else switch(this1[1]) {
	case 0:
		if(that == null) tmp = false; else switch(that[1]) {
		case 0:
			tmp = this1[2] == that[2];
			break;
		default:
			tmp = false;
		}
		break;
	case 1:
		if(that == null) tmp = false; else switch(that[1]) {
		case 1:
			tmp = this1[2] == that[2];
			break;
		default:
			tmp = false;
		}
		break;
	default:
		if(that == null) tmp = false; else switch(that[1]) {
		default:
			tmp = false;
		}
	}
	return tmp;
};
doom__$AttributeValue_AttributeValue_$Impl_$.notEqualsTo = function(this1,that) {
	return !doom__$AttributeValue_AttributeValue_$Impl_$.equalsTo(this1,that);
};
var doom_AttributeValueImpl = { __ename__ : ["doom","AttributeValueImpl"], __constructs__ : ["BoolAttribute","StringAttribute","EventAttribute"] };
doom_AttributeValueImpl.BoolAttribute = function(b) { var $x = ["BoolAttribute",0,b]; $x.__enum__ = doom_AttributeValueImpl; $x.toString = $estr; return $x; };
doom_AttributeValueImpl.StringAttribute = function(s) { var $x = ["StringAttribute",1,s]; $x.__enum__ = doom_AttributeValueImpl; $x.toString = $estr; return $x; };
doom_AttributeValueImpl.EventAttribute = function(f) { var $x = ["EventAttribute",2,f]; $x.__enum__ = doom_AttributeValueImpl; $x.toString = $estr; return $x; };
var doom_HtmlNode = function() { };
doom_HtmlNode.__name__ = ["doom","HtmlNode"];
doom_HtmlNode.toHtml = function(node,post) {
	var tmp;
	var _g = node;
	switch(_g[1]) {
	case 0:
		var children = _g[4];
		var attributes = _g[3];
		var name = _g[2];
		tmp = doom_HtmlNode.createElement(name,attributes,children,post);
		break;
	case 1:
		var text = _g[2];
		tmp = dots_Html.parse(text);
		break;
	case 2:
		var text1 = _g[2];
		tmp = window.document.createTextNode(text1);
		break;
	case 3:
		var comp = _g[2];
		comp.node = comp.render();
		comp.init(post);
		tmp = comp.element;
		break;
	}
	return tmp;
};
doom_HtmlNode.createElement = function(name,attributes,children,post) {
	var colonPos = name.indexOf(":");
	var tmp;
	if(colonPos > 0) {
		var prefix = name.substring(0,colonPos);
		var name1 = name.substring(colonPos + 1);
		var tmp1;
		var _this = Doom.namespaces;
		if(__map_reserved[prefix] != null) tmp1 = _this.getReserved(prefix); else tmp1 = _this.h[prefix];
		var ns = tmp1;
		if(null == ns) throw new thx_Error("element prefix \"" + prefix + "\" is not associated to any namespace. Add the right namespace to Doom.namespaces.",null,{ fileName : "HtmlNode.hx", lineNumber : 35, className : "doom.HtmlNode", methodName : "createElement"});
		tmp = window.document.createElementNS(ns,name1);
	} else tmp = window.document.createElement(name);
	var el = tmp;
	var $it0 = attributes.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var value = __map_reserved[key] != null?attributes.getReserved(key):attributes.h[key];
		if(value == null) {
		} else switch(value[1]) {
		case 1:
			var s = value[2];
			if(null == s || s == "") {
			} else {
				var s1 = value[2];
				el.setAttribute(key,s1);
			}
			break;
		case 0:
			var b = value[2];
			if(b) el.setAttribute(key,""); else {
			}
			break;
		case 2:
			var e = value[2];
			doom_HtmlNode.addEvent(el,key,e);
			break;
		default:
		}
	}
	var _g = 0;
	while(_g < children.length) {
		var child = children[_g];
		++_g;
		var n = doom_HtmlNode.toHtml(child,post);
		if(null != n) el.appendChild(n);
	}
	return el;
};
doom_HtmlNode.replaceNode = function(enter,exit,patch) {
	var parent = exit.parentNode;
	if(null == parent) return;
	parent.replaceChild(enter,exit);
};
doom_HtmlNode.applyPatches = function(patches,node) {
	var post = [];
	var _g = 0;
	while(_g < patches.length) {
		var patch = patches[_g];
		++_g;
		doom_HtmlNode.applyPatch(patch,node,post);
	}
	var _g1 = 0;
	while(_g1 < post.length) {
		var f = post[_g1];
		++_g1;
		f();
	}
};
doom_HtmlNode.addEvent = function(el,name,handler) {
	el["on" + name] = handler;
};
doom_HtmlNode.applyPatch = function(patch,node,post) {
	{
		var _g = node.nodeType;
		var p = patch;
		switch(patch[1]) {
		case 4:
			var comp = patch[2];
			comp.didUnmount();
			comp.isUnmounted = true;
			break;
		case 5:
			var newComp = patch[3];
			var oldComp = patch[2];
			if(thx_Types.sameType(oldComp,newComp)) {
				newComp.element = oldComp.element;
				newComp.node = newComp.render();
				var migrate = Reflect.field(newComp,"migrate");
				if(null != migrate) migrate.apply(newComp,[oldComp]);
				newComp.didRefresh();
			} else {
				var newComp1 = patch[3];
				var oldComp1 = patch[2];
				oldComp1.didUnmount();
				oldComp1.isUnmounted = true;
				doom_HtmlNode.applyPatch(doom_Patch.MigrateElementToComponent(newComp1),node,post);
			}
			break;
		case 6:
			var comp1 = patch[2];
			comp1.element = node;
			comp1.node = comp1.render();
			post.splice(0,0,$bind(comp1,comp1.didMount));
			break;
		case 0:
			switch(_g) {
			case 1:
				var text = patch[2];
				node.appendChild(window.document.createTextNode(text));
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 1:
			switch(_g) {
			case 1:
				var text1 = patch[2];
				node.appendChild(dots_Html.parse(text1));
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 2:
			switch(_g) {
			case 1:
				var name = patch[2];
				var children = patch[4];
				var attributes = patch[3];
				var el = doom_HtmlNode.createElement(name,attributes,children,post);
				node.appendChild(el);
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 3:
			switch(_g) {
			case 1:
				var comp2 = patch[2];
				comp2.node = comp2.render();
				comp2.init(post);
				node.appendChild(comp2.element);
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 7:
			node.parentNode.removeChild(node);
			break;
		case 8:
			switch(_g) {
			case 1:
				var name1 = patch[2];
				node.removeAttribute(name1);
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 9:
			switch(_g) {
			case 1:
				var name2 = patch[2];
				var value = patch[3];
				if(value == null) node.removeAttribute(name2); else switch(value[1]) {
				case 1:
					var s = value[2];
					if(s == null || s == "") node.removeAttribute(name2); else {
						var s1 = value[2];
						node.setAttribute(name2,s1);
					}
					break;
				case 0:
					var b = value[2];
					if(b) node.setAttribute(name2,name2); else node.removeAttribute(name2);
					break;
				case 2:
					var e = value[2];
					doom_HtmlNode.addEvent(node,name2,e);
					break;
				}
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 10:
			var children1 = patch[4];
			var attributes1 = patch[3];
			var name3 = patch[2];
			var post1 = [];
			var el1 = doom_HtmlNode.createElement(name3,attributes1,children1,post1);
			doom_HtmlNode.replaceNode(el1,node,patch);
			var _g1 = 0;
			while(_g1 < post1.length) {
				var f = post1[_g1];
				++_g1;
				f();
			}
			break;
		case 13:
			var comp3 = patch[2];
			var post2 = [];
			comp3.node = comp3.render();
			comp3.init(post2);
			doom_HtmlNode.replaceNode(comp3.element,node,patch);
			var _g11 = 0;
			while(_g11 < post2.length) {
				var f1 = post2[_g11];
				++_g11;
				f1();
			}
			break;
		case 11:
			var text2 = patch[2];
			doom_HtmlNode.replaceNode(window.document.createTextNode(text2),node,patch);
			break;
		case 12:
			var raw = patch[2];
			doom_HtmlNode.replaceNode(dots_Html.parse(raw),node,patch);
			break;
		case 14:
			switch(_g) {
			case 3:
				var newcontent = patch[2];
				if(node.parentNode.nodeName == "TEXTAREA") node.parentNode.value = newcontent; else node.nodeValue = newcontent;
				break;
			case 8:
				var newcontent1 = patch[2];
				if(node.parentNode.nodeName == "TEXTAREA") node.parentNode.value = newcontent1; else node.nodeValue = newcontent1;
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 15:
			switch(_g) {
			case 1:
				var index = patch[2];
				var patches = patch[3];
				var n = node.childNodes.item(index);
				if(null != n) doom_HtmlNode.applyPatches(patches,n);
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 166, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		}
	}
};
var doom__$Node_Node_$Impl_$ = {};
doom__$Node_Node_$Impl_$.__name__ = ["doom","_Node","Node_Impl_"];
doom__$Node_Node_$Impl_$.el = function(name,attributes,children,child) {
	if(null == attributes) attributes = new haxe_ds_StringMap();
	if(null == children) children = [];
	if(null != child) children.push(child);
	return doom_NodeImpl.Element(name,attributes,children);
};
doom__$Node_Node_$Impl_$.diffAttributes = function(a,b) {
	var ka = thx__$Set_Set_$Impl_$.createString(thx_Iterators.toArray(a.keys()));
	var kb = thx__$Set_Set_$Impl_$.createString(thx_Iterators.toArray(b.keys()));
	var tmp;
	var result = thx__$Set_Set_$Impl_$.copy(ka);
	var $it0 = $iterator(thx__$Set_Set_$Impl_$)(kb);
	while( $it0.hasNext() ) {
		var item = $it0.next();
		result.remove(item);
	}
	tmp = result;
	var removed = tmp;
	var tmp1;
	var result1 = thx__$Set_Set_$Impl_$.copy(kb);
	var $it1 = $iterator(thx__$Set_Set_$Impl_$)(ka);
	while( $it1.hasNext() ) {
		var item1 = $it1.next();
		result1.remove(item1);
	}
	tmp1 = result1;
	var added = tmp1;
	var tmp2;
	var result2 = thx__$Set_Set_$Impl_$.empty(ka);
	var $it2 = $iterator(thx__$Set_Set_$Impl_$)(ka);
	while( $it2.hasNext() ) {
		var item2 = $it2.next();
		var tmp6;
		var _this = kb;
		if(__map_reserved[item2] != null) tmp6 = _this.existsReserved(item2); else tmp6 = _this.h.hasOwnProperty(item2);
		if(tmp6) {
			var _this1 = result2;
			if(__map_reserved[item2] != null) _this1.setReserved(item2,true); else _this1.h[item2] = true;
		}
	}
	tmp2 = result2;
	var common = tmp2;
	var tmp3;
	var _e = removed;
	tmp3 = function(f) {
		return thx__$Set_Set_$Impl_$.map(_e,f);
	};
	var tmp4;
	var _e1 = common;
	tmp4 = function(predicate) {
		return thx__$Set_Set_$Impl_$.filter(_e1,predicate);
	};
	var tmp5;
	var tmp7;
	var _e3 = added;
	tmp7 = function(predicate1) {
		return thx__$Set_Set_$Impl_$.filter(_e3,predicate1);
	};
	var _e2 = tmp7(function(_) {
		return (__map_reserved[_] != null?b.getReserved(_):b.h[_]) != null;
	});
	tmp5 = function(f1) {
		return thx__$Set_Set_$Impl_$.map(_e2,f1);
	};
	return tmp3(function(_1) {
		return doom_Patch.RemoveAttribute(_1);
	}).concat(thx__$Set_Set_$Impl_$.map(tmp4(function(_2) {
		return doom__$AttributeValue_AttributeValue_$Impl_$.notEqualsTo(__map_reserved[_2] != null?a.getReserved(_2):a.h[_2],__map_reserved[_2] != null?b.getReserved(_2):b.h[_2]);
	}),function(k) {
		var v = __map_reserved[k] != null?b.getReserved(k):b.h[k];
		return null == v?doom_Patch.RemoveAttribute(k):doom_Patch.SetAttribute(k,v);
	})).concat(tmp5(function(_3) {
		return doom_Patch.SetAttribute(_3,__map_reserved[_3] != null?b.getReserved(_3):b.h[_3]);
	}));
};
doom__$Node_Node_$Impl_$.diffAdd = function(node) {
	var tmp;
	switch(node[1]) {
	case 0:
		tmp = [doom_Patch.AddElement(node[2],node[3],node[4])];
		break;
	case 2:
		tmp = [doom_Patch.AddText(node[2])];
		break;
	case 1:
		tmp = [doom_Patch.AddRaw(node[2])];
		break;
	case 3:
		tmp = [doom_Patch.AddComponent(node[2])];
		break;
	}
	return tmp;
};
doom__$Node_Node_$Impl_$.diffNodes = function(a,b) {
	var tmp;
	var a1 = a.length;
	var b1 = b.length;
	if(a1 < b1) tmp = a1; else tmp = b1;
	var min = tmp;
	var result = [];
	var counter = 0;
	var _g1 = min;
	var _g = a.length;
	while(_g1 < _g) {
		_g1++;
		result.push(doom_Patch.PatchChild(a.length - ++counter,[doom_Patch.Remove]));
	}
	var _g11 = min;
	var _g2 = b.length;
	while(_g11 < _g2) {
		var i = _g11++;
		result = result.concat(doom__$Node_Node_$Impl_$.diffAdd(b[i]));
	}
	var _g3 = 0;
	while(_g3 < min) {
		var i1 = _g3++;
		var diff = doom__$Node_Node_$Impl_$.diff(a[i1],b[i1]);
		if(diff.length > 0) result.push(doom_Patch.PatchChild(i1,diff));
	}
	return result;
};
doom__$Node_Node_$Impl_$.diff = function(this1,that) {
	if(null == this1) {
		var tmp3;
		switch(that[1]) {
		case 3:
			tmp3 = [doom_Patch.ReplaceWithComponent(that[2])];
			break;
		case 0:
			tmp3 = [doom_Patch.ReplaceWithElement(that[2],that[3],that[4])];
			break;
		case 2:
			tmp3 = [doom_Patch.ReplaceWithText(that[2])];
			break;
		case 1:
			tmp3 = [doom_Patch.ReplaceWithRaw(that[2])];
			break;
		}
		return tmp3;
	}
	var tmp;
	var destroySubComponents1 = null;
	destroySubComponents1 = function(node) {
		var tmp4;
		switch(node[1]) {
		case 3:
			var comp = node[2];
			tmp4 = [doom_Patch.DestroyComponent(comp)].concat(null != comp.node?destroySubComponents1(comp.node):[]);
			break;
		default:
			tmp4 = [];
		}
		return tmp4;
	};
	tmp = destroySubComponents1;
	var destroySubComponents = tmp;
	var tmp1;
	switch(this1[1]) {
	case 3:
		switch(that[1]) {
		case 3:
			tmp1 = [doom_Patch.MigrateComponentToComponent(this1[2],that[2])];
			break;
		default:
			tmp1 = destroySubComponents(this1);
		}
		break;
	default:
		switch(that[1]) {
		case 3:
			tmp1 = [doom_Patch.MigrateElementToComponent(that[2])];
			break;
		default:
			tmp1 = [];
		}
	}
	var p = tmp1;
	var tmp2;
	switch(this1[1]) {
	case 3:
		switch(that[1]) {
		case 3:
			var comp1 = that[2];
			if(null == comp1.node) comp1.node = comp1.render();
			tmp2 = doom__$Node_Node_$Impl_$.diff(this1[2].node,comp1.node);
			break;
		case 0:
			tmp2 = [doom_Patch.ReplaceWithElement(that[2],that[3],that[4])];
			break;
		case 2:
			tmp2 = [doom_Patch.ReplaceWithText(that[2])];
			break;
		case 1:
			tmp2 = [doom_Patch.ReplaceWithRaw(that[2])];
			break;
		}
		break;
	case 0:
		switch(that[1]) {
		case 3:
			tmp2 = [doom_Patch.ReplaceWithComponent(that[2])];
			break;
		case 0:
			var n2 = that[2];
			if(this1[2] != n2) tmp2 = [doom_Patch.ReplaceWithElement(n2,that[3],that[4])]; else tmp2 = doom__$Node_Node_$Impl_$.diffAttributes(this1[3],that[3]).concat(doom__$Node_Node_$Impl_$.diffNodes(this1[4],that[4]));
			break;
		case 2:
			tmp2 = [doom_Patch.ReplaceWithText(that[2])];
			break;
		case 1:
			tmp2 = [doom_Patch.ReplaceWithRaw(that[2])];
			break;
		}
		break;
	case 2:
		switch(that[1]) {
		case 3:
			tmp2 = [doom_Patch.ReplaceWithComponent(that[2])];
			break;
		case 0:
			tmp2 = [doom_Patch.ReplaceWithElement(that[2],that[3],that[4])];
			break;
		case 2:
			var t2 = that[2];
			if(this1[2] != t2) tmp2 = [doom_Patch.ContentChanged(t2)]; else if(this1[2] == that[2]) tmp2 = []; else tmp2 = [doom_Patch.ReplaceWithText(that[2])];
			break;
		case 1:
			tmp2 = [doom_Patch.ReplaceWithRaw(that[2])];
			break;
		}
		break;
	case 1:
		switch(that[1]) {
		case 3:
			tmp2 = [doom_Patch.ReplaceWithComponent(that[2])];
			break;
		case 0:
			tmp2 = [doom_Patch.ReplaceWithElement(that[2],that[3],that[4])];
			break;
		case 2:
			tmp2 = [doom_Patch.ReplaceWithText(that[2])];
			break;
		case 1:
			if(this1[2] == that[2]) tmp2 = []; else tmp2 = [doom_Patch.ReplaceWithRaw(that[2])];
			break;
		}
		break;
	default:
		switch(that[1]) {
		case 3:
			tmp2 = [doom_Patch.ReplaceWithComponent(that[2])];
			break;
		case 0:
			tmp2 = [doom_Patch.ReplaceWithElement(that[2],that[3],that[4])];
			break;
		case 2:
			tmp2 = [doom_Patch.ReplaceWithText(that[2])];
			break;
		case 1:
			tmp2 = [doom_Patch.ReplaceWithRaw(that[2])];
			break;
		}
	}
	return p.concat(tmp2);
};
doom__$Node_Node_$Impl_$.toString = function(this1) {
	return doom_XmlNode.toString(this1);
};
var doom_NodeImpl = { __ename__ : ["doom","NodeImpl"], __constructs__ : ["Element","Raw","Text","ComponentNode"] };
doom_NodeImpl.Element = function(name,attributes,children) { var $x = ["Element",0,name,attributes,children]; $x.__enum__ = doom_NodeImpl; $x.toString = $estr; return $x; };
doom_NodeImpl.Raw = function(text) { var $x = ["Raw",1,text]; $x.__enum__ = doom_NodeImpl; $x.toString = $estr; return $x; };
doom_NodeImpl.Text = function(text) { var $x = ["Text",2,text]; $x.__enum__ = doom_NodeImpl; $x.toString = $estr; return $x; };
doom_NodeImpl.ComponentNode = function(comp) { var $x = ["ComponentNode",3,comp]; $x.__enum__ = doom_NodeImpl; $x.toString = $estr; return $x; };
var doom_Patch = { __ename__ : ["doom","Patch"], __constructs__ : ["AddText","AddRaw","AddElement","AddComponent","DestroyComponent","MigrateComponentToComponent","MigrateElementToComponent","Remove","RemoveAttribute","SetAttribute","ReplaceWithElement","ReplaceWithText","ReplaceWithRaw","ReplaceWithComponent","ContentChanged","PatchChild"] };
doom_Patch.AddText = function(text) { var $x = ["AddText",0,text]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.AddRaw = function(text) { var $x = ["AddRaw",1,text]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.AddElement = function(name,attributes,children) { var $x = ["AddElement",2,name,attributes,children]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.AddComponent = function(comp) { var $x = ["AddComponent",3,comp]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.DestroyComponent = function(comp) { var $x = ["DestroyComponent",4,comp]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.MigrateComponentToComponent = function(oldComp,newComp) { var $x = ["MigrateComponentToComponent",5,oldComp,newComp]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.MigrateElementToComponent = function(comp) { var $x = ["MigrateElementToComponent",6,comp]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.Remove = ["Remove",7];
doom_Patch.Remove.toString = $estr;
doom_Patch.Remove.__enum__ = doom_Patch;
doom_Patch.RemoveAttribute = function(name) { var $x = ["RemoveAttribute",8,name]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.SetAttribute = function(name,value) { var $x = ["SetAttribute",9,name,value]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.ReplaceWithElement = function(name,attributes,children) { var $x = ["ReplaceWithElement",10,name,attributes,children]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.ReplaceWithText = function(text) { var $x = ["ReplaceWithText",11,text]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.ReplaceWithRaw = function(raw) { var $x = ["ReplaceWithRaw",12,raw]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.ReplaceWithComponent = function(comp) { var $x = ["ReplaceWithComponent",13,comp]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.ContentChanged = function(newcontent) { var $x = ["ContentChanged",14,newcontent]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
doom_Patch.PatchChild = function(index,patches) { var $x = ["PatchChild",15,index,patches]; $x.__enum__ = doom_Patch; $x.toString = $estr; return $x; };
var doom_XmlNode = function() { };
doom_XmlNode.__name__ = ["doom","XmlNode"];
doom_XmlNode.toString = function(node) {
	var tmp;
	var _g = node;
	switch(_g[1]) {
	case 0:
		var children = _g[4];
		var name = _g[2];
		var buf = "<" + name + doom_XmlNode.attributesToString(_g[3]);
		if(children.length == 0) buf += "/>"; else {
			buf += ">";
			buf += children.map(function(_) {
				return doom_XmlNode.toString(_);
			}).join("");
			buf += "</" + name + ">";
		}
		tmp = buf;
		break;
	case 2:
		tmp = _g[2];
		break;
	case 1:
		tmp = _g[2];
		break;
	case 3:
		tmp = doom_XmlNode.toString(_g[2].render());
		break;
	}
	return tmp;
};
doom_XmlNode.attributesToString = function(attributes) {
	var buf = "";
	var $it0 = attributes.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var value = __map_reserved[key] != null?attributes.getReserved(key):attributes.h[key];
		if(null == value) buf += " " + key; else switch(value[1]) {
		case 1:
			var s = value[2];
			if(s != null && s.length > 0) buf += " " + key + "=\"" + StringTools.replace(s,"\"","&quot;") + "\""; else {
			}
			break;
		case 0:
			var b = value[2];
			if(b) buf += " " + key + "=\"" + key + "\""; else {
			}
			break;
		default:
		}
	}
	return buf;
};
var dots_Html = function() { };
dots_Html.__name__ = ["dots","Html"];
dots_Html.parseNodes = function(html) {
	if(!dots_Html.pattern.match(html)) throw new js__$Boot_HaxeError("Invalid pattern \"" + html + "\"");
	var tmp;
	var _g = dots_Html.pattern.matched(1).toLowerCase();
	switch(_g) {
	case "tbody":case "thead":
		tmp = window.document.createElement("table");
		break;
	case "td":case "th":
		tmp = window.document.createElement("tr");
		break;
	case "tr":
		tmp = window.document.createElement("tbody");
		break;
	default:
		tmp = window.document.createElement("div");
	}
	var el = tmp;
	el.innerHTML = html;
	return el.childNodes;
};
dots_Html.parse = function(html) {
	var nodes = dots_Html.parseNodes(html);
	if(nodes.length > 1) {
		var doc = window.document.createDocumentFragment();
		var _g = 0;
		while(_g < nodes.length) {
			var node = nodes[_g];
			++_g;
			doc.appendChild(node);
		}
		return doc;
	} else return nodes[0];
};
var dots_Query = function() { };
dots_Query.__name__ = ["dots","Query"];
dots_Query.find = function(selector,ctx) {
	return (ctx != null?ctx:dots_Query.doc).querySelector(selector);
};
var haxe_StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe_StackItem.CFunction = ["CFunction",0];
haxe_StackItem.CFunction.toString = $estr;
haxe_StackItem.CFunction.__enum__ = haxe_StackItem;
haxe_StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
var haxe_CallStack = function() { };
haxe_CallStack.__name__ = ["haxe","CallStack"];
haxe_CallStack.getStack = function(e) {
	if(e == null) return [];
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			if(haxe_CallStack.wrapCallSite != null) site = haxe_CallStack.wrapCallSite(site);
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe_StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe_StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe_CallStack.makeStack(e.stack);
	Error.prepareStackTrace = oldValue;
	return a;
};
haxe_CallStack.callStack = function() {
	try {
		throw new Error();
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		var a = haxe_CallStack.getStack(e);
		a.shift();
		return a;
	}
};
haxe_CallStack.exceptionStack = function() {
	return haxe_CallStack.getStack(haxe_CallStack.lastException);
};
haxe_CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe_CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe_CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		b.b += m == null?"null":"" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe_CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += file == null?"null":"" + file;
		b.b += " line ";
		b.b += line == null?"null":"" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		b.b += cname == null?"null":"" + cname;
		b.b += ".";
		b.b += meth == null?"null":"" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		b.b += n == null?"null":"" + n;
		break;
	}
};
haxe_CallStack.makeStack = function(s) {
	if(s == null) return []; else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") stack.shift();
		var m = [];
		var rie10 = new EReg("^   at ([A-Za-z0-9_. ]+) \\(([^)]+):([0-9]+):([0-9]+)\\)$","");
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			if(rie10.match(line)) {
				var path = rie10.matched(1).split(".");
				var meth = path.pop();
				var file = rie10.matched(2);
				var line1 = Std.parseInt(rie10.matched(3));
				m.push(haxe_StackItem.FilePos(meth == "Anonymous function"?haxe_StackItem.LocalFunction():meth == "Global code"?null:haxe_StackItem.Method(path.join("."),meth),file,line1));
			} else m.push(haxe_StackItem.Module(StringTools.trim(line)));
		}
		return m;
	} else return s;
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = ["haxe","IMap"];
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) return hb;
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		if(srcpos == 0 && len == src.length) this.b.set(src.b,pos); else this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_Option = { __ename__ : ["haxe","ds","Option"], __constructs__ : ["Some","None"] };
haxe_ds_Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = haxe_ds_Option; $x.toString = $estr; return $x; };
haxe_ds_Option.None = ["None",1];
haxe_ds_Option.None.toString = $estr;
haxe_ds_Option.None.__enum__ = haxe_ds_Option;
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		var tmp;
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) tmp = _this.getReserved(key); else tmp = _this.h[key];
		return tmp;
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		return this.rh == null?null:this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var tmp;
		var _this = this.arrayKeys();
		tmp = HxOverrides.iter(_this);
		return tmp;
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_BytesBuffer = function() {
	this.b = [];
};
haxe_io_BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe_io_BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe_io_Bytes(new Uint8Array(this.b).buffer);
		this.b = null;
		return bytes;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_Eof = function() { };
haxe_io_Eof.__name__ = ["haxe","io","Eof"];
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af = f < 0?-f:f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av = v < 0?-v:v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var tmp;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		tmp = Math.round(v1);
		var sig = tmp;
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var haxe_io_Input = function() { };
haxe_io_Input.__name__ = ["haxe","io","Input"];
haxe_io_Input.prototype = {
	readByte: function() {
		throw new js__$Boot_HaxeError("Not implemented");
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readAll: function(bufsize) {
		if(bufsize == null) bufsize = 16384;
		var buf = haxe_io_Bytes.alloc(bufsize);
		var total = new haxe_io_BytesBuffer();
		try {
			while(true) {
				var len = this.readBytes(buf,0,bufsize);
				if(len == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
				if(len < 0 || len > buf.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
				var b2 = buf.b;
				var _g1 = 0;
				while(_g1 < len) {
					var i = _g1++;
					total.b.push(b2[i]);
				}
			}
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,haxe_io_Eof) ) {
			} else throw(e);
		}
		return total.getBytes();
	}
	,__class__: haxe_io_Input
};
var haxe_xml__$Fast_NodeAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_NodeAccess.__name__ = ["haxe","xml","_Fast","NodeAccess"];
haxe_xml__$Fast_NodeAccess.prototype = {
	resolve: function(name) {
		var x = this.__x.elementsNamed(name).next();
		if(x == null) {
			var tmp;
			if(this.__x.nodeType == Xml.Document) tmp = "Document"; else {
				var _this = this.__x;
				if(_this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + _this.nodeType);
				tmp = _this.nodeName;
			}
			var xname = tmp;
			throw new js__$Boot_HaxeError(xname + " is missing element " + name);
		}
		return new haxe_xml_Fast(x);
	}
	,__class__: haxe_xml__$Fast_NodeAccess
};
var haxe_xml__$Fast_AttribAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_AttribAccess.__name__ = ["haxe","xml","_Fast","AttribAccess"];
haxe_xml__$Fast_AttribAccess.prototype = {
	__class__: haxe_xml__$Fast_AttribAccess
};
var haxe_xml__$Fast_HasAttribAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_HasAttribAccess.__name__ = ["haxe","xml","_Fast","HasAttribAccess"];
haxe_xml__$Fast_HasAttribAccess.prototype = {
	__class__: haxe_xml__$Fast_HasAttribAccess
};
var haxe_xml__$Fast_HasNodeAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_HasNodeAccess.__name__ = ["haxe","xml","_Fast","HasNodeAccess"];
haxe_xml__$Fast_HasNodeAccess.prototype = {
	__class__: haxe_xml__$Fast_HasNodeAccess
};
var haxe_xml__$Fast_NodeListAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_NodeListAccess.__name__ = ["haxe","xml","_Fast","NodeListAccess"];
haxe_xml__$Fast_NodeListAccess.prototype = {
	resolve: function(name) {
		var l = new List();
		var $it0 = this.__x.elementsNamed(name);
		while( $it0.hasNext() ) {
			var x = $it0.next();
			l.add(new haxe_xml_Fast(x));
		}
		return l;
	}
	,__class__: haxe_xml__$Fast_NodeListAccess
};
var haxe_xml_Fast = function(x) {
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Invalid nodeType " + x.nodeType);
	this.x = x;
	this.node = new haxe_xml__$Fast_NodeAccess(x);
	this.nodes = new haxe_xml__$Fast_NodeListAccess(x);
	this.att = new haxe_xml__$Fast_AttribAccess(x);
	this.has = new haxe_xml__$Fast_HasAttribAccess(x);
	this.hasNode = new haxe_xml__$Fast_HasNodeAccess(x);
};
haxe_xml_Fast.__name__ = ["haxe","xml","Fast"];
haxe_xml_Fast.prototype = {
	get_name: function() {
		var tmp;
		if(this.x.nodeType == Xml.Document) tmp = "Document"; else {
			var _this = this.x;
			if(_this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + _this.nodeType);
			tmp = _this.nodeName;
		}
		return tmp;
	}
	,get_innerData: function() {
		var tmp;
		var _this = this.x;
		if(_this.nodeType != Xml.Document && _this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + _this.nodeType);
		tmp = HxOverrides.iter(_this.children);
		var it = tmp;
		if(!it.hasNext()) throw new js__$Boot_HaxeError(this.get_name() + " does not have data");
		var v = it.next();
		var n = it.next();
		if(n != null) {
			var tmp2;
			if(v.nodeType == Xml.PCData && n.nodeType == Xml.CData) {
				var tmp3;
				var tmp4;
				if(!(v.nodeType == Xml.Document)) tmp4 = v.nodeType == Xml.Element; else tmp4 = true;
				if(tmp4) throw new js__$Boot_HaxeError("Bad node type, unexpected " + v.nodeType);
				tmp3 = v.nodeValue;
				tmp2 = StringTools.trim(tmp3) == "";
			} else tmp2 = false;
			if(tmp2) {
				var n2 = it.next();
				var tmp5;
				if(!(n2 == null)) {
					var tmp6;
					if(n2.nodeType == Xml.PCData) {
						var tmp7;
						var tmp8;
						if(!(n2.nodeType == Xml.Document)) tmp8 = n2.nodeType == Xml.Element; else tmp8 = true;
						if(tmp8) throw new js__$Boot_HaxeError("Bad node type, unexpected " + n2.nodeType);
						tmp7 = n2.nodeValue;
						tmp6 = StringTools.trim(tmp7) == "";
					} else tmp6 = false;
					if(tmp6) tmp5 = it.next() == null; else tmp5 = false;
				} else tmp5 = true;
				if(tmp5) {
					var tmp9;
					if(n.nodeType == Xml.Document || n.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + n.nodeType);
					tmp9 = n.nodeValue;
					return tmp9;
				}
			}
			throw new js__$Boot_HaxeError(this.get_name() + " does not only have data");
		}
		if(v.nodeType != Xml.PCData && v.nodeType != Xml.CData) throw new js__$Boot_HaxeError(this.get_name() + " does not have data");
		var tmp1;
		if(v.nodeType == Xml.Document || v.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + v.nodeType);
		tmp1 = v.nodeValue;
		return tmp1;
	}
	,__class__: haxe_xml_Fast
};
var haxe_xml_Parser = function() { };
haxe_xml_Parser.__name__ = ["haxe","xml","Parser"];
haxe_xml_Parser.parse = function(str,strict) {
	if(strict == null) strict = false;
	var doc = Xml.createDocument();
	haxe_xml_Parser.doParse(str,strict,0,doc);
	return doc;
};
haxe_xml_Parser.doParse = function(str,strict,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	var escapeNext = 1;
	var attrValQuote = -1;
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var len = p - start;
				buf.b += len == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len);
				var child = Xml.createPCData(buf.b);
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				var len1 = p - start;
				buf.b += len1 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len1);
				state = 18;
				escapeNext = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw new js__$Boot_HaxeError("Expected <![CDATA[");
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw new js__$Boot_HaxeError("Expected <!DOCTYPE");
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw new js__$Boot_HaxeError("Expected <!--"); else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw new js__$Boot_HaxeError("Expected node name");
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw new js__$Boot_HaxeError("Expected node name");
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				nsubs++;
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				break;
			case 62:
				state = 9;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp1;
				if(start == p) throw new js__$Boot_HaxeError("Expected attribute name");
				tmp1 = HxOverrides.substr(str,start,p - start);
				aname = tmp1;
				if(xml.exists(aname)) throw new js__$Boot_HaxeError("Duplicate attribute");
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw new js__$Boot_HaxeError("Expected =");
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				buf = new StringBuf();
				state = 8;
				start = p + 1;
				attrValQuote = c;
				break;
			default:
				throw new js__$Boot_HaxeError("Expected \"");
			}
			break;
		case 8:
			switch(c) {
			case 38:
				var len2 = p - start;
				buf.b += len2 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len2);
				state = 18;
				escapeNext = 8;
				start = p + 1;
				break;
			case 62:
				if(strict) throw new js__$Boot_HaxeError("Invalid unescaped " + String.fromCharCode(c) + " in attribute value"); else if(c == attrValQuote) {
					var len3 = p - start;
					buf.b += len3 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len3);
					var val = buf.b;
					buf = new StringBuf();
					xml.set(aname,val);
					state = 0;
					next = 4;
				}
				break;
			case 60:
				if(strict) throw new js__$Boot_HaxeError("Invalid unescaped " + String.fromCharCode(c) + " in attribute value"); else if(c == attrValQuote) {
					var len4 = p - start;
					buf.b += len4 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len4);
					var val1 = buf.b;
					buf = new StringBuf();
					xml.set(aname,val1);
					state = 0;
					next = 4;
				}
				break;
			default:
				if(c == attrValQuote) {
					var len5 = p - start;
					buf.b += len5 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len5);
					var val2 = buf.b;
					buf = new StringBuf();
					xml.set(aname,val2);
					state = 0;
					next = 4;
				}
			}
			break;
		case 9:
			p = haxe_xml_Parser.doParse(str,strict,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw new js__$Boot_HaxeError("Expected >");
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw new js__$Boot_HaxeError("Expected >");
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw new js__$Boot_HaxeError("Expected node name");
				var v = HxOverrides.substr(str,start,p - start);
				var tmp2;
				if(parent.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + parent.nodeType);
				tmp2 = parent.nodeName;
				if(v != tmp2) {
					var tmp3;
					if(parent.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + parent.nodeType);
					tmp3 = parent.nodeName;
					throw new js__$Boot_HaxeError("Expected </" + tmp3 + ">");
				}
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				var xml1 = Xml.createComment(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				var xml2 = Xml.createDocType(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml2);
				nsubs++;
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				var xml3 = Xml.createProcessingInstruction(str1);
				parent.addChild(xml3);
				nsubs++;
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var c1 = s.charCodeAt(1) == 120?Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)):Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.b += String.fromCharCode(c1);
				} else {
					var tmp4;
					var _this = haxe_xml_Parser.escapes;
					if(__map_reserved[s] != null) tmp4 = _this.existsReserved(s); else tmp4 = _this.h.hasOwnProperty(s);
					if(!tmp4) {
						if(strict) throw new js__$Boot_HaxeError("Undefined entity: " + s);
						buf.b += Std.string("&" + s + ";");
					} else {
						var tmp5;
						var _this1 = haxe_xml_Parser.escapes;
						if(__map_reserved[s] != null) tmp5 = _this1.getReserved(s); else tmp5 = _this1.h[s];
						var x = tmp5;
						buf.b += x == null?"null":"" + x;
					}
				}
				start = p + 1;
				state = escapeNext;
			} else if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45) && c != 35) {
				if(strict) throw new js__$Boot_HaxeError("Invalid character in entity: " + String.fromCharCode(c));
				buf.b += "&";
				var len6 = p - start;
				buf.b += len6 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len6);
				p--;
				start = p + 1;
				state = escapeNext;
			}
			break;
		}
		var tmp;
		var index = ++p;
		tmp = str.charCodeAt(index);
		c = tmp;
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) {
			var len7 = p - start;
			buf.b += len7 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len7);
			var xml4 = Xml.createPCData(buf.b);
			parent.addChild(xml4);
			nsubs++;
		}
		return p;
	}
	if(!strict && state == 18 && escapeNext == 13) {
		buf.b += "&";
		var len8 = p - start;
		buf.b += len8 == null?HxOverrides.substr(str,start,null):HxOverrides.substr(str,start,len8);
		var xml5 = Xml.createPCData(buf.b);
		parent.addChild(xml5);
		nsubs++;
		return p;
	}
	throw new js__$Boot_HaxeError("Unexpected end");
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	this.offset = byteOffset == null?0:byteOffset;
	this.length = byteLength == null?buffer.byteLength - this.offset:byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		return v >= 128?v - 256:v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		return v >= 32768?v - 65536:v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		return littleEndian?this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8:this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		return littleEndian?a | b << 8 | c << 16 | d << 24:d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		return v < 0?v + 4294967296.:v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value < 0?value + 128 & 255:value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var pushstate_PushState = function() { };
pushstate_PushState.__name__ = ["pushstate","PushState"];
pushstate_PushState.init = function(basePath,triggerFirst,ignoreAnchors) {
	if(ignoreAnchors == null) ignoreAnchors = true;
	if(triggerFirst == null) triggerFirst = true;
	if(basePath == null) basePath = "";
	pushstate_PushState.listeners = [];
	pushstate_PushState.preventers = [];
	pushstate_PushState.uploadCache = new haxe_ds_StringMap();
	pushstate_PushState.basePath = basePath;
	pushstate_PushState.ignoreAnchors = ignoreAnchors;
	window.document.addEventListener("DOMContentLoaded",function(event) {
		window.document.addEventListener("click",function(e) {
			if(e.button == 0 && !e.metaKey && !e.ctrlKey) {
				var link = null;
				var tmp;
				var value = e.target;
				if((value instanceof Node)) tmp = value; else tmp = null;
				var node = tmp;
				while(link == null && node != null) {
					link = (node instanceof HTMLAnchorElement)?node:null;
					node = node.parentNode;
				}
				if(link != null && (link.rel == "pushstate" || link.classList.contains("pushstate"))) {
					pushstate_PushState.push(link.pathname + link.search + link.hash);
					e.preventDefault();
				}
			}
		});
		window.document.addEventListener("submit",function(e1) {
			var tmp1;
			var value1 = e1.target;
			if((value1 instanceof HTMLFormElement)) tmp1 = value1; else tmp1 = null;
			var form = tmp1;
			if(form.classList.contains("pushstate")) {
				e1.preventDefault();
				pushstate_PushState.interceptFormSubmit(form);
			}
		});
		window.onpopstate = pushstate_PushState.handleOnPopState;
		if(triggerFirst) pushstate_PushState.handleOnPopState(null); else {
			pushstate_PushState.currentPath = pushstate_PushState.stripURL(window.document.location.pathname + window.document.location.search + window.document.location.hash);
			pushstate_PushState.currentState = null;
			pushstate_PushState.currentUploads = null;
		}
	});
};
pushstate_PushState.interceptFormSubmit = function(form) {
	var params = [];
	var uploads = null;
	var addParam = function(name,val) {
		if(name == null || name == "") return;
		params.push({ name : name, val : val});
	};
	var addUpload = function(name1,files) {
		var _g1 = 0;
		var _g = files.length;
		while(_g1 < _g) {
			var i = _g1++;
			addParam(name1,files[i].name);
		}
		if(uploads == null) uploads = { };
		uploads[name1] = files;
	};
	var _g11 = 0;
	var _g2 = form.elements.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var elm = form.elements.item(i1);
		var _g21 = elm.nodeName.toUpperCase();
		switch(_g21) {
		case "INPUT":
			var input = (elm instanceof HTMLInputElement)?elm:null;
			var _g3 = input.type;
			switch(_g3) {
			case "text":case "hidden":case "password":case "search":case "email":case "url":case "tel":case "number":case "range":case "date":case "month":case "week":case "time":case "datetime":case "datetime-local":case "color":
				addParam(input.name,input.value);
				break;
			case "checkbox":
				if(input.checked) addParam(input.name,input.value);
				break;
			case "radio":
				if(input.checked) addParam(input.name,input.value);
				break;
			case "file":
				if(input.files != null && input.files.length > 0) addUpload(input.name,input.files);
				break;
			}
			break;
		case "TEXTAREA":
			var ta = (elm instanceof HTMLTextAreaElement)?elm:null;
			addParam(ta.name,ta.value);
			break;
		case "SELECT":
			var select = (elm instanceof HTMLSelectElement)?elm:null;
			var _g31 = select.type;
			switch(_g31) {
			case "select-one":
				addParam(select.name,select.value);
				break;
			case "select-multiple":
				var _g5 = 0;
				var _g4 = select.options.length;
				while(_g5 < _g4) {
					var j = _g5++;
					var option = select.options[j];
					if(option.selected) addParam(select.name,option.value);
				}
				break;
			}
			break;
		}
	}
	var tmp;
	var value = window.document.activeElement;
	if((value instanceof HTMLInputElement)) tmp = value; else tmp = null;
	var activeInput = tmp;
	var tmp1;
	var value1 = window.document.activeElement;
	if((value1 instanceof HTMLButtonElement)) tmp1 = value1; else tmp1 = null;
	var activeBtn = tmp1;
	if(activeInput != null && activeInput.type == "submit") addParam(activeInput.name,activeInput.value); else if(activeBtn != null && activeBtn.type == "submit") addParam(activeBtn.name,activeBtn.value); else {
		var defaultSubmit = form.querySelector("input[type=submit], button[type=submit]");
		var defaultInput = (defaultSubmit instanceof HTMLInputElement)?defaultSubmit:null;
		var defaultBtn = (defaultSubmit instanceof HTMLButtonElement)?defaultSubmit:null;
		if(defaultInput != null) addParam(defaultInput.name,defaultInput.value); else if(defaultBtn != null) addParam(defaultBtn.name,defaultBtn.value);
	}
	var paramString = params.map(function(p) {
		return "" + p.name + "=" + encodeURIComponent(p.val);
	}).join("&");
	if(form.method.toUpperCase() == "POST") {
		var paramsObj = { };
		var _g6 = 0;
		while(_g6 < params.length) {
			var p1 = params[_g6];
			++_g6;
			if(Object.prototype.hasOwnProperty.call(paramsObj,p1.name)) Reflect.field(paramsObj,p1.name).push(p1.val); else paramsObj[p1.name] = [p1.val];
		}
		paramsObj.__postData = paramString;
		if(uploads != null) pushstate_PushState.setUploadsForState(form.action,paramsObj,uploads);
		pushstate_PushState.push(form.action,paramsObj,uploads);
	} else pushstate_PushState.push(form.action + "?" + paramString,null);
};
pushstate_PushState.setUploadsForState = function(url,state,uploads) {
	var tmp;
	var _this = new Date();
	tmp = HxOverrides.dateStr(_this);
	var timestamp = tmp;
	var random = Math.random();
	var uploadCacheID = "" + url + "-" + timestamp + "-" + random;
	var tmp1;
	var _this1 = pushstate_PushState.uploadCache;
	if(__map_reserved[uploadCacheID] != null) _this1.setReserved(uploadCacheID,uploads); else _this1.h[uploadCacheID] = uploads;
	tmp1 = uploads;
	tmp1;
	state.__postFilesCacheID = uploadCacheID;
};
pushstate_PushState.getUploadsForState = function(state) {
	if(state == null || Object.prototype.hasOwnProperty.call(state,"__postFilesCacheID") == false) return null;
	var uploadCacheID = state.__postFilesCacheID;
	var tmp;
	var _this = pushstate_PushState.uploadCache;
	if(__map_reserved[uploadCacheID] != null) tmp = _this.existsReserved(uploadCacheID); else tmp = _this.h.hasOwnProperty(uploadCacheID);
	if(tmp == false) {
		console.log("Upload files with cache ID " + uploadCacheID + " is not available anymore");
		return null;
	} else {
		var tmp1;
		var _this1 = pushstate_PushState.uploadCache;
		if(__map_reserved[uploadCacheID] != null) tmp1 = _this1.getReserved(uploadCacheID); else tmp1 = _this1.h[uploadCacheID];
		return tmp1;
	}
};
pushstate_PushState.handleOnPopState = function(e) {
	var path = pushstate_PushState.stripURL(window.document.location.pathname + window.document.location.search + window.document.location.hash);
	var state = e != null?e.state:null;
	var tmp;
	if(state != null && state.__postFilesCacheID != null) {
		var tmp1;
		var _this = pushstate_PushState.uploadCache;
		var key = state.__postFilesCacheID;
		if(__map_reserved[key] != null) tmp1 = _this.getReserved(key); else tmp1 = _this.h[key];
		tmp = tmp1;
	} else tmp = null;
	var uploads = tmp;
	if(pushstate_PushState.ignoreAnchors && path == pushstate_PushState.currentPath) return;
	if(e != null) {
		var _g = 0;
		var _g1 = pushstate_PushState.preventers;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(!p(path,state,uploads)) {
				e.preventDefault();
				window.history.replaceState(pushstate_PushState.currentState,"",pushstate_PushState.currentPath);
				return;
			}
		}
	}
	pushstate_PushState.currentPath = path;
	pushstate_PushState.currentState = state;
	pushstate_PushState.currentUploads = pushstate_PushState.getUploadsForState(state);
	pushstate_PushState.dispatch(pushstate_PushState.currentPath,pushstate_PushState.currentState,pushstate_PushState.currentUploads);
	return;
};
pushstate_PushState.stripURL = function(path) {
	if(HxOverrides.substr(path,0,pushstate_PushState.basePath.length) == pushstate_PushState.basePath) path = HxOverrides.substr(path,pushstate_PushState.basePath.length,null);
	if(pushstate_PushState.ignoreAnchors && path.indexOf("#") > -1) {
		var tmp;
		var len = path.indexOf("#");
		tmp = HxOverrides.substr(path,0,len);
		path = tmp;
	}
	return path;
};
pushstate_PushState.addEventListener = function(l1,l2,l3) {
	var tmp;
	if(l1 != null) tmp = l1; else if(l2 != null) tmp = function(url,state,_) {
		l2(url,state);
	}; else if(l3 != null) tmp = function(url1,_1,_2) {
		l3(url1);
	}; else throw new js__$Boot_HaxeError("No listener provided");
	var l = tmp;
	pushstate_PushState.listeners.push(l);
	return l;
};
pushstate_PushState.clearEventListeners = function() {
	while(pushstate_PushState.listeners.length > 0) pushstate_PushState.listeners.pop();
};
pushstate_PushState.dispatch = function(url,state,uploads) {
	var _g = 0;
	var _g1 = pushstate_PushState.listeners;
	while(_g < _g1.length) {
		var l = _g1[_g];
		++_g;
		l(url,state,uploads);
	}
};
pushstate_PushState.push = function(url,state,uploads) {
	var strippedURL = pushstate_PushState.stripURL(url);
	if(state == null) state = { };
	var _g = 0;
	var _g1 = pushstate_PushState.preventers;
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		if(!p(strippedURL,state,uploads)) return false;
	}
	pushstate_PushState.setUploadsForState(strippedURL,state,uploads);
	window.history.pushState(state,"",url);
	pushstate_PushState.currentPath = strippedURL;
	pushstate_PushState.currentState = state;
	pushstate_PushState.currentUploads = uploads;
	pushstate_PushState.dispatch(strippedURL,state,uploads);
	return true;
};
var thx_Either = { __ename__ : ["thx","Either"], __constructs__ : ["Left","Right"] };
thx_Either.Left = function(value) { var $x = ["Left",0,value]; $x.__enum__ = thx_Either; $x.toString = $estr; return $x; };
thx_Either.Right = function(value) { var $x = ["Right",1,value]; $x.__enum__ = thx_Either; $x.toString = $estr; return $x; };
var thx_Error = function(message,stack,pos) {
	Error.call(this,message);
	this.message = message;
	if(null == stack) {
		var tmp;
		try {
			tmp = haxe_CallStack.exceptionStack();
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			tmp = [];
		}
		stack = tmp;
		if(stack.length == 0) {
			var tmp1;
			try {
				tmp1 = haxe_CallStack.callStack();
			} catch( e1 ) {
				haxe_CallStack.lastException = e1;
				if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
				tmp1 = [];
			}
			stack = tmp1;
		}
	}
	this.stackItems = stack;
	this.pos = pos;
};
thx_Error.__name__ = ["thx","Error"];
thx_Error.fromDynamic = function(err,pos) {
	if(js_Boot.__instanceof(err,thx_Error)) return err;
	return new thx_error_ErrorWrapper("" + Std.string(err),err,null,pos);
};
thx_Error.__super__ = Error;
thx_Error.prototype = $extend(Error.prototype,{
	toString: function() {
		return this.message + "\nfrom: " + this.getPosition() + "\n\n" + this.stackToString();
	}
	,getPosition: function() {
		return this.pos.className + "." + this.pos.methodName + "() at " + this.pos.lineNumber;
	}
	,stackToString: function() {
		return haxe_CallStack.toString(this.stackItems);
	}
	,__class__: thx_Error
});
var thx_Iterators = function() { };
thx_Iterators.__name__ = ["thx","Iterators"];
thx_Iterators.map = function(it,f) {
	var acc = [];
	while( it.hasNext() ) {
		var v = it.next();
		acc.push(f(v));
	}
	return acc;
};
thx_Iterators.toArray = function(it) {
	var elements = [];
	while( it.hasNext() ) {
		var element = it.next();
		elements.push(element);
	}
	return elements;
};
var thx__$QueryString_QueryString_$Impl_$ = {};
thx__$QueryString_QueryString_$Impl_$.__name__ = ["thx","_QueryString","QueryString_Impl_"];
thx__$QueryString_QueryString_$Impl_$.encodeURIComponent = function(s) {
	return StringTools.replace(encodeURIComponent(s),"%20","+");
};
thx__$QueryString_QueryString_$Impl_$.decodeURIComponent = function(s) {
	return StringTools.replace(decodeURIComponent(s.split("+").join(" ")),"+"," ");
};
thx__$QueryString_QueryString_$Impl_$.parseWithSymbols = function(s,separator,assignment,decodeURIComponent) {
	var qs = new haxe_ds_StringMap();
	if(null == s) return qs;
	if(null == decodeURIComponent) decodeURIComponent = thx__$QueryString_QueryString_$Impl_$.decodeURIComponent;
	if(StringTools.startsWith(s,"?") || StringTools.startsWith(s,"#")) s = s.substring(1);
	s = StringTools.ltrim(s);
	s.split(separator).map(function(v) {
		var parts = v.split(assignment);
		if(parts[0] == "") return;
		thx__$QueryString_QueryString_$Impl_$.add(qs,decodeURIComponent(parts[0]),null == parts[1]?null:decodeURIComponent(parts[1]));
	});
	return qs;
};
thx__$QueryString_QueryString_$Impl_$.add = function(this1,name,value) {
	var arr = __map_reserved[name] != null?this1.getReserved(name):this1.h[name];
	if(null == arr) {
		arr = value == null?[]:[value];
		if(__map_reserved[name] != null) this1.setReserved(name,arr); else this1.h[name] = arr;
	} else if(null != value) arr.push(value);
	return this1;
};
thx__$QueryString_QueryString_$Impl_$.toStringWithSymbols = function(this1,separator,assignment,encodeURIComponent) {
	if(null == this1) return null;
	if(null == encodeURIComponent) encodeURIComponent = thx__$QueryString_QueryString_$Impl_$.encodeURIComponent;
	var tmp;
	var array = thx_Iterators.map(this1.keys(),function(k) {
		var vs = __map_reserved[k] != null?this1.getReserved(k):this1.h[k];
		var ek = encodeURIComponent(k);
		if(vs.length == 0) return [ek]; else return vs.map(function(_) {
			return "" + ek + assignment + encodeURIComponent(_);
		});
	});
	tmp = Array.prototype.concat.apply([],array);
	return tmp.join(separator);
};
var thx__$Set_Set_$Impl_$ = {};
thx__$Set_Set_$Impl_$.__name__ = ["thx","_Set","Set_Impl_"];
thx__$Set_Set_$Impl_$.createString = function(it) {
	var map = new haxe_ds_StringMap();
	var set = map;
	if(null != it) thx__$Set_Set_$Impl_$.pushMany(set,it);
	return set;
};
thx__$Set_Set_$Impl_$.add = function(this1,v) {
	var tmp;
	if(this1.exists(v)) tmp = false; else {
		this1.set(v,true);
		tmp = true;
	}
	return tmp;
};
thx__$Set_Set_$Impl_$.copy = function(this1) {
	var inst = thx__$Set_Set_$Impl_$.empty(this1);
	var $it0 = this1.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		inst.set(k,true);
	}
	return inst;
};
thx__$Set_Set_$Impl_$.empty = function(this1) {
	var inst = Type.createInstance(this1 == null?null:js_Boot.getClass(this1),[]);
	return inst;
};
thx__$Set_Set_$Impl_$.filter = function(this1,predicate) {
	return thx__$Set_Set_$Impl_$.reduce(this1,function(acc,v) {
		if(predicate(v)) thx__$Set_Set_$Impl_$.add(acc,v);
		return acc;
	},thx__$Set_Set_$Impl_$.empty(this1));
};
thx__$Set_Set_$Impl_$.map = function(this1,f) {
	return thx__$Set_Set_$Impl_$.reduce(this1,function(acc,v) {
		acc.push(f(v));
		return acc;
	},[]);
};
thx__$Set_Set_$Impl_$.pushMany = function(this1,values) {
	var $it0 = $iterator(values)();
	while( $it0.hasNext() ) {
		var value = $it0.next();
		this1.set(value,true);
	}
};
thx__$Set_Set_$Impl_$.reduce = function(this1,handler,acc) {
	var $it0 = $iterator(thx__$Set_Set_$Impl_$)(this1);
	while( $it0.hasNext() ) {
		var v = $it0.next();
		acc = handler(acc,v);
	}
	return acc;
};
thx__$Set_Set_$Impl_$.iterator = function(this1) {
	return this1.keys();
};
var thx_Strings = function() { };
thx_Strings.__name__ = ["thx","Strings"];
thx_Strings.capitalizeWords = function(value,whiteSpaceOnly) {
	if(whiteSpaceOnly == null) whiteSpaceOnly = false;
	if(whiteSpaceOnly) return thx_Strings.UCWORDSWS.map(HxOverrides.substr(value,0,1).toUpperCase() + HxOverrides.substr(value,1,value.length - 1),thx_Strings.upperMatch); else return thx_Strings.UCWORDS.map(HxOverrides.substr(value,0,1).toUpperCase() + HxOverrides.substr(value,1,value.length - 1),thx_Strings.upperMatch);
};
thx_Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
};
thx_Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "…";
	if(maxlen == null) maxlen = 20;
	var sl = s.length;
	var symboll = symbol.length;
	if(sl > maxlen) {
		if(maxlen < symboll) return HxOverrides.substr(symbol,symboll - maxlen,maxlen); else return HxOverrides.substr(s,0,maxlen - symboll) + symbol;
	} else return s;
};
thx_Strings.ellipsisMiddle = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "…";
	if(maxlen == null) maxlen = 20;
	var sl = s.length;
	var symboll = symbol.length;
	if(sl > maxlen) {
		if(maxlen <= symboll) return thx_Strings.ellipsis(s,maxlen,symbol);
		var hll = Math.ceil((maxlen - symboll) / 2);
		var hlr = Math.floor((maxlen - symboll) / 2);
		return HxOverrides.substr(s,0,hll) + symbol + HxOverrides.substr(s,sl - hlr,hlr);
	} else return s;
};
thx_Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
};
thx_Strings.upperMatch = function(re) {
	return re.matched(0).toUpperCase();
};
var thx_Types = function() { };
thx_Types.__name__ = ["thx","Types"];
thx_Types.sameType = function(a,b) {
	return thx_Types.toString(Type["typeof"](a)) == thx_Types.toString(Type["typeof"](b));
};
thx_Types.toString = function(type) {
	var tmp;
	switch(type[1]) {
	case 0:
		tmp = "Null";
		break;
	case 1:
		tmp = "Int";
		break;
	case 2:
		tmp = "Float";
		break;
	case 3:
		tmp = "Bool";
		break;
	case 4:
		tmp = "{}";
		break;
	case 5:
		tmp = "Function";
		break;
	case 6:
		tmp = Type.getClassName(type[2]);
		break;
	case 7:
		tmp = Type.getEnumName(type[2]);
		break;
	default:
		throw new js__$Boot_HaxeError("invalid type " + Std.string(type));
	}
	return tmp;
};
var thx__$Url_Url_$Impl_$ = {};
thx__$Url_Url_$Impl_$.__name__ = ["thx","_Url","Url_Impl_"];
thx__$Url_Url_$Impl_$.fromString = function(s) {
	return thx__$Url_Url_$Impl_$.parse(s,true);
};
thx__$Url_Url_$Impl_$.parse = function(s,parseQueryString) {
	if(!thx__$Url_Url_$Impl_$.pattern.match(s)) throw new thx_Error("unable to parse \"" + s + "\" to Url",null,{ fileName : "Url.hx", lineNumber : 21, className : "thx._Url.Url_Impl_", methodName : "parse"});
	var port = thx__$Url_Url_$Impl_$.pattern.matched(12);
	var o = { protocol : thx__$Url_Url_$Impl_$.pattern.matched(4), slashes : thx__$Url_Url_$Impl_$.pattern.matched(5) == "//", auth : thx__$Url_Url_$Impl_$.pattern.matched(7), hostName : thx__$Url_Url_$Impl_$.pattern.matched(11), port : null == port?null:Std.parseInt(port), pathName : thx__$Url_Url_$Impl_$.pattern.matched(13), queryString : null, search : null, hash : thx__$Url_Url_$Impl_$.pattern.matched(17)};
	thx__$Url_Url_$Impl_$.set_search(o,thx__$Url_Url_$Impl_$.pattern.matched(16));
	return o;
};
thx__$Url_Url_$Impl_$.toString = function(this1) {
	var tmp;
	if(this1.hostName != null) {
		var tmp1;
		if(!(this1.search != null)) {
			if(this1.queryString != null) {
				var tmp2;
				var _this = this1.queryString;
				tmp2 = new haxe_ds__$StringMap_StringMapIterator(_this,_this.arrayKeys());
				tmp1 = !(!tmp2.hasNext());
			} else tmp1 = false;
		} else tmp1 = true;
		tmp = "" + (this1.protocol != null?this1.protocol + ":":"") + (this1.slashes?"//":"") + (this1.auth != null?this1.auth + "@":"") + (this1.hostName + (this1.port != null?":" + this1.port:"")) + (this1.pathName + (tmp1?"?" + thx__$Url_Url_$Impl_$.get_search(this1):"")) + (this1.hash != null?"#" + this1.hash:"");
	} else {
		var tmp3;
		if(!(this1.search != null)) {
			if(this1.queryString != null) {
				var tmp4;
				var _this1 = this1.queryString;
				tmp4 = new haxe_ds__$StringMap_StringMapIterator(_this1,_this1.arrayKeys());
				tmp3 = !(!tmp4.hasNext());
			} else tmp3 = false;
		} else tmp3 = true;
		tmp = "" + (this1.pathName + (tmp3?"?" + thx__$Url_Url_$Impl_$.get_search(this1):"")) + (this1.hash != null?"#" + this1.hash:"");
	}
	return tmp;
};
thx__$Url_Url_$Impl_$.get_search = function(this1) {
	return null != this1.search && "" != this1.search?this1.search:thx__$QueryString_QueryString_$Impl_$.toStringWithSymbols(this1.queryString,thx__$QueryString_QueryString_$Impl_$.separator,thx__$QueryString_QueryString_$Impl_$.assignment,thx__$QueryString_QueryString_$Impl_$.encodeURIComponent);
};
thx__$Url_Url_$Impl_$.set_search = function(this1,value) {
	var tmp;
	try {
		tmp = thx__$QueryString_QueryString_$Impl_$.parseWithSymbols(value,thx__$QueryString_QueryString_$Impl_$.separator,thx__$QueryString_QueryString_$Impl_$.assignment,thx__$QueryString_QueryString_$Impl_$.decodeURIComponent);
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		tmp = null;
	}
	var qs = tmp;
	var tmp1;
	if(!(qs == null)) {
		var arr = thx_Iterators.toArray(qs.keys());
		if(arr.length == 0) tmp1 = true; else if(arr.length != 1) tmp1 = false; else {
			var tmp2;
			var _this = qs;
			var key = arr[0];
			if(__map_reserved[key] != null) tmp2 = _this.getReserved(key); else tmp2 = _this.h[key];
			tmp1 = tmp2.length == 0;
		}
	} else tmp1 = true;
	if(tmp1) {
		this1.search = value;
		this1.queryString = null;
	} else {
		this1.queryString = qs;
		this1.search = null;
	}
	return value;
};
var thx_error_AbstractMethod = function(posInfo) {
	thx_Error.call(this,"method " + posInfo.className + "." + posInfo.methodName + "() is abstract",null,posInfo);
};
thx_error_AbstractMethod.__name__ = ["thx","error","AbstractMethod"];
thx_error_AbstractMethod.__super__ = thx_Error;
thx_error_AbstractMethod.prototype = $extend(thx_Error.prototype,{
	__class__: thx_error_AbstractMethod
});
var thx_error_ErrorWrapper = function(message,innerError,stack,pos) {
	thx_Error.call(this,message,stack,pos);
	this.innerError = innerError;
};
thx_error_ErrorWrapper.__name__ = ["thx","error","ErrorWrapper"];
thx_error_ErrorWrapper.__super__ = thx_Error;
thx_error_ErrorWrapper.prototype = $extend(thx_Error.prototype,{
	__class__: thx_error_ErrorWrapper
});
var thx_http_Const = function() { };
thx_http_Const.__name__ = ["thx","http","Const"];
var thx_http__$Header_Header_$Impl_$ = {};
thx_http__$Header_Header_$Impl_$.__name__ = ["thx","http","_Header","Header_Impl_"];
thx_http__$Header_Header_$Impl_$.normalize = function(t) {
	t._0 = thx_http__$Header_Header_$Impl_$.normalizeKey(t._0);
	t._1 = thx_http__$Header_Header_$Impl_$.normalizeValue(t._1);
	return t;
};
thx_http__$Header_Header_$Impl_$.normalizeKey = function(key) {
	key = StringTools.trim(key);
	if(key.indexOf("-") >= 0) return key;
	var nkey = thx_Strings.capitalizeWords(thx_Strings.dasherize(thx_Strings.underscore(StringTools.trim(key))));
	if(nkey.toLowerCase() == key) return key;
	return nkey;
};
thx_http__$Header_Header_$Impl_$.normalizeValue = function(value,key) {
	if(key == null) key = " ";
	return thx_http__$Header_Header_$Impl_$.CRLF_PATTERN.replace(value,"\r\n");
};
var thx_http__$Headers_Headers_$Impl_$ = {};
thx_http__$Headers_Headers_$Impl_$.__name__ = ["thx","http","_Headers","Headers_Impl_"];
thx_http__$Headers_Headers_$Impl_$.fromString = function(s) {
	if(s == null) return thx_http__$Headers_Headers_$Impl_$.empty();
	return thx_http_Const.SPLIT_NL.split(s).map(function(line) {
		return StringTools.trim(line);
	}).filter(function(line1) {
		return line1 != "";
	}).map(function(line2) {
		var parts = line2.split(":");
		var key = parts.shift();
		var value = StringTools.ltrim(parts.join(":"));
		var tmp;
		var t = thx_http__$Header_Header_$Impl_$.normalize({ _0 : key, _1 : value});
		tmp = t;
		return tmp;
	});
};
thx_http__$Headers_Headers_$Impl_$.empty = function() {
	return [];
};
var thx_http_Request = function() { };
thx_http_Request.__name__ = ["thx","http","Request"];
thx_http_Request.make = function(requestInfo) {
	return thx_http_core_Html5Request.make(requestInfo);
};
thx_http_Request.get = function(url) {
	return thx_http_Request.make(new thx_http_RequestInfo("GET",thx__$Url_Url_$Impl_$.fromString(url)));
};
var thx_http_RequestBody = { __ename__ : ["thx","http","RequestBody"], __constructs__ : ["NoBody","BodyString","BodyBytes","BodyInput","BodyStream"] };
thx_http_RequestBody.NoBody = ["NoBody",0];
thx_http_RequestBody.NoBody.toString = $estr;
thx_http_RequestBody.NoBody.__enum__ = thx_http_RequestBody;
thx_http_RequestBody.BodyString = function(s,encoding) { var $x = ["BodyString",1,s,encoding]; $x.__enum__ = thx_http_RequestBody; $x.toString = $estr; return $x; };
thx_http_RequestBody.BodyBytes = function(b) { var $x = ["BodyBytes",2,b]; $x.__enum__ = thx_http_RequestBody; $x.toString = $estr; return $x; };
thx_http_RequestBody.BodyInput = function(s) { var $x = ["BodyInput",3,s]; $x.__enum__ = thx_http_RequestBody; $x.toString = $estr; return $x; };
thx_http_RequestBody.BodyStream = function(e) { var $x = ["BodyStream",4,e]; $x.__enum__ = thx_http_RequestBody; $x.toString = $estr; return $x; };
var thx_http_RequestInfo = function(method,url,headers,body,version) {
	if(version == null) version = "1.1";
	this.method = method;
	this.url = url;
	this.headers = null == headers?thx_http__$Headers_Headers_$Impl_$.empty():headers;
	this.version = version;
	this.body = null == body?thx_http_RequestBody.NoBody:body;
};
thx_http_RequestInfo.__name__ = ["thx","http","RequestInfo"];
thx_http_RequestInfo.prototype = {
	__class__: thx_http_RequestInfo
};
var thx_http_Response = function() { };
thx_http_Response.__name__ = ["thx","http","Response"];
thx_http_Response.prototype = {
	asBytes: function() {
		return thx_stream_EmitterBytes.toPromise(this.emitter);
	}
	,asString: function() {
		return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(this.asBytes(),function(b) {
			return b.toString();
		});
	}
	,get_statusCode: function() {
		throw new thx_error_AbstractMethod({ fileName : "Response.hx", lineNumber : 86, className : "thx.http.Response", methodName : "get_statusCode"});
	}
	,get_statusText: function() {
		var tmp;
		var key = this.get_statusCode();
		tmp = thx_http_Response.statusCodes.h[key];
		return tmp;
	}
	,__class__: thx_http_Response
};
var thx_http_core_Html5Request = function() { };
thx_http_core_Html5Request.__name__ = ["thx","http","core","Html5Request"];
thx_http_core_Html5Request.make = function(requestInfo) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		var bus = new thx_stream_Bus();
		var req = new XMLHttpRequest();
		var send = function() {
			requestInfo.headers.map(function(_) {
				req.setRequestHeader(_._0,_._1);
				return;
			});
			{
				var _g = requestInfo.body;
				switch(_g[1]) {
				case 0:
					req.send();
					break;
				case 3:
					var i = _g[2];
					var tmp;
					var _this = i.readAll();
					tmp = _this.b.bufferValue;
					req.send(tmp);
					break;
				case 1:
					var s = _g[2];
					req.send(s);
					break;
				case 4:
					var e = _g[2];
					thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(thx_stream_EmitterBytes.toPromise(e),function(bytes) {
						req.send(bytes.b.bufferValue);
					}),function(e1) {
						throw e1;
					});
					break;
				case 2:
					var b = _g[2];
					req.send(b.b.bufferValue);
					break;
				}
			}
		};
		var sent = false;
		req.onload = function(e2) {
			if(req.response == null || req.response.length == 0) bus.emit(thx_stream_StreamValue.End(false)); else {
				var value = haxe_io_Bytes.ofData(req.response);
				bus.emit(thx_stream_StreamValue.Pulse(value));
				bus.emit(thx_stream_StreamValue.End(false));
			}
			if(sent) return;
			sent = true;
			resolve(new thx_http_core_Html5Response(req,bus));
		};
		req.onreadystatechange = function(e3) {
			if(req.readyState == 1) {
				send();
				return;
			}
			if(req.readyState != 2) return;
			if(sent) return;
			sent = true;
			resolve(new thx_http_core_Html5Response(req,bus));
		};
		req.onabort = function(e4) {
			reject(new thx_error_ErrorWrapper("connection aborted",e4,null,{ fileName : "Html5Request.hx", lineNumber : 65, className : "thx.http.core.Html5Request", methodName : "make"}));
		};
		req.onerror = function(e5) {
			reject(thx_Error.fromDynamic(e5,{ fileName : "Html5Request.hx", lineNumber : 68, className : "thx.http.core.Html5Request", methodName : "make"}));
		};
		req.open(requestInfo.method,thx__$Url_Url_$Impl_$.toString(requestInfo.url),true);
		req.responseType = "arraybuffer";
	});
};
var thx_http_core_Html5Response = function(req,bus) {
	this.req = req;
	this.headers = thx_http__$Headers_Headers_$Impl_$.fromString(req.getAllResponseHeaders());
	this.emitter = bus;
};
thx_http_core_Html5Response.__name__ = ["thx","http","core","Html5Response"];
thx_http_core_Html5Response.__super__ = thx_http_Response;
thx_http_core_Html5Response.prototype = $extend(thx_http_Response.prototype,{
	get_statusCode: function() {
		return this.req.status;
	}
	,get_statusText: function() {
		return this.req.statusText;
	}
	,__class__: thx_http_core_Html5Response
});
var thx_load_Loader = function() { };
thx_load_Loader.__name__ = ["thx","load","Loader"];
thx_load_Loader.getText = function(path) {
	if(StringTools.startsWith(path,"http://") || StringTools.startsWith(path,"https://")) return thx_load_Loader.makeTextHttpRequest(path); else if(StringTools.startsWith(path,"file://")) return thx_load_Loader.loadText(path.substring(7)); else throw new thx_Error("unsupported content path or protocol: " + path,null,{ fileName : "Loader.hx", lineNumber : 71, className : "thx.load.Loader", methodName : "getText"});
};
thx_load_Loader.makeTextHttpRequest = function(url) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(thx_http_Request.get(url),function(response) {
		var tmp;
		var _g = response.get_statusCode();
		switch(_g) {
		case 200:case 201:case 202:case 203:case 206:
			tmp = response.asString();
			break;
		case 204:case 205:
			tmp = thx_promise__$Promise_Promise_$Impl_$.value(null);
			break;
		default:
			tmp = thx_promise__$Promise_Promise_$Impl_$.fail(response.get_statusText(),{ fileName : "Loader.hx", lineNumber : 120, className : "thx.load.Loader", methodName : "makeTextHttpRequest"});
		}
		return tmp;
	});
};
thx_load_Loader.loadText = function(path) {
	return thx_promise__$Promise_Promise_$Impl_$.fail("this target doesn't support loading files from the filesystem",{ fileName : "Loader.hx", lineNumber : 145, className : "thx.load.Loader", methodName : "loadText"});
};
var thx_promise_Future = function() {
	this.handlers = [];
	this.state = haxe_ds_Option.None;
};
thx_promise_Future.__name__ = ["thx","promise","Future"];
thx_promise_Future.create = function(handler) {
	var future = new thx_promise_Future();
	handler($bind(future,future.setState));
	return future;
};
thx_promise_Future.prototype = {
	map: function(handler) {
		var _g = this;
		return thx_promise_Future.create(function(callback) {
			_g.then(function(value) {
				callback(handler(value));
			});
		});
	}
	,then: function(handler) {
		this.handlers.push(handler);
		this.update();
		return this;
	}
	,setState: function(newstate) {
		{
			var _g = this.state;
			switch(_g[1]) {
			case 1:
				this.state = haxe_ds_Option.Some(newstate);
				break;
			case 0:
				throw new thx_Error("future was already \"" + Std.string(_g[2]) + "\", can't apply the new state \"" + Std.string(newstate) + "\"",null,{ fileName : "Future.hx", lineNumber : 110, className : "thx.promise.Future", methodName : "setState"});
				break;
			}
		}
		this.update();
		return this;
	}
	,update: function() {
		{
			var _g = this.state;
			switch(_g[1]) {
			case 1:
				break;
			case 0:
				var index = -1;
				while(++index < this.handlers.length) this.handlers[index](_g[2]);
				this.handlers = [];
				break;
			}
		}
	}
	,__class__: thx_promise_Future
};
var thx_promise__$Promise_Promise_$Impl_$ = {};
thx_promise__$Promise_Promise_$Impl_$.__name__ = ["thx","promise","_Promise","Promise_Impl_"];
thx_promise__$Promise_Promise_$Impl_$.create = function(callback) {
	return thx_promise_Future.create(function(cb) {
		callback(function(value) {
			cb(thx_Either.Right(value));
		},function(error) {
			cb(thx_Either.Left(error));
		});
	});
};
thx_promise__$Promise_Promise_$Impl_$.fail = function(message,pos) {
	return thx_promise__$Promise_Promise_$Impl_$.error(new thx_Error(message,null,pos));
};
thx_promise__$Promise_Promise_$Impl_$.error = function(err) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(_,reject) {
		reject(err);
	});
};
thx_promise__$Promise_Promise_$Impl_$.value = function(v) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,_) {
		resolve(v);
	});
};
thx_promise__$Promise_Promise_$Impl_$.always = function(this1,handler) {
	return this1.then(function(_) {
		handler();
	});
};
thx_promise__$Promise_Promise_$Impl_$.either = function(this1,success,failure) {
	return this1.then(function(r) {
		switch(r[1]) {
		case 1:
			var value = r[2];
			success(value);
			break;
		case 0:
			var error = r[2];
			failure(error);
			break;
		}
	});
};
thx_promise__$Promise_Promise_$Impl_$.failure = function(this1,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.either(this1,function(_) {
	},failure);
};
thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture = function(this1,success,failure) {
	var tmp;
	var future = this1.map(function(result) {
		var tmp1;
		switch(result[1]) {
		case 1:
			var value = result[2];
			tmp1 = success(value);
			break;
		case 0:
			var error = result[2];
			tmp1 = failure(error);
			break;
		}
		return tmp1;
	});
	tmp = thx_promise_Future.create(function(callback) {
		future.then(function(future1) {
			future1.then(callback);
		});
	});
	return tmp;
};
thx_promise__$Promise_Promise_$Impl_$.mapSuccess = function(this1,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture(this1,function(v) {
		var tmp;
		try {
			tmp = thx_promise__$Promise_Promise_$Impl_$.value(success(v));
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			tmp = thx_promise__$Promise_Promise_$Impl_$.error(thx_Error.fromDynamic(e,{ fileName : "Promise.hx", lineNumber : 178, className : "thx.promise._Promise.Promise_Impl_", methodName : "mapSuccess"}));
		}
		return tmp;
	},function(err) {
		return thx_promise__$Promise_Promise_$Impl_$.error(err);
	});
};
thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise = function(this1,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture(this1,success,function(err) {
		return thx_promise__$Promise_Promise_$Impl_$.error(err);
	});
};
thx_promise__$Promise_Promise_$Impl_$.success = function(this1,success) {
	return thx_promise__$Promise_Promise_$Impl_$.either(this1,success,function(_) {
	});
};
var thx_stream_Emitter = function(init) {
	this.init = init;
};
thx_stream_Emitter.__name__ = ["thx","stream","Emitter"];
thx_stream_Emitter.prototype = {
	subscribe: function(pulse,end) {
		pulse = null != pulse?pulse:function(_) {
		};
		end = null != end?end:function(_1) {
		};
		var stream = new thx_stream_Stream(function(r) {
			switch(r[1]) {
			case 0:
				var v = r[2];
				pulse(v);
				break;
			case 1:
				var c = r[2];
				end(c);
				break;
			}
		});
		this.init(stream);
		return stream;
	}
	,__class__: thx_stream_Emitter
};
var thx_stream_Bus = function(distinctValuesOnly,equal) {
	if(distinctValuesOnly == null) distinctValuesOnly = false;
	var _g = this;
	this.distinctValuesOnly = distinctValuesOnly;
	this.equal = null == equal?function(a,b) {
		return a == b;
	}:equal;
	this.downStreams = [];
	this.upStreams = [];
	thx_stream_Emitter.call(this,function(stream) {
		_g.downStreams.push(stream);
		stream.addCleanUp(function() {
			HxOverrides.remove(_g.downStreams,stream);
		});
	});
};
thx_stream_Bus.__name__ = ["thx","stream","Bus"];
thx_stream_Bus.__super__ = thx_stream_Emitter;
thx_stream_Bus.prototype = $extend(thx_stream_Emitter.prototype,{
	emit: function(value) {
		switch(value[1]) {
		case 0:
			var v = value[2];
			if(this.distinctValuesOnly) {
				if(this.equal(v,this.value)) return;
				this.value = v;
			}
			var _g = 0;
			var _g1 = this.downStreams.slice();
			while(_g < _g1.length) {
				var stream = _g1[_g];
				++_g;
				stream.pulse(v);
			}
			break;
		case 1:
			switch(value[2]) {
			case true:
				var _g2 = 0;
				var _g11 = this.downStreams.slice();
				while(_g2 < _g11.length) {
					var stream1 = _g11[_g2];
					++_g2;
					stream1.cancel();
				}
				break;
			case false:
				var _g3 = 0;
				var _g12 = this.downStreams.slice();
				while(_g3 < _g12.length) {
					var stream2 = _g12[_g3];
					++_g3;
					stream2.end();
				}
				break;
			}
			break;
		}
	}
	,__class__: thx_stream_Bus
});
var thx_stream_EmitterBytes = function() { };
thx_stream_EmitterBytes.__name__ = ["thx","stream","EmitterBytes"];
thx_stream_EmitterBytes.toPromise = function(emitter) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		var buf = haxe_io_Bytes.alloc(0);
		emitter.subscribe(function(b) {
			var nbuf = haxe_io_Bytes.alloc(buf.length + b.length);
			nbuf.blit(0,buf,0,buf.length);
			nbuf.blit(buf.length,b,0,b.length);
			buf = nbuf;
		},function(cancel) {
			if(cancel) reject(new thx_Error("Data stream has been cancelled",null,{ fileName : "Emitter.hx", lineNumber : 564, className : "thx.stream.EmitterBytes", methodName : "toPromise"})); else resolve(buf);
		});
	});
};
var thx_stream_IStream = function() { };
thx_stream_IStream.__name__ = ["thx","stream","IStream"];
var thx_stream_Stream = function(subscriber) {
	this.subscriber = subscriber;
	this.cleanUps = [];
	this.finalized = false;
	this.canceled = false;
};
thx_stream_Stream.__name__ = ["thx","stream","Stream"];
thx_stream_Stream.__interfaces__ = [thx_stream_IStream];
thx_stream_Stream.prototype = {
	addCleanUp: function(f) {
		this.cleanUps.push(f);
	}
	,cancel: function() {
		this.canceled = true;
		this.finalize(thx_stream_StreamValue.End(true));
	}
	,end: function() {
		this.finalize(thx_stream_StreamValue.End(false));
	}
	,pulse: function(v) {
		this.subscriber(thx_stream_StreamValue.Pulse(v));
	}
	,finalize: function(signal) {
		if(this.finalized) return;
		this.finalized = true;
		while(this.cleanUps.length > 0) (this.cleanUps.shift())();
		this.subscriber(signal);
		this.subscriber = function(_) {
		};
	}
	,__class__: thx_stream_Stream
};
var thx_stream_StreamValue = { __ename__ : ["thx","stream","StreamValue"], __constructs__ : ["Pulse","End"] };
thx_stream_StreamValue.Pulse = function(value) { var $x = ["Pulse",0,value]; $x.__enum__ = thx_stream_StreamValue; $x.toString = $estr; return $x; };
thx_stream_StreamValue.End = function(cancel) { var $x = ["End",1,cancel]; $x.__enum__ = thx_stream_StreamValue; $x.toString = $estr; return $x; };
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
var __map_reserved = {}
var ArrayBuffer = (Function("return typeof ArrayBuffer != 'undefined' ? ArrayBuffer : null"))() || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = (Function("return typeof DataView != 'undefined' ? DataView : null"))() || js_html_compat_DataView;
var Uint8Array = (Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null"))() || js_html_compat_Uint8Array._new;
Doom.namespaces = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	if(__map_reserved.svg != null) _g.setReserved("svg","http://www.w3.org/2000/svg"); else _g.h["svg"] = "http://www.w3.org/2000/svg";
	$r = _g;
	return $r;
}(this));
Main.playlists = [{ host : "Aersia", name : "VIP", tracks_url : "http://vip.aersia.net/roster.xml", source : "http://vip.aersia.net/vip.swf"},{ host : "Aersia", name : "Mellow", tracks_url : "http://vip.aersia.net/roster-mellow.xml", source : "http://vip.aersia.net/vip-mellow.swf"},{ host : "Aersia", name : "Source", tracks_url : "http://vip.aersia.net/roster-source.xml", source : "http://vip.aersia.net/vip-source.swf"},{ host : "Aersia", name : "Exiled", tracks_url : "http://vip.aersia.net/roster-exiled.xml", source : "http://vip.aersia.net/vip-exiled.swf"},{ host : "Aersia", name : "WAP", tracks_url : "http://wap.aersia.net/roster.xml", source : "http://wap.aersia.net/wap.swf"},{ host : "Aersia", name : "CPP", tracks_url : "http://cpp.aersia.net/roster.xml", source : "http://cpp.aersia.net/cpp.swf"},{ host : "JetSetRadio", name : "Live", tracks_url : "http://jetsetradio.live/audioplayer/audio/~list.js", source : "http://jetsetradio.live"}];
Xml.Element = 0;
Xml.PCData = 1;
Xml.CData = 2;
Xml.Comment = 3;
Xml.DocType = 4;
Xml.ProcessingInstruction = 5;
Xml.Document = 6;
dots_Html.pattern = new EReg("[<]([^> ]+)","");
dots_Query.doc = document;
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
haxe_xml_Parser.escapes = (function($this) {
	var $r;
	var h = new haxe_ds_StringMap();
	if(__map_reserved.lt != null) h.setReserved("lt","<"); else h.h["lt"] = "<";
	if(__map_reserved.gt != null) h.setReserved("gt",">"); else h.h["gt"] = ">";
	if(__map_reserved.amp != null) h.setReserved("amp","&"); else h.h["amp"] = "&";
	if(__map_reserved.quot != null) h.setReserved("quot","\""); else h.h["quot"] = "\"";
	if(__map_reserved.apos != null) h.setReserved("apos","'"); else h.h["apos"] = "'";
	$r = h;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
pushstate_PushState.ignoreAnchors = true;
thx__$QueryString_QueryString_$Impl_$.separator = "&";
thx__$QueryString_QueryString_$Impl_$.assignment = "=";
thx_Strings.UCWORDS = new EReg("[^a-zA-Z]([a-z])","g");
thx_Strings.UCWORDSWS = new EReg("[ \t\r\n][a-z]","g");
thx__$Url_Url_$Impl_$.pattern = new EReg("^((((?:([^:/#\\?]+):)?(?:(//)?((?:(([^:@/#\\?]+)(?:[:]([^:@/#\\?]+))?)@)?(([^:/#\\?\\]\\[]+|\\[[^/\\]@#?]+\\])(?:[:]([0-9]+))?))?)?)?((/?(?:[^/\\?#]+/+)*)([^\\?#]*)))?(?:\\?([^#]+))?)(?:#(.*))?","");
thx_http_Const.SPLIT_NL = new EReg("\r\n|\n\r|\n|\r","g");
thx_http__$Header_Header_$Impl_$.CRLF_PATTERN = new EReg("\r\n|\n\r|\r|\n","mg");
thx_http_Response.statusCodes = (function($this) {
	var $r;
	var _g = new haxe_ds_IntMap();
	_g.h[100] = "Continue";
	_g.h[101] = "Switching Protocols";
	_g.h[102] = "Processing";
	_g.h[200] = "OK";
	_g.h[201] = "Created";
	_g.h[202] = "Accepted";
	_g.h[203] = "Non-Authoritative Information";
	_g.h[204] = "No Content";
	_g.h[205] = "Reset Content";
	_g.h[206] = "Partial Content";
	_g.h[207] = "Multi-Status";
	_g.h[208] = "Already Reported";
	_g.h[226] = "IM Used";
	_g.h[300] = "Multiple Choices";
	_g.h[301] = "Moved Permanently";
	_g.h[302] = "Found";
	_g.h[303] = "See Other";
	_g.h[304] = "Not Modified";
	_g.h[305] = "Use Proxy";
	_g.h[306] = "(Unused)";
	_g.h[307] = "Temporary Redirect";
	_g.h[308] = "Permanent Redirect";
	_g.h[400] = "Bad Request";
	_g.h[401] = "Unauthorized";
	_g.h[402] = "Payment Required";
	_g.h[403] = "Forbidden";
	_g.h[404] = "Not Found";
	_g.h[405] = "Method Not Allowed";
	_g.h[406] = "Not Acceptable";
	_g.h[407] = "Proxy Authentication Required";
	_g.h[408] = "Request Timeout";
	_g.h[409] = "Conflict";
	_g.h[410] = "Gone";
	_g.h[411] = "Length Required";
	_g.h[412] = "Precondition Failed";
	_g.h[413] = "Payload Too Large";
	_g.h[414] = "URI Too Long";
	_g.h[415] = "Unsupported Media Type";
	_g.h[416] = "Range Not Satisfiable";
	_g.h[417] = "Expectation Failed";
	_g.h[421] = "Misdirected Request";
	_g.h[422] = "Unprocessable Entity";
	_g.h[423] = "Locked";
	_g.h[424] = "Failed Dependency";
	_g.h[426] = "Upgrade Required";
	_g.h[428] = "Precondition Required";
	_g.h[429] = "Too Many Requests";
	_g.h[431] = "Request Header Fields Too Large";
	_g.h[500] = "Internal Server Error";
	_g.h[501] = "Not Implemented";
	_g.h[502] = "Bad Gateway";
	_g.h[503] = "Service Unavailable";
	_g.h[504] = "Gateway Timeout";
	_g.h[505] = "HTTP Version Not Supported";
	_g.h[506] = "Variant Also Negotiates";
	_g.h[507] = "Insufficient Storage";
	_g.h[508] = "Loop Detected";
	_g.h[510] = "Not Extended";
	_g.h[511] = "Network Authentication Required";
	$r = _g;
	return $r;
}(this));
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
