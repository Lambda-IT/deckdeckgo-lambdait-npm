var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="deckdeckgo-lambdait";var a=0;var i=false;var s;var o;var l;var f=false;var $=false;var c=false;var u=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.documentElement.attachShadow}();var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p=new WeakMap;var y=function(e){return p.get(e)};var b=e("r",(function(e,t){return p.set(t.$lazyInstance$=e,t)}));var w=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));return p.set(e,t)}};var S=function(e,t){return t in e};var _=function(e){return console.error(e)};var R=new Map;var T=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=R.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{R.set(i,e)}return e[a]}),_)};var x=new Map;var N=[];var E=[];var j=[];var C=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){O(L)}else{h.raf(L)}}}};var k=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){_(r)}}e.length=0};var A=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){_(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var L=function(){a++;k(N);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;A(E,e);A(j,e);if(E.length>0){j.push.apply(j,E);E.length=0}if(i=N.length+E.length+j.length>0){h.raf(L)}else{a=0}};var O=function(e){return Promise.resolve().then(e)};var P=C(E,true);var U={};var B=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var I=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var z=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-9b741424.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var H=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));q(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var q=function(e){var t=I(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(v[t].m);s.remove()}}));r.set(a,i);d.head.appendChild(s)}return i}}};var V=function(e,t){if(e!=null&&!M(e)){if(t&1){return String(e)}return e}return e};var F="hydrated";var W=new WeakMap;var D=function(e,t,r){var n=x.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}x.set(e,n)};var G=function(e,t,r,n){var a=J(t.$tagName$);var i=x.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=W.get(e);var o=void 0;if(!s){W.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.setAttribute("data-styles","");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var Q=function(e,t,r){var n=G(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var J=function(e,t){return"sc-"+e};var K=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var l=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!M(a)){a=String(a)}if(i&&s){l[l.length-1].$text$+=a}else{l.push(i?{$flags$:0,$text$:a}:a)}s=i}}};f(r);if(t){{o=t.name}{var $=t.className||t.class;if($){t.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(t,l,Z)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:t};{c.$name$=o}return c}));var X=e("H",{});var Y=function(e){return e&&e.$tag$===X};var Z={forEach:function(e,t){return e.map(ee).forEach(t)},map:function(e,t){return e.map(ee).map(t).map(te)}};var ee=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var te=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var re=function(e,t,r,n,a,i){if(r===n){return}var s=S(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;ne(r).forEach((function(e){return l.remove(e)}));ne(n).forEach((function(e){return l.add(e)}))}else{var f=M(n);if((s||f&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(r==null||e[t]!==($=String($))){e[t]=$}}else{e[t]=n}}catch(c){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!s||i&4||a)&&!f){n=n===true?"":n;{e.setAttribute(t,n)}}}};var ne=function(e){return!e?[]:e.split(/\s+/).filter((function(e){return e}))};var ae=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||U;var s=t.$attrs$||U;{for(n in i){if(!(n in s)){re(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){re(a,n,i[n],s[n],r,t.$flags$)}};var ie=function(e,t,r,n){var a=t.$children$[r];var i=0;var $;var v;var h;if(!f){c=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(B(a.$text$)){a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=d.createTextNode("")}else{$=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ae(null,a,u)}if(B(s)&&$["s-si"]!==s){$.classList.add($["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=ie(e,a,i,$);if(v){$.appendChild(v)}}}}{a.$elm$["s-hn"]=l;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=o;a.$elm$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){se(e.$elm$,false)}}}return a.$elm$};var se=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==l&&a["s-ol"]){ue(a).insertBefore(a,ce(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(t){se(a,t)}}h.$flags$&=~1};var oe=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=ie(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,ce(t))}}}};var le=function(e,t,r,n){for(;t<=r;++t){if(B(e[t])){n=e[t].$elm$;{$=true;if(n["s-ol"]){n["s-ol"].remove()}else{se(n,true)}}n.remove()}}};var fe=function(e,t,r,n){var a=0;var i=0;var s=t.length-1;var o=t[0];var l=t[s];var f=n.length-1;var $=n[0];var c=n[f];var u;while(a<=s&&i<=f){if(o==null){o=t[++a]}else if(l==null){l=t[--s]}else if($==null){$=n[++i]}else if(c==null){c=n[--f]}else if($e(o,$)){ve(o,$);o=t[++a];$=n[++i]}else if($e(l,c)){ve(l,c);l=t[--s];c=n[--f]}else if($e(o,c)){if(o.$tag$==="slot"||c.$tag$==="slot"){se(o.$elm$.parentNode,false)}ve(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=t[++a];c=n[--f]}else if($e(l,$)){if(o.$tag$==="slot"||c.$tag$==="slot"){se(l.$elm$.parentNode,false)}ve(l,$);e.insertBefore(l.$elm$,o.$elm$);l=t[--s];$=n[++i]}else{{u=ie(t&&t[i],r,i,e);$=n[++i]}if(u){{ue(o.$elm$).insertBefore(u,ce(o.$elm$))}}}}if(a>s){oe(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){le(t,a,s)}};var $e=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var ce=function(e){return e&&e["s-ol"]||e};var ue=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ve=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!B(t.$text$)){{if(t.$tag$==="slot");else{ae(e,t,u)}}if(B(n)&&B(a)){fe(r,n,t,a)}else if(B(a)){oe(r,null,t,a,0,a.length-1)}else if(B(n)){le(n,0,n.length-1)}}};var de=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}de(t)}}};var he=[];var me=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!he.some((function(e){return e.$nodeToRelocate$===o}))){$=true;o["s-sn"]=f;he.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){me(s)}}};var ge=function(e,t,r,n){l=e.tagName;var a=t.$vnode$||{$flags$:0};var i=Y(n)?n:K(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach((function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]}))}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];f=m&&(r.$flags$&1)!==0;c=$=false}ve(a,i);{if(c){me(i.$elm$);for(var u=0;u<he.length;u++){var v=he[u];if(!v.$nodeToRelocate$["s-ol"]){var g=d.createTextNode("");g["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=g,v.$nodeToRelocate$)}}h.$flags$|=1;for(var u=0;u<he.length;u++){var v=he[u];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var g=v.$nodeToRelocate$["s-ol"];while(g=g.previousSibling){var b=g["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if($){de(i.$elm$)}he.length=0}};var pe=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i=function(){return ye(e,t,r,a,n)};var s;return Re(s,(function(){return P(i)}))};var ye=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){Q(e,r,t.$modeName$)}{{t.$flags$|=4;try{ge(e,t,r,n.render())}catch(i){_(i)}t.$flags$&=~4}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach((function(e){return e()}));e["s-rc"].length=0}be(e,t)};var be=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(F)}{_e(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){Se()}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var we=function(e,t){{var r=y(e);if(r.$flags$&2){pe(e,r,t,false)}}};var Se=function(){{d.documentElement.classList.add(F)}{h.$flags$|=2}};var _e=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){_(n)}}return undefined};var Re=function(e,t){return e&&e.then?e.then(t):t()};var Te=function(e,t){return y(e).$instanceValues$.get(t)};var xe=function(e,t,r,n){var a=y(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;r=V(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(l){if((o&(4|2|16))===2){pe(i,a,n,false)}}}};var Ne=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Te(this,n)},set:function(e){xe(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=y(this);return r.$onReadyPromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Ee=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,o,l;return __generator(this,(function(f){switch(f.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=T(a);if(!s.then)return[3,2];return[4,s];case 1:s=f.sent();f.label=2;case 2:if(!s.isProxied){Ne(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch($){_($)}{n.$flags$&=~8}r=J(a.$tagName$);if(!(!x.has(r)&&s.style))return[3,5];i=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(i,r,false)}))];case 3:i=f.sent();f.label=4;case 4:D(r,i,!!(a.$flags$&1));f.label=5;case 5:o=n.$ancestorComponent$;l=function(){return pe(e,n,a,true)};if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push(l)}else{l()}return[2]}}))}))};var je=function(e,t){if((h.$flags$&1)===0){var r=y(e);if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Ce(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&a["s-lr"]===false){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{O((function(){return Ee(e,r,t)}))}}}};var Ce=function(e,t){t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var ke=function(e){if((h.$flags$&1)===0){var t=y(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var Ae=e("b",(function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=d.head;var i=v.customElements;var s=a.querySelector("meta[charset]");var o=d.createElement("style");var l;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}if(!m&&a.$flags$&1){a.$flags$|=8}var s=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}w(t);if(a.$flags$&1){if(m){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(l){clearTimeout(l);l=null}h.jmp((function(){return je(e,a)}))};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return ke(e)}))};t.prototype["s-init"]=function(){var e=y(this);if(e.$lazyInstance$){be(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){we(this,a)};t.prototype.componentOnReady=function(){return y(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!i.get(s)){r.push(s);i.define(s,Ne(o,a,1))}}))}));o.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");a.insertBefore(o,s?s.nextSibling:a.firstChild);h.jmp((function(){return l=setTimeout(Se,30)}))}));var Le=e("c",(function(e,t,r){var n=Oe(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}}));var Oe=e("g",(function(e){return y(e).$hostElement$}))}}}));