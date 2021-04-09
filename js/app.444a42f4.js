(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pokefront/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5452:function(t,e,n){"use strict";n("af35")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"body"},[n("h1",[t._v("Pokémon List")]),n("div",{staticClass:"id-forms"},[t._m(0),t._m(1),n("button",{attrs:{type:"button"},on:{click:t.reloadWithNewIds}},[t._v("Apply")])]),n("div",{staticClass:"pokecarts"},t._l(t.pokemons,(function(t,e){return n("poke-cart",{key:e,attrs:{id:t.id,name:t.name,types:t.types,image:t.image}})})),1)])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fid-form"},[n("label",{attrs:{for:"initialId"}},[t._v("Initial shown ID")]),n("input",{attrs:{type:"number",id:"initialId"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fid-form"},[n("label",{attrs:{for:"finalId"}},[t._v("Last shown ID")]),n("input",{attrs:{type:"number",id:"finalId"}})])}],o=n("1da1"),s=(n("96cf"),n("d3b7"),n("b0c0"),n("d81d"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("p",{staticClass:"title"},[n("i",[t._v("Poké")]),n("span",[t._v("Front")])])])}],u={},l=u,p=(n("5452"),n("2877")),f=Object(p["a"])(l,s,c,!1,null,null,null),d=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("strong",{staticClass:"pokemon-id"},[t._v("#"+t._s(t.id))]),n("h2",{staticClass:"pokemon-name"},[t._v(t._s(t.name))]),n("img",{staticClass:"pokemon-image",attrs:{src:t.image,alt:"pokemon image"}}),n("div",{staticClass:"pokemon-types"},t._l(t.types,(function(t,e){return n("type",{key:e,attrs:{name:t}})})),1)])},v=[],h=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"type"},[t._v(t._s(t.name))])}),b=[],y={name:"Type",props:{name:String},mounted:function(){this.$el.classList.add(this.name.toLowerCase())}},_=y,k=(n("d1b9"),Object(p["a"])(_,h,b,!1,null,null,null)),g=k.exports,I={components:{Type:g},name:"PokeCart",props:{id:Number,name:String,image:String,types:Array}},w=I,C=(n("7943"),Object(p["a"])(w,m,v,!1,null,null,null)),O=C.exports,P="https://pokeapi.co/api/v2/",j={name:"App",components:{Header:d,PokeCart:O},data:function(){return{initialId:1,finalId:50,pokemons:[]}},methods:{fetchAPI:function(t){return fetch(P+t+"/").then((function(t){return t.json()}))},loadPokeCarts:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.pokemons=[],n=t.initialId;case 2:if(!(n<=t.finalId)){e.next=10;break}return e.next=5,t.fetchAPI("pokemon/"+n);case 5:r=e.sent,t.pokemons.push({id:r.id,name:r.name,image:r.sprites.front_default,types:r.types.map((function(t){return t.type.name}))});case 7:n++,e.next=2;break;case 10:case"end":return e.stop()}}),e)})))()},reloadWithNewIds:function(){var t=document.querySelector("#finalId").value,e=document.querySelector("#initialId").value,n=!1;t&&this.finalId!==t&&(this.finalId=t,n=!0),e&&this.initialId!==e&&(this.initialId=e,n=!0),n&&this.loadPokeCarts()}},created:function(){this.loadPokeCarts()},mounted:function(){document.querySelector("#initialId").value=this.initialId,document.querySelector("#finalId").value=this.finalId}},x=j,S=(n("5c0b"),Object(p["a"])(x,a,i,!1,null,null,null)),$=S.exports,E=n("ecee"),A=n("c074"),T=n("ad3d");E["c"].add(A["a"]),r["a"].component("font-awesome-icon",T["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7943:function(t,e,n){"use strict";n("ba21")},"9c0c":function(t,e,n){},af35:function(t,e,n){},ba21:function(t,e,n){},c881:function(t,e,n){},d1b9:function(t,e,n){"use strict";n("c881")}});
//# sourceMappingURL=app.444a42f4.js.map