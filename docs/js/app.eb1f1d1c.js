(function(t){function e(e){for(var r,o,c=e[0],l=e[1],u=e[2],f=0,p=[];f<c.length;f++)o=c[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-textarea-vertical-middle/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"textarea"},[n("TextareaVerticalMiddle")],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"contents",staticClass:"tvm"},[n("textarea",{ref:"textarea",staticClass:"tvm_textarea",style:t.style,attrs:{placeholder:t.placeholder},on:{keyup:t.onChange,change:t.onChange}}),n("div",{staticClass:"tvm_cal"},[n("div",{ref:"calHeight",staticClass:"tvm_textarea tvm_textarea-cal",domProps:{innerHTML:t._s(t.calText)}})])])},c=[],l=(n("a481"),{name:"TextareaVerticalMiddle",data:function(){return{text:"",placeholder:"プレースポルダー",textArea:{paddingTop:0,height:0}}},computed:{style:function(){return{"padding-top":"".concat(this.textArea.paddingTop,"px"),height:"".concat(this.textArea.height,"px")}},calText:function(){return""===this.text?this.placeholder:this.text.replace(/\n/g,"<br>")}},methods:{calTextAreaHeight:function(){var t=this.$refs.contents.clientHeight,e=this.$refs.calHeight.clientHeight,n=Math.max(0,(t-e)/2);this.textArea.paddingTop=n,this.textArea.height=t-n},onChange:function(){var t=this;this.text=this.$refs.textarea.value,this.$nextTick(function(){t.calTextAreaHeight()})}},mounted:function(){this.calTextAreaHeight()}}),u=l,s=(n("e800"),n("2877")),f=Object(s["a"])(u,o,c,!1,null,"70cbc9fd",null),p=f.exports,d={name:"app",components:{TextareaVerticalMiddle:p}},h=d,x=(n("034f"),Object(s["a"])(h,a,i,!1,null,null,null)),v=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,n){},"6b2a":function(t,e,n){},e800:function(t,e,n){"use strict";var r=n("6b2a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.eb1f1d1c.js.map