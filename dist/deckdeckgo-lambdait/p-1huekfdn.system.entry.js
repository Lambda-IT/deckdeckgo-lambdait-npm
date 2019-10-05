var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{s(n.next(e))}catch(t){o(t)}}function u(e){try{s(n["throw"](e))}catch(t){o(t)}}function s(e){e.done?r(e.value):i(e.value).then(a,u)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(u){a=[6,u];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-d9999773.system.js"],(function(e){"use strict";var t,r,n,i,o;return{setters:[function(e){t=e.r;r=e.c;n=e.h;i=e.H;o=e.g}],execute:function(){function a(e,t){var r=this;return new Promise((function(n){return __awaiter(r,void 0,void 0,(function(){var r,i;return __generator(this,(function(o){switch(o.label){case 0:r=[];i=u(e,t);if(!(i&&i.length>0))return[3,2];i.forEach((function(e){r.push(e.lazyLoadContent())}));return[4,Promise.all(r)];case 1:o.sent();n();o.label=2;case 2:n();return[2]}}))}))}))}function u(e,t){var r=e.querySelectorAll(t);var n=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(r).concat(Array.from(n))}function s(e){return new Promise((function(t){if(!e){t();return}e.forEach((function(e){if(e.hasAttribute("data-src")){e.setAttribute("src",""+e.getAttribute("data-src"));e.removeAttribute("data-src");if(!e.classList.contains("deckgo-reveal")){e.style.setProperty("visibility","inherit")}}e.style.setProperty("pointer-events","none")}));t()}))}function c(e){var t=this;return new Promise((function(r){if(!e){r();return}e.forEach((function(e){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,e.lazyLoad()];case 1:t.sent();return[2]}}))}))}));r()}))}function l(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=[];t.push(f(e));t.push(h(e));return[4,Promise.all(t)];case 1:n.sent();r();return[2]}}))}))}))}function f(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=v(e,"img");return[4,s(t)];case 1:n.sent();r();return[2]}}))}))}))}function h(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=v(e,"deckgo-lazy-img");return[4,c(t)];case 1:n.sent();r();return[2]}}))}))}))}function d(e){return new Promise((function(t){var r=v(e,"img");if(!r){t()}else{r=r.filter((function(e){return e.getAttribute("data-src")}));r.forEach((function(e){e.style.setProperty("visibility","hidden")}));t()}}))}function v(e,t){var r=e.querySelectorAll("[slot] "+t);var n=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(r).concat(Array.from(n))}function y(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(o){switch(o.label){case 0:t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list");n=true;if(!t)return[3,2];i=Array.from(t).find((function(e){return!e.allElementsRevealed}));if(!i)return[3,2];return[4,i.reveal()];case 1:o.sent();n=false;o.label=2;case 2:r(n);return[2]}}))}))}))}function _(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(o){switch(o.label){case 0:t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list");n=true;if(!t)return[3,2];i=Array.from(t).reverse().find((function(e){return!e.allElementsHidden}));if(!i)return[3,2];return[4,i.hide()];case 1:o.sent();n=false;o.label=2;case 2:r(n);return[2]}}))}))}))}function b(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t,n,i,o,a;return __generator(this,(function(u){switch(u.label){case 0:t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list");if(!(t&&t.length>0))return[3,2];n=[];for(i=0,o=Array.from(t);i<o.length;i++){a=o[i];n.push(a.revealAll())}return[4,Promise.all(n)];case 1:u.sent();u.label=2;case 2:r();return[2]}}))}))}))}function w(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t,n,i,o,a;return __generator(this,(function(u){switch(u.label){case 0:t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list");if(!(t&&t.length>0))return[3,2];n=[];for(i=0,o=Array.from(t);i<o.length;i++){a=o[i];n.push(a.hideAll())}return[4,Promise.all(n)];case 1:u.sent();u.label=2;case 2:r();return[2]}}))}))}))}function g(e,t,r){var n=this;return new Promise((function(i){return __awaiter(n,void 0,void 0,(function(){var n,o;return __generator(this,(function(a){switch(a.label){case 0:if(!r)return[3,5];if(!t)return[3,2];return[4,y(e)];case 1:o=a.sent();return[3,4];case 2:return[4,_(e)];case 3:o=a.sent();a.label=4;case 4:n=o;i(n);return[3,6];case 5:i(true);a.label=6;case 6:return[2]}}))}))}))}function p(){return new Promise((function(e){e()}))}function m(e){var t=this;return new Promise((function(r){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=[];t.push(l(e));t.push(a(e,"deckgo-gif"));t.push(a(e,"deckgo-youtube"));return[4,Promise.all(t)];case 1:n.sent();r();return[2]}}))}))}))}var P=e("deckgo_slide_lambda_title",function(){function e(e){t(this,e);this.backgroundType="lambda";this.slideDidLoad=r(this,"slideDidLoad",7)}e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,d(this.el)];case 1:e.sent();if(["malibu"].indexOf(this.backgroundType)!==-1){this.el.style.color="#212121"}if(["tory-blue","jazzberry-jam"].indexOf(this.backgroundType)!==-1){this.el.style.color="white"}this.slideDidLoad.emit();return[2]}}))}))};e.prototype.beforeSwipe=function(e,t){return g(this.el,e,t)};e.prototype.afterSwipe=function(){return p()};e.prototype.lazyLoadContent=function(){return m(this.el)};e.prototype.revealContent=function(){return b(this.el)};e.prototype.hideContent=function(){return w(this.el)};e.prototype.render=function(){return n(i,{class:{"deckgo-slide-container":true}},n("div",{class:"deckgo-slide"},n("slot",{name:"title"}),n("slot",{name:"content"}),n("slot",{name:"notes"}),n("slot",{name:"actions"}),n("div",{class:"title-bg "+this.backgroundType})))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-khtml-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}div.title-bg.lambda{top:0;left:0;height:100%;width:100%;z-index:-1;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"3840\" height=\"6867\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"%23F1F3F5\" d=\"M0 0h3840v6867H0z\"/><g fill=\"%2372C3FC\"><path d=\"M3841 4498v696.803L1 6722v-696.755zM1 1962v696.803L3841 4186v-696.755zM3841-262v696.803L1 1962v-696.755z\"/></g></g></svg>\')}div.title-bg.lambda,div.title-bg.lambda:before{position:absolute;background-size:cover;background-repeat:no-repeat}div.title-bg.lambda:before{content:\" \";top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\')}div.title-bg.white{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#fff}div.title-bg.white:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat}div.title-bg.tory-blue{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#0d47a1}div.title-bg.tory-blue:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23fff\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23fff\"/></svg>\')}div.title-bg.jazzberry-jam{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#ad1457}div.title-bg.jazzberry-jam:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23fff\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23fff\"/></svg>\')}div.title-bg.malibu{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#72c3fc}div.title-bg.malibu:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23212121\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23212121\"/></svg>\')}::slotted([slot=content]),::slotted([slot=title]){text-align:left}"},enumerable:true,configurable:true});return e}())}}}));