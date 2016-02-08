(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var DateTools = function() { };
DateTools.__name__ = ["DateTools"];
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	if(isB) return 29; else return 28;
};
var doom_IComponent = function() { };
doom_IComponent.__name__ = ["doom","IComponent"];
doom_IComponent.prototype = {
	element: null
	,node: null
	,init: null
	,render: null
	,didMount: null
	,didRefresh: null
	,didUnmount: null
	,toString: null
	,__class__: doom_IComponent
};
var doom_ComponentBase = function(children) {
	if(null == children) this.children = []; else this.children = children;
	this.node = this.render();
};
doom_ComponentBase.__name__ = ["doom","ComponentBase"];
doom_ComponentBase.__interfaces__ = [doom_IComponent];
doom_ComponentBase.prototype = {
	element: null
	,node: null
	,children: null
	,init: function(post) {
		post.splice(0,0,$bind(this,this.didMount));
		this.element = doom_HtmlNode.toHtml(this.node,post);
	}
	,render: function() {
		throw new thx_error_AbstractMethod({ fileName : "ComponentBase.hx", lineNumber : 25, className : "doom.ComponentBase", methodName : "render"});
	}
	,didMount: function() {
	}
	,didRefresh: function() {
	}
	,didUnmount: function() {
	}
	,toString: function() {
		var cls = Type.getClassName(js_Boot.getClass(this)).split(".").pop();
		return "" + cls + "(" + thx_Strings.ellipsisMiddle(doom__$Node_Node_$Impl_$.toString(this.node),80,"...") + ")";
	}
	,updateNode: function(oldNode) {
		var newNode = this.render();
		switch(newNode[1]) {
		case 0:
			break;
		case 3:
			break;
		default:
			throw new thx_Error("Component " + this.toString() + " must return only element nodes",null,{ fileName : "ComponentBase.hx", lineNumber : 42, className : "doom.ComponentBase", methodName : "updateNode"});
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
	{
		var other = node;
		switch(node[1]) {
		case 3:
			var comp = node[2];
			ref.innerHTML = "";
			var post = [];
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
			var dom = doom_HtmlNode.toHtml(other,post1);
			ref.innerHTML = "";
			ref.appendChild(dom);
			var _g1 = 0;
			while(_g1 < post1.length) {
				var f1 = post1[_g1];
				++_g1;
				f1();
			}
		}
	}
};
Doom.a = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("a",attributes,children,child);
};
Doom.abbr = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("abbr",attributes,children,child);
};
Doom.address = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("address",attributes,children,child);
};
Doom.area = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("area",attributes,null,null);
};
Doom.article = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("article",attributes,children,child);
};
Doom.aside = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("aside",attributes,children,child);
};
Doom.audio = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("audio",attributes,children,child);
};
Doom.b = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("b",attributes,children,child);
};
Doom.base = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("base",attributes,null,null);
};
Doom.bdi = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("bdi",attributes,children,child);
};
Doom.bdo = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("bdo",attributes,children,child);
};
Doom.blockquote = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("blockquote",attributes,children,child);
};
Doom.body = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("body",attributes,children,child);
};
Doom.br = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("br",attributes,null,null);
};
Doom.button = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("button",attributes,children,child);
};
Doom.canvas = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("canvas",attributes,children,child);
};
Doom.caption = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("caption",attributes,children,child);
};
Doom.cite = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("cite",attributes,children,child);
};
Doom.code = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("code",attributes,children,child);
};
Doom.col = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("col",attributes,null,null);
};
Doom.colgroup = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("colgroup",attributes,children,child);
};
Doom.data = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("data",attributes,children,child);
};
Doom.datalist = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("datalist",attributes,children,child);
};
Doom.dd = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("dd",attributes,children,child);
};
Doom.del = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("del",attributes,children,child);
};
Doom.details = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("details",attributes,children,child);
};
Doom.dfn = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("dfn",attributes,children,child);
};
Doom.dialog = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("dialog",attributes,children,child);
};
Doom.div = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("div",attributes,children,child);
};
Doom.dl = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("dl",attributes,children,child);
};
Doom.dt = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("dt",attributes,children,child);
};
Doom.em = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("em",attributes,children,child);
};
Doom.embed = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("embed",attributes,null,null);
};
Doom.fieldset = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("fieldset",attributes,children,child);
};
Doom.figcaption = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("figcaption",attributes,children,child);
};
Doom.figure = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("figure",attributes,children,child);
};
Doom.footer = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("footer",attributes,children,child);
};
Doom.form = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("form",attributes,children,child);
};
Doom.h1 = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("h1",attributes,children,child);
};
Doom.h2 = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("h2",attributes,children,child);
};
Doom.h3 = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("h3",attributes,children,child);
};
Doom.h4 = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("h4",attributes,children,child);
};
Doom.h5 = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("h5",attributes,children,child);
};
Doom.h6 = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("h6",attributes,children,child);
};
Doom.head = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("head",attributes,children,child);
};
Doom.header = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("header",attributes,children,child);
};
Doom.hgroup = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("hgroup",attributes,children,child);
};
Doom.hr = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("hr",attributes,null,null);
};
Doom.html = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("html",attributes,children,child);
};
Doom.i = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("i",attributes,children,child);
};
Doom.iframe = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("iframe",attributes,children,child);
};
Doom.img = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("img",attributes,null,null);
};
Doom.input = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("input",attributes,null,null);
};
Doom.ins = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("ins",attributes,children,child);
};
Doom.kbd = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("kbd",attributes,children,child);
};
Doom.keygen = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("keygen",attributes,null,null);
};
Doom.label = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("label",attributes,children,child);
};
Doom.legend = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("legend",attributes,children,child);
};
Doom.li = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("li",attributes,children,child);
};
Doom.link = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("link",attributes,null,null);
};
Doom.main = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("main",attributes,children,child);
};
Doom.map = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("map",attributes,children,child);
};
Doom.mark = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("mark",attributes,children,child);
};
Doom.menu = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("menu",attributes,children,child);
};
Doom.menuitem = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("menuitem",attributes,children,child);
};
Doom.meta = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("meta",attributes,null,null);
};
Doom.meter = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("meter",attributes,children,child);
};
Doom.nav = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("nav",attributes,children,child);
};
Doom.noscript = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("noscript",attributes,children,child);
};
Doom.object = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("object",attributes,children,child);
};
Doom.ol = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("ol",attributes,children,child);
};
Doom.optgroup = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("optgroup",attributes,children,child);
};
Doom.option = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("option",attributes,children,child);
};
Doom.output = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("output",attributes,children,child);
};
Doom.p = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("p",attributes,children,child);
};
Doom.param = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("param",attributes,null,null);
};
Doom.pre = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("pre",attributes,children,child);
};
Doom.progress = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("progress",attributes,children,child);
};
Doom.q = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("q",attributes,children,child);
};
Doom.rb = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("rb",attributes,children,child);
};
Doom.rp = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("rp",attributes,children,child);
};
Doom.rt = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("rt",attributes,children,child);
};
Doom.rtc = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("rtc",attributes,children,child);
};
Doom.ruby = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("ruby",attributes,children,child);
};
Doom.s = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("s",attributes,children,child);
};
Doom.samp = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("samp",attributes,children,child);
};
Doom.script = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("script",attributes,children,child);
};
Doom.section = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("section",attributes,children,child);
};
Doom.select = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("select",attributes,children,child);
};
Doom.small = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("small",attributes,children,child);
};
Doom.source = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("source",attributes,null,null);
};
Doom.span = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("span",attributes,children,child);
};
Doom.strong = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("strong",attributes,children,child);
};
Doom.style = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("style",attributes,children,child);
};
Doom.sub = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("sub",attributes,children,child);
};
Doom.summary = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("summary",attributes,children,child);
};
Doom.sup = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("sup",attributes,children,child);
};
Doom.table = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("table",attributes,children,child);
};
Doom.tbody = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("tbody",attributes,children,child);
};
Doom.td = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("td",attributes,children,child);
};
Doom.template = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("template",attributes,children,child);
};
Doom.textarea = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("textarea",attributes,children,child);
};
Doom.tfoot = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("tfoot",attributes,children,child);
};
Doom.th = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("th",attributes,children,child);
};
Doom.thead = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("thead",attributes,children,child);
};
Doom.time = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("time",attributes,children,child);
};
Doom.title = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("title",attributes,children,child);
};
Doom.tr = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("tr",attributes,children,child);
};
Doom.track = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("track",attributes,null,null);
};
Doom.u = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("u",attributes,children,child);
};
Doom.ul = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("ul",attributes,children,child);
};
Doom.htmlvar = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("var",attributes,children,child);
};
Doom.video = function(attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el("video",attributes,children,child);
};
Doom.wbr = function(attributes) {
	return doom__$Node_Node_$Impl_$.el("wbr",attributes,null,null);
};
Doom.D = function(selector,attributes,children,child) {
	var parseResult = doom_SelectorParser.parseSelector(selector,attributes);
	return doom__$Node_Node_$Impl_$.el(parseResult.tag,parseResult.attributes,children,child);
};
Doom.el = function(name,attributes,children,child) {
	return doom__$Node_Node_$Impl_$.el(name,attributes,children,child);
};
Doom.text = function(content) {
	return doom_NodeImpl.Text(content);
};
Doom.raw = function(content) {
	return doom_NodeImpl.Raw(content);
};
Doom.dummy = function(text) {
	if(text == null) text = "empty node";
	return doom__$Node_Node_$Impl_$.el("div",(function($this) {
		var $r;
		var _g = new haxe_ds_StringMap();
		{
			var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("display:none");
			if(__map_reserved.style != null) _g.setReserved("style",value); else _g.h["style"] = value;
		}
		{
			var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString(text);
			if(__map_reserved["data-comment"] != null) _g.setReserved("data-comment",value1); else _g.h["data-comment"] = value1;
		}
		$r = _g;
		return $r;
	}(this)));
};
Doom.comp = function(comp) {
	return doom_NodeImpl.ComponentNode(comp);
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
	r: null
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw new js__$Boot_HaxeError("EReg::matched");
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw new js__$Boot_HaxeError("No string matched");
		return HxOverrides.substr(this.r.s,0,this.r.m.index);
	}
	,matchedRight: function() {
		if(this.r.m == null) throw new js__$Boot_HaxeError("No string matched");
		var sz = this.r.m.index + this.r.m[0].length;
		return HxOverrides.substr(this.r.s,sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw new js__$Boot_HaxeError("No string matched");
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) this.r.s = s;
			return b;
		} else {
			var b1 = this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
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
		var buf = new StringBuf();
		do {
			if(offset >= s.length) break; else if(!this.matchSub(s,offset)) {
				buf.add(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf.add(HxOverrides.substr(s,offset,p.pos - offset));
			buf.add(f(this));
			if(p.len == 0) {
				buf.add(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else offset = p.pos + p.len;
		} while(this.r.global);
		if(!this.r.global && offset > 0 && offset < s.length) buf.add(HxOverrides.substr(s,offset,null));
		return buf.b;
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
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw new js__$Boot_HaxeError("Invalid date format : " + s);
	}
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
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
var List = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
_$List_ListIterator.__name__ = ["_List","ListIterator"];
_$List_ListIterator.prototype = {
	head: null
	,val: null
	,hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
var Main = function() { };
Main.__name__ = ["Main"];
Main.main = function() {
	Doom.mount((function($this) {
		var $r;
		var comp = new app_App({ appApi : new app_MyApi()},{ });
		$r = doom_NodeImpl.ComponentNode(comp);
		return $r;
	}(this)),dots_Query.find("#root"));
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
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.instance = function(value,c) {
	if((value instanceof c)) return value; else return null;
};
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = ["StringTools"];
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
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
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
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
Type.getClass = function(o) {
	if(o == null) return null; else return js_Boot.getClass(o);
};
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
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
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
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
Utils.formatTrackName = function(track) {
	return "" + track.author + " - " + track.title;
};
Utils.formatTime = function(current,end) {
	return "" + (function($this) {
		var $r;
		var min = Math.floor(current / 60);
		var sec = Math.floor(current - min * 60);
		$r = "" + (min < 10?"0":"") + min + ":" + (sec < 10?"0":"") + sec;
		return $r;
	}(this)) + " / " + (end == null || isNaN(end) || end == 0?"--:--":(function($this) {
		var $r;
		var min1 = Math.floor(end / 60);
		var sec1 = Math.floor(end - min1 * 60);
		$r = "" + (min1 < 10?"0":"") + min1 + ":" + (sec1 < 10?"0":"") + sec1;
		return $r;
	}(this)));
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
	nodeType: null
	,nodeName: null
	,nodeValue: null
	,parent: null
	,children: null
	,attributeMap: null
	,get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		return this.nodeName;
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		this.attributeMap.set(att,value);
	}
	,remove: function(att) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		this.attributeMap.remove(att);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		return this.attributeMap.exists(att);
	}
	,iterator: function() {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		return HxOverrides.iter(this.children);
	}
	,elementsNamed: function(name) {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		var ret;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.children;
		while(_g1 < _g2.length) {
			var child = _g2[_g1];
			++_g1;
			if(child.nodeType == Xml.Element && (function($this) {
				var $r;
				if(child.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + child.nodeType);
				$r = child.nodeName;
				return $r;
			}(this)) == name) _g.push(child);
		}
		ret = _g;
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
	,insertChild: function(x,pos) {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		if(x.parent != null) HxOverrides.remove(x.parent.children,x);
		this.children.splice(pos,0,x);
		x.parent = this;
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
app_App["with"] = function(appApi,state,children) {
	var apiVar = { appApi : appApi};
	if(state == null) state = { };
	var stateVar = { currentPlaylist : state.currentPlaylist, tracks : state.tracks, playlistState : state.playlistState, playState : state.playState};
	{
		var comp = new app_App(apiVar,stateVar,children);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_App.__super__ = Doom;
app_App.prototype = $extend(Doom.prototype,{
	didMount: function() {
		var _g = this;
		this.api.appApi.state = this.state;
		this.api.appApi.onUpdate = function() {
			_g.update(_g.api.appApi.state);
		};
		this.api.appApi.bindAudioEvents(dots_Query.find("#player"));
		this.api.appApi.loadPlaylist(Main.playlists[0],function() {
			_g.api.appApi.playRandomTrack();
		});
	}
	,render: function() {
		var content;
		{
			var _g = this.state.playlistState;
			switch(_g[1]) {
			case 0:
				content = app_LoadingComponent["with"]();
				break;
			case 1:
				content = app_PlaylistComponent["with"](this.api.appApi,this.state);
				break;
			case 2:
				var msg = _g[2];
				content = Doom.p(null,null,doom_NodeImpl.Text(msg));
				break;
			}
		}
		return Doom.div((function($this) {
			var $r;
			var _g1 = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header");
				if(__map_reserved["class"] != null) _g1.setReserved("class",value); else _g1.h["class"] = value;
			}
			$r = _g1;
			return $r;
		}(this)),[app_HeaderComponent["with"]("VIP Aersia - HTML5 Player"),app_MenuComponent["with"](this.api.appApi,this.state),Doom.div((function($this) {
			var $r;
			var _g11 = new haxe_ds_StringMap();
			{
				var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout__content mdl-color--grey-100");
				if(__map_reserved["class"] != null) _g11.setReserved("class",value1); else _g11.h["class"] = value1;
			}
			$r = _g11;
			return $r;
		}(this)),[Doom.div((function($this) {
			var $r;
			var _g2 = new haxe_ds_StringMap();
			{
				var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-grid");
				if(__map_reserved["class"] != null) _g2.setReserved("class",value2); else _g2.h["class"] = value2;
			}
			$r = _g2;
			return $r;
		}(this)),null,Doom.div((function($this) {
			var $r;
			var _g4 = new haxe_ds_StringMap();
			{
				var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col");
				if(__map_reserved["class"] != null) _g4.setReserved("class",value3); else _g4.h["class"] = value3;
			}
			$r = _g4;
			return $r;
		}(this)),null,content))],null),app_PlayerComponent["with"](this.api.appApi,this.state)],null);
	}
	,api: null
	,state: null
	,appApi: null
	,get_appApi: function() {
		return this.api.appApi;
	}
	,currentPlaylist: null
	,get_currentPlaylist: function() {
		return this.state.currentPlaylist;
	}
	,tracks: null
	,get_tracks: function() {
		return this.state.tracks;
	}
	,playlistState: null
	,get_playlistState: function() {
		return this.state.playlistState;
	}
	,playState: null
	,get_playState: function() {
		return this.state.playState;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: app_App
});
var app_HeaderComponent = function(api,state) {
	this.api = api;
	this.state = state;
	Doom.call(this,null);
};
app_HeaderComponent.__name__ = ["app","HeaderComponent"];
app_HeaderComponent["with"] = function(title) {
	var apiVar = { };
	var stateVar = { title : title};
	{
		var comp = new app_HeaderComponent(apiVar,stateVar);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_HeaderComponent.__super__ = Doom;
app_HeaderComponent.prototype = $extend(Doom.prototype,{
	render: function() {
		return Doom.header((function($this) {
			var $r;
			var _g = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600");
				if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
			}
			$r = _g;
			return $r;
		}(this)),[Doom.div((function($this) {
			var $r;
			var _g1 = new haxe_ds_StringMap();
			{
				var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout__header-row");
				if(__map_reserved["class"] != null) _g1.setReserved("class",value1); else _g1.h["class"] = value1;
			}
			$r = _g1;
			return $r;
		}(this)),[Doom.div((function($this) {
			var $r;
			var _g2 = new haxe_ds_StringMap();
			{
				var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout-title");
				if(__map_reserved["class"] != null) _g2.setReserved("class",value2); else _g2.h["class"] = value2;
			}
			$r = _g2;
			return $r;
		}(this)),null,doom_NodeImpl.Text(this.state.title))],null)],null);
	}
	,api: null
	,state: null
	,title: null
	,get_title: function() {
		return this.state.title;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: app_HeaderComponent
});
var app_LoadingComponent = function(api,state,children) {
	this.api = api;
	this.state = state;
	this.children = children;
	Doom.call(this,children);
};
app_LoadingComponent.__name__ = ["app","LoadingComponent"];
app_LoadingComponent["with"] = function(children) {
	var apiVar = { };
	var stateVar = { };
	{
		var comp = new app_LoadingComponent(apiVar,stateVar,children);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_LoadingComponent.__super__ = Doom;
app_LoadingComponent.prototype = $extend(Doom.prototype,{
	render: function() {
		return Doom.p((function($this) {
			var $r;
			var _g = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active");
				if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
			}
			$r = _g;
			return $r;
		}(this)),null,null);
	}
	,api: null
	,state: null
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: app_LoadingComponent
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
	{
		var comp = new app_MenuComponent(apiVar,stateVar,children);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_MenuComponent.__super__ = Doom;
app_MenuComponent.prototype = $extend(Doom.prototype,{
	render: function() {
		var _g6 = this;
		return Doom.div((function($this) {
			var $r;
			var _g = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50");
				if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
			}
			$r = _g;
			return $r;
		}(this)),[Doom.span((function($this) {
			var $r;
			var _g1 = new haxe_ds_StringMap();
			{
				var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-layout-title");
				if(__map_reserved["class"] != null) _g1.setReserved("class",value1); else _g1.h["class"] = value1;
			}
			$r = _g1;
			return $r;
		}(this)),null,doom_NodeImpl.Text("Playlists")),Doom.nav((function($this) {
			var $r;
			var _g2 = new haxe_ds_StringMap();
			{
				var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("demo-navigation mdl-navigation mdl-color--blue-grey-800");
				if(__map_reserved["class"] != null) _g2.setReserved("class",value2); else _g2.h["class"] = value2;
			}
			$r = _g2;
			return $r;
		}(this)),(function($this) {
			var $r;
			var _g3 = [];
			{
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
					})(playlist),{ playlist : playlist[0], active : $this.state.appState.currentPlaylist == playlist[0]}));
				}
			}
			$r = _g3;
			return $r;
		}(this)),null)],null);
	}
	,api: null
	,state: null
	,appApi: null
	,get_appApi: function() {
		return this.api.appApi;
	}
	,appState: null
	,get_appState: function() {
		return this.state.appState;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
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
	var stateVar = { playlist : state.playlist, active : state.active};
	{
		var comp = new app_MenuEntry(apiVar,stateVar,children);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_MenuEntry.__super__ = Doom;
app_MenuEntry.prototype = $extend(Doom.prototype,{
	render: function() {
		return Doom.a((function($this) {
			var $r;
			var _g = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-navigation__link" + ($this.state.active?" active":""));
				if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
			}
			{
				var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler($this.api.click);
				if(__map_reserved.click != null) _g.setReserved("click",value1); else _g.h["click"] = value1;
			}
			{
				var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("");
				if(__map_reserved.href != null) _g.setReserved("href",value2); else _g.h["href"] = value2;
			}
			$r = _g;
			return $r;
		}(this)),null,doom_NodeImpl.Text("" + this.state.playlist.host + " - " + this.state.playlist.name));
	}
	,api: null
	,state: null
	,click: null
	,get_click: function() {
		return this.api.click;
	}
	,playlist: null
	,get_playlist: function() {
		return this.state.playlist;
	}
	,active: null
	,get_active: function() {
		return this.state.active;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: app_MenuEntry
});
var app_MyApi = function() {
	this.onUpdate = function() {
	};
};
app_MyApi.__name__ = ["app","MyApi"];
app_MyApi.prototype = {
	state: null
	,player: null
	,onUpdate: null
	,currentLoader: null
	,playTrack: function(track,forcePlay) {
		if(forcePlay == null) forcePlay = false;
		this.state.playState.track = track;
		this.player.src = track.file;
		this.player.play();
		this.onUpdate();
	}
	,playRandomTrack: function() {
		if(this.state.tracks == null || this.state.tracks.length == 0) return;
		var t = thx_Arrays.sampleOne(this.state.tracks);
		while(this.state.playState.track == t) t = thx_Arrays.sampleOne(this.state.tracks);
		this.playTrack(t);
	}
	,togglePause: function() {
		if(this.player.paused) this.player.play(); else this.player.pause();
		this.onUpdate();
	}
	,volumeChange: function(v) {
		this.player.volume = thx_Floats.clamp(this.player.volume + v,0.,1.);
		this.state.playState.volume = this.player.volume;
		this.onUpdate();
	}
	,loadPlaylist: function(playlist,success) {
		var _g = this;
		this.state.playlistState = app_PlaylistState.Loading;
		this.state.currentPlaylist = playlist;
		this.state.playState.track = null;
		this.state.playState.times.current = 0;
		this.state.playState.times.total = 0;
		this.state.tracks = null;
		if(this.currentLoader != null && !thx_promise__$Promise_Promise_$Impl_$.isResolved(this.currentLoader)) thx_promise__$Promise_Promise_$Impl_$.always(thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(this.currentLoader,function(_) {
		}),function(_1) {
		}),function() {
		});
		this.currentLoader = thx_promise__$Promise_Promise_$Impl_$.always(thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(thx_load_Loader.getText(playlist.tracks_url),function(data) {
			var tracks = [];
			try {
				var xml = new haxe_xml_Fast(Xml.parse(data).firstElement()).node.resolve("trackList");
				var _g1 = xml.nodes.resolve("track").iterator();
				while(_g1.head != null) {
					var track;
					track = (function($this) {
						var $r;
						_g1.val = _g1.head[0];
						_g1.head = _g1.head[1];
						$r = _g1.val;
						return $r;
					}(this));
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
		this.onUpdate();
	}
	,bindAudioEvents: function(player) {
		var _g = this;
		this.player = player;
		player.volume = this.state.playState.volume;
		player.onplay = function() {
			_g.state.playState.paused = false;
			_g.onUpdate();
		};
		player.onpause = function() {
			_g.state.playState.paused = true;
			_g.onUpdate();
		};
		player.onended = function() {
			_g.playRandomTrack();
		};
		player.ontimeupdate = function() {
			_g.state.playState.times.current = player.currentTime;
			_g.state.playState.times.total = player.duration;
			_g.onUpdate();
		};
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
	{
		var comp = new app_PlayerComponent(apiVar,stateVar,children);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_PlayerComponent.__super__ = Doom;
app_PlayerComponent.prototype = $extend(Doom.prototype,{
	render: function() {
		var _g7 = this;
		return Doom.div((function($this) {
			var $r;
			var _g = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("controls mdl-card mdl-shadow--16dp");
				if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
			}
			$r = _g;
			return $r;
		}(this)),[Doom.audio((function($this) {
			var $r;
			var _g1 = new haxe_ds_StringMap();
			{
				var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("auto");
				if(__map_reserved.preload != null) _g1.setReserved("preload",value1); else _g1.h["preload"] = value1;
			}
			{
				var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("player");
				if(__map_reserved.id != null) _g1.setReserved("id",value2); else _g1.h["id"] = value2;
			}
			$r = _g1;
			return $r;
		}(this)),null,null),Doom.div((function($this) {
			var $r;
			var _g2 = new haxe_ds_StringMap();
			{
				var value3 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-card__supporting-text  mdl-typography--text-center");
				if(__map_reserved["class"] != null) _g2.setReserved("class",value3); else _g2.h["class"] = value3;
			}
			$r = _g2;
			return $r;
		}(this)),[Doom.h4(null,null,this.state.appState.playState.track == null?doom_NodeImpl.Text("-----"):(function($this) {
			var $r;
			var content = Utils.formatTrackName($this.state.appState.playState.track);
			$r = doom_NodeImpl.Text(content);
			return $r;
		}(this)))],null),Doom.div((function($this) {
			var $r;
			var _g3 = new haxe_ds_StringMap();
			{
				var value4 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-card__supporting-text  mdl-typography--text-center");
				if(__map_reserved["class"] != null) _g3.setReserved("class",value4); else _g3.h["class"] = value4;
			}
			$r = _g3;
			return $r;
		}(this)),[Doom.span(null,null,(function($this) {
			var $r;
			var content1 = Utils.formatTime($this.state.appState.playState.times.current,$this.state.appState.playState.times.total);
			$r = doom_NodeImpl.Text(content1);
			return $r;
		}(this)))],null),Doom.div((function($this) {
			var $r;
			var _g4 = new haxe_ds_StringMap();
			{
				var value5 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-card__actions mdl-card--border");
				if(__map_reserved["class"] != null) _g4.setReserved("class",value5); else _g4.h["class"] = value5;
			}
			$r = _g4;
			return $r;
		}(this)),[Doom.div((function($this) {
			var $r;
			var _g5 = new haxe_ds_StringMap();
			{
				var value6 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("play-skip-buttons");
				if(__map_reserved["class"] != null) _g5.setReserved("class",value6); else _g5.h["class"] = value6;
			}
			$r = _g5;
			return $r;
		}(this)),[Doom.button((function($this) {
			var $r;
			var _g6 = new haxe_ds_StringMap();
			{
				var value7 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("play-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--colored");
				if(__map_reserved["class"] != null) _g6.setReserved("class",value7); else _g6.h["class"] = value7;
			}
			{
				var value8 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
					_g7.api.appApi.togglePause();
				});
				if(__map_reserved.click != null) _g6.setReserved("click",value8); else _g6.h["click"] = value8;
			}
			$r = _g6;
			return $r;
		}(this)),null,Doom.i((function($this) {
			var $r;
			var _g8 = new haxe_ds_StringMap();
			{
				var value9 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
				if(__map_reserved["class"] != null) _g8.setReserved("class",value9); else _g8.h["class"] = value9;
			}
			$r = _g8;
			return $r;
		}(this)),null,this.state.appState.playState.paused?doom_NodeImpl.Text("play_arrow"):doom_NodeImpl.Text("pause"))),Doom.button((function($this) {
			var $r;
			var _g9 = new haxe_ds_StringMap();
			{
				var value10 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("skip-next-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab");
				if(__map_reserved["class"] != null) _g9.setReserved("class",value10); else _g9.h["class"] = value10;
			}
			{
				var value11 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
					_g7.api.appApi.playRandomTrack();
				});
				if(__map_reserved.click != null) _g9.setReserved("click",value11); else _g9.h["click"] = value11;
			}
			$r = _g9;
			return $r;
		}(this)),null,Doom.i((function($this) {
			var $r;
			var _g11 = new haxe_ds_StringMap();
			{
				var value12 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
				if(__map_reserved["class"] != null) _g11.setReserved("class",value12); else _g11.h["class"] = value12;
			}
			$r = _g11;
			return $r;
		}(this)),null,doom_NodeImpl.Text("skip_next")))],null),Doom.div((function($this) {
			var $r;
			var _g12 = new haxe_ds_StringMap();
			{
				var value13 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-buttons mdl-typography--text-center");
				if(__map_reserved["class"] != null) _g12.setReserved("class",value13); else _g12.h["class"] = value13;
			}
			$r = _g12;
			return $r;
		}(this)),[Doom.button((function($this) {
			var $r;
			var _g13 = new haxe_ds_StringMap();
			{
				var value14 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-down-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon");
				if(__map_reserved["class"] != null) _g13.setReserved("class",value14); else _g13.h["class"] = value14;
			}
			{
				var value15 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
					_g7.api.appApi.volumeChange(-0.1);
				});
				if(__map_reserved.click != null) _g13.setReserved("click",value15); else _g13.h["click"] = value15;
			}
			$r = _g13;
			return $r;
		}(this)),null,Doom.i((function($this) {
			var $r;
			var _g15 = new haxe_ds_StringMap();
			{
				var value16 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
				if(__map_reserved["class"] != null) _g15.setReserved("class",value16); else _g15.h["class"] = value16;
			}
			$r = _g15;
			return $r;
		}(this)),null,doom_NodeImpl.Text("volume_down"))),Doom.span((function($this) {
			var $r;
			var _g16 = new haxe_ds_StringMap();
			{
				var value17 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-txt");
				if(__map_reserved["class"] != null) _g16.setReserved("class",value17); else _g16.h["class"] = value17;
			}
			$r = _g16;
			return $r;
		}(this)),null,(function($this) {
			var $r;
			var content2 = "" + Math.round($this.state.appState.playState.volume * 100) + "%";
			$r = doom_NodeImpl.Text(content2);
			return $r;
		}(this))),Doom.button((function($this) {
			var $r;
			var _g17 = new haxe_ds_StringMap();
			{
				var value18 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("volume-up-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon");
				if(__map_reserved["class"] != null) _g17.setReserved("class",value18); else _g17.h["class"] = value18;
			}
			{
				var value19 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler(function() {
					_g7.api.appApi.volumeChange(0.1);
				});
				if(__map_reserved.click != null) _g17.setReserved("click",value19); else _g17.h["click"] = value19;
			}
			$r = _g17;
			return $r;
		}(this)),null,Doom.i((function($this) {
			var $r;
			var _g19 = new haxe_ds_StringMap();
			{
				var value20 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("material-icons");
				if(__map_reserved["class"] != null) _g19.setReserved("class",value20); else _g19.h["class"] = value20;
			}
			$r = _g19;
			return $r;
		}(this)),null,doom_NodeImpl.Text("volume_up")))],null)],null)],null);
	}
	,api: null
	,state: null
	,appApi: null
	,get_appApi: function() {
		return this.api.appApi;
	}
	,appState: null
	,get_appState: function() {
		return this.state.appState;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
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
	{
		var comp = new app_PlaylistComponent(apiVar,stateVar,children);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_PlaylistComponent.__super__ = Doom;
app_PlaylistComponent.prototype = $extend(Doom.prototype,{
	render: function() {
		var _g4 = this;
		return Doom.ul((function($this) {
			var $r;
			var _g = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-list demo-list");
				if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
			}
			$r = _g;
			return $r;
		}(this)),(function($this) {
			var $r;
			var _g1 = [];
			{
				var _g2 = 0;
				var _g3 = $this.state.appState.tracks;
				while(_g2 < _g3.length) {
					var track = [_g3[_g2]];
					++_g2;
					_g1.push(app_PlaylistEntry["with"]((function(track) {
						return function() {
							if(_g4.state.appState.playState.track == track[0]) return;
							_g4.api.appApi.playTrack(track[0]);
						};
					})(track),{ track : track[0], active : $this.state.appState.playState.track == track[0]}));
				}
			}
			$r = _g1;
			return $r;
		}(this)),null);
	}
	,api: null
	,state: null
	,appApi: null
	,get_appApi: function() {
		return this.api.appApi;
	}
	,appState: null
	,get_appState: function() {
		return this.state.appState;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
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
	{
		var comp = new app_PlaylistEntry(apiVar,stateVar,children);
		return doom_NodeImpl.ComponentNode(comp);
	}
};
app_PlaylistEntry.__super__ = Doom;
app_PlaylistEntry.prototype = $extend(Doom.prototype,{
	render: function() {
		return Doom.li((function($this) {
			var $r;
			var _g = new haxe_ds_StringMap();
			{
				var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-list__item" + ($this.state.active?" active":""));
				if(__map_reserved["class"] != null) _g.setReserved("class",value); else _g.h["class"] = value;
			}
			{
				var value1 = doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler($this.api.click);
				if(__map_reserved.click != null) _g.setReserved("click",value1); else _g.h["click"] = value1;
			}
			$r = _g;
			return $r;
		}(this)),null,Doom.span((function($this) {
			var $r;
			var _g2 = new haxe_ds_StringMap();
			{
				var value2 = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("mdl-list__item-primary-content");
				if(__map_reserved["class"] != null) _g2.setReserved("class",value2); else _g2.h["class"] = value2;
			}
			$r = _g2;
			return $r;
		}(this)),null,Doom.span(null,null,(function($this) {
			var $r;
			var content = Utils.formatTrackName($this.state.track);
			$r = doom_NodeImpl.Text(content);
			return $r;
		}(this)))));
	}
	,api: null
	,state: null
	,click: null
	,get_click: function() {
		return this.api.click;
	}
	,track: null
	,get_track: function() {
		return this.state.track;
	}
	,active: null
	,get_active: function() {
		return this.state.active;
	}
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: app_PlaylistEntry
});
var doom__$AttributeValue_AttributeValue_$Impl_$ = {};
doom__$AttributeValue_AttributeValue_$Impl_$.__name__ = ["doom","_AttributeValue","AttributeValue_Impl_"];
doom__$AttributeValue_AttributeValue_$Impl_$.fromString = function(s) {
	return doom_AttributeValueImpl.StringAttribute(s);
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromMap = function(map) {
	var values = [];
	var $it0 = map.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		if(__map_reserved[key] != null?map.getReserved(key):map.h[key]) values.push(key);
	}
	return doom_AttributeValueImpl.StringAttribute(values.join(" "));
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromBool = function(b) {
	return doom_AttributeValueImpl.BoolAttribute(b);
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromHandler = function(f) {
	if(null == f) return doom_AttributeValueImpl.BoolAttribute(false); else return doom_AttributeValueImpl.EventAttribute(function(e) {
		e.preventDefault();
		f();
	});
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromEventHandler = function(f) {
	if(null == f) return doom_AttributeValueImpl.BoolAttribute(false); else return doom_AttributeValueImpl.EventAttribute(f);
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromElementHandler = function(f) {
	if(null == f) return doom_AttributeValueImpl.BoolAttribute(false); else return doom_AttributeValueImpl.EventAttribute(function(e) {
		e.preventDefault();
		var input = e.target;
		f(input);
	});
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromStringValueHandler = function(f) {
	if(null == f) return doom_AttributeValueImpl.BoolAttribute(false); else return doom_AttributeValueImpl.EventAttribute(function(e) {
		e.preventDefault();
		var value = dots_Dom.getValue(e.target);
		f(value);
	});
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromBoolValueHandler = function(f) {
	if(null == f) return doom_AttributeValueImpl.BoolAttribute(false); else return doom_AttributeValueImpl.EventAttribute(function(e) {
		e.preventDefault();
		var value = e.target.checked;
		f(value);
	});
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromIntValueHandler = function(f) {
	if(null == f) return doom_AttributeValueImpl.BoolAttribute(false); else return doom__$AttributeValue_AttributeValue_$Impl_$.fromStringValueHandler(function(s) {
		if(thx_Ints.canParse(s)) f(thx_Ints.parse(s));
	});
};
doom__$AttributeValue_AttributeValue_$Impl_$.fromFloatValueHandler = function(f) {
	if(null == f) return doom_AttributeValueImpl.BoolAttribute(false); else return doom__$AttributeValue_AttributeValue_$Impl_$.fromStringValueHandler(function(s) {
		if(thx_Floats.canParse(s)) f(thx_Floats.parse(s));
	});
};
doom__$AttributeValue_AttributeValue_$Impl_$.toString = function(this1) {
	{
		var a = this1;
		switch(this1[1]) {
		case 1:
			var s = this1[2];
			return s;
		default:
			throw new thx_Error("cannot convert attribute " + Std.string(a) + " to string",null,{ fileName : "AttributeValue.hx", lineNumber : 67, className : "doom._AttributeValue.AttributeValue_Impl_", methodName : "toString"});
		}
	}
};
doom__$AttributeValue_AttributeValue_$Impl_$.equalsTo = function(this1,that) {
	if(this1 == null) return false; else switch(this1[1]) {
	case 0:
		if(that == null) return false; else switch(that[1]) {
		case 0:
			var a = this1[2];
			var b = that[2];
			return a == b;
		default:
			return false;
		}
		break;
	case 1:
		if(that == null) return false; else switch(that[1]) {
		case 1:
			var a1 = this1[2];
			var b1 = that[2];
			return a1 == b1;
		default:
			return false;
		}
		break;
	default:
		if(that == null) return false; else switch(that[1]) {
		default:
			return false;
		}
	}
};
doom__$AttributeValue_AttributeValue_$Impl_$.notEqualsTo = function(this1,that) {
	return !doom__$AttributeValue_AttributeValue_$Impl_$.equalsTo(this1,that);
};
var doom_AttributeValueImpl = { __ename__ : ["doom","AttributeValueImpl"], __constructs__ : ["BoolAttribute","StringAttribute","EventAttribute"] };
doom_AttributeValueImpl.BoolAttribute = function(b) { var $x = ["BoolAttribute",0,b]; $x.__enum__ = doom_AttributeValueImpl; $x.toString = $estr; return $x; };
doom_AttributeValueImpl.StringAttribute = function(s) { var $x = ["StringAttribute",1,s]; $x.__enum__ = doom_AttributeValueImpl; $x.toString = $estr; return $x; };
doom_AttributeValueImpl.EventAttribute = function(f) { var $x = ["EventAttribute",2,f]; $x.__enum__ = doom_AttributeValueImpl; $x.toString = $estr; return $x; };
var doom_Component = function(api,state,children) {
	this.api = api;
	this.state = state;
	doom_ComponentBase.call(this,children);
};
doom_Component.__name__ = ["doom","Component"];
doom_Component.__super__ = doom_ComponentBase;
doom_Component.prototype = $extend(doom_ComponentBase.prototype,{
	api: null
	,state: null
	,update: function(newState) {
		var oldState = this.state;
		this.state = newState;
		if(!this.shouldRender(oldState,newState)) return;
		this.updateNode(this.node);
	}
	,shouldRender: function(oldState,newState) {
		return true;
	}
	,__class__: doom_Component
});
var doom__$EventHandler_EventHandler_$Impl_$ = {};
doom__$EventHandler_EventHandler_$Impl_$.__name__ = ["doom","_EventHandler","EventHandler_Impl_"];
doom__$EventHandler_EventHandler_$Impl_$.fromElementHandler = function(f) {
	return function(e) {
		f(e.target);
	};
};
var doom_HtmlNode = function() { };
doom_HtmlNode.__name__ = ["doom","HtmlNode"];
doom_HtmlNode.toHtml = function(node,post) {
	{
		var _g = node;
		switch(_g[1]) {
		case 0:
			var children = _g[4];
			var attributes = _g[3];
			var name = _g[2];
			return doom_HtmlNode.createElement(name,attributes,children,post);
		case 1:
			var text = _g[2];
			return dots_Html.parse(text);
		case 2:
			var text1 = _g[2];
			return window.document.createTextNode(text1);
		case 3:
			var comp = _g[2];
			comp.init(post);
			return comp.element;
		}
	}
};
doom_HtmlNode.createElement = function(name,attributes,children,post) {
	var colonPos = name.indexOf(":");
	var el;
	if(colonPos > 0) {
		var prefix = name.substring(0,colonPos);
		var name1 = name.substring(colonPos + 1);
		var ns = Doom.namespaces.get(prefix);
		if(null == ns) throw new thx_Error("element prefix \"" + prefix + "\" is not associated to any namespace. Add the right namespace to Doom.namespaces.",null,{ fileName : "HtmlNode.hx", lineNumber : 34, className : "doom.HtmlNode", methodName : "createElement"});
		el = window.document.createElementNS(ns,name1);
	} else el = window.document.createElement(name);
	var $it0 = attributes.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var value;
		value = __map_reserved[key] != null?attributes.getReserved(key):attributes.h[key];
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
doom_HtmlNode.removeEvent = function(el,name) {
	Reflect.deleteField(el,"on" + name);
};
doom_HtmlNode.applyPatch = function(patch,node,post) {
	{
		var _g = node.nodeType;
		var p = patch;
		switch(patch[1]) {
		case 4:
			var comp = patch[2];
			comp.didUnmount();
			break;
		case 5:
			var newComp = patch[3];
			var oldComp = patch[2];
			if(thx_Types.sameType(oldComp,newComp)) {
				newComp.element = oldComp.element;
				var migrate = Reflect.field(newComp,"migrate");
				if(null != migrate) migrate.apply(newComp,[oldComp]);
				newComp.didRefresh();
			} else {
				var newComp1 = patch[3];
				var oldComp1 = patch[2];
				oldComp1.didUnmount();
				doom_HtmlNode.applyPatch(doom_Patch.MigrateElementToComponent(newComp1),node,post);
			}
			break;
		case 6:
			var comp1 = patch[2];
			comp1.element = node;
			post.splice(0,0,$bind(comp1,comp1.didMount));
			break;
		case 0:
			switch(_g) {
			case 1:
				var text = patch[2];
				node.appendChild(window.document.createTextNode(text));
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 1:
			switch(_g) {
			case 1:
				var text1 = patch[2];
				node.appendChild(dots_Html.parse(text1));
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
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
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 3:
			switch(_g) {
			case 1:
				var comp2 = patch[2];
				comp2.init(post);
				node.appendChild(comp2.element);
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
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
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
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
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
			}
			break;
		case 10:
			var children1 = patch[4];
			var attributes1 = patch[3];
			var name3 = patch[2];
			var parent = node.parentNode;
			var el1 = doom_HtmlNode.createElement(name3,attributes1,children1,post);
			parent.replaceChild(el1,node);
			break;
		case 13:
			var comp3 = patch[2];
			var parent1 = node.parentNode;
			comp3.init(post);
			parent1.replaceChild(comp3.element,node);
			break;
		case 11:
			var text2 = patch[2];
			var parent2 = node.parentNode;
			parent2.replaceChild(window.document.createTextNode(text2),node);
			break;
		case 12:
			var raw = patch[2];
			var parent3 = node.parentNode;
			parent3.replaceChild(dots_Html.parse(raw),node);
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
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
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
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + Std.string(node),null,{ fileName : "HtmlNode.hx", lineNumber : 148, className : "doom.HtmlNode", methodName : "applyPatch"});
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
doom__$Node_Node_$Impl_$.text = function(content) {
	return doom_NodeImpl.Text(content);
};
doom__$Node_Node_$Impl_$.raw = function(content) {
	return doom_NodeImpl.Raw(content);
};
doom__$Node_Node_$Impl_$.comp = function(comp) {
	return doom_NodeImpl.ComponentNode(comp);
};
doom__$Node_Node_$Impl_$.diffAttributes = function(a,b) {
	var ka = thx__$Set_Set_$Impl_$.createString(thx_Iterators.toArray(a.keys()));
	var kb = thx__$Set_Set_$Impl_$.createString(thx_Iterators.toArray(b.keys()));
	var removed;
	var result = thx__$Set_Set_$Impl_$.copy(ka);
	var $it0 = $iterator(thx__$Set_Set_$Impl_$)(kb);
	while( $it0.hasNext() ) {
		var item = $it0.next();
		result.remove(item);
	}
	removed = result;
	var added;
	var result1 = thx__$Set_Set_$Impl_$.copy(kb);
	var $it1 = $iterator(thx__$Set_Set_$Impl_$)(ka);
	while( $it1.hasNext() ) {
		var item1 = $it1.next();
		result1.remove(item1);
	}
	added = result1;
	var common;
	var result2 = thx__$Set_Set_$Impl_$.empty(ka);
	var $it2 = $iterator(thx__$Set_Set_$Impl_$)(ka);
	while( $it2.hasNext() ) {
		var item2 = $it2.next();
		if(kb.exists(item2)) result2.set(item2,true);
	}
	common = result2;
	return ((function(_e) {
		return function(f) {
			return thx__$Set_Set_$Impl_$.map(_e,f);
		};
	})(removed))(function(_) {
		return doom_Patch.RemoveAttribute(_);
	}).concat(thx__$Set_Set_$Impl_$.map(((function(_e1) {
		return function(predicate) {
			return thx__$Set_Set_$Impl_$.filter(_e1,predicate);
		};
	})(common))(function(_1) {
		return doom__$AttributeValue_AttributeValue_$Impl_$.notEqualsTo(__map_reserved[_1] != null?a.getReserved(_1):a.h[_1],__map_reserved[_1] != null?b.getReserved(_1):b.h[_1]);
	}),function(k) {
		var v;
		v = __map_reserved[k] != null?b.getReserved(k):b.h[k];
		if(null == v) return doom_Patch.RemoveAttribute(k); else return doom_Patch.SetAttribute(k,v);
	})).concat(((function(_e2) {
		return function(f1) {
			return thx__$Set_Set_$Impl_$.map(_e2,f1);
		};
	})(((function(_e3) {
		return function(predicate1) {
			return thx__$Set_Set_$Impl_$.filter(_e3,predicate1);
		};
	})(added))(function(_2) {
		return (__map_reserved[_2] != null?b.getReserved(_2):b.h[_2]) != null;
	})))(function(_3) {
		return doom_Patch.SetAttribute(_3,__map_reserved[_3] != null?b.getReserved(_3):b.h[_3]);
	}));
};
doom__$Node_Node_$Impl_$.diffAdd = function(node) {
	switch(node[1]) {
	case 0:
		var c = node[4];
		var a = node[3];
		var n = node[2];
		return [doom_Patch.AddElement(n,a,c)];
	case 2:
		var t = node[2];
		return [doom_Patch.AddText(t)];
	case 1:
		var t1 = node[2];
		return [doom_Patch.AddRaw(t1)];
	case 3:
		var comp = node[2];
		return [doom_Patch.AddComponent(comp)];
	}
};
doom__$Node_Node_$Impl_$.diffNodes = function(a,b) {
	var min = thx_Ints.min(a.length,b.length);
	var result = [];
	var counter = 0;
	var _g1 = min;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		result.push(doom_Patch.PatchChild(a.length - ++counter,[doom_Patch.Remove]));
	}
	var _g11 = min;
	var _g2 = b.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		result = result.concat(doom__$Node_Node_$Impl_$.diffAdd(b[i1]));
	}
	var _g3 = 0;
	while(_g3 < min) {
		var i2 = _g3++;
		var diff = doom__$Node_Node_$Impl_$.diff(a[i2],b[i2]);
		if(diff.length > 0) result.push(doom_Patch.PatchChild(i2,diff));
	}
	return result;
};
doom__$Node_Node_$Impl_$.diff = function(this1,that) {
	var destroySubComponents;
	var destroySubComponents1 = null;
	destroySubComponents1 = function(node) {
		switch(node[1]) {
		case 3:
			var comp = node[2];
			return [doom_Patch.DestroyComponent(comp)].concat(destroySubComponents1(comp.node));
		default:
			return [];
		}
	};
	destroySubComponents = destroySubComponents1;
	var p;
	switch(this1[1]) {
	case 3:
		switch(that[1]) {
		case 3:
			var old = this1[2];
			var comp1 = that[2];
			p = [doom_Patch.MigrateComponentToComponent(old,comp1)];
			break;
		default:
			var comp2 = this1[2];
			p = destroySubComponents(this1);
		}
		break;
	default:
		switch(that[1]) {
		case 3:
			var comp3 = that[2];
			p = [doom_Patch.MigrateElementToComponent(comp3)];
			break;
		default:
			p = [];
		}
	}
	return p.concat((function($this) {
		var $r;
		switch(this1[1]) {
		case 3:
			$r = (function($this) {
				var $r;
				switch(that[1]) {
				case 3:
					$r = (function($this) {
						var $r;
						var old1 = this1[2];
						var comp4 = that[2];
						$r = doom__$Node_Node_$Impl_$.diff(old1.node,comp4.node);
						return $r;
					}($this));
					break;
				case 0:
					$r = (function($this) {
						var $r;
						var c2 = that[4];
						var a2 = that[3];
						var n2 = that[2];
						$r = [doom_Patch.ReplaceWithElement(n2,a2,c2)];
						return $r;
					}($this));
					break;
				case 2:
					$r = (function($this) {
						var $r;
						var t = that[2];
						$r = [doom_Patch.ReplaceWithText(t)];
						return $r;
					}($this));
					break;
				case 1:
					$r = (function($this) {
						var $r;
						var t1 = that[2];
						$r = [doom_Patch.ReplaceWithRaw(t1)];
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this));
			break;
		case 0:
			$r = (function($this) {
				var $r;
				switch(that[1]) {
				case 3:
					$r = (function($this) {
						var $r;
						var comp5 = that[2];
						$r = [doom_Patch.ReplaceWithComponent(comp5)];
						return $r;
					}($this));
					break;
				case 0:
					$r = (function($this) {
						var $r;
						var n1 = this1[2];
						var c1 = this1[4];
						var a1 = this1[3];
						var c21 = that[4];
						var a21 = that[3];
						var n21 = that[2];
						$r = n1 != n21?[doom_Patch.ReplaceWithElement(n21,a21,c21)]:(function($this) {
							var $r;
							var c11 = this1[4];
							var a11 = this1[3];
							var c22 = that[4];
							var a22 = that[3];
							$r = doom__$Node_Node_$Impl_$.diffAttributes(a11,a22).concat(doom__$Node_Node_$Impl_$.diffNodes(c11,c22));
							return $r;
						}($this));
						return $r;
					}($this));
					break;
				case 2:
					$r = (function($this) {
						var $r;
						var t2 = that[2];
						$r = [doom_Patch.ReplaceWithText(t2)];
						return $r;
					}($this));
					break;
				case 1:
					$r = (function($this) {
						var $r;
						var t3 = that[2];
						$r = [doom_Patch.ReplaceWithRaw(t3)];
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this));
			break;
		case 2:
			$r = (function($this) {
				var $r;
				switch(that[1]) {
				case 3:
					$r = (function($this) {
						var $r;
						var comp6 = that[2];
						$r = [doom_Patch.ReplaceWithComponent(comp6)];
						return $r;
					}($this));
					break;
				case 0:
					$r = (function($this) {
						var $r;
						var c23 = that[4];
						var a23 = that[3];
						var n22 = that[2];
						$r = [doom_Patch.ReplaceWithElement(n22,a23,c23)];
						return $r;
					}($this));
					break;
				case 2:
					$r = (function($this) {
						var $r;
						var t11 = this1[2];
						var t21 = that[2];
						$r = t11 != t21?[doom_Patch.ContentChanged(t21)]:(function($this) {
							var $r;
							var a = this1[2];
							var b = that[2];
							$r = a == b?[]:(function($this) {
								var $r;
								var t4 = that[2];
								$r = [doom_Patch.ReplaceWithText(t4)];
								return $r;
							}($this));
							return $r;
						}($this));
						return $r;
					}($this));
					break;
				case 1:
					$r = (function($this) {
						var $r;
						var t5 = that[2];
						$r = [doom_Patch.ReplaceWithRaw(t5)];
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this));
			break;
		case 1:
			$r = (function($this) {
				var $r;
				switch(that[1]) {
				case 3:
					$r = (function($this) {
						var $r;
						var comp7 = that[2];
						$r = [doom_Patch.ReplaceWithComponent(comp7)];
						return $r;
					}($this));
					break;
				case 0:
					$r = (function($this) {
						var $r;
						var c24 = that[4];
						var a24 = that[3];
						var n23 = that[2];
						$r = [doom_Patch.ReplaceWithElement(n23,a24,c24)];
						return $r;
					}($this));
					break;
				case 2:
					$r = (function($this) {
						var $r;
						var t6 = that[2];
						$r = [doom_Patch.ReplaceWithText(t6)];
						return $r;
					}($this));
					break;
				case 1:
					$r = (function($this) {
						var $r;
						var a3 = this1[2];
						var b1 = that[2];
						$r = a3 == b1?[]:(function($this) {
							var $r;
							var t7 = that[2];
							$r = [doom_Patch.ReplaceWithRaw(t7)];
							return $r;
						}($this));
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this));
			break;
		default:
			$r = (function($this) {
				var $r;
				switch(that[1]) {
				case 3:
					$r = (function($this) {
						var $r;
						var comp8 = that[2];
						$r = [doom_Patch.ReplaceWithComponent(comp8)];
						return $r;
					}($this));
					break;
				case 0:
					$r = (function($this) {
						var $r;
						var c25 = that[4];
						var a25 = that[3];
						var n24 = that[2];
						$r = [doom_Patch.ReplaceWithElement(n24,a25,c25)];
						return $r;
					}($this));
					break;
				case 2:
					$r = (function($this) {
						var $r;
						var t8 = that[2];
						$r = [doom_Patch.ReplaceWithText(t8)];
						return $r;
					}($this));
					break;
				case 1:
					$r = (function($this) {
						var $r;
						var t9 = that[2];
						$r = [doom_Patch.ReplaceWithRaw(t9)];
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this));
		}
		return $r;
	}(this)));
};
doom__$Node_Node_$Impl_$.toString = function(this1) {
	return doom_XmlNode.toString(this1);
};
var doom__$Node_Nodes_$Impl_$ = {};
doom__$Node_Nodes_$Impl_$.__name__ = ["doom","_Node","Nodes_Impl_"];
doom__$Node_Nodes_$Impl_$.fromNode = function(node) {
	return [node];
};
doom__$Node_Nodes_$Impl_$.fromNodeImpl = function(node) {
	return [node];
};
doom__$Node_Nodes_$Impl_$.fromIComps = function(comps) {
	return comps.map(doom__$Node_Node_$Impl_$.comp);
};
doom__$Node_Nodes_$Impl_$.fromComps = function(comps) {
	return comps.map(doom__$Node_Node_$Impl_$.comp);
};
doom__$Node_Nodes_$Impl_$.text = function(content) {
	return [doom_NodeImpl.Text(content)];
};
doom__$Node_Nodes_$Impl_$.comp = function(comp) {
	return [doom_NodeImpl.ComponentNode(comp)];
};
doom__$Node_Nodes_$Impl_$.toString = function(this1) {
	return this1.map(function(c) {
		return doom__$Node_Node_$Impl_$.toString(c);
	}).join("\n");
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
var doom_Patches = function() { };
doom_Patches.__name__ = ["doom","Patches"];
doom_Patches.toString = function(patch) {
	switch(patch[1]) {
	case 2:
		var children = patch[4];
		var attributes = patch[3];
		var name = patch[2];
		var c = children.map(function(child) {
			return "\n  " + doom__$Node_Node_$Impl_$.toString(child).split("\n").join("\n  ");
		});
		return "AddElement(" + name + ", " + thx_Maps.string(attributes) + ", " + Std.string(c) + ")";
	case 10:
		var children1 = patch[4];
		var attributes1 = patch[3];
		var name1 = patch[2];
		var c1 = children1.map(function(child1) {
			return "\n  " + doom__$Node_Node_$Impl_$.toString(child1).split("\n").join("\n  ");
		});
		return "ReplaceWithElement(" + name1 + ", " + thx_Maps.string(attributes1) + ", " + Std.string(c1) + ")";
	case 3:
		var comp = patch[2];
		return "AddComponent(" + comp.toString() + ")";
	case 13:
		var comp1 = patch[2];
		return "ReplaceWithComponent(" + comp1.toString() + ")";
	case 15:
		var patches = patch[3];
		var index = patch[2];
		var p = "  " + doom_PatchArray.toPrettyString(patches).split("\n").join("\n  ");
		return "PatchChild(" + index + ", " + p + ")";
	default:
		return Std.string(patch);
	}
};
var doom_PatchArray = function() { };
doom_PatchArray.__name__ = ["doom","PatchArray"];
doom_PatchArray.toPrettyString = function(patches) {
	return "\n" + patches.map(doom_Patches.toString).join("\n");
};
var doom_SelectorParser = function(selector) {
	this.selector = selector;
	this.index = 0;
};
doom_SelectorParser.__name__ = ["doom","SelectorParser"];
doom_SelectorParser.parseSelector = function(selector,otherAttributes) {
	var result = new doom_SelectorParser(selector).parse();
	if(otherAttributes != null) result.attributes = doom_SelectorParser.mergeAttributes(result.attributes,otherAttributes);
	return result;
};
doom_SelectorParser.mergeAttributes = function(dest,other) {
	return thx_Iterators.reduce(other.keys(),function(acc,key) {
		var value;
		value = __map_reserved[key] != null?other.getReserved(key):other.h[key];
		if(key == "class" && (__map_reserved[key] != null?acc.existsReserved(key):acc.h.hasOwnProperty(key))) {
			var previousValue;
			previousValue = __map_reserved[key] != null?acc.getReserved(key):acc.h[key];
			value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("" + doom__$AttributeValue_AttributeValue_$Impl_$.toString(previousValue) + " " + doom__$AttributeValue_AttributeValue_$Impl_$.toString(value));
		}
		if(__map_reserved[key] != null) acc.setReserved(key,value); else acc.h[key] = value;
		return acc;
	},dest);
};
doom_SelectorParser.prototype = {
	selector: null
	,index: null
	,parse: function() {
		var tag = this.gobbleTag();
		var attributes = this.gobbleAttributes();
		return { tag : tag, attributes : attributes};
	}
	,gobbleTag: function() {
		if(this.isIdentifierStart()) return this.gobbleIdentifier(); else return "div";
	}
	,gobbleAttributes: function() {
		var attributes = new haxe_ds_StringMap();
		while(this.index < this.selector.length) {
			var attribute = this.gobbleAttribute();
			if(attribute.key == "class" && (__map_reserved["class"] != null?attributes.existsReserved("class"):attributes.h.hasOwnProperty("class"))) {
				var previousClass = doom__$AttributeValue_AttributeValue_$Impl_$.toString(__map_reserved["class"] != null?attributes.getReserved("class"):attributes.h["class"]);
				attribute.value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString("" + previousClass + " " + doom__$AttributeValue_AttributeValue_$Impl_$.toString(attribute.value));
			}
			attributes.set(attribute.key,attribute.value);
		}
		return attributes;
	}
	,gobbleAttribute: function() {
		var _g = this["char"]();
		var unknown = _g;
		switch(_g) {
		case "#":
			return this.gobbleElementId();
		case ".":
			return this.gobbleElementClass();
		case "[":
			return this.gobbleElementAttribute();
		default:
			throw new thx_Error("unknown selector char \"" + unknown + "\" at pos " + this.index,null,{ fileName : "SelectorParser.hx", lineNumber : 79, className : "doom.SelectorParser", methodName : "gobbleAttribute"});
		}
	}
	,gobbleElementId: function() {
		this.gobbleChar("#");
		var id = this.gobbleIdentifier();
		return { key : "id", value : doom__$AttributeValue_AttributeValue_$Impl_$.fromString(id)};
	}
	,gobbleElementClass: function() {
		this.gobbleChar(".");
		var id = this.gobbleIdentifier();
		return { key : "class", value : doom__$AttributeValue_AttributeValue_$Impl_$.fromString(id)};
	}
	,gobbleElementAttribute: function() {
		this.gobbleChar("[");
		var key = this.gobbleIdentifier();
		this.gobbleChar("=");
		var value = doom__$AttributeValue_AttributeValue_$Impl_$.fromString(this.gobbleUpTo("]"));
		if(thx_Bools.canParse(doom__$AttributeValue_AttributeValue_$Impl_$.toString(value))) value = doom__$AttributeValue_AttributeValue_$Impl_$.fromBool(thx_Bools.parse(doom__$AttributeValue_AttributeValue_$Impl_$.toString(value)));
		this.gobbleChar("]");
		return { key : key, value : value};
	}
	,gobbleIdentifier: function() {
		var result = [];
		result.push(this.gobbleChar());
		while(this.isIdentifierPart()) result.push(this.gobbleChar());
		return result.join("");
	}
	,gobbleChar: function(expecting,expectingAnyOf) {
		var c = this.selector.charAt(this.index++);
		if(expecting != null && expecting != c) throw new thx_Error("expecting " + expecting + " at position " + this.index + " of " + this.selector,null,{ fileName : "SelectorParser.hx", lineNumber : 119, className : "doom.SelectorParser", methodName : "gobbleChar"});
		if(expectingAnyOf != null && !thx_Arrays.contains(expectingAnyOf,c)) throw new thx_Error("expecting one of " + expectingAnyOf.join(", ") + " at position " + this.index + " of " + this.selector,null,{ fileName : "SelectorParser.hx", lineNumber : 122, className : "doom.SelectorParser", methodName : "gobbleChar"});
		return c;
	}
	,gobbleUpTo: function(stopChar) {
		var result = [];
		while(this["char"]() != stopChar) result.push(this.gobbleChar());
		return result.join("");
	}
	,isAlpha: function() {
		var c = this.code();
		return c >= 65 && c <= 90 || c >= 97 && c <= 122;
	}
	,isNumeric: function() {
		var c = this.code();
		return c >= 48 && c <= 57;
	}
	,isAlphaNumeric: function() {
		return this.isAlpha() || this.isNumeric();
	}
	,isAny: function(cs) {
		var _g = 0;
		while(_g < cs.length) {
			var c = cs[_g];
			++_g;
			if(c == this["char"]()) return true;
		}
		return false;
	}
	,isIdentifierStart: function() {
		return this.isAlpha();
	}
	,isIdentifierPart: function() {
		return this.isAlpha() || this.isNumeric() || this.isAny(["_","-"]);
	}
	,isIdStart: function() {
		return this["char"]() == "#";
	}
	,isClassStart: function() {
		return this["char"]() == ".";
	}
	,'char': function() {
		return this.selector.charAt(this.index);
	}
	,code: function() {
		return HxOverrides.cca(this.selector,this.index);
	}
	,__class__: doom_SelectorParser
};
var doom_XmlNode = function() { };
doom_XmlNode.__name__ = ["doom","XmlNode"];
doom_XmlNode.toXml = function(node) {
	{
		var _g = node;
		switch(_g[1]) {
		case 0:
			var children = _g[4];
			var attributes = _g[3];
			var name = _g[2];
			return doom_XmlNode.createElement(name,attributes,children);
		case 2:
			var text = _g[2];
			return Xml.createPCData(text);
		case 1:
			var text1 = _g[2];
			return Xml.parse(text1);
		case 3:
			var comp = _g[2];
			return doom_XmlNode.toXml(comp.node);
		}
	}
};
doom_XmlNode.createElement = function(name,attributes,children) {
	var xml = Xml.createElement(name);
	var $it0 = attributes.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var v;
		v = __map_reserved[key] != null?attributes.getReserved(key):attributes.h[key];
		switch(v[1]) {
		case 1:
			var s = v[2];
			xml.set(key,s);
			break;
		case 0:
			var b = v[2];
			if(b) xml.set(key,key); else {
			}
			break;
		default:
		}
	}
	var _g = 0;
	while(_g < children.length) {
		var child = children[_g];
		++_g;
		var n = doom_XmlNode.toXml(child);
		if(null != n) xml.addChild(n);
	}
	return xml;
};
doom_XmlNode.applyPatches = function(patches,node) {
	var _g = 0;
	while(_g < patches.length) {
		var patch = patches[_g];
		++_g;
		doom_XmlNode.applyPatch(patch,node);
	}
};
doom_XmlNode.applyPatch = function(patch,node) {
	{
		var _g = node.nodeType;
		var p = patch;
		switch(patch[1]) {
		case 0:
			var n = _g;
			switch(_g) {
			case 0:
				var text = patch[2];
				node.addChild(Xml.createPCData(text));
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 1:
			var n1 = _g;
			switch(_g) {
			case 0:
				var text1 = patch[2];
				node.addChild(Xml.parse(text1));
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n1,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 2:
			var n2 = _g;
			switch(_g) {
			case 0:
				var name = patch[2];
				var children = patch[4];
				var attributes = patch[3];
				node.addChild(doom_XmlNode.createElement(name,attributes,children));
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n2,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 3:
			var n3 = _g;
			switch(_g) {
			case 0:
				var comp = patch[2];
				throw new js__$Boot_HaxeError("not implemented");
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n3,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 7:
			node.parent.removeChild(node);
			break;
		case 8:
			var n4 = _g;
			switch(_g) {
			case 0:
				var name1 = patch[2];
				node.remove(name1);
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n4,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 9:
			var n5 = _g;
			switch(_g) {
			case 0:
				var name2 = patch[2];
				var value = patch[3];
				switch(value[1]) {
				case 1:
					var s = value[2];
					if(s != null && s.length > 0) node.set(name2,s); else node.remove(name2);
					break;
				case 0:
					var b = value[2];
					if(b) node.set(name2,name2); else node.remove(name2);
					break;
				default:
				}
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n5,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 10:
			var children1 = patch[4];
			var attributes1 = patch[3];
			var name3 = patch[2];
			var parent = node.parent;
			var pos = thx_Iterators.indexOf((function($this) {
				var $r;
				if(parent.nodeType != Xml.Document && parent.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + parent.nodeType);
				$r = HxOverrides.iter(parent.children);
				return $r;
			}(this)),node);
			parent.removeChild(node);
			parent.insertChild(doom_XmlNode.createElement(name3,attributes1,children1),pos);
			break;
		case 13:
			var n6 = _g;
			switch(_g) {
			case 0:
				var comp1 = patch[2];
				throw new js__$Boot_HaxeError("not implemented");
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n6,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 11:
			var text2 = patch[2];
			var parent1 = node.parent;
			var pos1 = thx_Iterators.indexOf((function($this) {
				var $r;
				if(parent1.nodeType != Xml.Document && parent1.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + parent1.nodeType);
				$r = HxOverrides.iter(parent1.children);
				return $r;
			}(this)),node);
			parent1.removeChild(node);
			parent1.insertChild(Xml.createPCData(text2),pos1);
			break;
		case 12:
			var raw = patch[2];
			var parent2 = node.parent;
			var pos2 = thx_Iterators.indexOf((function($this) {
				var $r;
				if(parent2.nodeType != Xml.Document && parent2.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + parent2.nodeType);
				$r = HxOverrides.iter(parent2.children);
				return $r;
			}(this)),node);
			parent2.removeChild(node);
			parent2.insertChild(Xml.parse(raw),pos2);
			break;
		case 14:
			var n7 = _g;
			switch(_g) {
			case 2:
				var newcontent = patch[2];
				if(node.nodeType == Xml.Document || node.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + node.nodeType);
				node.nodeValue = newcontent;
				break;
			case 3:
				var newcontent1 = patch[2];
				if(node.nodeType == Xml.Document || node.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + node.nodeType);
				node.nodeValue = newcontent1;
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n7,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		case 15:
			var n8 = _g;
			switch(_g) {
			case 0:
				var index = patch[2];
				var patches = patch[3];
				var n9 = thx_Iterators.get((function($this) {
					var $r;
					if(node.nodeType != Xml.Document && node.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + node.nodeType);
					$r = HxOverrides.iter(node.children);
					return $r;
				}(this)),index);
				doom_XmlNode.applyPatches(patches,n9);
				break;
			default:
				throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n8,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
			}
			break;
		default:
			var n10 = _g;
			throw new thx_Error("cannot apply patch " + Std.string(p) + " on " + n10,null,{ fileName : "XmlNode.hx", lineNumber : 88, className : "doom.XmlNode", methodName : "applyPatch"});
		}
	}
};
doom_XmlNode.toString = function(node) {
	{
		var _g = node;
		switch(_g[1]) {
		case 0:
			var children = _g[4];
			var attributes = _g[3];
			var name = _g[2];
			var buf = "<" + name + doom_XmlNode.attributesToString(attributes);
			if(children.length == 0) buf += "/>"; else {
				buf += ">";
				buf += children.map(function(_) {
					return doom_XmlNode.toString(_);
				}).join("");
				buf += "</" + name + ">";
			}
			return buf;
		case 2:
			var text = _g[2];
			return text;
		case 1:
			var text1 = _g[2];
			return text1;
		case 3:
			var comp = _g[2];
			return doom_XmlNode.toString(comp.node);
		}
	}
};
doom_XmlNode.attributesToString = function(attributes) {
	var buf = "";
	var $it0 = attributes.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var value;
		value = __map_reserved[key] != null?attributes.getReserved(key):attributes.h[key];
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
var dots_HTMLCollections = function() { };
dots_HTMLCollections.__name__ = ["dots","HTMLCollections"];
dots_HTMLCollections.toArray = function(it) {
	return Array.prototype.slice.call(it);
};
var dots_NodeLists = function() { };
dots_NodeLists.__name__ = ["dots","NodeLists"];
dots_NodeLists.toArray = function(it) {
	return Array.prototype.slice.call(it);
};
var dots_Dom = function() { };
dots_Dom.__name__ = ["dots","Dom"];
dots_Dom.addCss = function(css,container) {
	if(null == container) container = window.document.head;
	var style;
	var _this = window.document;
	style = _this.createElement("style");
	style.type = "text/css";
	style.appendChild(window.document.createTextNode(css));
	container.appendChild(style);
};
dots_Dom.getValue = function(el) {
	var _g = el.nodeName;
	switch(_g) {
	case "INPUT":
		var input = el;
		if(input.type == "checkbox" && !input.checked) return null; else return input.value;
		break;
	case "TEXTAREA":
		var textarea = el;
		return textarea.value;
	case "SELECT":
		var select = el;
		var option = select.options.item(select.selectedIndex);
		return option.value;
	default:
		return el.innerHTML;
	}
};
dots_Dom.getMultiValue = function(el) {
	var _g = el.nodeName;
	switch(_g) {
	case "INPUT":
		var input = el;
		if(input.type == "checkbox" && !input.checked) return haxe_ds_Either.Right([]); else return haxe_ds_Either.Left(input.value);
		break;
	case "TEXTAREA":
		var textarea = el;
		return haxe_ds_Either.Left(textarea.value);
	case "SELECT":
		var select = el;
		if(select.multiple) {
			var values = [];
			var options = select.selectedOptions;
			var _g2 = 0;
			var _g1 = options.length;
			while(_g2 < _g1) {
				var i = _g2++;
				values.push(options[i].value);
			}
			return haxe_ds_Either.Right(values);
		} else {
			var option = select.options.item(select.selectedIndex);
			return haxe_ds_Either.Left(option.value);
		}
		break;
	default:
		return haxe_ds_Either.Left(el.innerHTML);
	}
};
dots_Dom.getWindowHeight = function(win) {
	if(null == win) win = window;
	return win.document.documentElement.clientHeight;
};
dots_Dom.getWindowWidth = function(win) {
	if(null == win) win = window;
	return win.document.documentElement.clientWidth;
};
dots_Dom.getWindowSize = function(win) {
	if(null == win) win = window;
	return { width : win.document.documentElement.clientWidth, height : win.document.documentElement.clientHeight};
};
dots_Dom.getWindowInnerHeight = function(win) {
	if(null == win) win = window;
	return win.innerHeight;
};
dots_Dom.getWindowInnerWidth = function(win) {
	if(null == win) win = window;
	return win.innerWidth;
};
dots_Dom.getWindowInnerSize = function(win) {
	if(null == win) win = window;
	return { width : win.innerWidth, height : win.innerHeight};
};
dots_Dom.getDocumentHeight = function(doc) {
	if(null == doc) doc = window.document;
	return doc.documentElement.scrollHeight;
};
dots_Dom.getDocumentWidth = function(doc) {
	if(null == doc) doc = window.document;
	return doc.documentElement.scrollWidth;
};
dots_Dom.getDocumentSize = function(doc) {
	if(null == doc) doc = window.document;
	return { width : doc.documentElement.scrollWidth, height : doc.documentElement.scrollHeight};
};
dots_Dom.scrollTop = function(doc) {
	if(null == doc) doc = window.document;
	if(null != window.document.documentElement) return window.document.documentElement.scrollTop; else return window.document.body.scrollTop;
};
dots_Dom.offset = function(el,doc) {
	if(null == doc) doc = window.document;
	var rect = el.getBoundingClientRect();
	return { top : rect.top + doc.body.scrollTop, left : rect.left + doc.body.scrollLeft};
};
dots_Dom.offsetParent = function(el) {
	if(null != el.offsetParent) return el.offsetParent; else return el;
};
dots_Dom.outerHeight = function(el) {
	return el.offsetHeight;
};
dots_Dom.outerHeightWithMargin = function(el) {
	var h = el.offsetHeight;
	var s = dots_Style.style(el);
	return h + Std.parseInt(s.marginTop) + Std.parseInt(s.marginBottom);
};
dots_Dom.outerWidth = function(el) {
	return el.offsetWidth;
};
dots_Dom.outerWidthWithMargin = function(el) {
	var h = el.offsetWidth;
	var s = dots_Style.style(el);
	return h + Std.parseInt(s.marginLeft) + Std.parseInt(s.marginRight);
};
dots_Dom.position = function(el) {
	return { left : el.offsetLeft, top : el.offsetTop};
};
dots_Dom.ready = function(fn,doc) {
	if(null == doc) doc = window.document;
	if(doc.readyState != "loading") fn(); else doc.addEventListener("DOMContentLoaded",fn);
};
dots_Dom.empty = function(el) {
	el.innerHTML = "";
};
var dots_Html = function() { };
dots_Html.__name__ = ["dots","Html"];
dots_Html.parseNodes = function(html) {
	if(!dots_Html.pattern.match(html)) throw new js__$Boot_HaxeError("Invalid pattern \"" + html + "\"");
	var el;
	var _g = dots_Html.pattern.matched(1).toLowerCase();
	switch(_g) {
	case "tbody":case "thead":
		el = window.document.createElement("table");
		break;
	case "td":case "th":
		el = window.document.createElement("tr");
		break;
	case "tr":
		el = window.document.createElement("tbody");
		break;
	default:
		el = window.document.createElement("div");
	}
	el.innerHTML = html;
	return el.childNodes;
};
dots_Html.parseArray = function(html) {
	return dots_Html.nodeListToArray(dots_Html.parseNodes(html));
};
dots_Html.parse = function(html) {
	return dots_Html.parseNodes(html)[0];
};
dots_Html.nodeListToArray = function(list) {
	return Array.prototype.slice.call(list,0);
};
var dots_Query = function() { };
dots_Query.__name__ = ["dots","Query"];
dots_Query.find = function(selector,ctx) {
	return (ctx != null?ctx:dots_Query.doc).querySelector(selector);
};
dots_Query.selectNodes = function(selector,ctx) {
	return (ctx != null?ctx:dots_Query.doc).querySelectorAll(selector);
};
dots_Query.select = function(selector,ctx) {
	return dots_Html.nodeListToArray(dots_Query.selectNodes(selector,ctx));
};
dots_Query.getElementIndex = function(el) {
	var index = 0;
	while(null != (el = el.previousElementSibling)) index++;
	return index;
};
dots_Query.siblings = function(node) {
	return Array.prototype.slice.call(node.parentNode.children).filter(function(n) {
		return n != node;
	});
};
dots_Query.childrenOf = function(children,parent) {
	return children.filter(function(child) {
		return child.parentElement == parent;
	});
};
var dots_Style = function() { };
dots_Style.__name__ = ["dots","Style"];
dots_Style.style = function(el) {
	var $window = el.ownerDocument.defaultView;
	return $window.getComputedStyle(el,null);
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
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe_CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
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
	get: null
	,set: null
	,exists: null
	,remove: null
	,keys: null
	,iterator: null
	,__class__: haxe_IMap
};
var haxe__$Int32_Int32_$Impl_$ = {};
haxe__$Int32_Int32_$Impl_$.__name__ = ["haxe","_Int32","Int32_Impl_"];
haxe__$Int32_Int32_$Impl_$.mul = function(a,b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	high: null
	,low: null
	,__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Log = function() { };
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_Utf8 = function() { };
haxe_Utf8.__name__ = ["haxe","Utf8"];
haxe_Utf8.compare = function(a,b) {
	if(a > b) return 1; else if(a == b) return 0; else return -1;
};
haxe_Utf8.sub = function(s,pos,len) {
	return HxOverrides.substr(s,pos,len);
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
haxe_io_Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) return hb;
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	length: null
	,b: null
	,blit: function(pos,src,srcpos,len) {
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
	,getData: function() {
		return this.b.bufferValue;
	}
	,__class__: haxe_io_Bytes
};
var haxe_crypto_Base64 = function() { };
haxe_crypto_Base64.__name__ = ["haxe","crypto","Base64"];
var haxe_ds_BalancedTree = function() {
};
haxe_ds_BalancedTree.__name__ = ["haxe","ds","BalancedTree"];
haxe_ds_BalancedTree.prototype = {
	root: null
	,set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,remove: function(key) {
		try {
			this.root = this.removeLoop(key,this.root);
			return true;
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				return false;
			} else throw(e);
		}
	}
	,exists: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return true; else if(c < 0) node = node.left; else node = node.right;
		}
		return false;
	}
	,iterator: function() {
		var ret = [];
		this.iteratorLoop(this.root,ret);
		return HxOverrides.iter(ret);
	}
	,keys: function() {
		var ret = [];
		this.keysLoop(this.root,ret);
		return HxOverrides.iter(ret);
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe_ds_TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe_ds_TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,removeLoop: function(k,node) {
		if(node == null) throw new js__$Boot_HaxeError("Not_found");
		var c = this.compare(k,node.key);
		if(c == 0) return this.merge(node.left,node.right); else if(c < 0) return this.balance(this.removeLoop(k,node.left),node.key,node.value,node.right); else return this.balance(node.left,node.key,node.value,this.removeLoop(k,node.right));
	}
	,iteratorLoop: function(node,acc) {
		if(node != null) {
			this.iteratorLoop(node.left,acc);
			acc.push(node.value);
			this.iteratorLoop(node.right,acc);
		}
	}
	,keysLoop: function(node,acc) {
		if(node != null) {
			this.keysLoop(node.left,acc);
			acc.push(node.key);
			this.keysLoop(node.right,acc);
		}
	}
	,merge: function(t1,t2) {
		if(t1 == null) return t2;
		if(t2 == null) return t1;
		var t = this.minBinding(t2);
		return this.balance(t1,t.key,t.value,this.removeMinBinding(t2));
	}
	,minBinding: function(t) {
		if(t == null) throw new js__$Boot_HaxeError("Not_found"); else if(t.left == null) return t; else return this.minBinding(t.left);
	}
	,removeMinBinding: function(t) {
		if(t.left == null) return t.right; else return this.balance(this.removeMinBinding(t.left),t.key,t.value,t.right);
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe_ds_TreeNode(l.left,l.key,l.value,new haxe_ds_TreeNode(l.right,k,v,r)); else return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe_ds_TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe_ds_TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe_ds_TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe_ds_BalancedTree
};
var haxe_ds_TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
haxe_ds_TreeNode.__name__ = ["haxe","ds","TreeNode"];
haxe_ds_TreeNode.prototype = {
	left: null
	,right: null
	,key: null
	,value: null
	,_height: null
	,__class__: haxe_ds_TreeNode
};
var haxe_ds_Either = { __ename__ : ["haxe","ds","Either"], __constructs__ : ["Left","Right"] };
haxe_ds_Either.Left = function(v) { var $x = ["Left",0,v]; $x.__enum__ = haxe_ds_Either; $x.toString = $estr; return $x; };
haxe_ds_Either.Right = function(v) { var $x = ["Right",1,v]; $x.__enum__ = haxe_ds_Either; $x.toString = $estr; return $x; };
var haxe_ds_EnumValueMap = function() {
	haxe_ds_BalancedTree.call(this);
};
haxe_ds_EnumValueMap.__name__ = ["haxe","ds","EnumValueMap"];
haxe_ds_EnumValueMap.__interfaces__ = [haxe_IMap];
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
	,__class__: haxe_ds_EnumValueMap
});
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
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
	map: null
	,keys: null
	,index: null
	,count: null
	,hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	h: null
	,rh: null
	,set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
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
		if(this.rh == null) return null; else return this.rh["$" + key];
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
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
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
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_BytesBuffer = function() {
	this.b = [];
};
haxe_io_BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe_io_BytesBuffer.prototype = {
	b: null
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,getBytes: function() {
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
	var af;
	if(f < 0) af = -f; else af = f;
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
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
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
				total.addBytes(buf,0,len);
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
	__x: null
	,resolve: function(name) {
		var x = this.__x.elementsNamed(name).next();
		if(x == null) {
			var xname;
			if(this.__x.nodeType == Xml.Document) xname = "Document"; else xname = this.__x.get_nodeName();
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
	__x: null
	,__class__: haxe_xml__$Fast_AttribAccess
};
var haxe_xml__$Fast_HasAttribAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_HasAttribAccess.__name__ = ["haxe","xml","_Fast","HasAttribAccess"];
haxe_xml__$Fast_HasAttribAccess.prototype = {
	__x: null
	,__class__: haxe_xml__$Fast_HasAttribAccess
};
var haxe_xml__$Fast_HasNodeAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_HasNodeAccess.__name__ = ["haxe","xml","_Fast","HasNodeAccess"];
haxe_xml__$Fast_HasNodeAccess.prototype = {
	__x: null
	,__class__: haxe_xml__$Fast_HasNodeAccess
};
var haxe_xml__$Fast_NodeListAccess = function(x) {
	this.__x = x;
};
haxe_xml__$Fast_NodeListAccess.__name__ = ["haxe","xml","_Fast","NodeListAccess"];
haxe_xml__$Fast_NodeListAccess.prototype = {
	__x: null
	,resolve: function(name) {
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
	x: null
	,node: null
	,nodes: null
	,att: null
	,has: null
	,hasNode: null
	,get_name: function() {
		if(this.x.nodeType == Xml.Document) return "Document"; else return this.x.get_nodeName();
	}
	,get_innerData: function() {
		var it = this.x.iterator();
		if(!it.hasNext()) throw new js__$Boot_HaxeError(this.get_name() + " does not have data");
		var v = it.next();
		var n = it.next();
		if(n != null) {
			if(v.nodeType == Xml.PCData && n.nodeType == Xml.CData && StringTools.trim((function($this) {
				var $r;
				if(v.nodeType == Xml.Document || v.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + v.nodeType);
				$r = v.nodeValue;
				return $r;
			}(this))) == "") {
				var n2 = it.next();
				if(n2 == null || n2.nodeType == Xml.PCData && StringTools.trim((function($this) {
					var $r;
					if(n2.nodeType == Xml.Document || n2.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + n2.nodeType);
					$r = n2.nodeValue;
					return $r;
				}(this))) == "" && it.next() == null) {
					if(n.nodeType == Xml.Document || n.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + n.nodeType);
					return n.nodeValue;
				}
			}
			throw new js__$Boot_HaxeError(this.get_name() + " does not only have data");
		}
		if(v.nodeType != Xml.PCData && v.nodeType != Xml.CData) throw new js__$Boot_HaxeError(this.get_name() + " does not have data");
		if(v.nodeType == Xml.Document || v.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + v.nodeType);
		return v.nodeValue;
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
				buf.addSub(str,start,p - start);
				var child = Xml.createPCData(buf.b);
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
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
				var tmp;
				if(start == p) throw new js__$Boot_HaxeError("Expected attribute name");
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
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
				buf.addSub(str,start,p - start);
				state = 18;
				escapeNext = 8;
				start = p + 1;
				break;
			case 62:
				if(strict) throw new js__$Boot_HaxeError("Invalid unescaped " + String.fromCharCode(c) + " in attribute value"); else if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
					var val = buf.b;
					buf = new StringBuf();
					xml.set(aname,val);
					state = 0;
					next = 4;
				}
				break;
			case 60:
				if(strict) throw new js__$Boot_HaxeError("Invalid unescaped " + String.fromCharCode(c) + " in attribute value"); else if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
					var val1 = buf.b;
					buf = new StringBuf();
					xml.set(aname,val1);
					state = 0;
					next = 4;
				}
				break;
			default:
				if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
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
				if(v != (function($this) {
					var $r;
					if(parent.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + parent.nodeType);
					$r = parent.nodeName;
					return $r;
				}(this))) throw new js__$Boot_HaxeError("Expected </" + (function($this) {
					var $r;
					if(parent.nodeType != Xml.Element) throw "Bad node type, expected Element but found " + parent.nodeType;
					$r = parent.nodeName;
					return $r;
				}(this)) + ">");
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
					var c1;
					if(s.charCodeAt(1) == 120) c1 = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else c1 = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.b += String.fromCharCode(c1);
				} else if(!haxe_xml_Parser.escapes.exists(s)) {
					if(strict) throw new js__$Boot_HaxeError("Undefined entity: " + s);
					buf.b += Std.string("&" + s + ";");
				} else buf.add(haxe_xml_Parser.escapes.get(s));
				start = p + 1;
				state = escapeNext;
			} else if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45) && c != 35) {
				if(strict) throw new js__$Boot_HaxeError("Invalid character in entity: " + String.fromCharCode(c));
				buf.b += "&";
				buf.addSub(str,start,p - start);
				p--;
				start = p + 1;
				state = escapeNext;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) {
			buf.addSub(str,start,p - start);
			var xml4 = Xml.createPCData(buf.b);
			parent.addChild(xml4);
			nsubs++;
		}
		return p;
	}
	if(!strict && state == 18 && escapeNext == 13) {
		buf.b += "&";
		buf.addSub(str,start,p - start);
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
	val: null
	,__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
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
	byteLength: null
	,a: null
	,slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	buf: null
	,offset: null
	,length: null
	,getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
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
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
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
var thx_Arrays = function() { };
thx_Arrays.__name__ = ["thx","Arrays"];
thx_Arrays.append = function(array,element) {
	array.push(element);
	return array;
};
thx_Arrays.appendIf = function(array,cond,element) {
	if(cond) array.push(element);
	return array;
};
thx_Arrays.monoid = function() {
	return { zero : [], append : function(a,b) {
		return a.concat(b);
	}};
};
thx_Arrays.after = function(array,element) {
	return array.slice(thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(array,element) + 1);
};
thx_Arrays.each = function(arr,effect) {
	var $it0 = HxOverrides.iter(arr);
	while( $it0.hasNext() ) {
		var element = $it0.next();
		effect(element);
	}
};
thx_Arrays.eachi = function(arr,effect) {
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		effect(arr[i],i);
	}
};
thx_Arrays.all = function(arr,predicate) {
	var $it0 = HxOverrides.iter(arr);
	while( $it0.hasNext() ) {
		var element = $it0.next();
		if(!predicate(element)) return false;
	}
	return true;
};
thx_Arrays.any = function(arr,predicate) {
	var $it0 = HxOverrides.iter(arr);
	while( $it0.hasNext() ) {
		var element = $it0.next();
		if(predicate(element)) return true;
	}
	return false;
};
thx_Arrays.at = function(arr,indexes) {
	return indexes.map(function(i) {
		return arr[i];
	});
};
thx_Arrays.before = function(array,element) {
	return array.slice(0,thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(array,element));
};
thx_Arrays.commonsFromStart = function(self,other,equality) {
	if(null == equality) equality = thx_Functions.equality;
	var count = 0;
	var _g = 0;
	var _g1 = thx_Arrays.zip(self,other);
	while(_g < _g1.length) {
		var pair = _g1[_g];
		++_g;
		if(equality(pair._0,pair._1)) count++; else break;
	}
	return self.slice(0,count);
};
thx_Arrays.compact = function(arr) {
	return arr.filter(function(v) {
		return null != v;
	});
};
thx_Arrays.compare = function(a,b) {
	var v;
	if((v = a.length - b.length) != 0) return v;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if((v = thx_Dynamics.compare(a[i],b[i])) != 0) return v;
	}
	return 0;
};
thx_Arrays.contains = function(array,element,eq) {
	if(null == eq) return thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(array,element) >= 0; else {
		var _g1 = 0;
		var _g = array.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(eq(array[i],element)) return true;
		}
		return false;
	}
};
thx_Arrays.containsAll = function(array,elements,eq) {
	var $it0 = $iterator(elements)();
	while( $it0.hasNext() ) {
		var el = $it0.next();
		if(!thx_Arrays.contains(array,el,eq)) return false;
	}
	return true;
};
thx_Arrays.containsAny = function(array,elements,eq) {
	var $it0 = $iterator(elements)();
	while( $it0.hasNext() ) {
		var el = $it0.next();
		if(thx_Arrays.contains(array,el,eq)) return true;
	}
	return false;
};
thx_Arrays.create = function(length,fillWith) {
	var arr = new Array(length);
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		arr[i] = fillWith;
	}
	return arr;
};
thx_Arrays.cross = function(a,b) {
	var r = [];
	var $it0 = HxOverrides.iter(a);
	while( $it0.hasNext() ) {
		var va = $it0.next();
		var $it1 = HxOverrides.iter(b);
		while( $it1.hasNext() ) {
			var vb = $it1.next();
			r.push([va,vb]);
		}
	}
	return r;
};
thx_Arrays.crossMulti = function(array) {
	var acopy = array.slice();
	var result = acopy.shift().map(function(v) {
		return [v];
	});
	while(acopy.length > 0) {
		var array1 = acopy.shift();
		var tresult = result;
		result = [];
		var $it0 = HxOverrides.iter(array1);
		while( $it0.hasNext() ) {
			var v1 = $it0.next();
			var _g = 0;
			while(_g < tresult.length) {
				var ar = tresult[_g];
				++_g;
				var t = ar.slice();
				t.push(v1);
				result.push(t);
			}
		}
	}
	return result;
};
thx_Arrays.distinct = function(array,predicate) {
	var result = [];
	if(array.length <= 1) return array.slice();
	if(null == predicate) predicate = thx_Functions.equality;
	var $it0 = HxOverrides.iter(array);
	while( $it0.hasNext() ) {
		var v = $it0.next();
		var v1 = [v];
		var keep = !thx_Arrays.any(result,(function(v1) {
			return function(r) {
				return predicate(r,v1[0]);
			};
		})(v1));
		if(keep) result.push(v1[0]);
	}
	return result;
};
thx_Arrays.eachPair = function(array,callback) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = i;
		var _g2 = array.length;
		while(_g3 < _g2) {
			var j = _g3++;
			if(!callback(array[i],array[j])) return;
		}
	}
};
thx_Arrays.equals = function(a,b,equality) {
	if(a == null || b == null || a.length != b.length) return false;
	if(null == equality) equality = thx_Functions.equality;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(!equality(a[i],b[i])) return false;
	}
	return true;
};
thx_Arrays.extract = function(a,predicate) {
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(a[i])) return a.splice(i,1)[0];
	}
	return null;
};
thx_Arrays.filterNull = function(a) {
	var arr = [];
	var $it0 = HxOverrides.iter(a);
	while( $it0.hasNext() ) {
		var v = $it0.next();
		if(null != v) arr.push(v);
	}
	return arr;
};
thx_Arrays.find = function(array,predicate) {
	var $it0 = HxOverrides.iter(array);
	while( $it0.hasNext() ) {
		var element = $it0.next();
		if(predicate(element)) return element;
	}
	return null;
};
thx_Arrays.findOption = function(array,predicate) {
	var $it0 = HxOverrides.iter(array);
	while( $it0.hasNext() ) {
		var element = $it0.next();
		if(predicate(element)) return haxe_ds_Option.Some(element);
	}
	return haxe_ds_Option.None;
};
thx_Arrays.findIndex = function(array,predicate) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(array[i])) return i;
	}
	return -1;
};
thx_Arrays.findLast = function(array,predicate) {
	var len = array.length;
	var j;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		j = len - i - 1;
		if(predicate(array[j])) return array[j];
	}
	return null;
};
thx_Arrays.first = function(array) {
	return array[0];
};
thx_Arrays.flatMap = function(array,callback) {
	return thx_Arrays.flatten(array.map(callback));
};
thx_Arrays.flatten = function(array) {
	return Array.prototype.concat.apply([],array);
};
thx_Arrays.from = function(array,element) {
	return array.slice(thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(array,element));
};
thx_Arrays.groupByAppend = function(arr,resolver,map) {
	arr.map(function(v) {
		var key = resolver(v);
		var arr1 = map.get(key);
		if(null == arr1) {
			arr1 = [v];
			map.set(key,arr1);
		} else arr1.push(v);
	});
	return map;
};
thx_Arrays.spanByIndex = function(arr,spanKey) {
	var acc = [];
	var cur = null;
	var j = -1;
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		var k = spanKey(i);
		if(k == null) throw new thx_Error("spanKey function returned null for index " + i,null,{ fileName : "Arrays.hx", lineNumber : 486, className : "thx.Arrays", methodName : "spanByIndex"});
		if(cur == k) acc[j].push(arr[i]); else {
			cur = k;
			j++;
			acc.push([arr[i]]);
		}
	}
	return acc;
};
thx_Arrays.hasElements = function(array) {
	return null != array && array.length > 0;
};
thx_Arrays.head = function(array) {
	return array[0];
};
thx_Arrays.ifEmpty = function(array,alt) {
	if(null != array && 0 != array.length) return array; else return alt;
};
thx_Arrays.initial = function(array) {
	return array.slice(0,array.length - 1);
};
thx_Arrays.isEmpty = function(array) {
	return null == array || array.length == 0;
};
thx_Arrays.last = function(array) {
	return array[array.length - 1];
};
thx_Arrays.mapi = function(array,callback) {
	return array.map(callback);
};
thx_Arrays.mapRight = function(array,callback) {
	var i = array.length;
	var result = [];
	while(--i >= 0) result.push(callback(array[i]));
	return result;
};
thx_Arrays.order = function(array,sort) {
	var n = array.slice();
	n.sort(sort);
	return n;
};
thx_Arrays.pull = function(array,toRemove,equality) {
	var $it0 = HxOverrides.iter(toRemove);
	while( $it0.hasNext() ) {
		var element = $it0.next();
		thx_Arrays.removeAll(array,element,equality);
	}
};
thx_Arrays.pushIf = function(array,condition,value) {
	if(condition) array.push(value);
	return array;
};
thx_Arrays.reduce = function(array,callback,initial) {
	return array.reduce(callback,initial);
};
thx_Arrays.resize = function(array,length,fill) {
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
};
thx_Arrays.reducei = function(array,callback,initial) {
	return array.reduce(callback,initial);
};
thx_Arrays.reduceRight = function(array,callback,initial) {
	var i = array.length;
	while(--i >= 0) initial = callback(initial,array[i]);
	return initial;
};
thx_Arrays.removeAll = function(array,element,equality) {
	if(null == equality) equality = thx_Functions.equality;
	var i = array.length;
	while(--i >= 0) if(equality(array[i],element)) array.splice(i,1);
};
thx_Arrays.rest = function(array) {
	return array.slice(1);
};
thx_Arrays.reversed = function(array) {
	var result = array.slice();
	result.reverse();
	return result;
};
thx_Arrays.sample = function(array,n) {
	n = thx_Ints.min(n,array.length);
	var copy = array.slice();
	var result = [];
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		result.push(copy.splice(Std.random(copy.length),1)[0]);
	}
	return result;
};
thx_Arrays.sampleOne = function(array) {
	var index = Std.random(array.length);
	return array[index];
};
thx_Arrays.string = function(arr) {
	return "[" + arr.map(thx_Dynamics.string).join(", ") + "]";
};
thx_Arrays.shuffle = function(a) {
	var t = thx_Ints.range(a.length);
	var array = [];
	while(t.length > 0) {
		var pos = Std.random(t.length);
		var index = t[pos];
		t.splice(pos,1);
		array.push(a[index]);
	}
	return array;
};
thx_Arrays.split = function(array,parts) {
	var len = Math.ceil(array.length / parts);
	return thx_Arrays.splitBy(array,len);
};
thx_Arrays.splitBy = function(array,len) {
	var res = [];
	len = thx_Ints.min(len,array.length);
	var _g1 = 0;
	var _g = Math.ceil(array.length / len);
	while(_g1 < _g) {
		var p = _g1++;
		res.push(array.slice(p * len,(p + 1) * len));
	}
	return res;
};
thx_Arrays.splitByPad = function(arr,len,pad) {
	var res = thx_Arrays.splitBy(arr,len);
	while(res[res.length - 1].length < len) res[res.length - 1].push(pad);
	return res;
};
thx_Arrays.tail = function(array) {
	return array.slice(1);
};
thx_Arrays.take = function(arr,n) {
	return arr.slice(0,n);
};
thx_Arrays.takeLast = function(arr,n) {
	return arr.slice(arr.length - n);
};
thx_Arrays.traverseOption = function(arr,f) {
	return thx_Arrays.reduce(arr,function(acc,t) {
		return thx_Options.ap(f(t),thx_Options.map(acc,function(ux) {
			return function(u) {
				ux.push(u);
				return ux;
			};
		}));
	},haxe_ds_Option.Some([]));
};
thx_Arrays.traverseValidation = function(arr,f,s) {
	return thx_Arrays.reduce(arr,function(acc,t) {
		return thx__$Validation_Validation_$Impl_$.ap(f(t),thx__$Validation_Validation_$Impl_$.ap(acc,thx_Either.Right(function(ux) {
			return function(u) {
				ux.push(u);
				return ux;
			};
		}),function(e1,e2) {
			throw new js__$Boot_HaxeError("Unreachable");
		}),s);
	},thx_Either.Right([]));
};
thx_Arrays.rotate = function(arr) {
	var result = [];
	var _g1 = 0;
	var _g = arr[0].length;
	while(_g1 < _g) {
		var i = _g1++;
		var row = [];
		result.push(row);
		var _g3 = 0;
		var _g2 = arr.length;
		while(_g3 < _g2) {
			var j = _g3++;
			row.push(arr[j][i]);
		}
	}
	return result;
};
thx_Arrays.sliding2 = function(arr,f) {
	if(arr.length < 2) return []; else {
		var result = [];
		var _g1 = 0;
		var _g = arr.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			result.push(f(arr[i],arr[i + 1]));
		}
		return result;
	}
};
thx_Arrays.unzip = function(array) {
	var a1 = [];
	var a2 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
	});
	return { _0 : a1, _1 : a2};
};
thx_Arrays.unzip3 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
	});
	return { _0 : a1, _1 : a2, _2 : a3};
};
thx_Arrays.unzip4 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
	});
	return { _0 : a1, _1 : a2, _2 : a3, _3 : a4};
};
thx_Arrays.unzip5 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	var a5 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
		a5.push(t._4);
	});
	return { _0 : a1, _1 : a2, _2 : a3, _3 : a4, _4 : a5};
};
thx_Arrays.zip = function(array1,array2) {
	var length = thx_Ints.min(array1.length,array2.length);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i]});
	}
	return array;
};
thx_Arrays.withPrepend = function(arr,el) {
	return [el].concat(arr);
};
thx_Arrays["with"] = function(arr,el) {
	return arr.concat([el]);
};
thx_Arrays.withSlice = function(arr,other,start,length) {
	if(length == null) length = 0;
	return arr.slice(0,start).concat(other).concat(arr.slice(start + length));
};
thx_Arrays.withInsert = function(arr,el,pos) {
	return arr.slice(0,pos).concat([el]).concat(arr.slice(pos));
};
thx_Arrays.zip3 = function(array1,array2,array3) {
	var length = thx_ArrayInts.min([array1.length,array2.length,array3.length]);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i], _2 : array3[i]});
	}
	return array;
};
thx_Arrays.zip4 = function(array1,array2,array3,array4) {
	var length = thx_ArrayInts.min([array1.length,array2.length,array3.length,array4.length]);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i], _2 : array3[i], _3 : array4[i]});
	}
	return array;
};
thx_Arrays.zip5 = function(array1,array2,array3,array4,array5) {
	var length = thx_ArrayInts.min([array1.length,array2.length,array3.length,array4.length,array5.length]);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i], _2 : array3[i], _3 : array4[i], _4 : array5[i]});
	}
	return array;
};
var thx_ArrayFloats = function() { };
thx_ArrayFloats.__name__ = ["thx","ArrayFloats"];
thx_ArrayFloats.average = function(arr) {
	return thx_ArrayFloats.sum(arr) / arr.length;
};
thx_ArrayFloats.compact = function(arr) {
	return arr.filter(function(v) {
		return null != v && isFinite(v);
	});
};
thx_ArrayFloats.max = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(max,v) {
		if(v > max) return v; else return max;
	},arr[0]);
};
thx_ArrayFloats.min = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(min,v) {
		if(v < min) return v; else return min;
	},arr[0]);
};
thx_ArrayFloats.resize = function(array,length,fill) {
	if(fill == null) fill = 0.0;
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
};
thx_ArrayFloats.standardDeviation = function(array) {
	if(array.length < 2) return 0.0;
	var mean = thx_ArrayFloats.average(array);
	var variance = array.reduce(function(acc,val) {
		return acc + Math.pow(val - mean,2);
	},0) / (array.length - 1);
	return Math.sqrt(variance);
};
thx_ArrayFloats.sum = function(arr) {
	return arr.reduce(function(tot,v) {
		return tot + v;
	},0.0);
};
var thx_ArrayInts = function() { };
thx_ArrayInts.__name__ = ["thx","ArrayInts"];
thx_ArrayInts.average = function(arr) {
	return thx_ArrayInts.sum(arr) / arr.length;
};
thx_ArrayInts.max = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(max,v) {
		if(v > max) return v; else return max;
	},arr[0]);
};
thx_ArrayInts.min = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(min,v) {
		if(v < min) return v; else return min;
	},arr[0]);
};
thx_ArrayInts.resize = function(array,length,fill) {
	if(fill == null) fill = 0;
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
};
thx_ArrayInts.sum = function(arr) {
	return arr.reduce(function(tot,v) {
		return tot + v;
	},0);
};
var thx_ArrayStrings = function() { };
thx_ArrayStrings.__name__ = ["thx","ArrayStrings"];
thx_ArrayStrings.compact = function(arr) {
	return arr.filter(function(v) {
		return !thx_Strings.isEmpty(v);
	});
};
thx_ArrayStrings.max = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(max,v) {
		if(v > max) return v; else return max;
	},arr[0]);
};
thx_ArrayStrings.min = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(min,v) {
		if(v < min) return v; else return min;
	},arr[0]);
};
var thx_Bools = function() { };
thx_Bools.__name__ = ["thx","Bools"];
thx_Bools.compare = function(a,b) {
	if(a == b) return 0; else if(a) return -1; else return 1;
};
thx_Bools.toInt = function(v) {
	if(v) return 1; else return 0;
};
thx_Bools.canParse = function(v) {
	var _g = v.toLowerCase();
	if(_g == null) return true; else switch(_g) {
	case "true":case "false":case "0":case "1":case "on":case "off":
		return true;
	default:
		return false;
	}
};
thx_Bools.parse = function(v) {
	var _g = v.toLowerCase();
	var v1 = _g;
	if(_g == null) return false; else switch(_g) {
	case "true":case "1":case "on":
		return true;
	case "false":case "0":case "off":
		return false;
	default:
		throw new js__$Boot_HaxeError("unable to parse \"" + v1 + "\"");
	}
};
thx_Bools.xor = function(a,b) {
	return a != b;
};
thx_Bools.option = function(cond,a) {
	if(cond) return haxe_ds_Option.Some(a); else return haxe_ds_Option.None;
};
var thx_Dates = function() { };
thx_Dates.__name__ = ["thx","Dates"];
thx_Dates.compare = function(a,b) {
	return thx_Floats.compare(a.getTime(),b.getTime());
};
thx_Dates.create = function(year,month,day,hour,minute,second) {
	if(second == null) second = 0;
	if(minute == null) minute = 0;
	if(hour == null) hour = 0;
	if(day == null) day = 1;
	if(month == null) month = 0;
	minute += Math.floor(second / 60);
	second = second % 60;
	if(second < 0) second += 60;
	hour += Math.floor(minute / 60);
	minute = minute % 60;
	if(minute < 0) minute += 60;
	day += Math.floor(hour / 24);
	hour = hour % 24;
	if(hour < 0) hour += 24;
	if(day == 0) {
		month -= 1;
		if(month < 0) {
			month = 11;
			year -= 1;
		}
		day = thx_Dates.daysInMonth(year,month);
	}
	year += Math.floor(month / 12);
	month = month % 12;
	if(month < 0) month += 12;
	var days = thx_Dates.daysInMonth(year,month);
	while(day > days) {
		if(day > days) {
			day -= days;
			month++;
		}
		if(month > 11) {
			month -= 12;
			year++;
		}
		days = thx_Dates.daysInMonth(year,month);
	}
	return new Date(year,month,day,hour,minute,second);
};
thx_Dates.daysRange = function(start,end) {
	if(thx_Dates.compare(end,start) < 0) return [];
	var days = [];
	while(!thx_Dates.sameDay(start,end)) {
		days.push(start);
		start = thx_Dates.jump(start,thx_TimePeriod.Day,1);
	}
	days.push(end);
	return days;
};
thx_Dates.equals = function(self,other) {
	return self.getTime() == other.getTime();
};
thx_Dates.nearEquals = function(self,other,units,period) {
	if(units == null) units = 1;
	if(null == period) period = thx_TimePeriod.Second;
	if(units < 0) units = -units;
	var min = thx_Dates.jump(self,period,-units);
	var max = thx_Dates.jump(self,period,units);
	return thx_Dates.compare(min,other) <= 0 && thx_Dates.compare(max,other) >= 0;
};
thx_Dates.greater = function(self,other) {
	return thx_Dates.compare(self,other) > 0;
};
thx_Dates.more = function(self,other) {
	return thx_Dates.compare(self,other) > 0;
};
thx_Dates.less = function(self,other) {
	return thx_Dates.compare(self,other) < 0;
};
thx_Dates.greaterEquals = function(self,other) {
	return thx_Dates.compare(self,other) >= 0;
};
thx_Dates.moreEqual = function(self,other) {
	return thx_Dates.compare(self,other) >= 0;
};
thx_Dates.lessEquals = function(self,other) {
	return thx_Dates.compare(self,other) <= 0;
};
thx_Dates.lessEqual = function(self,other) {
	return thx_Dates.compare(self,other) <= 0;
};
thx_Dates.isLeapYear = function(year) {
	if(year % 4 != 0) return false;
	if(year % 100 == 0) return year % 400 == 0;
	return true;
};
thx_Dates.isInLeapYear = function(d) {
	return thx_Dates.isLeapYear(d.getFullYear());
};
thx_Dates.daysInMonth = function(year,month) {
	switch(month) {
	case 0:case 2:case 4:case 6:case 7:case 9:case 11:
		return 31;
	case 3:case 5:case 8:case 10:
		return 30;
	case 1:
		if(thx_Dates.isLeapYear(year)) return 29; else return 28;
		break;
	default:
		throw new js__$Boot_HaxeError("Invalid month \"" + month + "\".  Month should be a number, Jan=0, Dec=11");
	}
};
thx_Dates.numDaysInMonth = function(month,year) {
	return thx_Dates.daysInMonth(year,month);
};
thx_Dates.daysInThisMonth = function(d) {
	return thx_Dates.daysInMonth(d.getFullYear(),d.getMonth());
};
thx_Dates.numDaysInThisMonth = function(d) {
	return thx_Dates.daysInThisMonth(d);
};
thx_Dates.sameYear = function(self,other) {
	return self.getFullYear() == other.getFullYear();
};
thx_Dates.sameMonth = function(self,other) {
	return thx_Dates.sameYear(self,other) && self.getMonth() == other.getMonth();
};
thx_Dates.sameDay = function(self,other) {
	return thx_Dates.sameMonth(self,other) && self.getDate() == other.getDate();
};
thx_Dates.sameHour = function(self,other) {
	return thx_Dates.sameDay(self,other) && self.getHours() == other.getHours();
};
thx_Dates.sameMinute = function(self,other) {
	return thx_Dates.sameHour(self,other) && self.getMinutes() == other.getMinutes();
};
thx_Dates.snapNext = function(date,period) {
	{
		var this1 = thx__$Timestamp_Timestamp_$Impl_$.snapNext(date.getTime(),period);
		var d = new Date();
		d.setTime(this1);
		return d;
	}
};
thx_Dates.snapPrev = function(date,period) {
	{
		var this1 = thx__$Timestamp_Timestamp_$Impl_$.snapPrev(date.getTime(),period);
		var d = new Date();
		d.setTime(this1);
		return d;
	}
};
thx_Dates.snapTo = function(date,period) {
	{
		var this1 = thx__$Timestamp_Timestamp_$Impl_$.snapTo(date.getTime(),period);
		var d = new Date();
		d.setTime(this1);
		return d;
	}
};
thx_Dates.jump = function(date,period,amount) {
	var sec = date.getSeconds();
	var min = date.getMinutes();
	var hour = date.getHours();
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	switch(period[1]) {
	case 0:
		sec += amount;
		break;
	case 1:
		min += amount;
		break;
	case 2:
		hour += amount;
		break;
	case 3:
		day += amount;
		break;
	case 4:
		day += amount * 7;
		break;
	case 5:
		month += amount;
		break;
	case 6:
		year += amount;
		break;
	}
	return thx_Dates.create(year,month,day,hour,min,sec);
};
thx_Dates.max = function(self,other) {
	if(self.getTime() > other.getTime()) return self; else return other;
};
thx_Dates.min = function(self,other) {
	if(self.getTime() < other.getTime()) return self; else return other;
};
thx_Dates.snapToWeekDay = function(date,day,firstDayOfWk) {
	if(firstDayOfWk == null) firstDayOfWk = 0;
	var d = date.getDay();
	var s = day;
	if(s < firstDayOfWk) s = s + 7;
	if(d < firstDayOfWk) d = d + 7;
	return thx_Dates.jump(date,thx_TimePeriod.Day,s - d);
};
thx_Dates.snapNextWeekDay = function(date,day) {
	var d = date.getDay();
	var s = day;
	if(s < d) s = s + 7;
	return thx_Dates.jump(date,thx_TimePeriod.Day,s - d);
};
thx_Dates.snapPrevWeekDay = function(date,day) {
	var d = date.getDay();
	var s = day;
	if(s > d) s = s - 7;
	return thx_Dates.jump(date,thx_TimePeriod.Day,s - d);
};
thx_Dates.prevYear = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Year,-1);
};
thx_Dates.nextYear = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Year,1);
};
thx_Dates.prevMonth = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Month,-1);
};
thx_Dates.nextMonth = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Month,1);
};
thx_Dates.prevWeek = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Week,-1);
};
thx_Dates.nextWeek = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Week,1);
};
thx_Dates.prevDay = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Day,-1);
};
thx_Dates.nextDay = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Day,1);
};
thx_Dates.prevHour = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Hour,-1);
};
thx_Dates.nextHour = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Hour,1);
};
thx_Dates.prevMinute = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Minute,-1);
};
thx_Dates.nextMinute = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Minute,1);
};
thx_Dates.prevSecond = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Second,-1);
};
thx_Dates.nextSecond = function(d) {
	return thx_Dates.jump(d,thx_TimePeriod.Second,1);
};
thx_Dates.withYear = function(date,year) {
	return thx_Dates.create(year,date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
};
thx_Dates.withMonth = function(date,month) {
	return thx_Dates.create(date.getFullYear(),month,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
};
thx_Dates.withDay = function(date,day) {
	return thx_Dates.create(date.getFullYear(),date.getMonth(),day,date.getHours(),date.getMinutes(),date.getSeconds());
};
thx_Dates.withHour = function(date,hour) {
	return thx_Dates.create(date.getFullYear(),date.getMonth(),date.getDate(),hour,date.getMinutes(),date.getSeconds());
};
thx_Dates.withMinute = function(date,minute) {
	return thx_Dates.create(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),minute,date.getSeconds());
};
thx_Dates.withSecond = function(date,second) {
	return thx_Dates.create(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),second);
};
var thx_Dynamics = function() { };
thx_Dynamics.__name__ = ["thx","Dynamics"];
thx_Dynamics.equals = function(a,b) {
	if(!thx_Types.sameType(a,b)) return false;
	if(a == b) return true;
	{
		var _g = Type["typeof"](a);
		switch(_g[1]) {
		case 2:case 0:case 1:case 3:
			return false;
		case 5:
			return Reflect.compareMethods(a,b);
		case 6:
			var c = _g[2];
			var ca = Type.getClassName(c);
			var cb = Type.getClassName(b == null?null:js_Boot.getClass(b));
			if(ca != cb) return false;
			if(typeof(a) == "string") return false;
			if((a instanceof Array) && a.__enum__ == null) {
				var aa = a;
				var ab = b;
				if(aa.length != ab.length) return false;
				var _g2 = 0;
				var _g1 = aa.length;
				while(_g2 < _g1) {
					var i = _g2++;
					if(!thx_Dynamics.equals(aa[i],ab[i])) return false;
				}
				return true;
			}
			if(js_Boot.__instanceof(a,Date)) return a.getTime() == b.getTime();
			if(js_Boot.__instanceof(a,haxe_IMap)) {
				var ha = a;
				var hb = b;
				var ka = thx_Iterators.toArray(ha.keys());
				var kb = thx_Iterators.toArray(hb.keys());
				if(ka.length != kb.length) return false;
				var _g11 = 0;
				while(_g11 < ka.length) {
					var key = ka[_g11];
					++_g11;
					if(!hb.exists(key) || !thx_Dynamics.equals(ha.get(key),hb.get(key))) return false;
				}
				return true;
			}
			var t = false;
			if((t = thx_Iterators.isIterator(a)) || thx_Iterables.isIterable(a)) {
				var va;
				if(t) va = thx_Iterators.toArray(a); else va = thx_Iterators.toArray($iterator(a)());
				var vb;
				if(t) vb = thx_Iterators.toArray(b); else vb = thx_Iterators.toArray($iterator(b)());
				if(va.length != vb.length) return false;
				var _g21 = 0;
				var _g12 = va.length;
				while(_g21 < _g12) {
					var i1 = _g21++;
					if(!thx_Dynamics.equals(va[i1],vb[i1])) return false;
				}
				return true;
			}
			var f = null;
			if(Object.prototype.hasOwnProperty.call(a,"equals") && Reflect.isFunction(f = Reflect.field(a,"equals"))) return f.apply(a,[b]);
			var fields = Type.getInstanceFields(a == null?null:js_Boot.getClass(a));
			var _g13 = 0;
			while(_g13 < fields.length) {
				var field = fields[_g13];
				++_g13;
				var va1 = Reflect.field(a,field);
				if(Reflect.isFunction(va1)) continue;
				var vb1 = Reflect.field(b,field);
				if(!thx_Dynamics.equals(va1,vb1)) return false;
			}
			return true;
		case 7:
			var e = _g[2];
			var ea = Type.getEnumName(e);
			var teb = Type.getEnum(b);
			var eb = Type.getEnumName(teb);
			if(ea != eb) return false;
			if(a[1] != b[1]) return false;
			var pa = a.slice(2);
			var pb = b.slice(2);
			var _g22 = 0;
			var _g14 = pa.length;
			while(_g22 < _g14) {
				var i2 = _g22++;
				if(!thx_Dynamics.equals(pa[i2],pb[i2])) return false;
			}
			return true;
		case 4:
			var fa = Reflect.fields(a);
			var fb = Reflect.fields(b);
			var _g15 = 0;
			while(_g15 < fa.length) {
				var field1 = fa[_g15];
				++_g15;
				HxOverrides.remove(fb,field1);
				if(!Object.prototype.hasOwnProperty.call(b,field1)) return false;
				var va2 = Reflect.field(a,field1);
				if(Reflect.isFunction(va2)) continue;
				var vb2 = Reflect.field(b,field1);
				if(!thx_Dynamics.equals(va2,vb2)) return false;
			}
			if(fb.length > 0) return false;
			var t1 = false;
			if((t1 = thx_Iterators.isIterator(a)) || thx_Iterables.isIterable(a)) {
				if(t1 && !thx_Iterators.isIterator(b)) return false;
				if(!t1 && !thx_Iterables.isIterable(b)) return false;
				var aa1;
				if(t1) aa1 = thx_Iterators.toArray(a); else aa1 = thx_Iterators.toArray($iterator(a)());
				var ab1;
				if(t1) ab1 = thx_Iterators.toArray(b); else ab1 = thx_Iterators.toArray($iterator(b)());
				if(aa1.length != ab1.length) return false;
				var _g23 = 0;
				var _g16 = aa1.length;
				while(_g23 < _g16) {
					var i3 = _g23++;
					if(!thx_Dynamics.equals(aa1[i3],ab1[i3])) return false;
				}
				return true;
			}
			return true;
		case 8:
			throw new js__$Boot_HaxeError("Unable to compare two unknown types");
			break;
		}
	}
	throw new thx_Error("Unable to compare values: " + Std.string(a) + " and " + Std.string(b),null,{ fileName : "Dynamics.hx", lineNumber : 153, className : "thx.Dynamics", methodName : "equals"});
};
thx_Dynamics.clone = function(v,cloneInstances) {
	if(cloneInstances == null) cloneInstances = false;
	{
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 0:
			return null;
		case 1:case 2:case 3:case 7:case 8:case 5:
			return v;
		case 4:
			return thx_Objects.copyTo(v,{ });
		case 6:
			var c = _g[2];
			var name = Type.getClassName(c);
			switch(name) {
			case "Array":
				return v.map(function(v1) {
					return thx_Dynamics.clone(v1,cloneInstances);
				});
			case "String":case "Date":
				return v;
			default:
				if(cloneInstances) {
					var o = Type.createEmptyInstance(c);
					var _g1 = 0;
					var _g2 = Type.getInstanceFields(c);
					while(_g1 < _g2.length) {
						var field = _g2[_g1];
						++_g1;
						Reflect.setField(o,field,thx_Dynamics.clone(Reflect.field(v,field),cloneInstances));
					}
					return o;
				} else return v;
			}
			break;
		}
	}
};
thx_Dynamics.compare = function(a,b) {
	if(null == a && null == b) return 0;
	if(null == a) return -1;
	if(null == b) return 1;
	if(!thx_Types.sameType(a,b)) return thx_Strings.compare(thx_Types.valueTypeToString(a),thx_Types.valueTypeToString(b));
	{
		var _g = Type["typeof"](a);
		switch(_g[1]) {
		case 1:
			return thx_Ints.compare(a,b);
		case 2:
			return thx_Floats.compare(a,b);
		case 3:
			return thx_Bools.compare(a,b);
		case 4:
			return thx_Objects.compare(a,b);
		case 6:
			var c = _g[2];
			var name = Type.getClassName(c);
			switch(name) {
			case "Array":
				return thx_Arrays.compare(a,b);
			case "String":
				return thx_Strings.compare(a,b);
			case "Date":
				return thx_Dates.compare(a,b);
			default:
				if(Object.prototype.hasOwnProperty.call(a,"compare")) return Reflect.callMethod(a,Reflect.field(a,"compare"),[b]); else return haxe_Utf8.compare(Std.string(a),Std.string(b));
			}
			break;
		case 7:
			var e = _g[2];
			return thx_Enums.compare(a,b);
		default:
			return 0;
		}
	}
};
thx_Dynamics.string = function(v) {
	{
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 0:
			return "null";
		case 1:case 2:case 3:
			return "" + Std.string(v);
		case 4:
			return thx_Objects.string(v);
		case 6:
			var c = _g[2];
			var _g1 = Type.getClassName(c);
			switch(_g1) {
			case "Array":
				return thx_Arrays.string(v);
			case "String":
				return v;
			case "Date":
				return HxOverrides.dateStr(v);
			default:
				if(js_Boot.__instanceof(v,haxe_IMap)) return thx_Maps.string(v); else return Std.string(v);
			}
			break;
		case 7:
			var e = _g[2];
			return thx_Enums.string(v);
		case 8:
			return "<unknown>";
		case 5:
			return "<function>";
		}
	}
};
var thx_DynamicsT = function() { };
thx_DynamicsT.__name__ = ["thx","DynamicsT"];
thx_DynamicsT.isEmpty = function(o) {
	return Reflect.fields(o).length == 0;
};
thx_DynamicsT.exists = function(o,name) {
	return Object.prototype.hasOwnProperty.call(o,name);
};
thx_DynamicsT.fields = function(o) {
	return Reflect.fields(o);
};
thx_DynamicsT.merge = function(to,from,replacef) {
	if(null == replacef) replacef = function(field,oldv,newv) {
		return newv;
	};
	var _g = 0;
	var _g1 = Reflect.fields(from);
	while(_g < _g1.length) {
		var field1 = _g1[_g];
		++_g;
		var newv1 = Reflect.field(from,field1);
		if(Object.prototype.hasOwnProperty.call(to,field1)) Reflect.setField(to,field1,replacef(field1,Reflect.field(to,field1),newv1)); else to[field1] = newv1;
	}
	return to;
};
thx_DynamicsT.size = function(o) {
	return Reflect.fields(o).length;
};
thx_DynamicsT.values = function(o) {
	return Reflect.fields(o).map(function(key) {
		return Reflect.field(o,key);
	});
};
thx_DynamicsT.tuples = function(o) {
	return Reflect.fields(o).map(function(key) {
		var _1 = Reflect.field(o,key);
		return { _0 : key, _1 : _1};
	});
};
var thx_Either = { __ename__ : ["thx","Either"], __constructs__ : ["Left","Right"] };
thx_Either.Left = function(value) { var $x = ["Left",0,value]; $x.__enum__ = thx_Either; $x.toString = $estr; return $x; };
thx_Either.Right = function(value) { var $x = ["Right",1,value]; $x.__enum__ = thx_Either; $x.toString = $estr; return $x; };
var thx_Eithers = function() { };
thx_Eithers.__name__ = ["thx","Eithers"];
thx_Eithers.isLeft = function(either) {
	switch(either[1]) {
	case 0:
		return true;
	case 1:
		return false;
	}
};
thx_Eithers.isRight = function(either) {
	switch(either[1]) {
	case 0:
		return false;
	case 1:
		return true;
	}
};
thx_Eithers.toLeft = function(either) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return haxe_ds_Option.Some(v);
	case 1:
		return haxe_ds_Option.None;
	}
};
thx_Eithers.toRight = function(either) {
	switch(either[1]) {
	case 0:
		return haxe_ds_Option.None;
	case 1:
		var v = either[2];
		return haxe_ds_Option.Some(v);
	}
};
thx_Eithers.toLeftUnsafe = function(either) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return v;
	case 1:
		return null;
	}
};
thx_Eithers.toRightUnsafe = function(either) {
	switch(either[1]) {
	case 0:
		return null;
	case 1:
		var v = either[2];
		return v;
	}
};
thx_Eithers.map = function(either,f) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return thx_Either.Left(v);
	case 1:
		var v1 = either[2];
		return thx_Either.Right(f(v1));
	}
};
thx_Eithers.flatMap = function(either,f) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return thx_Either.Left(v);
	case 1:
		var v1 = either[2];
		return f(v1);
	}
};
thx_Eithers.leftMap = function(either,f) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		return thx_Either.Left(f(v));
	case 1:
		var v1 = either[2];
		return thx_Either.Right(v1);
	}
};
thx_Eithers.orThrow = function(either,message) {
	switch(either[1]) {
	case 0:
		var v = either[2];
		throw new thx_Error("" + message + ": " + Std.string(v),null,{ fileName : "Eithers.hx", lineNumber : 93, className : "thx.Eithers", methodName : "orThrow"});
		break;
	case 1:
		var v1 = either[2];
		return v1;
	}
};
var thx_Enums = function() { };
thx_Enums.__name__ = ["thx","Enums"];
thx_Enums.string = function(e) {
	var cons = e[0];
	var params = [];
	var _g = 0;
	var _g1 = e.slice(2);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(thx_Dynamics.string(param));
	}
	return cons + (params.length == 0?"":"(" + params.join(", ") + ")");
};
thx_Enums.compare = function(a,b) {
	var v = a[1] - b[1];
	if(v != 0) return v;
	return thx_Arrays.compare(a.slice(2),b.slice(2));
};
thx_Enums.min = function(a,b) {
	if(thx_Enums.compare(a,b) < 0) return a; else return b;
};
thx_Enums.max = function(a,b) {
	if(thx_Enums.compare(a,b) > 0) return a; else return b;
};
var thx_Error = function(message,stack,pos) {
	Error.call(this,message);
	this.message = message;
	if(null == stack) {
		try {
			stack = haxe_CallStack.exceptionStack();
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			stack = [];
		}
		if(stack.length == 0) try {
			stack = haxe_CallStack.callStack();
		} catch( e1 ) {
			haxe_CallStack.lastException = e1;
			if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
			stack = [];
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
	pos: null
	,stackItems: null
	,toString: function() {
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
var thx_Floats = function() { };
thx_Floats.__name__ = ["thx","Floats"];
thx_Floats.angleDifference = function(a,b,turn) {
	if(turn == null) turn = 360.0;
	var r = (b - a) % turn;
	if(r < 0) r += turn;
	if(r > turn / 2) r -= turn;
	return r;
};
thx_Floats.ceilTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.ceil(f * p) / p;
};
thx_Floats.canParse = function(s) {
	return thx_Floats.pattern_parse.match(s);
};
thx_Floats.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
thx_Floats.clampSym = function(v,max) {
	return thx_Floats.clamp(v,-max,max);
};
thx_Floats.compare = function(a,b) {
	if(a < b) return -1; else if(a > b) return 1; else return 0;
};
thx_Floats.floorTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.floor(f * p) / p;
};
thx_Floats.interpolate = function(f,a,b) {
	return (b - a) * f + a;
};
thx_Floats.interpolateAngle = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	return thx_Floats.wrapCircular(thx_Floats.interpolate(f,a,a + thx_Floats.angleDifference(a,b,turn)),turn);
};
thx_Floats.interpolateAngleWidest = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	return thx_Floats.wrapCircular(thx_Floats.interpolateAngle(f,a,b,turn) - turn / 2,turn);
};
thx_Floats.interpolateAngleCW = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	a = thx_Floats.wrapCircular(a,turn);
	b = thx_Floats.wrapCircular(b,turn);
	if(b < a) b += turn;
	return thx_Floats.wrapCircular(thx_Floats.interpolate(f,a,b),turn);
};
thx_Floats.interpolateAngleCCW = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	a = thx_Floats.wrapCircular(a,turn);
	b = thx_Floats.wrapCircular(b,turn);
	if(b > a) b -= turn;
	return thx_Floats.wrapCircular(thx_Floats.interpolate(f,a,b),turn);
};
thx_Floats.max = function(a,b) {
	if(a > b) return a; else return b;
};
thx_Floats.min = function(a,b) {
	if(a < b) return a; else return b;
};
thx_Floats.nearEquals = function(a,b,tollerance) {
	if(tollerance == null) tollerance = 1e-9;
	if(isFinite(a)) return Math.abs(a - b) <= tollerance;
	if(isNaN(a)) return isNaN(b);
	if(isNaN(b)) return false;
	if(!isFinite(b)) return a > 0 == b > 0;
	return false;
};
thx_Floats.nearEqualAngles = function(a,b,turn,tollerance) {
	if(tollerance == null) tollerance = 1e-9;
	if(turn == null) turn = 360.0;
	return Math.abs(thx_Floats.angleDifference(a,b,turn)) <= tollerance;
};
thx_Floats.nearZero = function(n,tollerance) {
	if(tollerance == null) tollerance = 1e-9;
	return Math.abs(n) <= tollerance;
};
thx_Floats.normalize = function(v) {
	if(v < 0) return 0; else if(v > 1) return 1; else return v;
};
thx_Floats.parse = function(s) {
	if(s.substring(0,1) == "+") s = s.substring(1);
	return parseFloat(s);
};
thx_Floats.root = function(base,index) {
	return Math.pow(base,1 / index);
};
thx_Floats.roundTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.round(f * p) / p;
};
thx_Floats.sign = function(value) {
	if(value < 0) return -1; else return 1;
};
thx_Floats.toString = function(v) {
	return "" + v;
};
thx_Floats.toFloat = function(s) {
	return thx_Floats.parse(s);
};
thx_Floats.trunc = function(value) {
	if(value < 0.0) return Math.ceil(value); else return Math.floor(value);
};
thx_Floats.ftrunc = function(value) {
	if(value < 0.0) return Math.ceil(value); else return Math.floor(value);
};
thx_Floats.wrap = function(v,min,max) {
	var range = max - min + 1;
	if(v < min) v += range * ((min - v) / range + 1);
	return min + (v - min) % range;
};
thx_Floats.wrapCircular = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
};
var thx_Functions0 = function() { };
thx_Functions0.__name__ = ["thx","Functions0"];
thx_Functions0.after = function(callback,n) {
	return function() {
		if(--n == 0) callback();
	};
};
thx_Functions0.join = function(fa,fb) {
	return function() {
		fa();
		fb();
	};
};
thx_Functions0.once = function(f) {
	return function() {
		var t = f;
		f = thx_Functions.noop;
		t();
	};
};
thx_Functions0.negate = function(callback) {
	return function() {
		return !callback();
	};
};
thx_Functions0.times = function(n,callback) {
	return function() {
		return thx_Ints.range(n).map(function(_) {
			return callback();
		});
	};
};
thx_Functions0.timesi = function(n,callback) {
	return function() {
		return thx_Ints.range(n).map(function(i) {
			return callback(i);
		});
	};
};
var thx_Functions1 = function() { };
thx_Functions1.__name__ = ["thx","Functions1"];
thx_Functions1.compose = function(fa,fb) {
	return function(v) {
		return fa(fb(v));
	};
};
thx_Functions1.join = function(fa,fb) {
	return function(v) {
		fa(v);
		fb(v);
	};
};
thx_Functions1.memoize = function(callback,resolver) {
	if(null == resolver) resolver = function(v) {
		return "" + Std.string(v);
	};
	var map = new haxe_ds_StringMap();
	return function(v1) {
		var key = resolver(v1);
		if(__map_reserved[key] != null?map.existsReserved(key):map.h.hasOwnProperty(key)) return __map_reserved[key] != null?map.getReserved(key):map.h[key];
		var result = callback(v1);
		if(__map_reserved[key] != null) map.setReserved(key,result); else map.h[key] = result;
		return result;
	};
};
thx_Functions1.negate = function(callback) {
	return function(v) {
		return !callback(v);
	};
};
thx_Functions1.noop = function(_) {
};
thx_Functions1.times = function(n,callback) {
	return function(value) {
		return thx_Ints.range(n).map(function(_) {
			return callback(value);
		});
	};
};
thx_Functions1.timesi = function(n,callback) {
	return function(value) {
		return thx_Ints.range(n).map(function(i) {
			return callback(value,i);
		});
	};
};
thx_Functions1.swapArguments = function(callback) {
	return function(a2,a1) {
		return callback(a1,a2);
	};
};
var thx_Functions2 = function() { };
thx_Functions2.__name__ = ["thx","Functions2"];
thx_Functions2.memoize = function(callback,resolver) {
	if(null == resolver) resolver = function(v1,v2) {
		return "" + Std.string(v1) + ":" + Std.string(v2);
	};
	var map = new haxe_ds_StringMap();
	return function(v11,v21) {
		var key = resolver(v11,v21);
		if(__map_reserved[key] != null?map.existsReserved(key):map.h.hasOwnProperty(key)) return __map_reserved[key] != null?map.getReserved(key):map.h[key];
		var result = callback(v11,v21);
		if(__map_reserved[key] != null) map.setReserved(key,result); else map.h[key] = result;
		return result;
	};
};
thx_Functions2.curry = function(f) {
	return function(a) {
		return function(b) {
			return f(a,b);
		};
	};
};
thx_Functions2.negate = function(callback) {
	return function(v1,v2) {
		return !callback(v1,v2);
	};
};
var thx_Functions3 = function() { };
thx_Functions3.__name__ = ["thx","Functions3"];
thx_Functions3.memoize = function(callback,resolver) {
	if(null == resolver) resolver = function(v1,v2,v3) {
		return "" + Std.string(v1) + ":" + Std.string(v2) + ":" + Std.string(v3);
	};
	var map = new haxe_ds_StringMap();
	return function(v11,v21,v31) {
		var key = resolver(v11,v21,v31);
		if(__map_reserved[key] != null?map.existsReserved(key):map.h.hasOwnProperty(key)) return __map_reserved[key] != null?map.getReserved(key):map.h[key];
		var result = callback(v11,v21,v31);
		if(__map_reserved[key] != null) map.setReserved(key,result); else map.h[key] = result;
		return result;
	};
};
thx_Functions3.negate = function(callback) {
	return function(v1,v2,v3) {
		return !callback(v1,v2,v3);
	};
};
thx_Functions3.curry = function(f) {
	return function(a,b) {
		return function(c) {
			return f(a,b,c);
		};
	};
};
var thx_Functions4 = function() { };
thx_Functions4.__name__ = ["thx","Functions4"];
thx_Functions4.curry = function(f) {
	return function(a,b,c) {
		return function(d) {
			return f(a,b,c,d);
		};
	};
};
var thx_Functions5 = function() { };
thx_Functions5.__name__ = ["thx","Functions5"];
thx_Functions5.curry = function(f) {
	return function(a,b,c,d) {
		return function(e) {
			return f(a,b,c,d,e);
		};
	};
};
var thx_Functions6 = function() { };
thx_Functions6.__name__ = ["thx","Functions6"];
thx_Functions6.curry = function(f) {
	return function(a,b,c,d,e) {
		return function(f0) {
			return f(a,b,c,d,e,f0);
		};
	};
};
var thx_Functions7 = function() { };
thx_Functions7.__name__ = ["thx","Functions7"];
thx_Functions7.curry = function(f) {
	return function(a,b,c,d,e,f0) {
		return function(g) {
			return f(a,b,c,d,e,f0,g);
		};
	};
};
var thx_Functions8 = function() { };
thx_Functions8.__name__ = ["thx","Functions8"];
thx_Functions8.curry = function(f) {
	return function(a,b,c,d,e,f0,g) {
		return function(h) {
			return f(a,b,c,d,e,f0,g,h);
		};
	};
};
var thx__$Functions_Reader_$Impl_$ = {};
thx__$Functions_Reader_$Impl_$.__name__ = ["thx","_Functions","Reader_Impl_"];
thx__$Functions_Reader_$Impl_$.flatMap = function(this1,f) {
	return function(a) {
		return (f(this1(a)))(a);
	};
};
var thx_Functions = function() { };
thx_Functions.__name__ = ["thx","Functions"];
thx_Functions.equality = function(a,b) {
	return a == b;
};
thx_Functions.identity = function(value) {
	return value;
};
thx_Functions.noop = function() {
};
var thx_OrderingImpl = { __ename__ : ["thx","OrderingImpl"], __constructs__ : ["LT","GT","EQ"] };
thx_OrderingImpl.LT = ["LT",0];
thx_OrderingImpl.LT.toString = $estr;
thx_OrderingImpl.LT.__enum__ = thx_OrderingImpl;
thx_OrderingImpl.GT = ["GT",1];
thx_OrderingImpl.GT.toString = $estr;
thx_OrderingImpl.GT.__enum__ = thx_OrderingImpl;
thx_OrderingImpl.EQ = ["EQ",2];
thx_OrderingImpl.EQ.toString = $estr;
thx_OrderingImpl.EQ.__enum__ = thx_OrderingImpl;
var thx_Ints = function() { };
thx_Ints.__name__ = ["thx","Ints"];
thx_Ints.abs = function(v) {
	if(v < 0) return -v; else return v;
};
thx_Ints.canParse = function(s) {
	return thx_Ints.pattern_parse.match(s);
};
thx_Ints.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
thx_Ints.clampSym = function(v,max) {
	return thx_Ints.clamp(v,-max,max);
};
thx_Ints.compare = function(a,b) {
	return a - b;
};
thx_Ints.gcd = function(m,n) {
	if(m < 0) m = -m; else m = m;
	if(n < 0) n = -n; else n = n;
	if(n == 0) return m;
	return thx_Ints.gcd(n,m % n);
};
thx_Ints.interpolate = function(f,a,b) {
	return Math.round(a + (b - a) * f);
};
thx_Ints.isEven = function(v) {
	return v % 2 == 0;
};
thx_Ints.isOdd = function(v) {
	return v % 2 != 0;
};
thx_Ints.lpad = function(v,pad,len) {
	if(pad == null) pad = "0";
	var neg = false;
	if(v < 0) {
		neg = true;
		v = -v;
	}
	return (neg?"-":"") + StringTools.lpad("" + v,pad,len);
};
thx_Ints.lcm = function(m,n) {
	if(m < 0) m = -m; else m = m;
	if(n < 0) n = -n; else n = n;
	if(n == 0) return m;
	return m * Std["int"](n / thx_Ints.gcd(m,n));
};
thx_Ints.rpad = function(v,pad,len) {
	if(pad == null) pad = "0";
	return StringTools.rpad("" + v,pad,len);
};
thx_Ints.max = function(a,b) {
	if(a > b) return a; else return b;
};
thx_Ints.min = function(a,b) {
	if(a < b) return a; else return b;
};
thx_Ints.parse = function(s,base) {
	if(null == base) {
		if(s.substring(0,2) == "0x") base = 16; else base = 10;
	}
	var v = parseInt(s,base);
	if(isNaN(v)) return null; else return v;
};
thx_Ints.random = function(min,max) {
	if(min == null) min = 0;
	return Std.random(max + 1) + min;
};
thx_Ints.range = function(start,stop,step) {
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Infinity) throw new js__$Boot_HaxeError("infinite range");
	var range = [];
	var i = -1;
	var j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
};
thx_Ints.rangeIter = function(start,stop,step) {
	if(step == null) step = 1;
	return new thx_RangeIterator(start,stop,step);
};
thx_Ints.toString = function(value,base) {
	return value.toString(base);
};
thx_Ints.toBase = function(value,base) {
	return value.toString(base);
};
thx_Ints.toBool = function(v) {
	return v != 0;
};
thx_Ints.toInt = function(s,base) {
	return thx_Ints.parse(s,base);
};
thx_Ints.sign = function(value) {
	if(value < 0) return -1; else return 1;
};
thx_Ints.wrapCircular = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
};
var thx_RangeIterator = function(start,stop,step) {
	if(step == null) step = 1;
	this.current = start;
	this.stop = stop;
	this.step = step;
};
thx_RangeIterator.__name__ = ["thx","RangeIterator"];
thx_RangeIterator.prototype = {
	current: null
	,stop: null
	,step: null
	,hasNext: function() {
		return this.stop == null || this.step >= 0 && this.current < this.stop || this.step < 0 && this.current > this.stop;
	}
	,next: function() {
		var result = this.current;
		this.current += this.step;
		return result;
	}
	,__class__: thx_RangeIterator
};
var thx_Iterables = function() { };
thx_Iterables.__name__ = ["thx","Iterables"];
thx_Iterables.all = function(it,predicate) {
	return thx_Iterators.all($iterator(it)(),predicate);
};
thx_Iterables.any = function(it,predicate) {
	return thx_Iterators.any($iterator(it)(),predicate);
};
thx_Iterables.eachPair = function(it,handler) {
	thx_Iterators.eachPair($iterator(it)(),handler);
	return;
};
thx_Iterables.equals = function(a,b,equality) {
	return thx_Iterators.equals($iterator(a)(),$iterator(b)(),equality);
};
thx_Iterables.filter = function(it,predicate) {
	return thx_Iterators.filter($iterator(it)(),predicate);
};
thx_Iterables.find = function(it,predicate) {
	return thx_Iterators.find($iterator(it)(),predicate);
};
thx_Iterables.first = function(it) {
	return thx_Iterators.first($iterator(it)());
};
thx_Iterables.get = function(it,index) {
	return thx_Iterators.get($iterator(it)(),index);
};
thx_Iterables.last = function(it) {
	return thx_Iterators.last($iterator(it)());
};
thx_Iterables.hasElements = function(it) {
	return thx_Iterators.hasElements($iterator(it)());
};
thx_Iterables.indexOf = function(it,element) {
	return thx_Iterators.indexOf($iterator(it)(),element);
};
thx_Iterables.isEmpty = function(it) {
	return thx_Iterators.isEmpty($iterator(it)());
};
thx_Iterables.isIterable = function(v) {
	var fields;
	if(Reflect.isObject(v) && null == Type.getClass(v)) fields = Reflect.fields(v); else fields = Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) return false;
	return Reflect.isFunction(Reflect.field(v,"iterator"));
};
thx_Iterables.map = function(it,f) {
	return thx_Iterators.map($iterator(it)(),f);
};
thx_Iterables.mapi = function(it,f) {
	return thx_Iterators.mapi($iterator(it)(),f);
};
thx_Iterables.order = function(it,sort) {
	return thx_Iterators.order($iterator(it)(),sort);
};
thx_Iterables.reduce = function(it,callback,initial) {
	return thx_Iterators.reduce($iterator(it)(),callback,initial);
};
thx_Iterables.reducei = function(it,callback,initial) {
	return thx_Iterators.reducei($iterator(it)(),callback,initial);
};
thx_Iterables.toArray = function(it) {
	return thx_Iterators.toArray($iterator(it)());
};
thx_Iterables.minBy = function(it,f,ord) {
	var found = haxe_ds_Option.None;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var a = $it0.next();
		var a1 = [a];
		if(thx_Options.any(found,(function(a1) {
			return function(a0) {
				return ord(f(a0),f(a1[0])) == thx_OrderingImpl.LT;
			};
		})(a1))) found = found; else found = haxe_ds_Option.Some(a1[0]);
	}
	return found;
};
thx_Iterables.maxBy = function(it,f,ord) {
	return thx_Iterables.minBy(it,f,thx__$Ord_Ord_$Impl_$.inverse(ord));
};
thx_Iterables.min = function(it,ord) {
	return thx_Iterables.minBy(it,thx_Functions.identity,ord);
};
thx_Iterables.max = function(it,ord) {
	return thx_Iterables.min(it,thx__$Ord_Ord_$Impl_$.inverse(ord));
};
thx_Iterables.extremaBy = function(it,f,ord) {
	var found = haxe_ds_Option.None;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var a = $it0.next();
		switch(found[1]) {
		case 1:
			found = haxe_ds_Option.Some({ _0 : a, _1 : a});
			break;
		case 0:
			var t = found[2];
			if(ord(f(a),f(t._0)) == thx_OrderingImpl.LT) found = haxe_ds_Option.Some({ _0 : a, _1 : t._1}); else {
				var t1 = found[2];
				if(ord(f(a),f(t1._1)) == thx_OrderingImpl.GT) found = haxe_ds_Option.Some({ _0 : t1._0, _1 : a}); else found = found;
			}
			break;
		default:
			found = found;
		}
	}
	return found;
};
thx_Iterables.extrema = function(it,ord) {
	return thx_Iterables.extremaBy(it,thx_Functions.identity,ord);
};
thx_Iterables.unzip = function(it) {
	return thx_Iterators.unzip($iterator(it)());
};
thx_Iterables.unzip3 = function(it) {
	return thx_Iterators.unzip3($iterator(it)());
};
thx_Iterables.unzip4 = function(it) {
	return thx_Iterators.unzip4($iterator(it)());
};
thx_Iterables.unzip5 = function(it) {
	return thx_Iterators.unzip5($iterator(it)());
};
thx_Iterables.zip = function(it1,it2) {
	return thx_Iterators.zip($iterator(it1)(),$iterator(it2)());
};
thx_Iterables.zip3 = function(it1,it2,it3) {
	return thx_Iterators.zip3($iterator(it1)(),$iterator(it2)(),$iterator(it3)());
};
thx_Iterables.zip4 = function(it1,it2,it3,it4) {
	return thx_Iterators.zip4($iterator(it1)(),$iterator(it2)(),$iterator(it3)(),$iterator(it4)());
};
thx_Iterables.zip5 = function(it1,it2,it3,it4,it5) {
	return thx_Iterators.zip5($iterator(it1)(),$iterator(it2)(),$iterator(it3)(),$iterator(it4)(),$iterator(it5)());
};
var thx_Iterators = function() { };
thx_Iterators.__name__ = ["thx","Iterators"];
thx_Iterators.all = function(it,predicate) {
	while( it.hasNext() ) {
		var element = it.next();
		if(!predicate(element)) return false;
	}
	return true;
};
thx_Iterators.any = function(it,predicate) {
	while( it.hasNext() ) {
		var element = it.next();
		if(predicate(element)) return true;
	}
	return false;
};
thx_Iterators.equals = function(a,b,equality) {
	if(null == equality) equality = thx_Functions.equality;
	var ae;
	var be;
	var an;
	var bn;
	while(true) {
		an = a.hasNext();
		bn = b.hasNext();
		if(!an && !bn) return true;
		if(!an || !bn) return false;
		if(!equality(a.next(),b.next())) return false;
	}
};
thx_Iterators.get = function(it,index) {
	var pos = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(pos++ == index) return i;
	}
	return null;
};
thx_Iterators.eachPair = function(it,handler) {
	thx_Arrays.eachPair(thx_Iterators.toArray(it),handler);
};
thx_Iterators.filter = function(it,predicate) {
	return thx_Iterators.reduce(it,function(acc,element) {
		if(predicate(element)) acc.push(element);
		return acc;
	},[]);
};
thx_Iterators.find = function(it,f) {
	while( it.hasNext() ) {
		var element = it.next();
		if(f(element)) return element;
	}
	return null;
};
thx_Iterators.first = function(it) {
	if(it.hasNext()) return it.next(); else return null;
};
thx_Iterators.hasElements = function(it) {
	return it.hasNext();
};
thx_Iterators.indexOf = function(it,element) {
	var pos = 0;
	while( it.hasNext() ) {
		var v = it.next();
		if(element == v) return pos;
		pos++;
	}
	return -1;
};
thx_Iterators.isEmpty = function(it) {
	return !it.hasNext();
};
thx_Iterators.isIterator = function(v) {
	var fields;
	if(Reflect.isObject(v) && null == Type.getClass(v)) fields = Reflect.fields(v); else fields = Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) return false;
	return Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
};
thx_Iterators.last = function(it) {
	var buf = null;
	while(it.hasNext()) buf = it.next();
	return buf;
};
thx_Iterators.map = function(it,f) {
	var acc = [];
	while( it.hasNext() ) {
		var v = it.next();
		acc.push(f(v));
	}
	return acc;
};
thx_Iterators.mapi = function(it,f) {
	var acc = [];
	var i = 0;
	while( it.hasNext() ) {
		var v = it.next();
		acc.push(f(v,i++));
	}
	return acc;
};
thx_Iterators.order = function(it,sort) {
	var n = thx_Iterators.toArray(it);
	n.sort(sort);
	return n;
};
thx_Iterators.reduce = function(it,callback,initial) {
	thx_Iterators.map(it,function(v) {
		initial = callback(initial,v);
	});
	return initial;
};
thx_Iterators.reducei = function(it,callback,initial) {
	thx_Iterators.mapi(it,function(v,i) {
		initial = callback(initial,v,i);
	});
	return initial;
};
thx_Iterators.toArray = function(it) {
	var elements = [];
	while( it.hasNext() ) {
		var element = it.next();
		elements.push(element);
	}
	return elements;
};
thx_Iterators.unzip = function(it) {
	var a1 = [];
	var a2 = [];
	thx_Iterators.map(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
	});
	return { _0 : a1, _1 : a2};
};
thx_Iterators.unzip3 = function(it) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	thx_Iterators.map(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
	});
	return { _0 : a1, _1 : a2, _2 : a3};
};
thx_Iterators.unzip4 = function(it) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	thx_Iterators.map(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
	});
	return { _0 : a1, _1 : a2, _2 : a3, _3 : a4};
};
thx_Iterators.unzip5 = function(it) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	var a5 = [];
	thx_Iterators.map(it,function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
		a5.push(t._4);
	});
	return { _0 : a1, _1 : a2, _2 : a3, _3 : a4, _4 : a5};
};
thx_Iterators.zip = function(it1,it2) {
	var array = [];
	while(it1.hasNext() && it2.hasNext()) array.push((function($this) {
		var $r;
		var _0 = it1.next();
		var _1 = it2.next();
		$r = { _0 : _0, _1 : _1};
		return $r;
	}(this)));
	return array;
};
thx_Iterators.zip3 = function(it1,it2,it3) {
	var array = [];
	while(it1.hasNext() && it2.hasNext() && it3.hasNext()) array.push((function($this) {
		var $r;
		var _0 = it1.next();
		var _1 = it2.next();
		var _2 = it3.next();
		$r = { _0 : _0, _1 : _1, _2 : _2};
		return $r;
	}(this)));
	return array;
};
thx_Iterators.zip4 = function(it1,it2,it3,it4) {
	var array = [];
	while(it1.hasNext() && it2.hasNext() && it3.hasNext() && it4.hasNext()) array.push((function($this) {
		var $r;
		var _0 = it1.next();
		var _1 = it2.next();
		var _2 = it3.next();
		var _3 = it4.next();
		$r = { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
		return $r;
	}(this)));
	return array;
};
thx_Iterators.zip5 = function(it1,it2,it3,it4,it5) {
	var array = [];
	while(it1.hasNext() && it2.hasNext() && it3.hasNext() && it4.hasNext() && it5.hasNext()) array.push((function($this) {
		var $r;
		var _0 = it1.next();
		var _1 = it2.next();
		var _2 = it3.next();
		var _3 = it4.next();
		var _4 = it5.next();
		$r = { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4};
		return $r;
	}(this)));
	return array;
};
var thx_Maps = function() { };
thx_Maps.__name__ = ["thx","Maps"];
thx_Maps.copyTo = function(src,dst) {
	var $it0 = src.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		dst.set(key,src.get(key));
	}
	return dst;
};
thx_Maps.tuples = function(map) {
	return thx_Iterators.map(map.keys(),function(key) {
		var _1 = map.get(key);
		return { _0 : key, _1 : _1};
	});
};
thx_Maps.mapValues = function(map,f,acc) {
	return thx_Maps.reduce(map,function(m,t) {
		var value = f(t._1);
		m.set(t._0,value);
		return m;
	},acc);
};
thx_Maps.reduce = function(map,f,acc) {
	return thx_Arrays.reduce(thx_Maps.tuples(map),f,acc);
};
thx_Maps.values = function(map) {
	return thx_Iterators.map(map.keys(),function(key) {
		return map.get(key);
	});
};
thx_Maps.getOption = function(map,key) {
	return thx_Options.ofValue(map.get(key));
};
thx_Maps.toObject = function(map) {
	return thx_Arrays.reduce(thx_Maps.tuples(map),function(o,t) {
		o[t._0] = t._1;
		return o;
	},{ });
};
thx_Maps.getAlt = function(map,key,alt) {
	var v = map.get(key);
	if(null == v) return alt; else return v;
};
thx_Maps.isMap = function(v) {
	return js_Boot.__instanceof(v,haxe_IMap);
};
thx_Maps.string = function(m) {
	return "[" + thx_Maps.tuples(m).map(function(t) {
		return thx_Dynamics.string(t._0) + " => " + thx_Dynamics.string(t._1);
	}).join(", ") + "]";
};
thx_Maps.merge = function(dest,sources) {
	return sources.reduce(function(result,source) {
		return thx_Iterators.reduce(source.keys(),function(result1,key) {
			result1.set(key,source.get(key));
			return result1;
		},result);
	},dest);
};
var thx__$Monoid_Monoid_$Impl_$ = {};
thx__$Monoid_Monoid_$Impl_$.__name__ = ["thx","_Monoid","Monoid_Impl_"];
thx__$Monoid_Monoid_$Impl_$.get_semigroup = function(this1) {
	return this1.append;
};
thx__$Monoid_Monoid_$Impl_$.get_zero = function(this1) {
	return this1.zero;
};
thx__$Monoid_Monoid_$Impl_$.append = function(this1,a0,a1) {
	return this1.append(a0,a1);
};
var thx__$Nel_Nel_$Impl_$ = {};
thx__$Nel_Nel_$Impl_$.__name__ = ["thx","_Nel","Nel_Impl_"];
thx__$Nel_Nel_$Impl_$.nel = function(hd,tl) {
	{
		var _g = thx__$Nel_Nel_$Impl_$.fromArray(tl);
		switch(_g[1]) {
		case 0:
			var nel = _g[2];
			return thx__$Nel_Nel_$Impl_$.cons(hd,nel);
		case 1:
			return thx__$Nel_Nel_$Impl_$.pure(hd);
		}
	}
};
thx__$Nel_Nel_$Impl_$.pure = function(a) {
	return thx_NonEmptyList.Single(a);
};
thx__$Nel_Nel_$Impl_$.cons = function(a,nl) {
	return thx_NonEmptyList.ConsNel(a,nl);
};
thx__$Nel_Nel_$Impl_$.fromArray = function(arr) {
	if(arr.length == 0) return haxe_ds_Option.None; else {
		var res = thx_NonEmptyList.Single(arr[arr.length - 1]);
		var $it0 = thx_Ints.rangeIter(arr.length - 2,-1,-1);
		while( $it0.hasNext() ) {
			var i = $it0.next();
			res = thx_NonEmptyList.ConsNel(arr[i],res);
		}
		return haxe_ds_Option.Some(res);
	}
};
thx__$Nel_Nel_$Impl_$.map = function(this1,f) {
	return thx__$Nel_Nel_$Impl_$.flatMap(this1,thx_Functions1.compose(thx__$Nel_Nel_$Impl_$.pure,f));
};
thx__$Nel_Nel_$Impl_$.flatMap = function(this1,f) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return f(x);
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return thx__$Nel_Nel_$Impl_$.append(f(x1),thx__$Nel_Nel_$Impl_$.flatMap(xs,f));
	}
};
thx__$Nel_Nel_$Impl_$.append = function(this1,nel) {
	switch(this1[1]) {
	case 0:
		var x = this1[2];
		return thx_NonEmptyList.ConsNel(x,nel);
	case 1:
		var xs = this1[3];
		var x1 = this1[2];
		return thx_NonEmptyList.ConsNel(x1,thx__$Nel_Nel_$Impl_$.append(xs,nel));
	}
};
thx__$Nel_Nel_$Impl_$.toArray = function(this1) {
	var go;
	var go1 = null;
	go1 = function(acc,xs) {
		switch(xs[1]) {
		case 0:
			var x = xs[2];
			return thx_Arrays.append(acc,x);
		case 1:
			var xs1 = xs[3];
			var x1 = xs[2];
			return go1(thx_Arrays.append(acc,x1),xs1);
		}
	};
	go = go1;
	return thx_Arrays.reversed(go([],this1));
};
thx__$Nel_Nel_$Impl_$.semigroup = function() {
	return function(nl,nr) {
		return thx__$Nel_Nel_$Impl_$.append(nl,nr);
	};
};
var thx_NonEmptyList = { __ename__ : ["thx","NonEmptyList"], __constructs__ : ["Single","ConsNel"] };
thx_NonEmptyList.Single = function(x) { var $x = ["Single",0,x]; $x.__enum__ = thx_NonEmptyList; $x.toString = $estr; return $x; };
thx_NonEmptyList.ConsNel = function(x,xs) { var $x = ["ConsNel",1,x,xs]; $x.__enum__ = thx_NonEmptyList; $x.toString = $estr; return $x; };
var thx_Nil = { __ename__ : ["thx","Nil"], __constructs__ : ["nil"] };
thx_Nil.nil = ["nil",0];
thx_Nil.nil.toString = $estr;
thx_Nil.nil.__enum__ = thx_Nil;
var thx_Objects = function() { };
thx_Objects.__name__ = ["thx","Objects"];
thx_Objects.compare = function(a,b) {
	var v;
	var fields;
	if((v = thx_Arrays.compare(fields = Reflect.fields(a),Reflect.fields(b))) != 0) return v;
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		if((v = thx_Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field))) != 0) return v;
	}
	return 0;
};
thx_Objects.isEmpty = function(o) {
	return Reflect.fields(o).length == 0;
};
thx_Objects.exists = function(o,name) {
	return Object.prototype.hasOwnProperty.call(o,name);
};
thx_Objects.fields = function(o) {
	return Reflect.fields(o);
};
thx_Objects.combine = function(first,second) {
	var to = { };
	var _g = 0;
	var _g1 = Reflect.fields(first);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		Reflect.setField(to,field,Reflect.field(first,field));
	}
	var _g2 = 0;
	var _g11 = Reflect.fields(second);
	while(_g2 < _g11.length) {
		var field1 = _g11[_g2];
		++_g2;
		Reflect.setField(to,field1,Reflect.field(second,field1));
	}
	return to;
};
thx_Objects.assign = function(to,from,replacef) {
	if(null == replacef) replacef = function(field,oldv,newv) {
		return newv;
	};
	var _g = 0;
	var _g1 = Reflect.fields(from);
	while(_g < _g1.length) {
		var field1 = _g1[_g];
		++_g;
		var newv1 = Reflect.field(from,field1);
		if(Object.prototype.hasOwnProperty.call(to,field1)) Reflect.setField(to,field1,replacef(field1,Reflect.field(to,field1),newv1)); else to[field1] = newv1;
	}
	return to;
};
thx_Objects.copyTo = function(src,dst,cloneInstances) {
	if(cloneInstances == null) cloneInstances = false;
	var _g = 0;
	var _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var sv = thx_Dynamics.clone(Reflect.field(src,field),cloneInstances);
		var dv = Reflect.field(dst,field);
		if(Reflect.isObject(sv) && null == Type.getClass(sv) && (Reflect.isObject(dv) && null == Type.getClass(dv))) thx_Objects.copyTo(sv,dv); else dst[field] = sv;
	}
	return dst;
};
thx_Objects.clone = function(src,cloneInstances) {
	if(cloneInstances == null) cloneInstances = false;
	return thx_Dynamics.clone(src,cloneInstances);
};
thx_Objects.toMap = function(o) {
	return thx_Arrays.reduce(thx_Objects.tuples(o),function(map,t) {
		var value = t._1;
		map.set(t._0,value);
		return map;
	},new haxe_ds_StringMap());
};
thx_Objects.size = function(o) {
	return Reflect.fields(o).length;
};
thx_Objects.string = function(o) {
	return "{" + Reflect.fields(o).map(function(key) {
		var v = Reflect.field(o,key);
		var s;
		if(typeof(v) == "string") s = thx_Strings.quote(v); else s = thx_Dynamics.string(v);
		return "" + key + " : " + s;
	}).join(", ") + "}";
};
thx_Objects.stringImpl = function(o,cache) {
};
thx_Objects.values = function(o) {
	return Reflect.fields(o).map(function(key) {
		return Reflect.field(o,key);
	});
};
thx_Objects.tuples = function(o) {
	return Reflect.fields(o).map(function(key) {
		var _1 = Reflect.field(o,key);
		return { _0 : key, _1 : _1};
	});
};
thx_Objects.hasPath = function(o,path) {
	var paths = path.split(".");
	var current = o;
	var _g = 0;
	while(_g < paths.length) {
		var currentPath = paths[_g];
		++_g;
		if(thx_Strings.DIGITS.match(currentPath)) {
			var index = Std.parseInt(currentPath);
			var arr = Std.instance(current,Array);
			if(null == arr || arr.length <= index) return false;
			current = arr[index];
		} else if(Object.prototype.hasOwnProperty.call(current,currentPath)) current = Reflect.field(current,currentPath); else return false;
	}
	return true;
};
thx_Objects.hasPathValue = function(o,path) {
	return thx_Objects.getPath(o,path) != null;
};
thx_Objects.getPath = function(o,path) {
	var paths = path.split(".");
	var current = o;
	var _g = 0;
	while(_g < paths.length) {
		var currentPath = paths[_g];
		++_g;
		if(thx_Strings.DIGITS.match(currentPath)) {
			var index = Std.parseInt(currentPath);
			var arr = Std.instance(current,Array);
			if(null == arr) return null;
			current = arr[index];
		} else if(Object.prototype.hasOwnProperty.call(current,currentPath)) current = Reflect.field(current,currentPath); else return null;
	}
	return current;
};
thx_Objects.getPathOr = function(o,path,alt) {
	var paths = path.split(".");
	var current = o;
	var _g = 0;
	while(_g < paths.length) {
		var currentPath = paths[_g];
		++_g;
		if(thx_Strings.DIGITS.match(currentPath)) {
			var index = Std.parseInt(currentPath);
			var arr = Std.instance(current,Array);
			if(null == arr) return null;
			current = arr[index];
		} else if(Object.prototype.hasOwnProperty.call(current,currentPath)) current = Reflect.field(current,currentPath); else return alt;
	}
	return current;
};
thx_Objects.setPath = function(o,path,val) {
	var paths = path.split(".");
	var current = o;
	var _g1 = 0;
	var _g = paths.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		var currentPath = paths[i];
		var nextPath = paths[i + 1];
		if(thx_Strings.DIGITS.match(currentPath) || currentPath == "*") {
			var index;
			if(currentPath == "*") index = current.length; else index = Std.parseInt(currentPath);
			if(current[index] == null) {
				if(thx_Strings.DIGITS.match(nextPath) || nextPath == "*") current[index] = []; else current[index] = { };
			}
			current = current[index];
		} else {
			if(!Object.prototype.hasOwnProperty.call(current,currentPath)) {
				if(thx_Strings.DIGITS.match(nextPath) || nextPath == "*") current[currentPath] = []; else current[currentPath] = { };
			}
			current = Reflect.field(current,currentPath);
		}
	}
	var p = paths[paths.length - 1];
	if(thx_Strings.DIGITS.match(p)) {
		var index1 = Std.parseInt(p);
		current[index1] = val;
	} else if(p == "*") current.push(val); else current[p] = val;
	return o;
};
thx_Objects.removePath = function(o,path) {
	var paths = path.split(".");
	var target = paths.pop();
	try {
		var sub = paths.reduce(function(existing,nextPath) {
			if(nextPath == "*") return existing.pop(); else if(thx_Strings.DIGITS.match(nextPath)) {
				var current = existing;
				var index = Std.parseInt(nextPath);
				return current[index];
			} else return Reflect.field(existing,nextPath);
		},o);
		if(null != sub) Reflect.deleteField(sub,target);
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
	}
	return o;
};
var thx_Options = function() { };
thx_Options.__name__ = ["thx","Options"];
thx_Options.ofValue = function(value) {
	if(null == value) return haxe_ds_Option.None; else return haxe_ds_Option.Some(value);
};
thx_Options.maybe = function(value) {
	if(null == value) return haxe_ds_Option.None; else return haxe_ds_Option.Some(value);
};
thx_Options.equals = function(a,b,eq) {
	switch(a[1]) {
	case 1:
		switch(b[1]) {
		case 1:
			return true;
		default:
			return false;
		}
		break;
	case 0:
		switch(b[1]) {
		case 0:
			var a1 = a[2];
			var b1 = b[2];
			if(null == eq) eq = function(a2,b2) {
				return a2 == b2;
			};
			return eq(a1,b1);
		default:
			return false;
		}
		break;
	}
};
thx_Options.equalsValue = function(a,b,eq) {
	return thx_Options.equals(a,null == b?haxe_ds_Option.None:haxe_ds_Option.Some(b),eq);
};
thx_Options.map = function(option,callback) {
	switch(option[1]) {
	case 1:
		return haxe_ds_Option.None;
	case 0:
		var v = option[2];
		return haxe_ds_Option.Some(callback(v));
	}
};
thx_Options.ap = function(option,fopt) {
	switch(option[1]) {
	case 1:
		return haxe_ds_Option.None;
	case 0:
		var v = option[2];
		return thx_Options.map(fopt,function(f) {
			return f(v);
		});
	}
};
thx_Options.flatMap = function(option,callback) {
	switch(option[1]) {
	case 1:
		return haxe_ds_Option.None;
	case 0:
		var v = option[2];
		return callback(v);
	}
};
thx_Options.join = function(option) {
	switch(option[1]) {
	case 1:
		return haxe_ds_Option.None;
	case 0:
		var v = option[2];
		return v;
	}
};
thx_Options.foldLeft = function(option,b,f) {
	switch(option[1]) {
	case 1:
		return b;
	case 0:
		var v = option[2];
		return f(b,v);
	}
};
thx_Options.toArray = function(option) {
	switch(option[1]) {
	case 1:
		return [];
	case 0:
		var v = option[2];
		return [v];
	}
};
thx_Options.toBool = function(option) {
	switch(option[1]) {
	case 1:
		return false;
	case 0:
		return true;
	}
};
thx_Options.toOption = function(value) {
	if(null == value) return haxe_ds_Option.None; else return haxe_ds_Option.Some(value);
};
thx_Options.get = function(option) {
	switch(option[1]) {
	case 1:
		return null;
	case 0:
		var v = option[2];
		return v;
	}
};
thx_Options.getOrElse = function(option,alt) {
	switch(option[1]) {
	case 1:
		return alt;
	case 0:
		var v = option[2];
		return v;
	}
};
thx_Options.orElse = function(option,alt) {
	switch(option[1]) {
	case 1:
		return alt;
	case 0:
		return option;
	}
};
thx_Options.all = function(option,f) {
	switch(option[1]) {
	case 1:
		return true;
	case 0:
		var v = option[2];
		return f(v);
	}
};
thx_Options.any = function(option,f) {
	switch(option[1]) {
	case 1:
		return false;
	case 0:
		var v = option[2];
		return f(v);
	}
};
thx_Options.traverseValidation = function(option,f) {
	switch(option[1]) {
	case 0:
		var v = option[2];
		var this1 = f(v);
		return thx__$Validation_Validation_$Impl_$.ap(this1,thx_Either.Right(function(v1) {
			return haxe_ds_Option.Some(v1);
		}),function(e1,e2) {
			throw new js__$Boot_HaxeError("Unreachable");
		});
	case 1:
		return thx_Either.Right(haxe_ds_Option.None);
	}
};
thx_Options.toSuccess = function(option,error) {
	switch(option[1]) {
	case 1:
		return thx_Either.Left(error);
	case 0:
		var v = option[2];
		return thx_Either.Right(v);
	}
};
thx_Options.toSuccessNel = function(option,error) {
	switch(option[1]) {
	case 1:
		return thx_Either.Left(thx__$Nel_Nel_$Impl_$.pure(error));
	case 0:
		var v = option[2];
		return thx_Either.Right(v);
	}
};
thx_Options.ap2 = function(f,v1,v2) {
	return thx_Options.ap(v2,thx_Options.map(v1,thx_Functions2.curry(f)));
};
thx_Options.ap3 = function(f,v1,v2,v3) {
	return thx_Options.ap(v3,thx_Options.ap2(thx_Functions3.curry(f),v1,v2));
};
thx_Options.ap4 = function(f,v1,v2,v3,v4) {
	return thx_Options.ap(v4,thx_Options.ap3(thx_Functions4.curry(f),v1,v2,v3));
};
thx_Options.ap5 = function(f,v1,v2,v3,v4,v5) {
	return thx_Options.ap(v5,thx_Options.ap4(thx_Functions5.curry(f),v1,v2,v3,v4));
};
thx_Options.ap6 = function(f,v1,v2,v3,v4,v5,v6) {
	return thx_Options.ap(v6,thx_Options.ap5(thx_Functions6.curry(f),v1,v2,v3,v4,v5));
};
thx_Options.ap7 = function(f,v1,v2,v3,v4,v5,v6,v7) {
	return thx_Options.ap(v7,thx_Options.ap6(thx_Functions7.curry(f),v1,v2,v3,v4,v5,v6));
};
thx_Options.ap8 = function(f,v1,v2,v3,v4,v5,v6,v7,v8) {
	return thx_Options.ap(v8,thx_Options.ap7(thx_Functions8.curry(f),v1,v2,v3,v4,v5,v6,v7));
};
var thx__$Ord_Ordering_$Impl_$ = {};
thx__$Ord_Ordering_$Impl_$.__name__ = ["thx","_Ord","Ordering_Impl_"];
thx__$Ord_Ordering_$Impl_$.fromInt = function(value) {
	if(value < 0) return thx_OrderingImpl.LT; else if(value > 0) return thx_OrderingImpl.GT; else return thx_OrderingImpl.EQ;
};
thx__$Ord_Ordering_$Impl_$.fromFloat = function(value) {
	if(value < 0) return thx_OrderingImpl.LT; else if(value > 0) return thx_OrderingImpl.GT; else return thx_OrderingImpl.EQ;
};
thx__$Ord_Ordering_$Impl_$.toInt = function(this1) {
	switch(this1[1]) {
	case 0:
		return -1;
	case 1:
		return 1;
	case 2:
		return 0;
	}
};
var thx__$Ord_Ord_$Impl_$ = {};
thx__$Ord_Ord_$Impl_$.__name__ = ["thx","_Ord","Ord_Impl_"];
thx__$Ord_Ord_$Impl_$.fromIntComparison = function(f) {
	return function(a,b) {
		return thx__$Ord_Ordering_$Impl_$.fromInt(f(a,b));
	};
};
thx__$Ord_Ord_$Impl_$.order = function(this1,a0,a1) {
	return this1(a0,a1);
};
thx__$Ord_Ord_$Impl_$.contramap = function(this1,f) {
	return function(b0,b1) {
		return this1(f(b0),f(b1));
	};
};
thx__$Ord_Ord_$Impl_$.inverse = function(this1) {
	return function(a0,a1) {
		return this1(a1,a0);
	};
};
thx__$Ord_Ord_$Impl_$.fromCompare = function(f) {
	return function(a0,a1) {
		var i = f(a0,a1);
		if(i < 0) return thx_OrderingImpl.LT; else if(i == 0) return thx_OrderingImpl.EQ; else return thx_OrderingImpl.GT;
	};
};
var thx__$QueryString_QueryString_$Impl_$ = {};
thx__$QueryString_QueryString_$Impl_$.__name__ = ["thx","_QueryString","QueryString_Impl_"];
thx__$QueryString_QueryString_$Impl_$.encodeURIComponent = function(s) {
	return StringTools.replace(encodeURIComponent(s),"%20","+");
};
thx__$QueryString_QueryString_$Impl_$.decodeURIComponent = function(s) {
	return StringTools.replace(decodeURIComponent(s.split("+").join(" ")),"+"," ");
};
thx__$QueryString_QueryString_$Impl_$.empty = function() {
	return new haxe_ds_StringMap();
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
thx__$QueryString_QueryString_$Impl_$.parse = function(s) {
	return thx__$QueryString_QueryString_$Impl_$.parseWithSymbols(s,thx__$QueryString_QueryString_$Impl_$.separator,thx__$QueryString_QueryString_$Impl_$.assignment,thx__$QueryString_QueryString_$Impl_$.decodeURIComponent);
};
thx__$QueryString_QueryString_$Impl_$.fromObject = function(o) {
	var qs = new haxe_ds_StringMap();
	if(!Reflect.isObject(o)) throw new js__$Boot_HaxeError("unable to convert " + Std.string(o) + " to QueryString");
	thx_Objects.tuples(o).map(function(t) {
		if((t._1 instanceof Array) && t._1.__enum__ == null) thx__$QueryString_QueryString_$Impl_$.setMany(qs,t._0,t._1.map(function(_) {
			return "" + _;
		})); else thx__$QueryString_QueryString_$Impl_$.set(qs,t._0,"" + Std.string(t._1));
	});
	return qs;
};
thx__$QueryString_QueryString_$Impl_$.toObject = function(this1) {
	var o = { };
	thx_Iterators.map(this1.keys(),function(key) {
		var v;
		v = __map_reserved[key] != null?this1.getReserved(key):this1.h[key];
		if(v.length == 0) o[key] = null; else if(v.length == 1) o[key] = v[0]; else o[key] = v;
	});
	return o;
};
thx__$QueryString_QueryString_$Impl_$.isEmpty = function(this1) {
	return !new haxe_ds__$StringMap_StringMapIterator(this1,this1.arrayKeys()).hasNext();
};
thx__$QueryString_QueryString_$Impl_$.isEmptyOrMono = function(this1) {
	var arr = thx_Iterators.toArray(this1.keys());
	if(arr.length == 0) return true;
	if(arr.length != 1) return false;
	return this1.get(arr[0]).length == 0;
};
thx__$QueryString_QueryString_$Impl_$.exist = function(this1,name) {
	if(__map_reserved[name] != null) return this1.existsReserved(name); else return this1.h.hasOwnProperty(name);
};
thx__$QueryString_QueryString_$Impl_$.remove = function(this1,name) {
	return this1.remove(name);
};
thx__$QueryString_QueryString_$Impl_$.removeValue = function(this1,name,value) {
	if(!(__map_reserved[name] != null?this1.existsReserved(name):this1.h.hasOwnProperty(name))) return false;
	var _this;
	_this = __map_reserved[name] != null?this1.getReserved(name):this1.h[name];
	return HxOverrides.remove(_this,value);
};
thx__$QueryString_QueryString_$Impl_$.get = function(this1,name) {
	return __map_reserved[name] != null?this1.getReserved(name):this1.h[name];
};
thx__$QueryString_QueryString_$Impl_$.set = function(this1,name,value) {
	this1.set(name,[value]);
	return this1;
};
thx__$QueryString_QueryString_$Impl_$.add = function(this1,name,value) {
	var arr;
	arr = __map_reserved[name] != null?this1.getReserved(name):this1.h[name];
	if(null == arr) {
		if(value == null) arr = []; else arr = [value];
		if(__map_reserved[name] != null) this1.setReserved(name,arr); else this1.h[name] = arr;
	} else if(null != value) arr.push(value);
	return this1;
};
thx__$QueryString_QueryString_$Impl_$.clone = function(this1) {
	if(null == this1) return null;
	var map = new haxe_ds_StringMap();
	var $it0 = this1.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var value;
		value = (function($this) {
			var $r;
			var _this;
			_this = __map_reserved[key] != null?this1.getReserved(key):this1.h[key];
			$r = _this.slice();
			return $r;
		}(this));
		if(__map_reserved[key] != null) map.setReserved(key,value); else map.h[key] = value;
	}
	return map;
};
thx__$QueryString_QueryString_$Impl_$.setMany = function(this1,name,values) {
	if(__map_reserved[name] != null) this1.setReserved(name,values); else this1.h[name] = values;
	return this1;
};
thx__$QueryString_QueryString_$Impl_$.toStringWithSymbols = function(this1,separator,assignment,encodeURIComponent) {
	if(null == this1) return null;
	if(null == encodeURIComponent) encodeURIComponent = thx__$QueryString_QueryString_$Impl_$.encodeURIComponent;
	return thx_Arrays.flatten(thx_Iterators.map(this1.keys(),function(k) {
		var vs;
		vs = __map_reserved[k] != null?this1.getReserved(k):this1.h[k];
		var ek = encodeURIComponent(k);
		if(vs.length == 0) return [ek]; else return vs.map(function(_) {
			return "" + ek + assignment + encodeURIComponent(_);
		});
	})).join(separator);
};
thx__$QueryString_QueryString_$Impl_$.equals = function(this1,other) {
	var tuples = thx_Maps.tuples(other);
	var $it0 = this1.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var key1 = [key];
		var t = thx_Arrays.find(tuples,(function(key1) {
			return function(item) {
				return item._0 == key1[0];
			};
		})(key1));
		if(null == t) return false;
		if(!thx_Arrays.equals(__map_reserved[key1[0]] != null?this1.getReserved(key1[0]):this1.h[key1[0]],t._1)) return false;
		HxOverrides.remove(tuples,t);
	}
	return tuples.length == 0;
};
thx__$QueryString_QueryString_$Impl_$.toString = function(this1) {
	return thx__$QueryString_QueryString_$Impl_$.toStringWithSymbols(this1,thx__$QueryString_QueryString_$Impl_$.separator,thx__$QueryString_QueryString_$Impl_$.assignment,thx__$QueryString_QueryString_$Impl_$.encodeURIComponent);
};
var thx__$QueryString_QueryStringValue_$Impl_$ = {};
thx__$QueryString_QueryStringValue_$Impl_$.__name__ = ["thx","_QueryString","QueryStringValue_Impl_"];
thx__$QueryString_QueryStringValue_$Impl_$.toString = function(this1) {
	if(this1 == null || this1.length == 0) return null; else return this1.join(",");
};
var thx__$ReadonlyArray_ReadonlyArray_$Impl_$ = {};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.__name__ = ["thx","_ReadonlyArray","ReadonlyArray_Impl_"];
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.empty = function() {
	return [];
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.flatten = function(array) {
	return Array.prototype.concat.apply([],array);
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf = function(this1,el,eq) {
	if(null == eq) eq = thx_Functions.equality;
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(eq(el,this1[i])) return i;
	}
	return -1;
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.lastIndexOf = function(this1,el,eq) {
	if(null == eq) eq = thx_Functions.equality;
	var len = this1.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		if(eq(el,this1[len - i - 1])) return i;
	}
	return -1;
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.get = function(this1,index) {
	return this1[index];
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.head = function(this1) {
	return this1[0];
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.tail = function(this1) {
	return this1.slice(1);
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.reverse = function(this1) {
	var arr = this1.slice();
	arr.reverse();
	return arr;
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.toArray = function(this1) {
	return this1.slice();
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.unsafe = function(this1) {
	return this1;
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.concat = function(this1,that) {
	return this1.concat(that);
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.insertAt = function(this1,pos,el) {
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos));
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.insertAfter = function(this1,ref,el,eq) {
	var pos = thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(this1,ref,eq);
	if(pos < 0) pos = this1.length - 1;
	var pos1 = pos + 1;
	return this1.slice(0,pos1).concat([el]).concat(this1.slice(pos1));
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.insertBefore = function(this1,ref,el,eq) {
	var pos = thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(this1,ref,eq);
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos));
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.replace = function(this1,ref,el,eq) {
	var pos = thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(this1,ref,eq);
	if(pos < 0) throw new thx_Error("unable to find reference element",null,{ fileName : "ReadonlyArray.hx", lineNumber : 75, className : "thx._ReadonlyArray.ReadonlyArray_Impl_", methodName : "replace"});
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos + 1));
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.replaceAt = function(this1,pos,el) {
	return this1.slice(0,pos).concat([el]).concat(this1.slice(pos + 1));
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.remove = function(this1,el,eq) {
	var pos = thx__$ReadonlyArray_ReadonlyArray_$Impl_$.indexOf(this1,el,eq);
	return this1.slice(0,pos).concat(this1.slice(pos + 1));
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.removeAt = function(this1,pos) {
	return this1.slice(0,pos).concat(this1.slice(pos + 1));
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.prepend = function(this1,el) {
	return [el].concat(this1);
};
thx__$ReadonlyArray_ReadonlyArray_$Impl_$.append = function(this1,el) {
	return this1.concat([el]);
};
var thx__$Result_Result_$Impl_$ = {};
thx__$Result_Result_$Impl_$.__name__ = ["thx","_Result","Result_Impl_"];
thx__$Result_Result_$Impl_$.optionValue = function(this1) {
	switch(this1[1]) {
	case 1:
		var v = this1[2];
		return haxe_ds_Option.Some(v);
	default:
		return haxe_ds_Option.None;
	}
};
thx__$Result_Result_$Impl_$.optionError = function(this1) {
	switch(this1[1]) {
	case 0:
		var v = this1[2];
		return haxe_ds_Option.Some(v);
	default:
		return haxe_ds_Option.None;
	}
};
thx__$Result_Result_$Impl_$.value = function(this1) {
	switch(this1[1]) {
	case 1:
		var v = this1[2];
		return v;
	default:
		return null;
	}
};
thx__$Result_Result_$Impl_$.error = function(this1) {
	switch(this1[1]) {
	case 0:
		var v = this1[2];
		return v;
	default:
		return null;
	}
};
thx__$Result_Result_$Impl_$.get_isSuccess = function(this1) {
	switch(this1[1]) {
	case 1:
		return true;
	default:
		return false;
	}
};
thx__$Result_Result_$Impl_$.get_isFailure = function(this1) {
	switch(this1[1]) {
	case 0:
		return true;
	default:
		return false;
	}
};
var thx__$Semigroup_Semigroup_$Impl_$ = {};
thx__$Semigroup_Semigroup_$Impl_$.__name__ = ["thx","_Semigroup","Semigroup_Impl_"];
thx__$Semigroup_Semigroup_$Impl_$.get_append = function(this1) {
	return this1;
};
var thx__$Set_Set_$Impl_$ = {};
thx__$Set_Set_$Impl_$.__name__ = ["thx","_Set","Set_Impl_"];
thx__$Set_Set_$Impl_$.createString = function(it) {
	var map = new haxe_ds_StringMap();
	var set = map;
	if(null != it) thx__$Set_Set_$Impl_$.pushMany(set,it);
	return set;
};
thx__$Set_Set_$Impl_$.createInt = function(it) {
	var map = new haxe_ds_IntMap();
	var set = map;
	if(null != it) thx__$Set_Set_$Impl_$.pushMany(set,it);
	return set;
};
thx__$Set_Set_$Impl_$.createObject = function(it) {
	var map = new haxe_ds_ObjectMap();
	var set = map;
	if(null != it) thx__$Set_Set_$Impl_$.pushMany(set,it);
	return set;
};
thx__$Set_Set_$Impl_$.createEnum = function(arr) {
	var map = new haxe_ds_EnumValueMap();
	var set = map;
	if(null != arr) thx__$Set_Set_$Impl_$.pushMany(set,arr);
	return set;
};
thx__$Set_Set_$Impl_$._new = function(map) {
	return map;
};
thx__$Set_Set_$Impl_$.add = function(this1,v) {
	if(this1.exists(v)) return false; else {
		this1.set(v,true);
		return true;
	}
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
thx__$Set_Set_$Impl_$.difference = function(this1,set) {
	var result = thx__$Set_Set_$Impl_$.copy(this1);
	var $it0 = $iterator(thx__$Set_Set_$Impl_$)(set);
	while( $it0.hasNext() ) {
		var item = $it0.next();
		result.remove(item);
	}
	return result;
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
thx__$Set_Set_$Impl_$.exists = function(this1,v) {
	return this1.exists(v);
};
thx__$Set_Set_$Impl_$.remove = function(this1,v) {
	return this1.remove(v);
};
thx__$Set_Set_$Impl_$.intersection = function(this1,set) {
	var result = thx__$Set_Set_$Impl_$.empty(this1);
	var $it0 = $iterator(thx__$Set_Set_$Impl_$)(this1);
	while( $it0.hasNext() ) {
		var item = $it0.next();
		if(set.exists(item)) result.set(item,true);
	}
	return result;
};
thx__$Set_Set_$Impl_$.push = function(this1,v) {
	this1.set(v,true);
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
thx__$Set_Set_$Impl_$.union = function(this1,set) {
	var newset = thx__$Set_Set_$Impl_$.copy(this1);
	thx__$Set_Set_$Impl_$.pushMany(newset,thx__$Set_Set_$Impl_$.toArray(set));
	return newset;
};
thx__$Set_Set_$Impl_$.toArray = function(this1) {
	var arr = [];
	var $it0 = this1.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		arr.push(k);
	}
	return arr;
};
thx__$Set_Set_$Impl_$.toString = function(this1) {
	return "{" + thx__$Set_Set_$Impl_$.toArray(this1).join(", ") + "}";
};
thx__$Set_Set_$Impl_$.get_length = function(this1) {
	var l = 0;
	var $it0 = this1.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		++l;
	}
	return l;
};
var thx_Strings = function() { };
thx_Strings.__name__ = ["thx","Strings"];
thx_Strings.after = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return ""; else return value.substring(pos + searchFor.length);
};
thx_Strings.afterLast = function(value,searchFor) {
	var pos = value.lastIndexOf(searchFor);
	if(pos < 0) return ""; else return value.substring(pos + searchFor.length);
};
thx_Strings.capitalize = function(s) {
	return HxOverrides.substr(s,0,1).toUpperCase() + HxOverrides.substr(s,1,s.length - 1);
};
thx_Strings.capitalizeWords = function(value,whiteSpaceOnly) {
	if(whiteSpaceOnly == null) whiteSpaceOnly = false;
	if(whiteSpaceOnly) return thx_Strings.UCWORDSWS.map(HxOverrides.substr(value,0,1).toUpperCase() + HxOverrides.substr(value,1,value.length - 1),thx_Strings.upperMatch); else return thx_Strings.UCWORDS.map(HxOverrides.substr(value,0,1).toUpperCase() + HxOverrides.substr(value,1,value.length - 1),thx_Strings.upperMatch);
};
thx_Strings.canonicalizeNewlines = function(value) {
	return thx_Strings.CANONICALIZE_LINES.replace(value,"\n");
};
thx_Strings.caseInsensitiveCompare = function(a,b) {
	if(null == a && null == b) return 0;
	if(null == a) return -1; else if(null == b) return 1;
	return thx_Strings.compare(a.toLowerCase(),b.toLowerCase());
};
thx_Strings.caseInsensitiveEndsWith = function(s,end) {
	return StringTools.endsWith(s.toLowerCase(),end.toLowerCase());
};
thx_Strings.caseInsensitiveEndsWithAny = function(s,values) {
	return thx_Strings.endsWithAny(s.toLowerCase(),values.map(function(v) {
		return v.toLowerCase();
	}));
};
thx_Strings.caseInsensitiveStartsWith = function(s,start) {
	return StringTools.startsWith(s.toLowerCase(),start.toLowerCase());
};
thx_Strings.caseInsensitiveStartsWithAny = function(s,values) {
	return thx_Strings.startsWithAny(s.toLowerCase(),values.map(function(v) {
		return v.toLowerCase();
	}));
};
thx_Strings.collapse = function(value) {
	return thx_Strings.WSG.replace(StringTools.trim(value)," ");
};
thx_Strings.compare = function(a,b) {
	return haxe_Utf8.compare(a,b);
};
thx_Strings.caseInsensitiveContains = function(s,test) {
	return s.toLowerCase().indexOf(test.toLowerCase()) >= 0;
};
thx_Strings.contains = function(s,test) {
	return s.indexOf(test) >= 0;
};
thx_Strings.count = function(s,test) {
	return s.split(test).length - 1;
};
thx_Strings.caseInsensitiveContainsAny = function(s,tests) {
	return thx_Arrays.any(tests,(function(f,s1) {
		return function(a1) {
			return f(s1,a1);
		};
	})(thx_Strings.caseInsensitiveContains,s));
};
thx_Strings.containsAny = function(s,tests) {
	return thx_Arrays.any(tests,(function(f,s1) {
		return function(a1) {
			return f(s1,a1);
		};
	})(thx_Strings.contains,s));
};
thx_Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
};
thx_Strings.diffAt = function(a,b) {
	var min = thx_Ints.min(a.length,b.length);
	var _g = 0;
	while(_g < min) {
		var i = _g++;
		if(a.substring(i,i + 1) != b.substring(i,i + 1)) return i;
	}
	return min;
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
thx_Strings.endsWithAny = function(s,values) {
	return thx_Iterables.any(values,function(end) {
		return StringTools.endsWith(s,end);
	});
};
thx_Strings.filter = function(s,predicate) {
	return s.split("").filter(predicate).join("");
};
thx_Strings.filterCharcode = function(s,predicate) {
	return thx_Strings.toCharcodes(s).filter(predicate).map(function(i) {
		return String.fromCharCode(i);
	}).join("");
};
thx_Strings.from = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return ""; else return value.substring(pos);
};
thx_Strings.hashCode = function(value) {
	var code = 0;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = HxOverrides.cca(value,i);
		code = (function($this) {
			var $r;
			var a = haxe__$Int32_Int32_$Impl_$.mul(thx_Strings.HASCODE_MUL,code);
			$r = a + c | 0;
			return $r;
		}(this)) % thx_Strings.HASCODE_MAX;
	}
	return code;
};
thx_Strings.hasContent = function(value) {
	return value != null && value.length > 0;
};
thx_Strings.humanize = function(s) {
	return StringTools.replace(thx_Strings.underscore(s),"_"," ");
};
thx_Strings.isAlpha = function(s) {
	return s.length > 0 && !thx_Strings.IS_ALPHA.match(s);
};
thx_Strings.isAlphaNum = function(value) {
	return thx_Strings.ALPHANUM.match(value);
};
thx_Strings.isBreakingWhitespace = function(value) {
	return !thx_Strings.IS_BREAKINGWHITESPACE.match(value);
};
thx_Strings.isLowerCase = function(value) {
	return value.toLowerCase() == value;
};
thx_Strings.isUpperCase = function(value) {
	return value.toUpperCase() == value;
};
thx_Strings.ifEmpty = function(value,alt) {
	if(null != value && "" != value) return value; else return alt;
};
thx_Strings.isDigitsOnly = function(value) {
	return thx_Strings.DIGITS.match(value);
};
thx_Strings.isEmpty = function(value) {
	return value == null || value == "";
};
thx_Strings.lowerCaseFirst = function(value) {
	return value.substring(0,1).toLowerCase() + value.substring(1);
};
thx_Strings.random = function(value,length) {
	if(length == null) length = 1;
	return haxe_Utf8.sub(value,Math.floor((value.length - length + 1) * Math.random()),length);
};
thx_Strings.randomSequence = function(seed,length) {
	return thx_Ints.range(0,length).map(function(_) {
		return thx_Strings.random(seed);
	}).join("");
};
thx_Strings.randomSequence64 = function(length) {
	return thx_Strings.randomSequence(haxe_crypto_Base64.CHARS,length);
};
thx_Strings.iterator = function(s) {
	var _this = s.split("");
	return HxOverrides.iter(_this);
};
thx_Strings.map = function(value,callback) {
	return value.split("").map(callback);
};
thx_Strings.remove = function(value,toremove) {
	return StringTools.replace(value,toremove,"");
};
thx_Strings.removeAfter = function(value,toremove) {
	if(StringTools.endsWith(value,toremove)) return value.substring(0,value.length - toremove.length); else return value;
};
thx_Strings.removeAt = function(value,index,length) {
	return value.substring(0,index) + value.substring(index + length);
};
thx_Strings.removeBefore = function(value,toremove) {
	if(StringTools.startsWith(value,toremove)) return value.substring(toremove.length); else return value;
};
thx_Strings.removeOne = function(value,toremove) {
	var pos = value.indexOf(toremove);
	if(pos < 0) return value;
	return value.substring(0,pos) + value.substring(pos + toremove.length);
};
thx_Strings.repeat = function(s,times) {
	return ((function($this) {
		var $r;
		var _g = [];
		{
			var _g1 = 0;
			while(_g1 < times) {
				var i = _g1++;
				_g.push(s);
			}
		}
		$r = _g;
		return $r;
	}(this))).join("");
};
thx_Strings.reverse = function(s) {
	var arr = s.split("");
	arr.reverse();
	return arr.join("");
};
thx_Strings.quote = function(s) {
	if(s.indexOf("\"") < 0) return "\"" + s + "\""; else if(s.indexOf("'") < 0) return "'" + s + "'"; else return "\"" + StringTools.replace(s,"\"","\\\"") + "\"";
};
thx_Strings.splitOnce = function(s,separator) {
	var pos = s.indexOf(separator);
	if(pos < 0) return [s];
	return [s.substring(0,pos),s.substring(pos + separator.length)];
};
thx_Strings.startsWithAny = function(s,values) {
	return thx_Iterables.any(values,function(start) {
		return StringTools.startsWith(s,start);
	});
};
thx_Strings.stripTags = function(s) {
	return thx_Strings.STRIPTAGS.replace(s,"");
};
thx_Strings.surround = function(s,left,right) {
	return "" + left + s + (null == right?left:right);
};
thx_Strings.toArray = function(s) {
	return s.split("");
};
thx_Strings.toCharcodes = function(s) {
	return thx_Strings.map(s,function(s1) {
		return HxOverrides.cca(s1,0);
	});
};
thx_Strings.toChunks = function(s,len) {
	var chunks = [];
	while(s.length > 0) {
		chunks.push(HxOverrides.substr(s,0,len));
		s = HxOverrides.substr(s,len,s.length - len);
	}
	return chunks;
};
thx_Strings.toLines = function(s) {
	return thx_Strings.SPLIT_LINES.split(s);
};
thx_Strings.trimChars = function(value,charlist) {
	return thx_Strings.trimCharsRight(thx_Strings.trimCharsLeft(value,charlist),charlist);
};
thx_Strings.trimCharsLeft = function(value,charlist) {
	var pos = 0;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(thx_Strings.contains(charlist,value.charAt(i))) pos++; else break;
	}
	return value.substring(pos);
};
thx_Strings.trimCharsRight = function(value,charlist) {
	var len = value.length;
	var pos = len;
	var i;
	var _g = 0;
	while(_g < len) {
		var j = _g++;
		i = len - j - 1;
		if(thx_Strings.contains(charlist,value.charAt(i))) pos = i; else break;
	}
	return value.substring(0,pos);
};
thx_Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
};
thx_Strings.upperCaseFirst = function(value) {
	return value.substring(0,1).toUpperCase() + value.substring(1);
};
thx_Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substring(0,pos);
};
thx_Strings.wrapColumns = function(s,columns,indent,newline) {
	if(newline == null) newline = "\n";
	if(indent == null) indent = "";
	if(columns == null) columns = 78;
	return thx_Strings.SPLIT_LINES.split(s).map(function(part) {
		return thx_Strings.wrapLine(StringTools.trim(thx_Strings.WSG.replace(part," ")),columns,indent,newline);
	}).join(newline);
};
thx_Strings.upperMatch = function(re) {
	return re.matched(0).toUpperCase();
};
thx_Strings.wrapLine = function(s,columns,indent,newline) {
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(s.substring(pos));
			break;
		}
		var i = 0;
		while(!StringTools.isSpace(s,pos + columns - i) && i < columns) i++;
		if(i == columns) {
			i = 0;
			while(!StringTools.isSpace(s,pos + columns + i) && pos + columns + i < len) i++;
			parts.push(s.substring(pos,pos + columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(s.substring(pos,pos + columns - i));
			pos += columns - i + 1;
		}
	}
	return indent + parts.join(newline + indent);
};
thx_Strings.lpad = function(s,$char,length) {
	var diff = length - s.length;
	if(diff > 0) return thx_Strings.repeat($char,diff) + s; else return s;
};
thx_Strings.rpad = function(s,$char,length) {
	var diff = length - s.length;
	if(diff > 0) return s + thx_Strings.repeat($char,diff); else return s;
};
var thx_TimePeriod = { __ename__ : ["thx","TimePeriod"], __constructs__ : ["Second","Minute","Hour","Day","Week","Month","Year"] };
thx_TimePeriod.Second = ["Second",0];
thx_TimePeriod.Second.toString = $estr;
thx_TimePeriod.Second.__enum__ = thx_TimePeriod;
thx_TimePeriod.Minute = ["Minute",1];
thx_TimePeriod.Minute.toString = $estr;
thx_TimePeriod.Minute.__enum__ = thx_TimePeriod;
thx_TimePeriod.Hour = ["Hour",2];
thx_TimePeriod.Hour.toString = $estr;
thx_TimePeriod.Hour.__enum__ = thx_TimePeriod;
thx_TimePeriod.Day = ["Day",3];
thx_TimePeriod.Day.toString = $estr;
thx_TimePeriod.Day.__enum__ = thx_TimePeriod;
thx_TimePeriod.Week = ["Week",4];
thx_TimePeriod.Week.toString = $estr;
thx_TimePeriod.Week.__enum__ = thx_TimePeriod;
thx_TimePeriod.Month = ["Month",5];
thx_TimePeriod.Month.toString = $estr;
thx_TimePeriod.Month.__enum__ = thx_TimePeriod;
thx_TimePeriod.Year = ["Year",6];
thx_TimePeriod.Year.toString = $estr;
thx_TimePeriod.Year.__enum__ = thx_TimePeriod;
var thx_Timer = function() { };
thx_Timer.__name__ = ["thx","Timer"];
thx_Timer.debounce = function(callback,delayms,leading) {
	if(leading == null) leading = false;
	var cancel = thx_Functions.noop;
	var poll = function() {
		cancel();
		cancel = thx_Timer.delay(callback,delayms);
	};
	return function() {
		if(leading) {
			leading = false;
			callback();
		}
		poll();
	};
};
thx_Timer.throttle = function(callback,delayms,leading) {
	if(leading == null) leading = false;
	var waiting = false;
	var poll = function() {
		waiting = true;
		thx_Timer.delay(callback,delayms);
	};
	return function() {
		if(leading) {
			leading = false;
			callback();
			return;
		}
		if(waiting) return;
		poll();
	};
};
thx_Timer.repeat = function(callback,delayms) {
	return (function(f,id) {
		return function() {
			f(id);
		};
	})(thx_Timer.clear,setInterval(callback,delayms));
};
thx_Timer.delay = function(callback,delayms) {
	return (function(f,id) {
		return function() {
			f(id);
		};
	})(thx_Timer.clear,setTimeout(callback,delayms));
};
thx_Timer.frame = function(callback) {
	var cancelled = false;
	var f = thx_Functions.noop;
	var current = performance.now();
	var next;
	f = function() {
		if(cancelled) return;
		next = performance.now();
		callback(next - current);
		current = next;
		requestAnimationFrame(f);
	};
	requestAnimationFrame(f);
	return function() {
		cancelled = true;
	};
};
thx_Timer.nextFrame = function(callback) {
	var id = requestAnimationFrame(callback);
	return function() {
		cancelAnimationFrame(id);
	};
};
thx_Timer.immediate = function(callback) {
	return (function(f,id) {
		return function() {
			f(id);
		};
	})(thx_Timer.clear,setImmediate(callback));
};
thx_Timer.clear = function(id) {
	clearTimeout(id);
	return;
};
thx_Timer.time = function() {
	return performance.now();
};
thx_Timer.resolution = function() {
	if(null != thx_Timer._resolution) return thx_Timer._resolution;
	var start = performance.now();
	var end;
	var loop = 0.0;
	do {
		loop++;
		end = performance.now();
	} while(end - start == 0);
	return thx_Timer._resolution = end - start;
};
var thx__$Timestamp_Timestamp_$Impl_$ = {};
thx__$Timestamp_Timestamp_$Impl_$.__name__ = ["thx","_Timestamp","Timestamp_Impl_"];
thx__$Timestamp_Timestamp_$Impl_$.create = function(year,month,day,hour,minute,second) {
	return thx_Dates.create(year,month,day,hour,minute,second).getTime();
};
thx__$Timestamp_Timestamp_$Impl_$.now = function() {
	var d = new Date();
	return d.getTime();
};
thx__$Timestamp_Timestamp_$Impl_$.fromDate = function(d) {
	return d.getTime();
};
thx__$Timestamp_Timestamp_$Impl_$.fromString = function(s) {
	return HxOverrides.strDate(s).getTime();
};
thx__$Timestamp_Timestamp_$Impl_$.toDate = function(this1) {
	var d = new Date();
	d.setTime(this1);
	return d;
};
thx__$Timestamp_Timestamp_$Impl_$.toString = function(this1) {
	var _this;
	var d = new Date();
	d.setTime(this1);
	_this = d;
	return HxOverrides.dateStr(_this);
};
thx__$Timestamp_Timestamp_$Impl_$.snapNext = function(this1,period) {
	switch(period[1]) {
	case 0:
		return Math.ceil(this1 / 1000.0) * 1000.0;
	case 1:
		return Math.ceil(this1 / 60000.0) * 60000.0;
	case 2:
		return Math.ceil(this1 / 3600000.0) * 3600000.0;
	case 3:
		var d;
		var d1 = new Date();
		d1.setTime(this1);
		d = d1;
		var year = d.getFullYear();
		var month = d.getMonth();
		var day = d.getDate() + 1;
		return thx_Dates.create(year,month,day,0,0,0).getTime();
	case 4:
		var d2;
		var d3 = new Date();
		d3.setTime(this1);
		d2 = d3;
		var wd = d2.getDay();
		var year1 = d2.getFullYear();
		var month1 = d2.getMonth();
		var day1 = d2.getDate() + 7 - wd;
		return thx_Dates.create(year1,month1,day1,0,0,0).getTime();
	case 5:
		var d4;
		var d5 = new Date();
		d5.setTime(this1);
		d4 = d5;
		var year2 = d4.getFullYear();
		var month2 = d4.getMonth() + 1;
		return thx_Dates.create(year2,month2,1,0,0,0).getTime();
	case 6:
		var d6;
		var d7 = new Date();
		d7.setTime(this1);
		d6 = d7;
		var year3 = d6.getFullYear() + 1;
		return thx_Dates.create(year3,0,1,0,0,0).getTime();
	}
};
thx__$Timestamp_Timestamp_$Impl_$.snapPrev = function(this1,period) {
	switch(period[1]) {
	case 0:
		return Math.floor(this1 / 1000.0) * 1000.0;
	case 1:
		return Math.floor(this1 / 60000.0) * 60000.0;
	case 2:
		return Math.floor(this1 / 3600000.0) * 3600000.0;
	case 3:
		var d;
		var d1 = new Date();
		d1.setTime(this1);
		d = d1;
		var year = d.getFullYear();
		var month = d.getMonth();
		var day = d.getDate();
		return thx_Dates.create(year,month,day,0,0,0).getTime();
	case 4:
		var d2;
		var d3 = new Date();
		d3.setTime(this1);
		d2 = d3;
		var wd = d2.getDay();
		var year1 = d2.getFullYear();
		var month1 = d2.getMonth();
		var day1 = d2.getDate() - wd;
		return thx_Dates.create(year1,month1,day1,0,0,0).getTime();
	case 5:
		var d4;
		var d5 = new Date();
		d5.setTime(this1);
		d4 = d5;
		var year2 = d4.getFullYear();
		var month2 = d4.getMonth();
		return thx_Dates.create(year2,month2,1,0,0,0).getTime();
	case 6:
		var d6;
		var d7 = new Date();
		d7.setTime(this1);
		d6 = d7;
		var year3 = d6.getFullYear();
		return thx_Dates.create(year3,0,1,0,0,0).getTime();
	}
};
thx__$Timestamp_Timestamp_$Impl_$.snapTo = function(this1,period) {
	switch(period[1]) {
	case 0:
		return Math.round(this1 / 1000.0) * 1000.0;
	case 1:
		return Math.round(this1 / 60000.0) * 60000.0;
	case 2:
		return Math.round(this1 / 3600000.0) * 3600000.0;
	case 3:
		var d;
		var d1 = new Date();
		d1.setTime(this1);
		d = d1;
		var mod;
		if(d.getHours() >= 12) mod = 1; else mod = 0;
		var year = d.getFullYear();
		var month = d.getMonth();
		var day = d.getDate() + mod;
		return thx_Dates.create(year,month,day,0,0,0).getTime();
	case 4:
		var d2;
		var d3 = new Date();
		d3.setTime(this1);
		d2 = d3;
		var wd = d2.getDay();
		var mod1;
		if(wd < 3) mod1 = -wd; else if(wd > 3) mod1 = 7 - wd; else if(d2.getHours() < 12) mod1 = -wd; else mod1 = 7 - wd;
		var year1 = d2.getFullYear();
		var month1 = d2.getMonth();
		var day1 = d2.getDate() + mod1;
		return thx_Dates.create(year1,month1,day1,0,0,0).getTime();
	case 5:
		var d4;
		var d5 = new Date();
		d5.setTime(this1);
		d4 = d5;
		var mod2;
		if(d4.getDate() > Math.round(DateTools.getMonthDays(d4) / 2)) mod2 = 1; else mod2 = 0;
		var year2 = d4.getFullYear();
		var month2 = d4.getMonth() + mod2;
		return thx_Dates.create(year2,month2,1,0,0,0).getTime();
	case 6:
		var d6;
		var d7 = new Date();
		d7.setTime(this1);
		d6 = d7;
		var mod3;
		if(this1 > new Date(d6.getFullYear(),6,2,0,0,0).getTime()) mod3 = 1; else mod3 = 0;
		var year3 = d6.getFullYear() + mod3;
		return thx_Dates.create(year3,0,1,0,0,0).getTime();
	}
};
thx__$Timestamp_Timestamp_$Impl_$.r = function(t,v) {
	return Math.round(t / v) * v;
};
thx__$Timestamp_Timestamp_$Impl_$.f = function(t,v) {
	return Math.floor(t / v) * v;
};
thx__$Timestamp_Timestamp_$Impl_$.c = function(t,v) {
	return Math.ceil(t / v) * v;
};
var thx__$Tuple_Tuple0_$Impl_$ = {};
thx__$Tuple_Tuple0_$Impl_$.__name__ = ["thx","_Tuple","Tuple0_Impl_"];
thx__$Tuple_Tuple0_$Impl_$._new = function() {
	return thx_Nil.nil;
};
thx__$Tuple_Tuple0_$Impl_$["with"] = function(this1,v) {
	return v;
};
thx__$Tuple_Tuple0_$Impl_$.toString = function(this1) {
	return "Tuple0()";
};
thx__$Tuple_Tuple0_$Impl_$.toNil = function(this1) {
	return this1;
};
thx__$Tuple_Tuple0_$Impl_$.nilToTuple = function(v) {
	return thx_Nil.nil;
};
var thx__$Tuple_Tuple1_$Impl_$ = {};
thx__$Tuple_Tuple1_$Impl_$.__name__ = ["thx","_Tuple","Tuple1_Impl_"];
thx__$Tuple_Tuple1_$Impl_$._new = function(_0) {
	return _0;
};
thx__$Tuple_Tuple1_$Impl_$.get__0 = function(this1) {
	return this1;
};
thx__$Tuple_Tuple1_$Impl_$["with"] = function(this1,v) {
	return { _0 : this1, _1 : v};
};
thx__$Tuple_Tuple1_$Impl_$.toString = function(this1) {
	return "Tuple1(" + Std.string(this1) + ")";
};
thx__$Tuple_Tuple1_$Impl_$.arrayToTuple = function(v) {
	return v[0];
};
var thx__$Tuple_Tuple2_$Impl_$ = {};
thx__$Tuple_Tuple2_$Impl_$.__name__ = ["thx","_Tuple","Tuple2_Impl_"];
thx__$Tuple_Tuple2_$Impl_$.of = function(_0,_1) {
	return { _0 : _0, _1 : _1};
};
thx__$Tuple_Tuple2_$Impl_$._new = function(_0,_1) {
	return { _0 : _0, _1 : _1};
};
thx__$Tuple_Tuple2_$Impl_$.get_left = function(this1) {
	return this1._0;
};
thx__$Tuple_Tuple2_$Impl_$.get_right = function(this1) {
	return this1._1;
};
thx__$Tuple_Tuple2_$Impl_$.flip = function(this1) {
	return { _0 : this1._1, _1 : this1._0};
};
thx__$Tuple_Tuple2_$Impl_$.dropLeft = function(this1) {
	return this1._1;
};
thx__$Tuple_Tuple2_$Impl_$.dropRight = function(this1) {
	return this1._0;
};
thx__$Tuple_Tuple2_$Impl_$["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : v};
};
thx__$Tuple_Tuple2_$Impl_$.toString = function(this1) {
	return "Tuple2(" + Std.string(this1._0) + "," + Std.string(this1._1) + ")";
};
thx__$Tuple_Tuple2_$Impl_$.map = function(this1,f) {
	var _1 = f(this1._1);
	return { _0 : this1._0, _1 : _1};
};
thx__$Tuple_Tuple2_$Impl_$.arrayToTuple2 = function(v) {
	return { _0 : v[0], _1 : v[1]};
};
var thx__$Tuple_Tuple3_$Impl_$ = {};
thx__$Tuple_Tuple3_$Impl_$.__name__ = ["thx","_Tuple","Tuple3_Impl_"];
thx__$Tuple_Tuple3_$Impl_$.of = function(_0,_1,_2) {
	return { _0 : _0, _1 : _1, _2 : _2};
};
thx__$Tuple_Tuple3_$Impl_$._new = function(_0,_1,_2) {
	return { _0 : _0, _1 : _1, _2 : _2};
};
thx__$Tuple_Tuple3_$Impl_$.flip = function(this1) {
	return { _0 : this1._2, _1 : this1._1, _2 : this1._0};
};
thx__$Tuple_Tuple3_$Impl_$.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2};
};
thx__$Tuple_Tuple3_$Impl_$.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1};
};
thx__$Tuple_Tuple3_$Impl_$["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : v};
};
thx__$Tuple_Tuple3_$Impl_$.toString = function(this1) {
	return "Tuple3(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + ")";
};
thx__$Tuple_Tuple3_$Impl_$.arrayToTuple3 = function(v) {
	return { _0 : v[0], _1 : v[1], _2 : v[2]};
};
thx__$Tuple_Tuple3_$Impl_$.map = function(this1,f) {
	var _2 = f(this1._2);
	return { _0 : this1._0, _1 : this1._1, _2 : _2};
};
var thx__$Tuple_Tuple4_$Impl_$ = {};
thx__$Tuple_Tuple4_$Impl_$.__name__ = ["thx","_Tuple","Tuple4_Impl_"];
thx__$Tuple_Tuple4_$Impl_$.of = function(_0,_1,_2,_3) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
};
thx__$Tuple_Tuple4_$Impl_$._new = function(_0,_1,_2,_3) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
};
thx__$Tuple_Tuple4_$Impl_$.flip = function(this1) {
	return { _0 : this1._3, _1 : this1._2, _2 : this1._1, _3 : this1._0};
};
thx__$Tuple_Tuple4_$Impl_$.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2, _2 : this1._3};
};
thx__$Tuple_Tuple4_$Impl_$.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2};
};
thx__$Tuple_Tuple4_$Impl_$["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : v};
};
thx__$Tuple_Tuple4_$Impl_$.toString = function(this1) {
	return "Tuple4(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + "," + Std.string(this1._3) + ")";
};
thx__$Tuple_Tuple4_$Impl_$.arrayToTuple4 = function(v) {
	return { _0 : v[0], _1 : v[1], _2 : v[2], _3 : v[3]};
};
var thx__$Tuple_Tuple5_$Impl_$ = {};
thx__$Tuple_Tuple5_$Impl_$.__name__ = ["thx","_Tuple","Tuple5_Impl_"];
thx__$Tuple_Tuple5_$Impl_$.of = function(_0,_1,_2,_3,_4) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4};
};
thx__$Tuple_Tuple5_$Impl_$._new = function(_0,_1,_2,_3,_4) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4};
};
thx__$Tuple_Tuple5_$Impl_$.flip = function(this1) {
	return { _0 : this1._4, _1 : this1._3, _2 : this1._2, _3 : this1._1, _4 : this1._0};
};
thx__$Tuple_Tuple5_$Impl_$.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2, _2 : this1._3, _3 : this1._4};
};
thx__$Tuple_Tuple5_$Impl_$.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3};
};
thx__$Tuple_Tuple5_$Impl_$["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4, _5 : v};
};
thx__$Tuple_Tuple5_$Impl_$.toString = function(this1) {
	return "Tuple5(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + "," + Std.string(this1._3) + "," + Std.string(this1._4) + ")";
};
thx__$Tuple_Tuple5_$Impl_$.arrayToTuple5 = function(v) {
	return { _0 : v[0], _1 : v[1], _2 : v[2], _3 : v[3], _4 : v[4]};
};
var thx__$Tuple_Tuple6_$Impl_$ = {};
thx__$Tuple_Tuple6_$Impl_$.__name__ = ["thx","_Tuple","Tuple6_Impl_"];
thx__$Tuple_Tuple6_$Impl_$.of = function(_0,_1,_2,_3,_4,_5) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4, _5 : _5};
};
thx__$Tuple_Tuple6_$Impl_$._new = function(_0,_1,_2,_3,_4,_5) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4, _5 : _5};
};
thx__$Tuple_Tuple6_$Impl_$.flip = function(this1) {
	return { _0 : this1._5, _1 : this1._4, _2 : this1._3, _3 : this1._2, _4 : this1._1, _5 : this1._0};
};
thx__$Tuple_Tuple6_$Impl_$.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2, _2 : this1._3, _3 : this1._4, _4 : this1._5};
};
thx__$Tuple_Tuple6_$Impl_$.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4};
};
thx__$Tuple_Tuple6_$Impl_$.toString = function(this1) {
	return "Tuple6(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + "," + Std.string(this1._3) + "," + Std.string(this1._4) + "," + Std.string(this1._5) + ")";
};
thx__$Tuple_Tuple6_$Impl_$.arrayToTuple6 = function(v) {
	return { _0 : v[0], _1 : v[1], _2 : v[2], _3 : v[3], _4 : v[4], _5 : v[5]};
};
var thx_Types = function() { };
thx_Types.__name__ = ["thx","Types"];
thx_Types.isAnonymousObject = function(v) {
	return Reflect.isObject(v) && null == Type.getClass(v);
};
thx_Types.isPrimitive = function(v) {
	{
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 1:case 2:case 3:
			return true;
		case 0:case 5:case 7:case 4:case 8:
			return false;
		case 6:
			var c = _g[2];
			return Type.getClassName(c) == "String";
		}
	}
};
thx_Types.isEnumValue = function(v) {
	{
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 7:
			return true;
		default:
			return false;
		}
	}
};
thx_Types.hasSuperClass = function(cls,sup) {
	while(null != cls) {
		if(cls == sup) return true;
		cls = Type.getSuperClass(cls);
	}
	return false;
};
thx_Types.sameType = function(a,b) {
	return thx_Types.toString(Type["typeof"](a)) == thx_Types.toString(Type["typeof"](b));
};
thx_Types.typeInheritance = function(type) {
	switch(type[1]) {
	case 1:
		return ["Int"];
	case 2:
		return ["Float"];
	case 3:
		return ["Bool"];
	case 4:
		return ["{}"];
	case 5:
		return ["Function"];
	case 6:
		var c = type[2];
		var classes = [];
		while(null != c) {
			classes.push(c);
			c = Type.getSuperClass(c);
		}
		return classes.map(Type.getClassName);
	case 7:
		var e = type[2];
		return [Type.getEnumName(e)];
	default:
		throw new js__$Boot_HaxeError("invalid type " + Std.string(type));
	}
};
thx_Types.toString = function(type) {
	switch(type[1]) {
	case 0:
		return "Null";
	case 1:
		return "Int";
	case 2:
		return "Float";
	case 3:
		return "Bool";
	case 4:
		return "{}";
	case 5:
		return "Function";
	case 6:
		var c = type[2];
		return Type.getClassName(c);
	case 7:
		var e = type[2];
		return Type.getEnumName(e);
	default:
		throw new js__$Boot_HaxeError("invalid type " + Std.string(type));
	}
};
thx_Types.valueTypeInheritance = function(value) {
	return thx_Types.typeInheritance(Type["typeof"](value));
};
thx_Types.valueTypeToString = function(value) {
	return thx_Types.toString(Type["typeof"](value));
};
thx_Types.anyValueToString = function(value) {
	if(js_Boot.__instanceof(value,ValueType)) return thx_Types.toString(value);
	if(js_Boot.__instanceof(value,Class)) return Type.getClassName(value);
	if(js_Boot.__instanceof(value,Enum)) return Type.getEnumName(value);
	return thx_Types.valueTypeToString(value);
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
thx__$Url_Url_$Impl_$.equals = function(self,that) {
	return thx__$Url_Url_$Impl_$.equalsTo(self,that);
};
thx__$Url_Url_$Impl_$.equalsTo = function(this1,that) {
	return this1.protocol == that.protocol && this1.slashes == that.slashes && this1.auth == that.auth && this1.hostName == that.hostName && this1.port == that.port && this1.pathName == that.pathName && thx__$QueryString_QueryString_$Impl_$.equals(this1.queryString,that.queryString) && this1.search == thx__$Url_Url_$Impl_$.get_search(that) && this1.hash == that.hash;
};
thx__$Url_Url_$Impl_$.concatString = function(this1,that) {
	var copy = thx__$Url_Url_$Impl_$.clone(this1);
	if(thx_Strings.isEmpty(this1.pathName)) {
		if(!StringTools.startsWith(that,"/")) that = "/" + that;
		copy.pathName = that;
	} else {
		if(StringTools.startsWith(that,"/")) that = that.substring(1);
		if(StringTools.endsWith(this1.pathName,"/")) copy.pathName = copy.pathName + that; else copy.pathName = copy.pathName + "/" + that;
	}
	return copy;
};
thx__$Url_Url_$Impl_$.toString = function(this1) {
	if(this1.hostName != null) return "" + (this1.protocol != null?this1.protocol + ":":"") + (this1.slashes?"//":"") + (this1.auth != null?this1.auth + "@":"") + (this1.hostName + (this1.port != null?":" + this1.port:"")) + (this1.pathName + (this1.search != null || this1.queryString != null && !(!this1.queryString.iterator().hasNext())?"?" + thx__$Url_Url_$Impl_$.get_search(this1):"")) + (this1.hash != null?"#" + this1.hash:""); else return "" + (this1.pathName + (this1.search != null || this1.queryString != null && !(!this1.queryString.iterator().hasNext())?"?" + thx__$Url_Url_$Impl_$.get_search(this1):"")) + (this1.hash != null?"#" + this1.hash:"");
};
thx__$Url_Url_$Impl_$.clone = function(this1) {
	return { protocol : this1.protocol, slashes : this1.slashes, auth : this1.auth, hostName : this1.hostName, port : this1.port, pathName : this1.pathName, queryString : thx__$QueryString_QueryString_$Impl_$.clone(this1.queryString), search : thx__$Url_Url_$Impl_$.get_search(this1), hash : this1.hash};
};
thx__$Url_Url_$Impl_$.ensureQueryString = function(this1) {
	if(this1.queryString != null) return this1.queryString; else {
		var value = new haxe_ds_StringMap();
		if(null != value) this1.search = null;
		return this1.queryString = value;
	}
};
thx__$Url_Url_$Impl_$.get_auth = function(this1) {
	return this1.auth;
};
thx__$Url_Url_$Impl_$.set_auth = function(this1,value) {
	return this1.auth = value;
};
thx__$Url_Url_$Impl_$.get_hasAuth = function(this1) {
	return this1.auth != null;
};
thx__$Url_Url_$Impl_$.get_hasHash = function(this1) {
	return this1.hash != null;
};
thx__$Url_Url_$Impl_$.get_hasPort = function(this1) {
	return this1.port != null;
};
thx__$Url_Url_$Impl_$.get_hasProtocol = function(this1) {
	return this1.protocol != null;
};
thx__$Url_Url_$Impl_$.get_hasQueryString = function(this1) {
	return this1.queryString != null && !(!this1.queryString.iterator().hasNext());
};
thx__$Url_Url_$Impl_$.get_hasSearch = function(this1) {
	return this1.search != null || this1.queryString != null && !(!this1.queryString.iterator().hasNext());
};
thx__$Url_Url_$Impl_$.get_host = function(this1) {
	return this1.hostName + (this1.port != null?":" + this1.port:"");
};
thx__$Url_Url_$Impl_$.set_host = function(this1,host) {
	var p = host.indexOf(":");
	if(p < 0) {
		this1.hostName = host;
		this1.port = null;
	} else {
		this1.hostName = host.substring(0,p);
		this1.port = Std.parseInt(host.substring(p + 1));
	}
	return host;
};
thx__$Url_Url_$Impl_$.get_hostName = function(this1) {
	return this1.hostName;
};
thx__$Url_Url_$Impl_$.set_hostName = function(this1,hostName) {
	return this1.hostName = hostName;
};
thx__$Url_Url_$Impl_$.get_href = function(this1) {
	return thx__$Url_Url_$Impl_$.toString(this1);
};
thx__$Url_Url_$Impl_$.set_href = function(this1,value) {
	this1 = thx__$Url_Url_$Impl_$.parse(value,true);
	return value;
};
thx__$Url_Url_$Impl_$.get_isAbsolute = function(this1) {
	return this1.hostName != null;
};
thx__$Url_Url_$Impl_$.get_isRelative = function(this1) {
	return this1.hostName == null;
};
thx__$Url_Url_$Impl_$.get_path = function(this1) {
	return this1.pathName + (this1.search != null || this1.queryString != null && !(!this1.queryString.iterator().hasNext())?"?" + thx__$Url_Url_$Impl_$.get_search(this1):"");
};
thx__$Url_Url_$Impl_$.set_path = function(this1,value) {
	var p = value.indexOf("?");
	if(p < 0) {
		this1.pathName = value;
		this1.search = null;
		this1.queryString = null;
	} else {
		this1.pathName = value.substring(0,p);
		thx__$Url_Url_$Impl_$.set_search(this1,value.substring(p + 1));
	}
	return value;
};
thx__$Url_Url_$Impl_$.get_pathName = function(this1) {
	return this1.pathName;
};
thx__$Url_Url_$Impl_$.set_pathName = function(this1,value) {
	return this1.pathName = value;
};
thx__$Url_Url_$Impl_$.get_port = function(this1) {
	return this1.port;
};
thx__$Url_Url_$Impl_$.set_port = function(this1,value) {
	return this1.port = value;
};
thx__$Url_Url_$Impl_$.get_protocol = function(this1) {
	return this1.protocol;
};
thx__$Url_Url_$Impl_$.set_protocol = function(this1,value) {
	return null == value?this1.protocol = null:this1.protocol = value.toLowerCase();
};
thx__$Url_Url_$Impl_$.get_hash = function(this1) {
	return this1.hash;
};
thx__$Url_Url_$Impl_$.set_hash = function(this1,value) {
	return this1.hash = value;
};
thx__$Url_Url_$Impl_$.get_slashes = function(this1) {
	return this1.slashes;
};
thx__$Url_Url_$Impl_$.set_slashes = function(this1,value) {
	return this1.slashes = value;
};
thx__$Url_Url_$Impl_$.get_queryString = function(this1) {
	return this1.queryString;
};
thx__$Url_Url_$Impl_$.set_queryString = function(this1,value) {
	if(null != value) this1.search = null;
	return this1.queryString = value;
};
thx__$Url_Url_$Impl_$.get_search = function(this1) {
	if(null != this1.search && "" != this1.search) return this1.search; else return thx__$QueryString_QueryString_$Impl_$.toStringWithSymbols(this1.queryString,thx__$QueryString_QueryString_$Impl_$.separator,thx__$QueryString_QueryString_$Impl_$.assignment,thx__$QueryString_QueryString_$Impl_$.encodeURIComponent);
};
thx__$Url_Url_$Impl_$.set_search = function(this1,value) {
	var qs;
	try {
		qs = thx__$QueryString_QueryString_$Impl_$.parseWithSymbols(value,thx__$QueryString_QueryString_$Impl_$.separator,thx__$QueryString_QueryString_$Impl_$.assignment,thx__$QueryString_QueryString_$Impl_$.decodeURIComponent);
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		qs = null;
	}
	if(qs == null || (function($this) {
		var $r;
		var arr = thx_Iterators.toArray(qs.keys());
		$r = arr.length == 0?true:arr.length != 1?false:qs.get(arr[0]).length == 0;
		return $r;
	}(this))) {
		this1.search = value;
		this1.queryString = null;
	} else {
		this1.queryString = qs;
		this1.search = null;
	}
	return value;
};
var thx__$Validation_Validation_$Impl_$ = {};
thx__$Validation_Validation_$Impl_$.__name__ = ["thx","_Validation","Validation_Impl_"];
thx__$Validation_Validation_$Impl_$.validation = function(e) {
	return e;
};
thx__$Validation_Validation_$Impl_$.vnel = function(e) {
	return e;
};
thx__$Validation_Validation_$Impl_$.pure = function(a) {
	return thx_Either.Right(a);
};
thx__$Validation_Validation_$Impl_$.success = function(a) {
	return thx_Either.Right(a);
};
thx__$Validation_Validation_$Impl_$.failure = function(e) {
	return thx_Either.Left(e);
};
thx__$Validation_Validation_$Impl_$.nn = function(a,e) {
	if(a == null) return thx_Either.Left(e); else return thx_Either.Right(a);
};
thx__$Validation_Validation_$Impl_$.successNel = function(a) {
	return thx_Either.Right(a);
};
thx__$Validation_Validation_$Impl_$.failureNel = function(e) {
	return thx_Either.Left(thx__$Nel_Nel_$Impl_$.pure(e));
};
thx__$Validation_Validation_$Impl_$.nnNel = function(a,e) {
	if(a == null) return thx_Either.Left(thx__$Nel_Nel_$Impl_$.pure(e)); else return thx_Either.Right(a);
};
thx__$Validation_Validation_$Impl_$.get_either = function(this1) {
	return this1;
};
thx__$Validation_Validation_$Impl_$.map = function(this1,f) {
	return thx__$Validation_Validation_$Impl_$.ap(this1,thx_Either.Right(f),function(e1,e2) {
		throw new js__$Boot_HaxeError("Unreachable");
	});
};
thx__$Validation_Validation_$Impl_$.ap = function(this1,v,s) {
	switch(this1[1]) {
	case 0:
		var e0 = this1[2];
		{
			var _g = v;
			switch(_g[1]) {
			case 0:
				var e1 = _g[2];
				return thx_Either.Left((thx__$Semigroup_Semigroup_$Impl_$.get_append(s))(e0,e1));
			case 1:
				var b = _g[2];
				return thx_Either.Left(e0);
			}
		}
		break;
	case 1:
		var a = this1[2];
		{
			var _g1 = v;
			switch(_g1[1]) {
			case 0:
				var e = _g1[2];
				return thx_Either.Left(e);
			case 1:
				var f = _g1[2];
				return thx_Either.Right(f(a));
			}
		}
		break;
	}
};
thx__$Validation_Validation_$Impl_$.zip = function(this1,v,s) {
	return thx__$Validation_Validation_$Impl_$.ap(this1,thx_Eithers.map(v,function(b) {
		return (function(f,_1) {
			return function(_0) {
				return f(_0,_1);
			};
		})(thx__$Tuple_Tuple2_$Impl_$.of,b);
	}),s);
};
thx__$Validation_Validation_$Impl_$.leftMap = function(this1,f) {
	return thx_Eithers.leftMap(this1,f);
};
thx__$Validation_Validation_$Impl_$.wrapNel = function(this1) {
	return thx_Eithers.leftMap(this1,thx__$Nel_Nel_$Impl_$.pure);
};
thx__$Validation_Validation_$Impl_$.flatMapV = function(this1,f) {
	switch(this1[1]) {
	case 0:
		var a = this1[2];
		return thx_Either.Left(a);
	case 1:
		var b = this1[2];
		return f(b);
	}
};
thx__$Validation_Validation_$Impl_$.val2 = function(f,v1,v2,s) {
	return thx__$Validation_Validation_$Impl_$.ap(v2,(function($this) {
		var $r;
		var f1 = thx_Functions2.curry(f);
		$r = thx__$Validation_Validation_$Impl_$.ap(v1,thx_Either.Right(f1),function(e1,e2) {
			throw new js__$Boot_HaxeError("Unreachable");
		});
		return $r;
	}(this)),s);
};
thx__$Validation_Validation_$Impl_$.val3 = function(f,v1,v2,v3,s) {
	return thx__$Validation_Validation_$Impl_$.ap(v3,(function($this) {
		var $r;
		var f1 = thx_Functions3.curry(f);
		$r = thx__$Validation_Validation_$Impl_$.ap(v2,(function($this) {
			var $r;
			var f2 = thx_Functions2.curry(f1);
			$r = thx__$Validation_Validation_$Impl_$.ap(v1,thx_Either.Right(f2),function(e1,e2) {
				throw new js__$Boot_HaxeError("Unreachable");
			});
			return $r;
		}($this)),s);
		return $r;
	}(this)),s);
};
thx__$Validation_Validation_$Impl_$.val4 = function(f,v1,v2,v3,v4,s) {
	return thx__$Validation_Validation_$Impl_$.ap(v4,(function($this) {
		var $r;
		var f1 = thx_Functions4.curry(f);
		$r = thx__$Validation_Validation_$Impl_$.ap(v3,(function($this) {
			var $r;
			var f2 = thx_Functions3.curry(f1);
			$r = thx__$Validation_Validation_$Impl_$.ap(v2,(function($this) {
				var $r;
				var f3 = thx_Functions2.curry(f2);
				$r = thx__$Validation_Validation_$Impl_$.ap(v1,thx_Either.Right(f3),function(e1,e2) {
					throw new js__$Boot_HaxeError("Unreachable");
				});
				return $r;
			}($this)),s);
			return $r;
		}($this)),s);
		return $r;
	}(this)),s);
};
thx__$Validation_Validation_$Impl_$.val5 = function(f,v1,v2,v3,v4,v5,s) {
	return thx__$Validation_Validation_$Impl_$.ap(v5,(function($this) {
		var $r;
		var f1 = thx_Functions5.curry(f);
		$r = thx__$Validation_Validation_$Impl_$.ap(v4,(function($this) {
			var $r;
			var f2 = thx_Functions4.curry(f1);
			$r = thx__$Validation_Validation_$Impl_$.ap(v3,(function($this) {
				var $r;
				var f3 = thx_Functions3.curry(f2);
				$r = thx__$Validation_Validation_$Impl_$.ap(v2,(function($this) {
					var $r;
					var f4 = thx_Functions2.curry(f3);
					$r = thx__$Validation_Validation_$Impl_$.ap(v1,thx_Either.Right(f4),function(e1,e2) {
						throw new js__$Boot_HaxeError("Unreachable");
					});
					return $r;
				}($this)),s);
				return $r;
			}($this)),s);
			return $r;
		}($this)),s);
		return $r;
	}(this)),s);
};
thx__$Validation_Validation_$Impl_$.val6 = function(f,v1,v2,v3,v4,v5,v6,s) {
	return thx__$Validation_Validation_$Impl_$.ap(v6,(function($this) {
		var $r;
		var f1 = thx_Functions6.curry(f);
		$r = thx__$Validation_Validation_$Impl_$.ap(v5,(function($this) {
			var $r;
			var f2 = thx_Functions5.curry(f1);
			$r = thx__$Validation_Validation_$Impl_$.ap(v4,(function($this) {
				var $r;
				var f3 = thx_Functions4.curry(f2);
				$r = thx__$Validation_Validation_$Impl_$.ap(v3,(function($this) {
					var $r;
					var f4 = thx_Functions3.curry(f3);
					$r = thx__$Validation_Validation_$Impl_$.ap(v2,(function($this) {
						var $r;
						var f5 = thx_Functions2.curry(f4);
						$r = thx__$Validation_Validation_$Impl_$.ap(v1,thx_Either.Right(f5),function(e1,e2) {
							throw new js__$Boot_HaxeError("Unreachable");
						});
						return $r;
					}($this)),s);
					return $r;
				}($this)),s);
				return $r;
			}($this)),s);
			return $r;
		}($this)),s);
		return $r;
	}(this)),s);
};
thx__$Validation_Validation_$Impl_$.val7 = function(f,v1,v2,v3,v4,v5,v6,v7,s) {
	return thx__$Validation_Validation_$Impl_$.ap(v7,(function($this) {
		var $r;
		var f1 = thx_Functions7.curry(f);
		$r = thx__$Validation_Validation_$Impl_$.ap(v6,(function($this) {
			var $r;
			var f2 = thx_Functions6.curry(f1);
			$r = thx__$Validation_Validation_$Impl_$.ap(v5,(function($this) {
				var $r;
				var f3 = thx_Functions5.curry(f2);
				$r = thx__$Validation_Validation_$Impl_$.ap(v4,(function($this) {
					var $r;
					var f4 = thx_Functions4.curry(f3);
					$r = thx__$Validation_Validation_$Impl_$.ap(v3,(function($this) {
						var $r;
						var f5 = thx_Functions3.curry(f4);
						$r = thx__$Validation_Validation_$Impl_$.ap(v2,(function($this) {
							var $r;
							var f6 = thx_Functions2.curry(f5);
							$r = thx__$Validation_Validation_$Impl_$.ap(v1,thx_Either.Right(f6),function(e1,e2) {
								throw new js__$Boot_HaxeError("Unreachable");
							});
							return $r;
						}($this)),s);
						return $r;
					}($this)),s);
					return $r;
				}($this)),s);
				return $r;
			}($this)),s);
			return $r;
		}($this)),s);
		return $r;
	}(this)),s);
};
thx__$Validation_Validation_$Impl_$.val8 = function(f,v1,v2,v3,v4,v5,v6,v7,v8,s) {
	return thx__$Validation_Validation_$Impl_$.ap(v8,(function($this) {
		var $r;
		var f1 = thx_Functions8.curry(f);
		$r = thx__$Validation_Validation_$Impl_$.ap(v7,(function($this) {
			var $r;
			var f2 = thx_Functions7.curry(f1);
			$r = thx__$Validation_Validation_$Impl_$.ap(v6,(function($this) {
				var $r;
				var f3 = thx_Functions6.curry(f2);
				$r = thx__$Validation_Validation_$Impl_$.ap(v5,(function($this) {
					var $r;
					var f4 = thx_Functions5.curry(f3);
					$r = thx__$Validation_Validation_$Impl_$.ap(v4,(function($this) {
						var $r;
						var f5 = thx_Functions4.curry(f4);
						$r = thx__$Validation_Validation_$Impl_$.ap(v3,(function($this) {
							var $r;
							var f6 = thx_Functions3.curry(f5);
							$r = thx__$Validation_Validation_$Impl_$.ap(v2,(function($this) {
								var $r;
								var f7 = thx_Functions2.curry(f6);
								$r = thx__$Validation_Validation_$Impl_$.ap(v1,thx_Either.Right(f7),function(e1,e2) {
									throw new js__$Boot_HaxeError("Unreachable");
								});
								return $r;
							}($this)),s);
							return $r;
						}($this)),s);
						return $r;
					}($this)),s);
					return $r;
				}($this)),s);
				return $r;
			}($this)),s);
			return $r;
		}($this)),s);
		return $r;
	}(this)),s);
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
	innerError: null
	,__class__: thx_error_ErrorWrapper
});
var thx_http_Const = function() { };
thx_http_Const.__name__ = ["thx","http","Const"];
var thx_http__$Header_Header_$Impl_$ = {};
thx_http__$Header_Header_$Impl_$.__name__ = ["thx","http","_Header","Header_Impl_"];
thx_http__$Header_Header_$Impl_$.raw = function(key,value) {
	return { _0 : key, _1 : value};
};
thx_http__$Header_Header_$Impl_$.fromTuple = function(t) {
	var t1 = thx_http__$Header_Header_$Impl_$.normalize(t);
	return t1;
};
thx_http__$Header_Header_$Impl_$.create = function(key,value) {
	var t = thx_http__$Header_Header_$Impl_$.normalize({ _0 : key, _1 : value});
	return t;
};
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
thx_http__$Header_Header_$Impl_$._new = function(t) {
	return t;
};
thx_http__$Header_Header_$Impl_$.get_key = function(this1) {
	return this1._0;
};
thx_http__$Header_Header_$Impl_$.set_key = function(this1,v) {
	return this1._0 = thx_http__$Header_Header_$Impl_$.normalizeKey(v);
};
thx_http__$Header_Header_$Impl_$.get_value = function(this1) {
	return this1._1;
};
thx_http__$Header_Header_$Impl_$.set_value = function(this1,v) {
	return this1._1 = thx_http__$Header_Header_$Impl_$.normalizeValue(v);
};
var thx_http__$Headers_Headers_$Impl_$ = {};
thx_http__$Headers_Headers_$Impl_$.__name__ = ["thx","http","_Headers","Headers_Impl_"];
thx_http__$Headers_Headers_$Impl_$.fromDynamic = function(object) {
	return thx_http__$Headers_Headers_$Impl_$.fromTuples(thx_DynamicsT.tuples(object));
};
thx_http__$Headers_Headers_$Impl_$.fromMap = function(map) {
	return thx_http__$Headers_Headers_$Impl_$.fromTuples(thx_Maps.tuples(map));
};
thx_http__$Headers_Headers_$Impl_$.fromStringMap = function(map) {
	return thx_http__$Headers_Headers_$Impl_$.fromTuples(thx_Maps.tuples(map));
};
thx_http__$Headers_Headers_$Impl_$.fromTuples = function(arr) {
	return arr.map(function(t) {
		return (function($this) {
			var $r;
			var t1 = thx_http__$Header_Header_$Impl_$.normalize(t);
			$r = t1;
			return $r;
		}(this));
	});
};
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
		var t = thx_http__$Header_Header_$Impl_$.normalize({ _0 : key, _1 : value});
		return t;
	});
};
thx_http__$Headers_Headers_$Impl_$.empty = function() {
	return [];
};
thx_http__$Headers_Headers_$Impl_$._new = function(arr) {
	return arr;
};
thx_http__$Headers_Headers_$Impl_$.exists = function(this1,key) {
	key = thx_http__$Header_Header_$Impl_$.normalizeKey(key).toLowerCase();
	return thx_Arrays.any(this1,function(h) {
		return h._0.toLowerCase() == key;
	});
};
thx_http__$Headers_Headers_$Impl_$.get = function(this1,key) {
	var p = thx_http__$Headers_Headers_$Impl_$.getHeader(this1,key);
	if(p == null) return null; else return p._1;
};
thx_http__$Headers_Headers_$Impl_$.remove = function(this1,key) {
	key = thx_http__$Header_Header_$Impl_$.normalizeKey(key).toLowerCase();
	var p = thx_Arrays.find(this1,function(h) {
		return h._0.toLowerCase() == key;
	});
	return HxOverrides.remove(this1,p);
};
thx_http__$Headers_Headers_$Impl_$.getHeader = function(this1,key) {
	key = thx_http__$Header_Header_$Impl_$.normalizeKey(key).toLowerCase();
	return thx_Arrays.find(this1,function(h) {
		return h._0.toLowerCase() == key;
	});
};
thx_http__$Headers_Headers_$Impl_$.set = function(this1,key,value) {
	var p = thx_http__$Headers_Headers_$Impl_$.getHeader(this1,key);
	if(null == p) this1.push((function($this) {
		var $r;
		var t = thx_http__$Header_Header_$Impl_$.normalize({ _0 : key, _1 : value});
		$r = t;
		return $r;
	}(this))); else p._1 = thx_http__$Header_Header_$Impl_$.normalizeValue(value);
};
thx_http__$Headers_Headers_$Impl_$.add = function(this1,key,value) {
	this1.push((function($this) {
		var $r;
		var t = thx_http__$Header_Header_$Impl_$.normalize({ _0 : key, _1 : value});
		$r = t;
		return $r;
	}(this)));
};
thx_http__$Headers_Headers_$Impl_$.formatValue = function(value,key) {
	var len = thx_Ints.max(key.length,1) + 2;
	return StringTools.replace(value,"\r\n","\r\n" + thx_Strings.repeat(" ",len));
};
thx_http__$Headers_Headers_$Impl_$.toObject = function(this1) {
	var o = { };
	this1.map(function(_) {
		return o[_._0] = _._1;
	});
	return o;
};
thx_http__$Headers_Headers_$Impl_$.toString = function(this1) {
	return this1.map(function(_) {
		return "" + _._0 + ": " + thx_http__$Headers_Headers_$Impl_$.formatValue(_._1,_._0);
	}).join("\n");
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
	if(null == headers) this.headers = thx_http__$Headers_Headers_$Impl_$.empty(); else this.headers = headers;
	this.version = version;
	if(null == body) this.body = thx_http_RequestBody.NoBody; else this.body = body;
};
thx_http_RequestInfo.__name__ = ["thx","http","RequestInfo"];
thx_http_RequestInfo.parse = function(request) {
	thx_http_Const.NL.match(request);
	var firstLine = thx_http_Const.WS.split(thx_http_Const.NL.matchedLeft());
	request = thx_http_Const.NL.matchedRight();
	var headersBlock;
	var bodyBlock = null;
	var method = firstLine[0];
	var headers;
	var url;
	var body;
	if(thx_http_Const.NL2.match(request)) {
		headersBlock = thx_http_Const.NL2.matchedLeft();
		bodyBlock = thx_http_Const.NL2.matchedRight();
	} else headersBlock = request;
	headers = thx_http__$Headers_Headers_$Impl_$.fromString(headersBlock);
	var host = thx_http__$Headers_Headers_$Impl_$.get(headers,"Host");
	if(null == host) url = firstLine[1]; else {
		if(!StringTools.startsWith(host,"http://") && !StringTools.startsWith(host,"https://")) host = "http://" + host;
		url = "" + host + firstLine[1];
		thx_http__$Headers_Headers_$Impl_$.remove(headers,"Host");
	}
	if(thx_Strings.isEmpty(bodyBlock)) body = thx_http_RequestBody.NoBody; else body = thx_http_RequestBody.BodyString(bodyBlock);
	return new thx_http_RequestInfo(method,thx__$Url_Url_$Impl_$.fromString(url),headers,body,firstLine[2].split("/").pop());
};
thx_http_RequestInfo.prototype = {
	method: null
	,url: null
	,headers: null
	,version: null
	,body: null
	,toString: function() {
		var h = thx_http__$Headers_Headers_$Impl_$.toString(this.headers);
		var path;
		var this1 = this.url;
		path = this1.pathName + (this1.search != null || this1.queryString != null && !(!this1.queryString.iterator().hasNext())?"?" + thx__$Url_Url_$Impl_$.get_search(this1):"");
		if(path.substring(0,1) != "/") path = "/" + path;
		var buf = ["" + this.method + " " + path + " " + this.url.protocol.toUpperCase() + "/" + this.version];
		if(this.url.hostName != null) buf.push("Host: " + (function($this) {
			var $r;
			var this2 = $this.url;
			$r = this2.hostName + (this2.port != null?":" + this2.port:"");
			return $r;
		}(this)));
		if(h != "") buf.push(h);
		{
			var _g = this.body;
			switch(_g[1]) {
			case 0:
				break;
			case 4:
				var e = _g[2];
				break;
			case 1:
				var s = _g[2];
				buf.push("\r\n" + s);
				break;
			case 2:
				var b = _g[2];
				buf.push("\r\n" + b.toString());
				break;
			case 3:
				var s1 = _g[2];
				var b1 = s1.readAll();
				this.body = thx_http_RequestBody.BodyBytes(b1);
				buf.push("\r\n" + b1.toString());
				break;
			}
		}
		return buf.join("\r\n");
	}
	,read: function() {
		var _g1 = this;
		{
			var _g = this.body;
			switch(_g[1]) {
			case 0:
				return thx_promise__$Promise_Promise_$Impl_$.value(haxe_io_Bytes.alloc(0));
			case 2:
				var b = _g[2];
				return thx_promise__$Promise_Promise_$Impl_$.value(b);
			case 4:
				var e = _g[2];
				return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(thx_stream_EmitterBytes.toPromise(e),function(bytes) {
					_g1.body = thx_http_RequestBody.BodyBytes(bytes);
					return bytes;
				});
			case 1:
				var s = _g[2];
				var b1 = haxe_io_Bytes.ofString(s);
				this.body = thx_http_RequestBody.BodyBytes(b1);
				return thx_promise__$Promise_Promise_$Impl_$.value(b1);
			case 3:
				var s1 = _g[2];
				var b2 = s1.readAll();
				this.body = thx_http_RequestBody.BodyBytes(b2);
				return thx_promise__$Promise_Promise_$Impl_$.value(b2);
			}
		}
	}
	,__class__: thx_http_RequestInfo
};
var thx_http_Response = function() { };
thx_http_Response.__name__ = ["thx","http","Response"];
thx_http_Response.prototype = {
	statusCode: null
	,statusText: null
	,headers: null
	,emitter: null
	,asBytes: function() {
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
		var key = this.get_statusCode();
		return thx_http_Response.statusCodes.h[key];
	}
	,toString: function() {
		return "" + this.get_statusCode() + ": " + this.get_statusText() + "\n" + thx_http__$Headers_Headers_$Impl_$.toString(this.headers);
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
					req.send(i.readAll().getData());
					break;
				case 1:
					var e = _g[3];
					var s = _g[2];
					req.send(s);
					break;
				case 4:
					var e1 = _g[2];
					thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(thx_stream_EmitterBytes.toPromise(e1),function(bytes) {
						req.send(bytes.b.bufferValue);
					}),function(e2) {
						throw e2;
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
		req.onload = function(e3) {
			if(req.response == null || req.response.length == 0) bus.emit(thx_stream_StreamValue.End(false)); else {
				bus.pulse(haxe_io_Bytes.ofData(req.response));
				bus.emit(thx_stream_StreamValue.End(false));
			}
			if(sent) return;
			sent = true;
			resolve(new thx_http_core_Html5Response(req,bus));
		};
		req.onreadystatechange = function(e4) {
			if(req.readyState == 1) {
				send();
				return;
			}
			if(req.readyState != 2) return;
			if(sent) return;
			sent = true;
			resolve(new thx_http_core_Html5Response(req,bus));
		};
		req.onabort = function(e5) {
			reject(new thx_error_ErrorWrapper("connection aborted",e5,null,{ fileName : "Html5Request.hx", lineNumber : 65, className : "thx.http.core.Html5Request", methodName : "make"}));
		};
		req.onerror = function(e6) {
			reject(thx_Error.fromDynamic(e6,{ fileName : "Html5Request.hx", lineNumber : 68, className : "thx.http.core.Html5Request", methodName : "make"}));
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
	req: null
	,get_statusCode: function() {
		return this.req.status;
	}
	,get_statusText: function() {
		return this.req.statusText;
	}
	,__class__: thx_http_core_Html5Response
});
var thx_load_Loader = function() { };
thx_load_Loader.__name__ = ["thx","load","Loader"];
thx_load_Loader.getObject = function(path) {
	var ext = path.split(".").pop().toLowerCase();
	switch(ext) {
	case "json":case "js":
		return thx_load_Loader.getJson(path);
	default:
		return thx_promise__$Promise_Promise_$Impl_$.fail("unrecognized format for " + path,{ fileName : "Loader.hx", lineNumber : 24, className : "thx.load.Loader", methodName : "getObject"});
	}
};
thx_load_Loader.getJson = function(path) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(thx_load_Loader.getText(path),function(content) {
		try {
			return thx_promise__$Promise_Promise_$Impl_$.value(JSON.parse(content));
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return thx_promise__$Promise_Promise_$Impl_$.error(thx_Error.fromDynamic(e,{ fileName : "Loader.hx", lineNumber : 34, className : "thx.load.Loader", methodName : "getJson"}));
		}
	});
};
thx_load_Loader.getText = function(path) {
	if(StringTools.startsWith(path,"http://") || StringTools.startsWith(path,"https://")) return thx_load_Loader.makeTextHttpRequest(path); else if(StringTools.startsWith(path,"file://")) return thx_load_Loader.loadText(path.substring(7)); else throw new thx_Error("unsupported content path or protocol: " + path,null,{ fileName : "Loader.hx", lineNumber : 71, className : "thx.load.Loader", methodName : "getText"});
};
thx_load_Loader.getBinary = function(path) {
	if(StringTools.startsWith(path,"http://") || StringTools.startsWith(path,"https://")) return thx_load_Loader.makeBinaryHttpRequest(path); else if(StringTools.startsWith(path,"file://")) return thx_load_Loader.loadBinary(path.substring(7)); else throw new thx_Error("unsupported content path or protocol: " + path,null,{ fileName : "Loader.hx", lineNumber : 81, className : "thx.load.Loader", methodName : "getBinary"});
};
thx_load_Loader.normalizePath = function(path) {
	if(StringTools.startsWith(path,"http://") || StringTools.startsWith(path,"https://") || StringTools.startsWith(path,"file://")) return path;
	var host = (typeof window != 'undefined') ? window.location.host : null;
	if(null != host) {
		if(!StringTools.startsWith(path,"/")) path = window.location.pathname.split("/").slice(0,-1).concat([path]).join("/");
		return "" + window.location.protocol + "//" + host + path;
	}
	return "file://" + path;
};
thx_load_Loader.makeTextHttpRequest = function(url) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(thx_http_Request.get(url),function(response) {
		var _g = response.get_statusCode();
		switch(_g) {
		case 200:case 201:case 202:case 203:case 206:
			return response.asString();
		case 204:case 205:
			return thx_promise__$Promise_Promise_$Impl_$.value(null);
		default:
			return thx_promise__$Promise_Promise_$Impl_$.fail(response.get_statusText(),{ fileName : "Loader.hx", lineNumber : 120, className : "thx.load.Loader", methodName : "makeTextHttpRequest"});
		}
	});
};
thx_load_Loader.makeBinaryHttpRequest = function(url) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(thx_http_Request.get(url),function(response) {
		var _g = response.get_statusCode();
		switch(_g) {
		case 200:case 201:case 202:case 203:case 206:
			return response.asBytes();
		case 204:case 205:
			return thx_promise__$Promise_Promise_$Impl_$.value(null);
		default:
			return thx_promise__$Promise_Promise_$Impl_$.fail(response.get_statusText(),{ fileName : "Loader.hx", lineNumber : 134, className : "thx.load.Loader", methodName : "makeBinaryHttpRequest"});
		}
	});
};
thx_load_Loader.loadText = function(path) {
	return thx_promise__$Promise_Promise_$Impl_$.fail("this target doesn't support loading files from the filesystem",{ fileName : "Loader.hx", lineNumber : 145, className : "thx.load.Loader", methodName : "loadText"});
};
thx_load_Loader.loadBinary = function(path) {
	return thx_promise__$Promise_Promise_$Impl_$.fail("this target doesn't support loading files from the filesystem",{ fileName : "Loader.hx", lineNumber : 155, className : "thx.load.Loader", methodName : "loadBinary"});
};
var thx_promise_Future = function() {
	this.handlers = [];
	this.state = haxe_ds_Option.None;
};
thx_promise_Future.__name__ = ["thx","promise","Future"];
thx_promise_Future.sequence = function(arr) {
	return thx_promise_Future.create(function(callback) {
		var poll;
		var poll1 = null;
		poll1 = function(_) {
			if(arr.length == 0) callback(thx_Nil.nil); else arr.shift().then(poll1);
		};
		poll = poll1;
		poll(null);
	});
};
thx_promise_Future.afterAll = function(arr) {
	return thx_promise_Future.create(function(callback) {
		thx_promise_Future.all(arr).then(function(_) {
			callback(thx_Nil.nil);
		});
	});
};
thx_promise_Future.all = function(arr) {
	return thx_promise_Future.create(function(callback) {
		var results = [];
		var counter = 0;
		arr.map(function(p,i) {
			p.then(function(value) {
				results[i] = value;
				counter++;
				if(counter == arr.length) callback(results);
			});
		});
	});
};
thx_promise_Future.create = function(handler) {
	var future = new thx_promise_Future();
	handler($bind(future,future.setState));
	return future;
};
thx_promise_Future.flatMap = function(future) {
	return thx_promise_Future.create(function(callback) {
		future.then(function(future1) {
			future1.then(callback);
		});
	});
};
thx_promise_Future.value = function(v) {
	return thx_promise_Future.create(function(callback) {
		callback(v);
	});
};
thx_promise_Future.prototype = {
	handlers: null
	,state: null
	,delay: function(delayms) {
		if(null == delayms) return thx_promise_Future.flatMap(this.map(function(value) {
			return thx_promise_Timer.immediateValue(value);
		})); else return thx_promise_Future.flatMap(this.map(function(value1) {
			return thx_promise_Timer.delayValue(value1,delayms);
		}));
	}
	,hasValue: function() {
		return thx_Options.toBool(this.state);
	}
	,map: function(handler) {
		var _g = this;
		return thx_promise_Future.create(function(callback) {
			_g.then(function(value) {
				callback(handler(value));
			});
		});
	}
	,mapAsync: function(handler) {
		var _g = this;
		return thx_promise_Future.create(function(callback) {
			_g.then(function(result) {
				handler(result,callback);
			});
		});
	}
	,mapPromise: function(handler) {
		var _g = this;
		return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
			_g.then(function(result) {
				thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(handler(result),resolve),reject);
			});
		});
	}
	,mapFuture: function(handler) {
		return thx_promise_Future.flatMap(this.map(handler));
	}
	,then: function(handler) {
		this.handlers.push(handler);
		this.update();
		return this;
	}
	,toString: function() {
		return "Future";
	}
	,setState: function(newstate) {
		{
			var _g = this.state;
			switch(_g[1]) {
			case 1:
				this.state = haxe_ds_Option.Some(newstate);
				break;
			case 0:
				var r = _g[2];
				throw new thx_Error("future was already \"" + Std.string(r) + "\", can't apply the new state \"" + Std.string(newstate) + "\"",null,{ fileName : "Future.hx", lineNumber : 110, className : "thx.promise.Future", methodName : "setState"});
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
				var result = _g[2];
				var index = -1;
				while(++index < this.handlers.length) this.handlers[index](result);
				this.handlers = [];
				break;
			}
		}
	}
	,__class__: thx_promise_Future
};
var thx_promise_Futures = function() { };
thx_promise_Futures.__name__ = ["thx","promise","Futures"];
thx_promise_Futures.join = function(p1,p2) {
	return thx_promise_Future.create(function(callback) {
		var counter = 0;
		var v1 = null;
		var v2 = null;
		var complete = function() {
			if(counter < 2) return;
			callback({ _0 : v1, _1 : v2});
		};
		p1.then(function(v) {
			counter++;
			v1 = v;
			complete();
		});
		p2.then(function(v3) {
			counter++;
			v2 = v3;
			complete();
		});
	});
};
thx_promise_Futures.log = function(future,prefix) {
	if(prefix == null) prefix = "";
	return future.then(function(r) {
		haxe_Log.trace("" + prefix + " VALUE: " + Std.string(r),{ fileName : "Future.hx", lineNumber : 157, className : "thx.promise.Futures", methodName : "log"});
	});
};
var thx_promise_FutureTuple6 = function() { };
thx_promise_FutureTuple6.__name__ = ["thx","promise","FutureTuple6"];
thx_promise_FutureTuple6.mapTuple = function(future,callback) {
	return future.map(function(t) {
		return callback(t._0,t._1,t._2,t._3,t._4,t._5);
	});
};
thx_promise_FutureTuple6.mapTupleAsync = function(future,callback) {
	return future.mapAsync(function(t,cb) {
		callback(t._0,t._1,t._2,t._3,t._4,t._5,cb);
		return;
	});
};
thx_promise_FutureTuple6.mapTupleFuture = function(future,callback) {
	return thx_promise_Future.flatMap(future.map(function(t) {
		return callback(t._0,t._1,t._2,t._3,t._4,t._5);
	}));
};
thx_promise_FutureTuple6.tuple = function(future,callback) {
	return future.then(function(t) {
		callback(t._0,t._1,t._2,t._3,t._4,t._5);
	});
};
var thx_promise_FutureTuple5 = function() { };
thx_promise_FutureTuple5.__name__ = ["thx","promise","FutureTuple5"];
thx_promise_FutureTuple5.join = function(p1,p2) {
	return thx_promise_Future.create(function(callback) {
		thx_promise_Futures.join(p1,p2).then(function(t) {
			callback((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4, _5 : t._1};
				return $r;
			}(this)));
		});
	});
};
thx_promise_FutureTuple5.mapTuple = function(future,callback) {
	return future.map(function(t) {
		return callback(t._0,t._1,t._2,t._3,t._4);
	});
};
thx_promise_FutureTuple5.mapTupleAsync = function(future,callback) {
	return future.mapAsync(function(t,cb) {
		callback(t._0,t._1,t._2,t._3,t._4,cb);
		return;
	});
};
thx_promise_FutureTuple5.mapTupleFuture = function(future,callback) {
	return thx_promise_Future.flatMap(future.map(function(t) {
		return callback(t._0,t._1,t._2,t._3,t._4);
	}));
};
thx_promise_FutureTuple5.tuple = function(future,callback) {
	return future.then(function(t) {
		callback(t._0,t._1,t._2,t._3,t._4);
	});
};
var thx_promise_FutureTuple4 = function() { };
thx_promise_FutureTuple4.__name__ = ["thx","promise","FutureTuple4"];
thx_promise_FutureTuple4.join = function(p1,p2) {
	return thx_promise_Future.create(function(callback) {
		thx_promise_Futures.join(p1,p2).then(function(t) {
			callback((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : t._1};
				return $r;
			}(this)));
		});
	});
};
thx_promise_FutureTuple4.mapTuple = function(future,callback) {
	return future.map(function(t) {
		return callback(t._0,t._1,t._2,t._3);
	});
};
thx_promise_FutureTuple4.mapTupleAsync = function(future,callback) {
	return future.mapAsync(function(t,cb) {
		callback(t._0,t._1,t._2,t._3,cb);
		return;
	});
};
thx_promise_FutureTuple4.mapTupleFuture = function(future,callback) {
	return thx_promise_Future.flatMap(future.map(function(t) {
		return callback(t._0,t._1,t._2,t._3);
	}));
};
thx_promise_FutureTuple4.tuple = function(future,callback) {
	return future.then(function(t) {
		callback(t._0,t._1,t._2,t._3);
	});
};
var thx_promise_FutureTuple3 = function() { };
thx_promise_FutureTuple3.__name__ = ["thx","promise","FutureTuple3"];
thx_promise_FutureTuple3.join = function(p1,p2) {
	return thx_promise_Future.create(function(callback) {
		thx_promise_Futures.join(p1,p2).then(function(t) {
			callback((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : t._1};
				return $r;
			}(this)));
		});
	});
};
thx_promise_FutureTuple3.mapTuple = function(future,callback) {
	return future.map(function(t) {
		return callback(t._0,t._1,t._2);
	});
};
thx_promise_FutureTuple3.mapTupleAsync = function(future,callback) {
	return future.mapAsync(function(t,cb) {
		callback(t._0,t._1,t._2,cb);
		return;
	});
};
thx_promise_FutureTuple3.mapTupleFuture = function(future,callback) {
	return thx_promise_Future.flatMap(future.map(function(t) {
		return callback(t._0,t._1,t._2);
	}));
};
thx_promise_FutureTuple3.tuple = function(future,callback) {
	return future.then(function(t) {
		callback(t._0,t._1,t._2);
	});
};
var thx_promise_FutureTuple2 = function() { };
thx_promise_FutureTuple2.__name__ = ["thx","promise","FutureTuple2"];
thx_promise_FutureTuple2.join = function(p1,p2) {
	return thx_promise_Future.create(function(callback) {
		thx_promise_Futures.join(p1,p2).then(function(t) {
			callback((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : t._1};
				return $r;
			}(this)));
		});
	});
};
thx_promise_FutureTuple2.mapTuple = function(future,callback) {
	return future.map(function(t) {
		return callback(t._0,t._1);
	});
};
thx_promise_FutureTuple2.mapTupleAsync = function(future,callback) {
	return future.mapAsync(function(t,cb) {
		callback(t._0,t._1,cb);
		return;
	});
};
thx_promise_FutureTuple2.mapTupleFuture = function(future,callback) {
	return thx_promise_Future.flatMap(future.map(function(t) {
		return callback(t._0,t._1);
	}));
};
thx_promise_FutureTuple2.tuple = function(future,callback) {
	return future.then(function(t) {
		callback(t._0,t._1);
	});
};
var thx_promise_FutureNil = function() { };
thx_promise_FutureNil.__name__ = ["thx","promise","FutureNil"];
thx_promise_FutureNil.join = function(p1,p2) {
	return thx_promise_Future.create(function(callback) {
		thx_promise_Futures.join(p1,p2).then(function(t) {
			callback(t._1);
		});
	});
};
thx_promise_FutureNil.nil = function(p) {
	return thx_promise_Future.create(function(callback) {
		p.then(function(_) {
			callback(thx_Nil.nil);
		});
	});
};
var thx_promise__$Promise_Promise_$Impl_$ = {};
thx_promise__$Promise_Promise_$Impl_$.__name__ = ["thx","promise","_Promise","Promise_Impl_"];
thx_promise__$Promise_Promise_$Impl_$.futureToPromise = function(future) {
	return future.map(function(v) {
		return thx_Either.Right(v);
	});
};
thx_promise__$Promise_Promise_$Impl_$.sequence = function(arr) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		arr = arr.slice();
		var poll;
		var poll1 = null;
		poll1 = function(_) {
			if(null == arr || arr.length == 0) resolve(thx_promise__$Promise_Promise_$Impl_$.nil); else thx_promise__$Promise_Promise_$Impl_$.mapFailure(thx_promise__$Promise_Promise_$Impl_$.mapSuccess(arr.shift(),poll1),reject);
		};
		poll = poll1;
		poll(null);
	});
};
thx_promise__$Promise_Promise_$Impl_$.afterAll = function(arr) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.either(thx_promise__$Promise_Promise_$Impl_$.all(arr),function(_) {
			resolve(thx_Nil.nil);
		},reject);
	});
};
thx_promise__$Promise_Promise_$Impl_$.all = function(arr) {
	if(arr.length == 0) return thx_promise__$Promise_Promise_$Impl_$.value([]);
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		var results = [];
		var counter = 0;
		var hasError = false;
		arr.map(function(p,i) {
			thx_promise__$Promise_Promise_$Impl_$.either(p,function(value) {
				if(hasError) return;
				results[i] = value;
				counter++;
				if(counter == arr.length) resolve(results);
			},function(err) {
				if(hasError) return;
				hasError = true;
				reject(err);
			});
		});
	});
};
thx_promise__$Promise_Promise_$Impl_$.allSequence = function(arr) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		var results = [];
		var counter = 0;
		var poll;
		var poll1 = null;
		poll1 = function() {
			if(counter == arr.length) return resolve(results);
			thx_promise__$Promise_Promise_$Impl_$.either(arr[counter++],function(value) {
				results.push(value);
				poll1();
			},function(err) {
				reject(err);
			});
		};
		poll = poll1;
		poll();
	});
};
thx_promise__$Promise_Promise_$Impl_$.create = function(callback) {
	return thx_promise_Future.create(function(cb) {
		callback(function(value) {
			cb(thx_Either.Right(value));
		},function(error) {
			cb(thx_Either.Left(error));
		});
	});
};
thx_promise__$Promise_Promise_$Impl_$.createFulfill = function(callback) {
	return thx_promise_Future.create(callback);
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
thx_promise__$Promise_Promise_$Impl_$.delay = function(this1,delayms) {
	return this1.delay(delayms);
};
thx_promise__$Promise_Promise_$Impl_$.isFailure = function(this1) {
	{
		var _g = this1.state;
		switch(_g[1]) {
		case 1:
			return false;
		case 0:
			switch(_g[2][1]) {
			case 1:
				return false;
			default:
				return true;
			}
			break;
		}
	}
};
thx_promise__$Promise_Promise_$Impl_$.isResolved = function(this1) {
	{
		var _g = this1.state;
		switch(_g[1]) {
		case 1:
			return false;
		case 0:
			switch(_g[2][1]) {
			case 0:
				return false;
			default:
				return true;
			}
			break;
		}
	}
};
thx_promise__$Promise_Promise_$Impl_$.failure = function(this1,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.either(this1,function(_) {
	},failure);
};
thx_promise__$Promise_Promise_$Impl_$.mapAlways = function(this1,handler) {
	return this1.map(function(_) {
		return handler();
	});
};
thx_promise__$Promise_Promise_$Impl_$.mapAlwaysAsync = function(this1,handler) {
	return this1.mapAsync(function(_,cb) {
		handler(cb);
		return;
	});
};
thx_promise__$Promise_Promise_$Impl_$.mapAlwaysFuture = function(this1,handler) {
	return thx_promise_Future.flatMap(this1.map(function(_) {
		return handler();
	}));
};
thx_promise__$Promise_Promise_$Impl_$.mapEither = function(this1,success,failure) {
	return this1.map(function(result) {
		switch(result[1]) {
		case 1:
			var value = result[2];
			return success(value);
		case 0:
			var error = result[2];
			return failure(error);
		}
	});
};
thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture = function(this1,success,failure) {
	return thx_promise_Future.flatMap(this1.map(function(result) {
		switch(result[1]) {
		case 1:
			var value = result[2];
			return success(value);
		case 0:
			var error = result[2];
			return failure(error);
		}
	}));
};
thx_promise__$Promise_Promise_$Impl_$.mapFailure = function(this1,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.mapEither(this1,function(value) {
		return value;
	},failure);
};
thx_promise__$Promise_Promise_$Impl_$.mapFailureFuture = function(this1,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture(this1,function(value) {
		return thx_promise_Future.value(value);
	},failure);
};
thx_promise__$Promise_Promise_$Impl_$.mapFailurePromise = function(this1,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture(this1,function(value) {
		return thx_promise__$Promise_Promise_$Impl_$.value(value);
	},failure);
};
thx_promise__$Promise_Promise_$Impl_$.mapSuccess = function(this1,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture(this1,function(v) {
		try {
			return thx_promise__$Promise_Promise_$Impl_$.value(success(v));
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return thx_promise__$Promise_Promise_$Impl_$.error(thx_Error.fromDynamic(e,{ fileName : "Promise.hx", lineNumber : 178, className : "thx.promise._Promise.Promise_Impl_", methodName : "mapSuccess"}));
		}
	},function(err) {
		return thx_promise__$Promise_Promise_$Impl_$.error(err);
	});
};
thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise = function(this1,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapEitherFuture(this1,success,function(err) {
		return thx_promise__$Promise_Promise_$Impl_$.error(err);
	});
};
thx_promise__$Promise_Promise_$Impl_$.mapNull = function(this1,handler) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(this1,function(v) {
		if(null == v) return handler(); else return thx_promise__$Promise_Promise_$Impl_$.value(v);
	});
};
thx_promise__$Promise_Promise_$Impl_$.success = function(this1,success) {
	return thx_promise__$Promise_Promise_$Impl_$.either(this1,success,function(_) {
	});
};
thx_promise__$Promise_Promise_$Impl_$.throwFailure = function(this1) {
	return thx_promise__$Promise_Promise_$Impl_$.failure(this1,function(err) {
		throw err;
	});
};
thx_promise__$Promise_Promise_$Impl_$.toString = function(this1) {
	return "Promise";
};
var thx_promise_Promises = function() { };
thx_promise_Promises.__name__ = ["thx","promise","Promises"];
thx_promise_Promises.join = function(p1,p2) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		var hasError = false;
		var counter = 0;
		var v1 = null;
		var v2 = null;
		var complete = function() {
			if(counter < 2) return;
			resolve({ _0 : v1, _1 : v2});
		};
		var handleError = function(error) {
			if(hasError) return;
			hasError = true;
			reject(error);
		};
		thx_promise__$Promise_Promise_$Impl_$.either(p1,function(v) {
			if(hasError) return;
			counter++;
			v1 = v;
			complete();
		},handleError);
		thx_promise__$Promise_Promise_$Impl_$.either(p2,function(v3) {
			if(hasError) return;
			counter++;
			v2 = v3;
			complete();
		},handleError);
	});
};
thx_promise_Promises.join2 = function(p1,p2) {
	return thx_promise_Promises.join(p1,p2);
};
thx_promise_Promises.join3 = function(p1,p2,p3) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(thx_promise_Promises.join(thx_promise_Promises.join(p1,p2),p3),function(values) {
		return { _0 : values._0._0, _1 : values._0._1, _2 : values._1};
	});
};
thx_promise_Promises.join4 = function(p1,p2,p3,p4) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(thx_promise_Promises.join(thx_promise_Promises.join3(p1,p2,p3),p4),function(values) {
		return { _0 : values._0._0, _1 : values._0._1, _2 : values._0._2, _3 : values._1};
	});
};
thx_promise_Promises.join5 = function(p1,p2,p3,p4,p5) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(thx_promise_Promises.join(thx_promise_Promises.join4(p1,p2,p3,p4),p5),function(values) {
		return { _0 : values._0._0, _1 : values._0._1, _2 : values._0._2, _3 : values._0._3, _4 : values._1};
	});
};
thx_promise_Promises.join6 = function(p1,p2,p3,p4,p5,p6) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(thx_promise_Promises.join(thx_promise_Promises.join5(p1,p2,p3,p4,p5),p6),function(values) {
		return { _0 : values._0._0, _1 : values._0._1, _2 : values._0._2, _3 : values._0._3, _4 : values._0._4, _5 : values._1};
	});
};
thx_promise_Promises.log = function(promise,prefix) {
	if(prefix == null) prefix = "";
	return thx_promise__$Promise_Promise_$Impl_$.either(promise,function(r) {
		haxe_Log.trace("" + prefix + " SUCCESS: " + Std.string(r),{ fileName : "Promise.hx", lineNumber : 267, className : "thx.promise.Promises", methodName : "log"});
	},function(e) {
		haxe_Log.trace("" + prefix + " ERROR: " + e.toString(),{ fileName : "Promise.hx", lineNumber : 268, className : "thx.promise.Promises", methodName : "log"});
	});
};
var thx_promise_PromiseTuple6 = function() { };
thx_promise_PromiseTuple6.__name__ = ["thx","promise","PromiseTuple6"];
thx_promise_PromiseTuple6.mapTuplePromise = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(promise,function(t) {
		return success(t._0,t._1,t._2,t._3,t._4,t._5);
	});
};
thx_promise_PromiseTuple6.mapTuple = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(promise,function(t) {
		return success(t._0,t._1,t._2,t._3,t._4,t._5);
	});
};
thx_promise_PromiseTuple6.tuple = function(promise,success,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.either(promise,function(t) {
		success(t._0,t._1,t._2,t._3,t._4,t._5);
	},null == failure?function(_) {
	}:failure);
};
var thx_promise_PromiseTuple5 = function() { };
thx_promise_PromiseTuple5.__name__ = ["thx","promise","PromiseTuple5"];
thx_promise_PromiseTuple5.join = function(p1,p2) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.either(thx_promise_Promises.join(p1,p2),function(t) {
			resolve((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4, _5 : t._1};
				return $r;
			}(this)));
		},function(e) {
			reject(e);
		});
	});
};
thx_promise_PromiseTuple5.mapTuplePromise = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(promise,function(t) {
		return success(t._0,t._1,t._2,t._3,t._4);
	});
};
thx_promise_PromiseTuple5.mapTuple = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(promise,function(t) {
		return success(t._0,t._1,t._2,t._3,t._4);
	});
};
thx_promise_PromiseTuple5.tuple = function(promise,success,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.either(promise,function(t) {
		success(t._0,t._1,t._2,t._3,t._4);
	},null == failure?function(_) {
	}:failure);
};
var thx_promise_PromiseTuple4 = function() { };
thx_promise_PromiseTuple4.__name__ = ["thx","promise","PromiseTuple4"];
thx_promise_PromiseTuple4.join = function(p1,p2) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.either(thx_promise_Promises.join(p1,p2),function(t) {
			resolve((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : t._1};
				return $r;
			}(this)));
		},function(e) {
			reject(e);
		});
	});
};
thx_promise_PromiseTuple4.mapTuplePromise = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(promise,function(t) {
		return success(t._0,t._1,t._2,t._3);
	});
};
thx_promise_PromiseTuple4.mapTuple = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(promise,function(t) {
		return success(t._0,t._1,t._2,t._3);
	});
};
thx_promise_PromiseTuple4.tuple = function(promise,success,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.either(promise,function(t) {
		success(t._0,t._1,t._2,t._3);
	},null == failure?function(_) {
	}:failure);
};
var thx_promise_PromiseTuple3 = function() { };
thx_promise_PromiseTuple3.__name__ = ["thx","promise","PromiseTuple3"];
thx_promise_PromiseTuple3.join = function(p1,p2) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.either(thx_promise_Promises.join(p1,p2),function(t) {
			resolve((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : t._1};
				return $r;
			}(this)));
		},function(e) {
			reject(e);
		});
	});
};
thx_promise_PromiseTuple3.mapTuplePromise = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(promise,function(t) {
		return success(t._0,t._1,t._2);
	});
};
thx_promise_PromiseTuple3.mapTuple = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(promise,function(t) {
		return success(t._0,t._1,t._2);
	});
};
thx_promise_PromiseTuple3.tuple = function(promise,success,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.either(promise,function(t) {
		success(t._0,t._1,t._2);
	},null == failure?function(_) {
	}:failure);
};
var thx_promise_PromiseTuple2 = function() { };
thx_promise_PromiseTuple2.__name__ = ["thx","promise","PromiseTuple2"];
thx_promise_PromiseTuple2.join = function(p1,p2) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.either(thx_promise_Promises.join(p1,p2),function(t) {
			resolve((function($this) {
				var $r;
				var this1 = t._0;
				$r = { _0 : this1._0, _1 : this1._1, _2 : t._1};
				return $r;
			}(this)));
		},function(e) {
			reject(e);
		});
	});
};
thx_promise_PromiseTuple2.mapTuplePromise = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccessPromise(promise,function(t) {
		return success(t._0,t._1);
	});
};
thx_promise_PromiseTuple2.mapTuple = function(promise,success) {
	return thx_promise__$Promise_Promise_$Impl_$.mapSuccess(promise,function(t) {
		return success(t._0,t._1);
	});
};
thx_promise_PromiseTuple2.tuple = function(promise,success,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.either(promise,function(t) {
		success(t._0,t._1);
	},null == failure?function(_) {
	}:failure);
};
var thx_promise_PromiseNil = function() { };
thx_promise_PromiseNil.__name__ = ["thx","promise","PromiseNil"];
thx_promise_PromiseNil.join = function(p1,p2) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.either(thx_promise_Promises.join(p1,p2),function(t) {
			resolve(t._1);
		},function(e) {
			reject(e);
		});
	});
};
thx_promise_PromiseNil.nil = function(p) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(p,function(_) {
			resolve(thx_Nil.nil);
		}),reject);
	});
};
var thx_promise_PromiseAPlus = function() { };
thx_promise_PromiseAPlus.__name__ = ["thx","promise","PromiseAPlus"];
thx_promise_PromiseAPlus.promise = function(p) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		p.then(resolve,function(e) {
			reject(thx_Error.fromDynamic(e,{ fileName : "Promise.hx", lineNumber : 417, className : "thx.promise.PromiseAPlus", methodName : "promise"}));
		});
	});
};
thx_promise_PromiseAPlus.aPlus = function(p) {
	return new Promise(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(p,resolve),reject);
	});
};
var thx_promise_PromiseAPlusVoid = function() { };
thx_promise_PromiseAPlusVoid.__name__ = ["thx","promise","PromiseAPlusVoid"];
thx_promise_PromiseAPlusVoid.promise = function(p) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		p.then(function() {
			resolve(thx_Nil.nil);
		},function(e) {
			reject(thx_Error.fromDynamic(e,{ fileName : "Promise.hx", lineNumber : 429, className : "thx.promise.PromiseAPlusVoid", methodName : "promise"}));
		});
	});
};
thx_promise_PromiseAPlusVoid.aPlus = function(p) {
	return new Promise(function(resolve,reject) {
		thx_promise__$Promise_Promise_$Impl_$.failure(thx_promise__$Promise_Promise_$Impl_$.success(p,function() {
			resolve(thx_Nil.nil);
		}),reject);
	});
};
var thx_promise_Timer = function() { };
thx_promise_Timer.__name__ = ["thx","promise","Timer"];
thx_promise_Timer.delay = function(delayms) {
	return thx_promise_Timer.delayValue(thx_Nil.nil,delayms);
};
thx_promise_Timer.delayValue = function(value,delayms) {
	return thx_promise_Future.create(function(callback) {
		thx_Timer.delay((function(f,a1) {
			return function() {
				f(a1);
			};
		})(callback,value),delayms);
	});
};
thx_promise_Timer.immediate = function() {
	return thx_promise_Timer.immediateValue(thx_Nil.nil);
};
thx_promise_Timer.immediateValue = function(value) {
	return thx_promise_Future.create(function(callback) {
		thx_Timer.immediate((function(f,a1) {
			return function() {
				f(a1);
			};
		})(callback,value));
	});
};
var thx_stream_Emitter = function(init) {
	this.init = init;
};
thx_stream_Emitter.__name__ = ["thx","stream","Emitter"];
thx_stream_Emitter.prototype = {
	init: null
	,feed: function(value) {
		var stream = new thx_stream_Stream(null);
		stream.subscriber = function(r) {
			switch(r[1]) {
			case 0:
				var v = r[2];
				value.set(v);
				break;
			case 1:
				var c = r[2];
				if(c) stream.cancel(); else stream.end();
				break;
			}
		};
		value.upStreams.push(stream);
		stream.addCleanUp(function() {
			HxOverrides.remove(value.upStreams,stream);
		});
		this.init(stream);
		return stream;
	}
	,plug: function(bus) {
		var stream = new thx_stream_Stream(null);
		stream.subscriber = $bind(bus,bus.emit);
		bus.upStreams.push(stream);
		stream.addCleanUp(function() {
			HxOverrides.remove(bus.upStreams,stream);
		});
		this.init(stream);
		return stream;
	}
	,sign: function(subscriber) {
		var stream = new thx_stream_Stream(subscriber);
		this.init(stream);
		return stream;
	}
	,subscribe: function(pulse,end) {
		if(null != pulse) pulse = pulse; else pulse = function(_) {
		};
		if(null != end) end = end; else end = function(_1) {
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
	,concat: function(other) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					stream.pulse(v);
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						other.init(stream);
						break;
					}
					break;
				}
			}));
		});
	}
	,count: function() {
		return this.map((function() {
			var c = 0;
			return function(_) {
				return ++c;
			};
		})());
	}
	,debounce: function(delay) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var cancel = function() {
			};
			stream.addCleanUp(function() {
				cancel();
			});
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					cancel();
					cancel = thx_Timer.delay((function(f,v1) {
						return function() {
							f(v1);
						};
					})($bind(stream,stream.pulse),v),delay);
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						thx_Timer.delay($bind(stream,stream.end),delay);
						break;
					}
					break;
				}
			}));
		});
	}
	,delay: function(time) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var cancel = thx_Timer.delay(function() {
				_g.init(stream);
			},time);
			stream.addCleanUp(cancel);
		});
	}
	,diff: function(init,f) {
		return this.window(2,null != init).map(function(a) {
			if(a.length == 1) return f(init,a[0]); else return f(a[0],a[1]);
		});
	}
	,merge: function(other) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			_g.init(stream);
			other.init(stream);
		});
	}
	,previous: function() {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var value = null;
			var first = true;
			var pulse = function() {
				if(first) {
					first = false;
					return;
				}
				stream.pulse(value);
			};
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					pulse();
					value = v;
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
		});
	}
	,reduce: function(acc,f) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					acc = f(acc,v);
					stream.pulse(acc);
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
		});
	}
	,window: function(size,emitWithLess) {
		if(emitWithLess == null) emitWithLess = false;
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var buf = [];
			var pulse = function() {
				if(buf.length > size) buf.shift();
				if(buf.length == size || emitWithLess) stream.pulse(buf.slice());
			};
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					buf.push(v);
					pulse();
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
		});
	}
	,map: function(f) {
		return this.mapFuture(function(v) {
			return thx_promise_Future.value(f(v));
		});
	}
	,mapFuture: function(f) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var queue = [];
			var pos = 0;
			var poll = function() {
				while(queue[pos] != null) {
					var r = queue[pos];
					queue[pos++] = null;
					switch(r[1]) {
					case 0:
						var v = r[2];
						stream.pulse(v);
						break;
					case 1:
						switch(r[2]) {
						case true:
							stream.cancel();
							break;
						case false:
							stream.end();
							break;
						}
						break;
					}
				}
			};
			var resolve = function(r1) {
				switch(r1[1]) {
				case 0:
					var v1 = r1[2];
					var index = queue.length;
					queue.push(null);
					f(v1).then(function(o) {
						queue[index] = thx_stream_StreamValue.Pulse(o);
						poll();
					});
					break;
				case 1:
					var c = r1[2];
					queue.push(thx_stream_StreamValue.End(c));
					poll();
					break;
				}
			};
			_g.init(new thx_stream_Stream(resolve));
		});
	}
	,mapPromise: function(f) {
		return this.mapFuture(function(v) {
			return thx_promise_Future.create(function(resolve) {
				thx_promise__$Promise_Promise_$Impl_$.throwFailure(thx_promise__$Promise_Promise_$Impl_$.success(f(v),resolve));
			});
		});
	}
	,toOption: function() {
		return this.map(function(v) {
			if(null == v) return haxe_ds_Option.None; else return haxe_ds_Option.Some(v);
		});
	}
	,toNil: function() {
		return this.map(function(_) {
			return thx_Nil.nil;
		});
	}
	,toTrue: function() {
		return this.map(function(_) {
			return true;
		});
	}
	,toFalse: function() {
		return this.map(function(_) {
			return false;
		});
	}
	,toValue: function(value) {
		return this.map(function(_) {
			return value;
		});
	}
	,filter: function(f) {
		return this.filterFuture(function(v) {
			return thx_promise_Future.value(f(v));
		});
	}
	,filterFuture: function(f) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var queue = [];
			var pos = 0;
			var poll = function() {
				while(queue[pos] != null) {
					var r = queue[pos];
					queue[pos++] = null;
					switch(r[1]) {
					case 0:
						switch(r[2][1]) {
						case 0:
							var v = r[2][2];
							stream.pulse(v);
							break;
						case 1:
							switch(r[2][2]) {
							case true:
								stream.cancel();
								break;
							case false:
								stream.end();
								break;
							}
							break;
						}
						break;
					case 1:
						break;
					}
				}
			};
			var resolve = function(r1) {
				{
					var other = r1;
					switch(r1[1]) {
					case 0:
						var v1 = r1[2];
						var index = queue.length;
						queue.push(null);
						f(v1).then(function(c) {
							if(c) queue[index] = haxe_ds_Option.Some(r1); else queue[index] = haxe_ds_Option.None;
							poll();
						});
						break;
					default:
						queue.push(haxe_ds_Option.Some(other));
						poll();
					}
				}
			};
			_g.init(new thx_stream_Stream(resolve));
		});
	}
	,filterPromise: function(f) {
		return this.filterFuture(function(v) {
			return thx_promise_Future.create(function(resolve) {
				thx_promise__$Promise_Promise_$Impl_$.throwFailure(thx_promise__$Promise_Promise_$Impl_$.success(f(v),resolve));
			});
		});
	}
	,first: function() {
		return this.take(1);
	}
	,distinct: function(equals) {
		if(null == equals) equals = function(a,b) {
			return a == b;
		};
		var last = null;
		return this.filter(function(v) {
			if(equals(v,last)) return false; else {
				last = v;
				return true;
			}
		});
	}
	,last: function() {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var last = null;
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					last = v;
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.pulse(last);
						stream.end();
						break;
					}
					break;
				}
			}));
		});
	}
	,memberOf: function(arr,equality) {
		return this.filter(function(v) {
			return thx_Arrays.contains(arr,v,equality);
		});
	}
	,notNull: function() {
		return this.filter(function(v) {
			return v != null;
		});
	}
	,skip: function(n) {
		return this.skipUntil((function() {
			var count = 0;
			return function(_) {
				return count++ < n;
			};
		})());
	}
	,skipUntil: function(predicate) {
		return this.filter((function() {
			var flag = false;
			return function(v) {
				if(flag) return true;
				if(predicate(v)) return false;
				return flag = true;
			};
		})());
	}
	,take: function(count) {
		return this.takeUntil((function(counter) {
			return function(_) {
				return counter++ < count;
			};
		})(0));
	}
	,takeAt: function(index) {
		return this.take(index + 1).last();
	}
	,takeLast: function(n) {
		return thx_stream_EmitterArrays.flatten(this.window(n).last());
	}
	,takeUntil: function(f) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var instream = null;
			instream = new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					if(f(v)) stream.pulse(v); else {
						instream.end();
						stream.end();
					}
					break;
				case 1:
					switch(r[2]) {
					case true:
						instream.cancel();
						stream.cancel();
						break;
					case false:
						instream.end();
						stream.end();
						break;
					}
					break;
				}
			});
			_g.init(instream);
		});
	}
	,withValue: function(expected) {
		return this.filter(function(v) {
			return v == expected;
		});
	}
	,pair: function(other) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var _0 = null;
			var _1 = null;
			stream.addCleanUp(function() {
				_0 = null;
				_1 = null;
			});
			var pulse = function() {
				if(null == _0 || null == _1) return;
				stream.pulse({ _0 : _0, _1 : _1});
			};
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					_0 = v;
					pulse();
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
			other.init(new thx_stream_Stream(function(r1) {
				switch(r1[1]) {
				case 0:
					var v1 = r1[2];
					_1 = v1;
					pulse();
					break;
				case 1:
					switch(r1[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
		});
	}
	,sampleBy: function(sampler) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var _0 = null;
			var _1 = null;
			stream.addCleanUp(function() {
				_0 = null;
				_1 = null;
			});
			var pulse = function() {
				if(null == _0 || null == _1) return;
				stream.pulse({ _0 : _0, _1 : _1});
			};
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					_0 = v;
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
			sampler.init(new thx_stream_Stream(function(r1) {
				switch(r1[1]) {
				case 0:
					var v1 = r1[2];
					_1 = v1;
					pulse();
					break;
				case 1:
					switch(r1[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
		});
	}
	,samplerOf: function(sampled) {
		return sampled.sampleBy(this).map(function(t) {
			return { _0 : t._1, _1 : t._0};
		});
	}
	,zip: function(other) {
		var _g = this;
		return new thx_stream_Emitter(function(stream) {
			var _0 = [];
			var _1 = [];
			stream.addCleanUp(function() {
				_0 = null;
				_1 = null;
			});
			var pulse = function() {
				if(_0.length == 0 || _1.length == 0) return;
				stream.pulse((function($this) {
					var $r;
					var _01 = _0.shift();
					var _11 = _1.shift();
					$r = { _0 : _01, _1 : _11};
					return $r;
				}(this)));
			};
			_g.init(new thx_stream_Stream(function(r) {
				switch(r[1]) {
				case 0:
					var v = r[2];
					_0.push(v);
					pulse();
					break;
				case 1:
					switch(r[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
			other.init(new thx_stream_Stream(function(r1) {
				switch(r1[1]) {
				case 0:
					var v1 = r1[2];
					_1.push(v1);
					pulse();
					break;
				case 1:
					switch(r1[2]) {
					case true:
						stream.cancel();
						break;
					case false:
						stream.end();
						break;
					}
					break;
				}
			}));
		});
	}
	,audit: function(handler) {
		return this.map(function(v) {
			handler(v);
			return v;
		});
	}
	,log: function(prefix,posInfo) {
		if(prefix == null) prefix = ""; else prefix = "" + prefix + ": ";
		return this.map(function(v) {
			haxe_Log.trace("" + prefix + Std.string(v),posInfo);
			return v;
		});
	}
	,split: function() {
		var _g = this;
		var inited = false;
		var streams = [];
		var init = function(stream) {
			streams.push(stream);
			if(!inited) {
				inited = true;
				thx_Timer.immediate(function() {
					_g.init(new thx_stream_Stream(function(r) {
						switch(r[1]) {
						case 0:
							var v = r[2];
							var _g1 = 0;
							while(_g1 < streams.length) {
								var s = streams[_g1];
								++_g1;
								s.pulse(v);
							}
							break;
						case 1:
							switch(r[2]) {
							case true:
								var _g11 = 0;
								while(_g11 < streams.length) {
									var s1 = streams[_g11];
									++_g11;
									s1.cancel();
								}
								break;
							case false:
								var _g12 = 0;
								while(_g12 < streams.length) {
									var s2 = streams[_g12];
									++_g12;
									s2.end();
								}
								break;
							}
							break;
						}
					}));
				});
			}
		};
		var _0 = new thx_stream_Emitter(init);
		var _1 = new thx_stream_Emitter(init);
		return { _0 : _0, _1 : _1};
	}
	,__class__: thx_stream_Emitter
};
var thx_stream_Bus = function(distinctValuesOnly,equal) {
	if(distinctValuesOnly == null) distinctValuesOnly = false;
	var _g = this;
	this.distinctValuesOnly = distinctValuesOnly;
	if(null == equal) this.equal = function(a,b) {
		return a == b;
	}; else this.equal = equal;
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
	downStreams: null
	,upStreams: null
	,distinctValuesOnly: null
	,equal: null
	,value: null
	,cancel: function() {
		this.emit(thx_stream_StreamValue.End(true));
	}
	,clear: function() {
		this.clearEmitters();
		this.clearStreams();
	}
	,clearStreams: function() {
		var _g = 0;
		var _g1 = this.downStreams.slice();
		while(_g < _g1.length) {
			var stream = _g1[_g];
			++_g;
			stream.end();
		}
	}
	,clearEmitters: function() {
		var _g = 0;
		var _g1 = this.upStreams.slice();
		while(_g < _g1.length) {
			var stream = _g1[_g];
			++_g;
			stream.cancel();
		}
	}
	,emit: function(value) {
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
	,end: function() {
		this.emit(thx_stream_StreamValue.End(false));
	}
	,pulse: function(value) {
		this.emit(thx_stream_StreamValue.Pulse(value));
	}
	,__class__: thx_stream_Bus
});
var thx_stream_EagerEmitter = function(init) {
	var _g = this;
	thx_stream_Emitter.call(this,init);
	this.stack = [];
	this.conclusion = -1;
	this.subscribe(function(p) {
		_g.stack.push(p);
	},function(c) {
		if(c) _g.conclusion = 1; else _g.conclusion = 0;
	});
};
thx_stream_EagerEmitter.__name__ = ["thx","stream","EagerEmitter"];
thx_stream_EagerEmitter.__super__ = thx_stream_Emitter;
thx_stream_EagerEmitter.prototype = $extend(thx_stream_Emitter.prototype,{
	stack: null
	,conclusion: null
	,sign: function(subscriber) {
		var stream = thx_stream_Emitter.prototype.sign.call(this,subscriber);
		var _g = 0;
		var _g1 = this.stack;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			subscriber(thx_stream_StreamValue.Pulse(v));
		}
		if(this.conclusion >= 0) subscriber(thx_stream_StreamValue.End(this.conclusion == 1));
		return stream;
	}
	,__class__: thx_stream_EagerEmitter
});
var thx_stream_Emitters = function() { };
thx_stream_Emitters.__name__ = ["thx","stream","Emitters"];
thx_stream_Emitters.skipNull = function(emitter) {
	return emitter.filter(function(value) {
		return null != value;
	});
};
thx_stream_Emitters.unique = function(emitter) {
	return emitter.filter((function() {
		var buf = [];
		return function(v) {
			if(HxOverrides.indexOf(buf,v,0) >= 0) return false; else {
				buf.push(v);
				return true;
			}
		};
	})());
};
thx_stream_Emitters.toPromise = function(emitter) {
	return thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		var arr = [];
		emitter.subscribe($arrayPushClosure(arr),function(c) {
			if(c) reject(new thx_Error("stream has been canceled",null,{ fileName : "Emitter.hx", lineNumber : 545, className : "thx.stream.Emitters", methodName : "toPromise"})); else resolve(arr);
		});
	});
};
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
var thx_stream_EmitterStrings = function() { };
thx_stream_EmitterStrings.__name__ = ["thx","stream","EmitterStrings"];
thx_stream_EmitterStrings.match = function(emitter,pattern) {
	return emitter.filter(function(s) {
		return pattern.match(s);
	});
};
thx_stream_EmitterStrings.toBool = function(emitter) {
	return emitter.map(function(s) {
		return s != null && s != "";
	});
};
thx_stream_EmitterStrings.truthy = function(emitter) {
	return emitter.filter(function(s) {
		return s != null && s != "";
	});
};
thx_stream_EmitterStrings.unique = function(emitter) {
	return emitter.filter((function() {
		var buf = new haxe_ds_StringMap();
		return function(v) {
			if(__map_reserved[v] != null?buf.existsReserved(v):buf.h.hasOwnProperty(v)) return false; else {
				if(__map_reserved[v] != null) buf.setReserved(v,true); else buf.h[v] = true;
				return true;
			}
		};
	})());
};
thx_stream_EmitterStrings.join = function(emitter,sep) {
	return emitter.reduce("",function(acc,v) {
		return acc + sep + v;
	});
};
thx_stream_EmitterStrings.filterEmpty = function(emitter) {
	return emitter.filter(function(v) {
		return !thx_Strings.isEmpty(v);
	});
};
var thx_stream_EmitterInts = function() { };
thx_stream_EmitterInts.__name__ = ["thx","stream","EmitterInts"];
thx_stream_EmitterInts.average = function(emitter) {
	return emitter.map((function() {
		var sum = 0.0;
		var count = 0;
		return function(v) {
			return (sum += v) / ++count;
		};
	})());
};
thx_stream_EmitterInts.greaterThan = function(emitter,x) {
	return emitter.filter(function(v) {
		return v > x;
	});
};
thx_stream_EmitterInts.greaterThanOrEqualTo = function(emitter,x) {
	return emitter.filter(function(v) {
		return v >= x;
	});
};
thx_stream_EmitterInts.inRange = function(emitter,min,max) {
	return emitter.filter(function(v) {
		return v <= max && v >= min;
	});
};
thx_stream_EmitterInts.insideRange = function(emitter,min,max) {
	return emitter.filter(function(v) {
		return v < max && v > min;
	});
};
thx_stream_EmitterInts.lessThan = function(emitter,x) {
	return emitter.filter(function(v) {
		return v < x;
	});
};
thx_stream_EmitterInts.lessThanOrEqualTo = function(emitter,x) {
	return emitter.filter(function(v) {
		return v <= x;
	});
};
thx_stream_EmitterInts.max = function(emitter) {
	return emitter.filter((function() {
		var max = null;
		return function(v) {
			if(null == max || v > max) {
				max = v;
				return true;
			} else return false;
		};
	})());
};
thx_stream_EmitterInts.min = function(emitter) {
	return emitter.filter((function() {
		var min = null;
		return function(v) {
			if(null == min || v < min) {
				min = v;
				return true;
			} else return false;
		};
	})());
};
thx_stream_EmitterInts.sum = function(emitter) {
	return emitter.map((function() {
		var value = 0;
		return function(v) {
			return value += v;
		};
	})());
};
thx_stream_EmitterInts.toBool = function(emitter) {
	return emitter.map(function(i) {
		return i != 0;
	});
};
thx_stream_EmitterInts.unique = function(emitter) {
	return emitter.filter((function() {
		var buf = new haxe_ds_IntMap();
		return function(v) {
			if(buf.h.hasOwnProperty(v)) return false; else {
				buf.h[v] = true;
				return true;
			}
		};
	})());
};
var thx_stream_EmitterFloats = function() { };
thx_stream_EmitterFloats.__name__ = ["thx","stream","EmitterFloats"];
thx_stream_EmitterFloats.average = function(emitter) {
	return emitter.map((function() {
		var sum = 0.0;
		var count = 0;
		return function(v) {
			return (sum += v) / ++count;
		};
	})());
};
thx_stream_EmitterFloats.greaterThan = function(emitter,x) {
	return emitter.filter(function(v) {
		return v > x;
	});
};
thx_stream_EmitterFloats.greaterThanOrEqualTo = function(emitter,x) {
	return emitter.filter(function(v) {
		return v >= x;
	});
};
thx_stream_EmitterFloats.inRange = function(emitter,min,max) {
	return emitter.filter(function(v) {
		return v <= max && v >= min;
	});
};
thx_stream_EmitterFloats.insideRange = function(emitter,min,max) {
	return emitter.filter(function(v) {
		return v < max && v > min;
	});
};
thx_stream_EmitterFloats.lessThan = function(emitter,x) {
	return emitter.filter(function(v) {
		return v < x;
	});
};
thx_stream_EmitterFloats.lessThanOrEqualTo = function(emitter,x) {
	return emitter.filter(function(v) {
		return v <= x;
	});
};
thx_stream_EmitterFloats.max = function(emitter) {
	return emitter.filter((function() {
		var max = -Infinity;
		return function(v) {
			if(v > max) {
				max = v;
				return true;
			} else return false;
		};
	})());
};
thx_stream_EmitterFloats.min = function(emitter) {
	return emitter.filter((function() {
		var min = Infinity;
		return function(v) {
			if(v < min) {
				min = v;
				return true;
			} else return false;
		};
	})());
};
thx_stream_EmitterFloats.sum = function(emitter) {
	return emitter.map((function() {
		var sum = 0.0;
		return function(v) {
			return sum += v;
		};
	})());
};
var thx_stream_EmitterOptions = function() { };
thx_stream_EmitterOptions.__name__ = ["thx","stream","EmitterOptions"];
thx_stream_EmitterOptions.either = function(emitter,some,none,end) {
	if(null == some) some = function(_) {
	};
	if(null == none) none = function() {
	};
	return emitter.subscribe(function(o) {
		switch(o[1]) {
		case 0:
			var v = o[2];
			some(v);
			break;
		case 1:
			none();
			break;
		}
	},end);
};
thx_stream_EmitterOptions.filterOption = function(emitter) {
	return emitter.filter(function(opt) {
		return thx_Options.toBool(opt);
	}).map(function(opt1) {
		return thx_Options.get(opt1);
	});
};
thx_stream_EmitterOptions.toBool = function(emitter) {
	return emitter.map(function(opt) {
		return thx_Options.toBool(opt);
	});
};
thx_stream_EmitterOptions.toValue = function(emitter) {
	return emitter.map(function(opt) {
		return thx_Options.get(opt);
	});
};
var thx_stream_EmitterBools = function() { };
thx_stream_EmitterBools.__name__ = ["thx","stream","EmitterBools"];
thx_stream_EmitterBools.negate = function(emitter) {
	return emitter.map(function(v) {
		return !v;
	});
};
var thx_stream_EmitterEmitters = function() { };
thx_stream_EmitterEmitters.__name__ = ["thx","stream","EmitterEmitters"];
thx_stream_EmitterEmitters.flatMap = function(emitter) {
	return new thx_stream_Emitter(function(stream) {
		emitter.init(new thx_stream_Stream(function(r) {
			switch(r[1]) {
			case 0:
				var em = r[2];
				em.init(stream);
				break;
			case 1:
				switch(r[2]) {
				case true:
					stream.cancel();
					break;
				case false:
					stream.end();
					break;
				}
				break;
			}
		}));
	});
};
var thx_stream_EmitterArrays = function() { };
thx_stream_EmitterArrays.__name__ = ["thx","stream","EmitterArrays"];
thx_stream_EmitterArrays.containerOf = function(emitter,value) {
	return emitter.filter(function(arr) {
		return HxOverrides.indexOf(arr,value,0) >= 0;
	});
};
thx_stream_EmitterArrays.flatten = function(emitter) {
	return new thx_stream_Emitter(function(stream) {
		emitter.init(new thx_stream_Stream(function(r) {
			switch(r[1]) {
			case 0:
				var arr = r[2];
				arr.map($bind(stream,stream.pulse));
				break;
			case 1:
				switch(r[2]) {
				case true:
					stream.cancel();
					break;
				case false:
					stream.end();
					break;
				}
				break;
			}
		}));
	});
};
var thx_stream_EmitterValues = function() { };
thx_stream_EmitterValues.__name__ = ["thx","stream","EmitterValues"];
thx_stream_EmitterValues.left = function(emitter) {
	return emitter.map(function(v) {
		return v._0;
	});
};
thx_stream_EmitterValues.right = function(emitter) {
	return emitter.map(function(v) {
		return v._1;
	});
};
var thx_stream_IStream = function() { };
thx_stream_IStream.__name__ = ["thx","stream","IStream"];
thx_stream_IStream.prototype = {
	cancel: null
	,__class__: thx_stream_IStream
};
var thx_stream_Stream = function(subscriber) {
	this.subscriber = subscriber;
	this.cleanUps = [];
	this.finalized = false;
	this.canceled = false;
};
thx_stream_Stream.__name__ = ["thx","stream","Stream"];
thx_stream_Stream.__interfaces__ = [thx_stream_IStream];
thx_stream_Stream.prototype = {
	subscriber: null
	,cleanUps: null
	,finalized: null
	,canceled: null
	,addCleanUp: function(f) {
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
var thx_stream_Value = function(value,equals) {
	var _g = this;
	if(null == equals) this.equals = thx_Functions.equality; else this.equals = equals;
	this.value = value;
	this.downStreams = [];
	this.upStreams = [];
	thx_stream_Emitter.call(this,function(stream) {
		_g.downStreams.push(stream);
		stream.addCleanUp(function() {
			HxOverrides.remove(_g.downStreams,stream);
		});
		stream.pulse(_g.value);
	});
};
thx_stream_Value.__name__ = ["thx","stream","Value"];
thx_stream_Value.createOption = function(value,equals) {
	var def;
	if(null == value) def = haxe_ds_Option.None; else def = haxe_ds_Option.Some(value);
	return new thx_stream_Value(def,function(a,b) {
		return thx_Options.equals(a,b,equals);
	});
};
thx_stream_Value.__super__ = thx_stream_Emitter;
thx_stream_Value.prototype = $extend(thx_stream_Emitter.prototype,{
	value: null
	,downStreams: null
	,upStreams: null
	,equals: null
	,get: function() {
		return this.value;
	}
	,clear: function() {
		this.clearEmitters();
		this.clearStreams();
	}
	,clearStreams: function() {
		var _g = 0;
		var _g1 = this.downStreams.slice();
		while(_g < _g1.length) {
			var stream = _g1[_g];
			++_g;
			stream.end();
		}
	}
	,clearEmitters: function() {
		var _g = 0;
		var _g1 = this.upStreams.slice();
		while(_g < _g1.length) {
			var stream = _g1[_g];
			++_g;
			stream.cancel();
		}
	}
	,set: function(value) {
		if(this.equals(this.value,value)) return;
		this.value = value;
		this.update();
	}
	,update: function() {
		var _g = 0;
		var _g1 = this.downStreams.slice();
		while(_g < _g1.length) {
			var stream = _g1[_g];
			++_g;
			stream.pulse(this.value);
		}
	}
	,__class__: thx_stream_Value
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
function $arrayPushClosure(a) { return function(x) { a.push(x); }; }
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

      // Production steps of ECMA-262, Edition 5, 15.4.4.21
      // Reference: http://es5.github.io/#x15.4.4.21
      if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(callback /*, initialValue*/) {
          'use strict';
          if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
          }
          if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
          }
          var t = Object(this), len = t.length >>> 0, k = 0, value;
          if (arguments.length == 2) {
            value = arguments[1];
          } else {
            while (k < len && ! k in t) {
              k++;
            }
            if (k >= len) {
              throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
          }
          for (; k < len; k++) {
            if (k in t) {
              value = callback(value, t[k], k, t);
            }
          }
          return value;
        };
      }
    ;
var scope = ("undefined" !== typeof window && window) || ("undefined" !== typeof global && global) || this;
if(!scope.setImmediate) scope.setImmediate = function(callback) {
	scope.setTimeout(callback,0);
};
var lastTime = 0;
var vendors = ["webkit","moz"];
var x = 0;
while(x < vendors.length && !scope.requestAnimationFrame) {
	scope.requestAnimationFrame = scope[vendors[x] + "RequestAnimationFrame"];
	scope.cancelAnimationFrame = scope[vendors[x] + "CancelAnimationFrame"] || scope[vendors[x] + "CancelRequestAnimationFrame"];
	x++;
}
if(!scope.requestAnimationFrame) scope.requestAnimationFrame = function(callback1) {
	var currTime = new Date().getTime();
	var timeToCall = Math.max(0,16 - (currTime - lastTime));
	var id = scope.setTimeout(function() {
		callback1(currTime + timeToCall);
	},timeToCall);
	lastTime = currTime + timeToCall;
	return id;
};
if(!scope.cancelAnimationFrame) scope.cancelAnimationFrame = function(id1) {
	scope.clearTimeout(id1);
};
if(typeof(scope.performance) == "undefined") scope.performance = { };
if(typeof(scope.performance.now) == "undefined") {
	var nowOffset = new Date().getTime();
	if(scope.performance.timing && scope.performance.timing.navigationStart) nowOffset = scope.performance.timing.navigationStart;
	var now = function() {
		return new Date() - nowOffset;
	};
	scope.performance.now = now;
}
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
Doom.namespaces = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	if(__map_reserved.svg != null) _g.setReserved("svg","http://www.w3.org/2000/svg"); else _g.h["svg"] = "http://www.w3.org/2000/svg";
	$r = _g;
	return $r;
}(this));
Main.playlists = [{ host : "Aersia", name : "VIP", tracks_url : "http://vip.aersia.net/roster.xml", source : "http://vip.aersia.net"},{ host : "Aersia", name : "Mellow", tracks_url : "http://vip.aersia.net/roster-mellow.xml", source : "http://vip.aersia.net"},{ host : "Aersia", name : "Source", tracks_url : "http://vip.aersia.net/roster-source.xml", source : "http://vip.aersia.net"},{ host : "Aersia", name : "Exiled", tracks_url : "http://vip.aersia.net/roster-exiled.xml", source : "http://vip.aersia.net"},{ host : "Aersia", name : "WAP", tracks_url : "http://wap.aersia.net/roster.xml", source : "http://vip.aersia.net"},{ host : "Aersia", name : "CPP", tracks_url : "http://cpp.aersia.net/roster.xml", source : "http://vip.aersia.net"}];
Xml.Element = 0;
Xml.PCData = 1;
Xml.CData = 2;
Xml.Comment = 3;
Xml.DocType = 4;
Xml.ProcessingInstruction = 5;
Xml.Document = 6;
dots_Html.pattern = new EReg("[<]([^> ]+)","");
dots_Query.doc = document;
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_ds_ObjectMap.count = 0;
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
thx_Floats.TOLERANCE = 10e-5;
thx_Floats.EPSILON = 1e-9;
thx_Floats.pattern_parse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
thx_Ints.pattern_parse = new EReg("^[ \t\r\n]*[+-]?(\\d+|0x[0-9A-F]+)","i");
thx_Ints.BASE = "0123456789abcdefghijklmnopqrstuvwxyz";
thx_Ints.order = function(i0,i1) {
	if(i0 > i1) return thx_OrderingImpl.GT; else if(i0 == i1) return thx_OrderingImpl.EQ; else return thx_OrderingImpl.LT;
};
thx_Ints.monoid = { zero : 0, append : function(a,b) {
	return a + b;
}};
thx__$QueryString_QueryString_$Impl_$.separator = "&";
thx__$QueryString_QueryString_$Impl_$.assignment = "=";
thx_Strings.ord = thx__$Ord_Ord_$Impl_$.fromIntComparison(thx_Strings.compare);
thx_Strings.HASCODE_MAX = 2147483647;
thx_Strings.HASCODE_MUL = 31;
thx_Strings.monoid = { zero : "", append : function(a,b) {
	return a + b;
}};
thx_Strings.UCWORDS = new EReg("[^a-zA-Z]([a-z])","g");
thx_Strings.IS_BREAKINGWHITESPACE = new EReg("[^\t\n\r ]","");
thx_Strings.IS_ALPHA = new EReg("[^a-zA-Z]","");
thx_Strings.UCWORDSWS = new EReg("[ \t\r\n][a-z]","g");
thx_Strings.ALPHANUM = new EReg("^[a-z0-9]+$","i");
thx_Strings.DIGITS = new EReg("^[0-9]+$","");
thx_Strings.STRIPTAGS = new EReg("</?[a-z]+[^>]*>","gi");
thx_Strings.WSG = new EReg("[ \t\r\n]+","g");
thx_Strings.SPLIT_LINES = new EReg("\r\n|\n\r|\n|\r","g");
thx_Strings.CANONICALIZE_LINES = new EReg("\r\n|\n\r|\r","g");
thx_Timer.FRAME_RATE = Math.round(16.666666666666668);
thx__$Url_Url_$Impl_$.pattern = new EReg("^((((?:([^:/#\\?]+):)?(?:(//)?((?:(([^:@/#\\?]+)(?:[:]([^:@/#\\?]+))?)@)?(([^:/#\\?\\]\\[]+|\\[[^/\\]@#?]+\\])(?:[:]([0-9]+))?))?)?)?((/?(?:[^/\\?#]+/+)*)([^\\?#]*)))?(?:\\?([^#]+))?)(?:#(.*))?","");
thx_http_Const.CRLF = "\r\n";
thx_http_Const.NL = new EReg("\r\n|\n\r|\n|\r","");
thx_http_Const.SPLIT_NL = new EReg("\r\n|\n\r|\n|\r","g");
thx_http_Const.NL2 = new EReg("(\r\n|\n\r|\n|\r){2}","");
thx_http_Const.WS = new EReg("(\\s+)","g");
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
thx_promise__$Promise_Promise_$Impl_$.nil = thx_promise__$Promise_Promise_$Impl_$.value(thx_Nil.nil);
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});