/** Copyright 2013, Jason Miller - http://github.com/developit/picolib */

(function(lib) {
	lib = {
		jsonp : function jsonp(u,cb,cbid){var a=jsonp._c=(jsonp._c||0)+1,b=cbid||'picojsonpcb'+a,c=document,d=c.body,s=c.createElement('script');s.async=s.defer=true;window[b]=function(){this[b]=null;d.removeChild(s);cb.apply(cb,arguments);cb=c=d=s=null;};s.src=u.replace('{callback}',b);d.appendChild(s);},
		isArray : function(a){return Object.prototype.toString.call(a)==='[object Array]';},
		create : function(p,parent){var el=document.createElement(p.type || 'div'),i,frag;parent=parent||p.parent;if(p.attrs){lib.attrs(el,p.attrs);}if(p.props){lib.extend(el,p.props);}if(p.css){el.style.cssText=p.css;}if(p.children){frag=document.createDocumentFragment();lib.each(p.children,function(b){lib.create(b,frag);});el.appendChild(frag);frag=null;}if(p.insertBefore){p.insertBefore.parentNode.insertBefore(el,p.insertBefore);}else if(parent){parent.appendChild(el);}return el;},
		el : function(id){return typeof(id)==='string'?document.getElementById(id):id;},
		bind : function(f,context){function c(){return c._prxyf.apply(c._prxyc||this,arguments);};c._prxyf=f;c._prxyc=context;c.unbind=lib.bind.unbind;f=context=null;return proxy;},
		handle : function(el,type,f){type=(type+'').replace(/^on/,'');if(el.addEventListener){el.addEventListener(type,f,false);}else{f.bind(el);el.attachEvent(type,f);}},
		unhandle : function(el,type,f){type=(type+'').replace(/^on/,'');if(el.removeEventListener){el.removeEventListener(type,f,false);}else{if(f._prxyf){f.unbind();f=f._prxyf;}el.detachEvent(type,f);}},
		hide : function(el){if(typeof(el)==='string'){el=lib.el(el);}el.style.display='none';},
		show : function(el){if(typeof(el)==='string'){el=lib.el(el);}el.style.display='';},
		attrs : function(node,obj){ for(var i in obj){if(obj.hasOwnProperty(i)){ node.setAttribute(i, obj[i]); }} },
		each : function(what,cb,ctx){var i;ctx=ctx||what;if(lib.isArray(what)){for(i=0;i<what.length;i++){if(cb.call(ctx,what[i],i,ctx)===false)return;}}else{for(i in what){if(what.hasOwnProperty(i)){if(cb.call(ctx,what[i],i,ctx)===false)return;}}}return what;},
		map : function(what,cb,start){start=start||{};lib.each(what,cb,start);return start;},
		keys : function(obj){var keys=[];lib.each(obj,function(o,i){keys.push(i);});return keys;},
		extend : function(base,ext){lib.each(ext,function(p,i){base[i]=p;});return base;},
		json : window.JSON || (function(){eval("function s(t){return t.replace(/(['\"/\\\\])/gim,'\\\\$1');}function a(v){switch(lib.isArray(v)?'array':typeof(v)) {case 'number':return v+'';case 'string':return '\"'+s(v).replace(/\r?\n/gim,'\\n')+'\"';case 'date':return '\"'+Math.floor(v.getTime()/1000)+'\"';case 'boolean':return v?'true':'false';case 'array':var t=[];for(var i=0; i<v.length; i++){t[i]=strval(v[i]);}return '['+t.join(',')+']';case 'object':return b(v);default:return 'null';}}function b(o){var t=[],c=0,n;for(n in o){if(o.hasOwnProperty(n)){t[c++]='\"'+s(n)+'\":'+a(o[n]);}}return '{'+t.join(',')+'}';}return {stringify:function(obj){return b(obj);},parse:function(str){return eval('(' + str + ')');}}");})(),
		qs : {
			parse : function(s){var p={},c=s.split('&');lib.each(c,function(v,i){i=v.indexOf('=');p[decodeURIComponent(v.substring(0,i))]=decodeURIComponent(v.substring(i+1));});return p;},
			stringify : function(p){var s='';lib.each(p,function(v,k){s+='&'+encodeURIComponent(k)+'='+encodeURIComponent(v);});return s.replace('&','');}
		},
		xml : {
			parse : function(xml){var x;if(window.DOMParser){x=new window.DOMParser().parseFromString(xml,'text/xml');}else{x=new window.ActiveXObject('Microsoft.XMLDOM');x.async='false';x.loadXML(xml);}return x;}
		},
		globalize : function(){lib.extend(window,lib);}
	};
	lib.bind.unbind = function(){this._prxyc=null;};
	
	this.picolib=lib;
}());
