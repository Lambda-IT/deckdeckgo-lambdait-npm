var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-6763d845.js';
function lazyLoadComponentContent(el, tag) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var promises, elements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = [];
                    elements = getAllElements(el, tag);
                    if (!(elements && elements.length > 0)) return [3 /*break*/, 2];
                    elements.forEach(function (element) {
                        promises.push(element.lazyLoadContent());
                    });
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _a.sent();
                    resolve();
                    _a.label = 2;
                case 2:
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function getAllElements(el, tag) {
    var allSlottedElements = el.querySelectorAll(tag);
    var allShadowsElements = el.shadowRoot ? el.shadowRoot.querySelectorAll(tag) : [];
    return Array.from(allSlottedElements).concat(Array.from(allShadowsElements));
}
function lazyLoadSelectedImages(images) {
    return new Promise(function (resolve) {
        if (!images) {
            resolve();
            return;
        }
        images.forEach(function (image) {
            if (image.hasAttribute('data-src')) {
                image.setAttribute('src', "" + image.getAttribute('data-src'));
                image.removeAttribute('data-src');
                if (!image.classList.contains('deckgo-reveal')) {
                    image.style.setProperty('visibility', 'inherit');
                }
            }
            image.style.setProperty('pointer-events', 'none');
        });
        resolve();
    });
}
function lazyLoadSelectedLazyImagesComponent(components) {
    var _this = this;
    return new Promise(function (resolve) {
        if (!components) {
            resolve();
            return;
        }
        components.forEach(function (component) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, component.lazyLoad()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        resolve();
    });
}
function lazyLoadImages(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var promises;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = [];
                    promises.push(lazyLoadLazyImgTags(el));
                    promises.push(lazyLoadLazyImgComponents(el));
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _a.sent();
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function lazyLoadLazyImgTags(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var images;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    images = getAllImages(el, 'img');
                    return [4 /*yield*/, lazyLoadSelectedImages(images)];
                case 1:
                    _a.sent();
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function lazyLoadLazyImgComponents(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var images;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    images = getAllImages(el, 'deckgo-lazy-img');
                    return [4 /*yield*/, lazyLoadSelectedLazyImagesComponent(images)];
                case 1:
                    _a.sent();
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function hideLazyLoadImages(el) {
    return new Promise(function (resolve) {
        var images = getAllImages(el, 'img');
        if (!images) {
            resolve();
        }
        else {
            images = images.filter(function (image) { return image.getAttribute('data-src'); });
            images.forEach(function (image) {
                image.style.setProperty('visibility', 'hidden');
            });
            resolve();
        }
    });
}
function getAllImages(el, tag) {
    var allSlotedImages = el.querySelectorAll('[slot] ' + tag);
    var allShadowImages = el.shadowRoot ? el.shadowRoot.querySelectorAll(tag) : [];
    return Array.from(allSlotedImages).concat(Array.from(allShadowImages));
}
function showRevealElement(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var elements, couldSwipe, nextElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
                    couldSwipe = true;
                    if (!elements) return [3 /*break*/, 2];
                    nextElement = Array.from(elements).find(function (element) {
                        return !element.allElementsRevealed;
                    });
                    if (!nextElement) return [3 /*break*/, 2];
                    return [4 /*yield*/, nextElement.reveal()];
                case 1:
                    _a.sent();
                    couldSwipe = false;
                    _a.label = 2;
                case 2:
                    resolve(couldSwipe);
                    return [2 /*return*/];
            }
        });
    }); });
}
function hideRevealElement(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var elements, couldSwipe, nextElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
                    couldSwipe = true;
                    if (!elements) return [3 /*break*/, 2];
                    nextElement = Array.from(elements).reverse().find(function (element) {
                        return !element.allElementsHidden;
                    });
                    if (!nextElement) return [3 /*break*/, 2];
                    return [4 /*yield*/, nextElement.hide()];
                case 1:
                    _a.sent();
                    couldSwipe = false;
                    _a.label = 2;
                case 2:
                    resolve(couldSwipe);
                    return [2 /*return*/];
            }
        });
    }); });
}
function showAllRevealElements(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var elements, promises, _i, _a, element;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
                    if (!(elements && elements.length > 0)) return [3 /*break*/, 2];
                    promises = [];
                    for (_i = 0, _a = Array.from(elements); _i < _a.length; _i++) {
                        element = _a[_i];
                        promises.push(element.revealAll());
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function hideAllRevealElements(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var elements, promises, _i, _a, element;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
                    if (!(elements && elements.length > 0)) return [3 /*break*/, 2];
                    promises = [];
                    for (_i = 0, _a = Array.from(elements); _i < _a.length; _i++) {
                        element = _a[_i];
                        promises.push(element.hideAll());
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function beforeSwipe(el, enter, reveal) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var couldSwipe, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!reveal) return [3 /*break*/, 5];
                    if (!enter) return [3 /*break*/, 2];
                    return [4 /*yield*/, showRevealElement(el)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, hideRevealElement(el)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    couldSwipe = _a;
                    resolve(couldSwipe);
                    return [3 /*break*/, 6];
                case 5:
                    resolve(true);
                    _b.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); });
}
function afterSwipe() {
    return new Promise(function (resolve) {
        resolve();
    });
}
function lazyLoadContent(el) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var promises;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = [];
                    promises.push(lazyLoadImages(el));
                    promises.push(lazyLoadComponentContent(el, 'deckgo-gif'));
                    promises.push(lazyLoadComponentContent(el, 'deckgo-youtube'));
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _a.sent();
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
var LambdaSlideTitle = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.backgroundType = 'lambda';
        this.slideDidLoad = createEvent(this, "slideDidLoad", 7);
    }
    class_1.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        if (['malibu'].indexOf(this.backgroundType) !== -1) {
                            this.el.style.color = '#212121';
                        }
                        if (['tory-blue', 'jazzberry-jam'].indexOf(this.backgroundType) !== -1) {
                            this.el.style.color = 'white';
                        }
                        this.slideDidLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.beforeSwipe = function (enter, reveal) {
        return beforeSwipe(this.el, enter, reveal);
    };
    class_1.prototype.afterSwipe = function () {
        return afterSwipe();
    };
    class_1.prototype.lazyLoadContent = function () {
        return lazyLoadContent(this.el);
    };
    class_1.prototype.revealContent = function () {
        return showAllRevealElements(this.el);
    };
    class_1.prototype.hideContent = function () {
        return hideAllRevealElements(this.el);
    };
    class_1.prototype.render = function () {
        return (h(Host, { class: { 'deckgo-slide-container': true } }, h("div", { class: "deckgo-slide" }, h("slot", { name: "title" }), h("slot", { name: "content" }), h("slot", { name: "notes" }), h("slot", { name: "actions" }), h("div", { class: 'title-bg ' + this.backgroundType }))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-khtml-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}div.title-bg.lambda{top:0;left:0;height:100%;width:100%;z-index:-1;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"3840\" height=\"6867\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"%23F1F3F5\" d=\"M0 0h3840v6867H0z\"/><g fill=\"%2372C3FC\"><path d=\"M3841 4498v696.803L1 6722v-696.755zM1 1962v696.803L3841 4186v-696.755zM3841-262v696.803L1 1962v-696.755z\"/></g></g></svg>\')}div.title-bg.lambda,div.title-bg.lambda:before{position:absolute;background-size:cover;background-repeat:no-repeat}div.title-bg.lambda:before{content:\" \";top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\')}div.title-bg.white{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#fff}div.title-bg.white:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat}div.title-bg.tory-blue{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#0d47a1}div.title-bg.tory-blue:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23fff\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23fff\"/></svg>\')}div.title-bg.jazzberry-jam{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#ad1457}div.title-bg.jazzberry-jam:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23fff\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23fff\"/></svg>\')}div.title-bg.malibu{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#72c3fc}div.title-bg.malibu:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23212121\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23212121\"/></svg>\')}::slotted([slot=content]),::slotted([slot=title]){text-align:left}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LambdaSlideTitle as deckgo_slide_lambda_title };
