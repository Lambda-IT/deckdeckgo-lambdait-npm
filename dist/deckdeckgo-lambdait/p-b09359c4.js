const t="deckdeckgo-lambdait";let e,n,o,s=0,l=!1,r=!1,c=!1,a=!1;const i=window,f=document,u={t:0,o:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},$=(()=>!!f.documentElement.attachShadow)(),d=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=new WeakMap,p=t=>m.get(t),h=(t,e)=>m.set(e.s=t,e),b=t=>console.error(t),y=new Map,w=new Map,g=[],_=[],k=[],v=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&u.t?M(S):u.raf(S))},j=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(s){b(s)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},S=()=>{s++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){b(e)}t.length=0})(g);const t=2==(6&u.t)?performance.now()+10*Math.ceil(s*(1/22)):1/0;j(_,t),j(k,t),_.length>0&&(k.push(..._),_.length=0),(l=g.length+_.length+k.length>0)?u.raf(S):s=0},M=t=>Promise.resolve().then(t),R=v(_,!0),O={},L=t=>null!=t,U=t=>"object"==(t=typeof t)||"function"===t,x=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_deckdeckgo_lambdait("./p-1635c1a0.js").then(()=>{u.l=i.__stencil_cssshim}),E=async()=>{u.l=i.__stencil_cssshim;const e=new RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(f.querySelectorAll("script")).find(n=>e.test(n.src)||n.getAttribute("data-stencil-namespace")===t),o=n["data-opts"];{const t=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,i.location.href));return T(t.href),window.customElements||await __sc_import_deckdeckgo_lambdait("./p-d0882b30.js"),Object.assign(Object.assign({},o),{resourcesUrl:t.href})}},T=e=>{const n=(t=>`__sc_import_${t.replace(/\s|-/g,"_")}`)(t);try{i[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const t=new Map;i[n]=o=>{const s=new URL(o,e).href;let l=t.get(s);if(!l){const e=f.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),l=new Promise(t=>{e.onload=()=>{t(i[n].m),e.remove()}}),t.set(s,l),f.head.appendChild(e)}return l}}},C=new WeakMap,P=t=>"sc-"+t,A=(t,e,...n)=>{let o,s=null,l=!1,r=!1,c=[];const a=e=>{for(let n=0;n<e.length;n++)s=e[n],Array.isArray(s)?a(s):null!=s&&"boolean"!=typeof s&&((l="function"!=typeof t&&!U(s))&&(s=String(s)),l&&r?c[c.length-1].i+=s:c.push(l?{t:0,i:s}:s),r=l)};if(a(n),e){o=e.name;{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,c,F);const i={t:0,u:t,$:c.length>0?c:null,p:void 0,h:e};return i.g=o,i},H={},F={forEach:(t,e)=>t.map(N).forEach(e),map:(t,e)=>t.map(N).map(e).map(W)},N=t=>({vattrs:t.h,vchildren:t.$,vkey:t._,vname:t.g,vtag:t.u,vtext:t.i}),W=t=>({t:0,h:t.vattrs,$:t.vchildren,_:t.vkey,g:t.vname,u:t.vtag,i:t.vtext}),q=(t,e,n,o,s,l)=>{if(n===o)return;let r=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList;B(n).forEach(t=>e.remove(t)),B(o).forEach(t=>e.add(t))}else{const a=U(o);if((r||a&&null!==o)&&!s)try{if(t.tagName.includes("-"))t[e]=o;else{let s=null==o?"":o;null!=n&&t[e]===(s=String(s))||(t[e]=s)}}catch(c){}null==o||!1===o?t.removeAttribute(e):(!r||4&l||s)&&!a&&t.setAttribute(e,o=!0===o?"":o)}},B=t=>t?t.split(/\s+/).filter(t=>t):[],D=(t,e,n,o)=>{const s=11===e.p.nodeType&&e.p.host?e.p.host:e.p,l=t&&t.h||O,r=e.h||O;for(o in l)o in r||q(s,o,l[o],void 0,n,e.t);for(o in r)q(s,o,l[o],r[o],n,e.t)},V=(t,s,l,c)=>{let i,u,$,d=s.$[l],m=0;if(r||(a=!0,"slot"===d.u&&(e&&c.classList.add(e+"-s"),d.t|=d.$?2:1)),L(d.i))d.p=f.createTextNode(d.i);else if(1&d.t)d.p=f.createTextNode("");else if(i=d.p=f.createElement(2&d.t?"slot-fb":d.u),D(null,d,!1),L(e)&&i["s-si"]!==e&&i.classList.add(i["s-si"]=e),d.$)for(m=0;m<d.$.length;++m)(u=V(t,d,m,i))&&i.appendChild(u);return d.p["s-hn"]=o,3&d.t&&(d.p["s-sr"]=!0,d.p["s-cr"]=n,d.p["s-sn"]=d.g||"",($=t&&t.$&&t.$[l])&&$.u===d.u&&t.p&&z(t.p,!1)),d.p},z=(t,e)=>{u.t|=1;const n=t.childNodes;for(let s=n.length-1;s>=0;s--){const t=n[s];t["s-hn"]!==o&&t["s-ol"]&&(Q(t).insertBefore(t,K(t)),t["s-ol"].remove(),t["s-ol"]=void 0,a=!0),e&&z(t,e)}u.t&=-2},G=(t,e,n,s,l,r)=>{let c,a=t["s-cr"]&&t["s-cr"].parentNode||t;for(a.shadowRoot&&a.tagName===o&&(a=a.shadowRoot);l<=r;++l)s[l]&&(c=V(null,n,l,t))&&(s[l].p=c,a.insertBefore(c,K(e)))},I=(t,e,n,o)=>{for(;e<=n;++e)L(t[e])&&(c=!0,(o=t[e].p)["s-ol"]?o["s-ol"].remove():z(o,!0),o.remove())},J=(t,e)=>t.u===e.u&&("slot"!==t.u||t.g===e.g),K=t=>t&&t["s-ol"]||t,Q=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,X=(t,e)=>{const n=e.p=t.p,o=t.$,s=e.$;L(e.i)||("slot"===e.u||D(t,e,!1),L(o)&&L(s)?((t,e,n,o)=>{let s,l=0,r=0,c=e.length-1,a=e[0],i=e[c],f=o.length-1,u=o[0],$=o[f];for(;l<=c&&r<=f;)null==a?a=e[++l]:null==i?i=e[--c]:null==u?u=o[++r]:null==$?$=o[--f]:J(a,u)?(X(a,u),a=e[++l],u=o[++r]):J(i,$)?(X(i,$),i=e[--c],$=o[--f]):J(a,$)?("slot"!==a.u&&"slot"!==$.u||z(a.p.parentNode,!1),X(a,$),t.insertBefore(a.p,i.p.nextSibling),a=e[++l],$=o[--f]):J(i,u)?("slot"!==a.u&&"slot"!==$.u||z(i.p.parentNode,!1),X(i,u),t.insertBefore(i.p,a.p),i=e[--c],u=o[++r]):(s=V(e&&e[r],n,r,t),u=o[++r],s&&Q(a.p).insertBefore(s,K(a.p)));l>c?G(t,null==o[f+1]?null:o[f+1].p,n,o,r,f):r>f&&I(e,l,c)})(n,o,e,s):L(s)?G(n,null,e,s,0,s.length-1):L(o)&&I(o,0,o.length-1))},Y=(t,e,n,o,s,l,r,c)=>{for(o=0,s=(n=t.childNodes).length;o<s;o++)if(1===(e=n[o]).nodeType){if(e["s-sr"])for(r=e["s-sn"],e.hidden=!1,l=0;l<s;l++)if(n[l]["s-hn"]!==e["s-hn"])if(c=n[l].nodeType,""!==r){if(1===c&&r===n[l].getAttribute("slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==n[l].textContent.trim()){e.hidden=!0;break}Y(e)}},Z=[],tt=t=>{let e,n,o,s,l=t.childNodes,r=l.length,a=0,i=0,f=0;for(r=l.length;a<r;a++){if((e=l[a])["s-sr"]&&(n=e["s-cr"]))for(s=e["s-sn"],i=(o=n.parentNode.childNodes).length-1;i>=0;i--)(n=o[i])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(Z.some(t=>t.k===n)||(c=!0,n["s-sn"]=s,Z.push({v:e,k:n})));1===e.nodeType&&tt(e)}},et=(t,e,n,o)=>{e.t|=16;const s=e.s,l=()=>nt(t,e,n,s,o);return rt(void 0,()=>R(l))},nt=(t,s,l,i,d)=>{s.t&=-17,t["s-lr"]=!1,d&&((t,e)=>{const n=((t,e)=>{let n=P(e.j),o=w.get(n);if(t=11===t.nodeType?t:f,o)if("string"==typeof o){let e,s=C.get(t=t.head||t);s||C.set(t,s=new Set),s.has(n)||((e=f.createElement("style")).setAttribute("data-styles",""),e.innerHTML=o,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]);return n})($&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(t,l),s.t|=4;try{((t,s,l,i)=>{o=t.tagName;const d=s.S||{t:0},m=(t=>t&&t.u===H)(i)?i:A(null,null,i);if(l.M&&(m.h=m.h||{},l.M.forEach(([e,n])=>m.h[n]=t[e])),m.u=null,m.t|=4,s.S=m,m.p=d.p=t.shadowRoot||t,e=t["s-sc"],n=t["s-cr"],r=$&&0!=(1&l.t),a=c=!1,X(d,m),a){tt(m.p);for(let t=0;t<Z.length;t++){const e=Z[t];if(!e.k["s-ol"]){const t=f.createTextNode("");t["s-nr"]=e.k,e.k.parentNode.insertBefore(e.k["s-ol"]=t,e.k)}}u.t|=1;for(let t=0;t<Z.length;t++){const e=Z[t],n=e.v.parentNode;let o=e.v.nextSibling,s=e.k["s-ol"];for(;s=s.previousSibling;){let t=s["s-nr"];if(t&&t["s-sn"]===e.k["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){o=t;break}}(!o&&n!==e.k.parentNode||e.k.nextSibling!==o)&&e.k!==o&&n.insertBefore(e.k,o)}u.t&=-2}c&&Y(m.p),Z.length=0})(t,s,l,i.render())}catch(m){b(m)}s.t&=-5,t["s-lr"]=!0,s.t|=2,t["s-rc"].length>0&&(t["s-rc"].forEach(t=>t()),t["s-rc"].length=0),ot(t,s)},ot=(t,e,n)=>{if(!t["s-al"]){const o=e.s,s=e.R;64&e.t||(e.t|=64,t.classList.add("hydrated"),lt(o,"componentDidLoad"),e.O(t),s||st()),s&&((n=s["s-al"])&&(n.delete(t),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),e.R=void 0)}},st=()=>{f.documentElement.classList.add("hydrated"),u.t|=2},lt=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(o){b(o)}},rt=(t,e)=>t&&t.then?t.then(e):e(),ct=(t,e,n)=>{if(e.L){const o=Object.entries(e.L),s=t.prototype;if(o.forEach(([t,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(s,t,{get(){return((t,e)=>p(t).U.get(e))(this,t)},set(n){((t,e,n,o)=>{const s=p(this),l=s.T,r=s.U.get(e),c=s.t,a=s.s;(n=((t,e)=>null==t||U(t)?t:1&e?String(t):t)(n,o.L[e][0]))===r||8&c&&void 0!==r||(s.U.set(e,n),a&&2==(22&c)&&et(l,s,o,!1))})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(s,t,{value(...e){const n=p(this);return n.C.then(()=>n.s[t](...e))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,o){u.jmp(()=>{const e=n.get(t);this[e]=(null!==o||"boolean"!=typeof this[e])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,o])=>{const s=o[1]||t;return n.set(s,t),512&o[0]&&e.M.push([t,s]),s})}}return t},at=(t,e={})=>{const n=[],o=e.exclude||[],s=f.head,l=i.customElements,r=s.querySelector("meta[charset]"),c=f.createElement("style");let a;Object.assign(u,e),u.o=new URL(e.resourcesUrl||"./",f.baseURI).href,e.syncQueue&&(u.t|=4),t.forEach(t=>t[1].forEach(e=>{const s={t:e[0],j:e[1],L:e[2],P:e[3],M:[]};!$&&1&s.t&&(s.t|=8);const r=s.j;HTMLElement,s.A=t[0],o.includes(r)||l.get(r)||(n.push(r),l.define(r,ct(class extends HTMLElement{constructor(t){super(t),t=this,this["s-lr"]=!1,this["s-rc"]=[],(t=>{{const e={t:0,T:t,U:new Map};e.C=new Promise(t=>e.O=t),m.set(t,e)}})(t),1&s.t&&($?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){a&&(clearTimeout(a),a=null),u.jmp(()=>((t,e)=>{if(0==(1&u.t)){const n=p(t);if(!(1&n.t)){let o;n.t|=1,o||(4&e.t||8&e.t)&&((t,e)=>{(e=t["s-cr"]=f.createComment(""))["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){n.R=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}e.L&&Object.entries(e.L).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),M(()=>(async(t,e,n,o,s)=>{if(0==(32&e.t)){e.t|=32,(s=(t=>{const e=t.j.replace(/-/g,"_"),n=t.A,o=y.get(n);return o?o[e]:__sc_import_deckdeckgo_lambdait(`./${n}.entry.js`).then(t=>(y.set(n,t),t[e]),b)})(n)).then&&(s=await s),s.isProxied||(ct(s,n,2),s.isProxied=!0),e.t|=8;try{new s(e)}catch(c){b(c)}e.t&=-9;const t=P(n.j);if(!w.has(t)&&s.style){let e=s.style;8&n.t&&(e=await __sc_import_deckdeckgo_lambdait("./p-affe7c09.js").then(n=>n.scopeCss(e,t,!1))),((t,e,n)=>{let o=w.get(t);d&&n?(o=o||new CSSStyleSheet).replace(e):o=e,w.set(t,o)})(t,e,!!(1&n.t))}}const l=e.R,r=()=>et(t,e,n,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(r):r()})(t,n,e))}}})(this,s))}disconnectedCallback(){u.jmp(()=>void 0)}"s-init"(){const t=p(this);t.s&&ot(this,t)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=p(t);2&n.t&&et(t,n,e,!1)}})(this,s)}componentOnReady(){return p(this).C}},s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),u.jmp(()=>a=setTimeout(st,30))},it=(t,e,n)=>{const o=ft(t);return{emit:t=>o.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},ft=t=>p(t).T;export{H,x as a,at as b,it as c,ft as g,A as h,E as p,h as r};