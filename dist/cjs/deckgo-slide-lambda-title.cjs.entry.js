'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-4696c1da.js');

function lazyLoadComponentContent(el, tag) {
    return new Promise(async (resolve) => {
        const promises = [];
        const elements = getAllElements(el, tag);
        if (elements && elements.length > 0) {
            elements.forEach((element) => {
                promises.push(element.lazyLoadContent());
            });
            await Promise.all(promises);
            resolve();
        }
        resolve();
    });
}
function getAllElements(el, tag) {
    const allSlottedElements = el.querySelectorAll(tag);
    const allShadowsElements = el.shadowRoot ? el.shadowRoot.querySelectorAll(tag) : [];
    return Array.from(allSlottedElements).concat(Array.from(allShadowsElements));
}

function lazyLoadSelectedImages(images) {
    return new Promise((resolve) => {
        if (!images) {
            resolve();
            return;
        }
        images.forEach((image) => {
            if (image.hasAttribute('data-src')) {
                image.setAttribute('src', `${image.getAttribute('data-src')}`);
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
    return new Promise((resolve) => {
        if (!components) {
            resolve();
            return;
        }
        components.forEach(async (component) => {
            await component.lazyLoad();
        });
        resolve();
    });
}

function lazyLoadImages(el) {
    return new Promise(async (resolve) => {
        const promises = [];
        promises.push(lazyLoadLazyImgTags(el));
        promises.push(lazyLoadLazyImgComponents(el));
        await Promise.all(promises);
        resolve();
    });
}
function lazyLoadLazyImgTags(el) {
    return new Promise(async (resolve) => {
        const images = getAllImages(el, 'img');
        await lazyLoadSelectedImages(images);
        resolve();
    });
}
function lazyLoadLazyImgComponents(el) {
    return new Promise(async (resolve) => {
        const images = getAllImages(el, 'deckgo-lazy-img');
        await lazyLoadSelectedLazyImagesComponent(images);
        resolve();
    });
}
function hideLazyLoadImages(el) {
    return new Promise((resolve) => {
        let images = getAllImages(el, 'img');
        if (!images) {
            resolve();
        }
        else {
            images = images.filter((image) => image.getAttribute('data-src'));
            images.forEach((image) => {
                image.style.setProperty('visibility', 'hidden');
            });
            resolve();
        }
    });
}
function getAllImages(el, tag) {
    const allSlotedImages = el.querySelectorAll('[slot] ' + tag);
    const allShadowImages = el.shadowRoot ? el.shadowRoot.querySelectorAll(tag) : [];
    return Array.from(allSlotedImages).concat(Array.from(allShadowImages));
}

function showRevealElement(el) {
    return new Promise(async (resolve) => {
        const elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
        let couldSwipe = true;
        if (elements) {
            const nextElement = Array.from(elements).find((element) => {
                return !element.allElementsRevealed;
            });
            if (nextElement) {
                await nextElement.reveal();
                couldSwipe = false;
            }
        }
        resolve(couldSwipe);
    });
}
function hideRevealElement(el) {
    return new Promise(async (resolve) => {
        const elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
        let couldSwipe = true;
        if (elements) {
            const nextElement = Array.from(elements).reverse().find((element) => {
                return !element.allElementsHidden;
            });
            if (nextElement) {
                await nextElement.hide();
                couldSwipe = false;
            }
        }
        resolve(couldSwipe);
    });
}
function showAllRevealElements(el) {
    return new Promise(async (resolve) => {
        const elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
        if (elements && elements.length > 0) {
            const promises = [];
            for (const element of Array.from(elements)) {
                promises.push(element.revealAll());
            }
            await Promise.all(promises);
        }
        resolve();
    });
}
function hideAllRevealElements(el) {
    return new Promise(async (resolve) => {
        const elements = el.querySelectorAll('deckgo-reveal, deckgo-reveal-list');
        if (elements && elements.length > 0) {
            const promises = [];
            for (const element of Array.from(elements)) {
                promises.push(element.hideAll());
            }
            await Promise.all(promises);
        }
        resolve();
    });
}
function beforeSwipe(el, enter, reveal) {
    return new Promise(async (resolve) => {
        if (reveal) {
            const couldSwipe = enter ? await showRevealElement(el) : await hideRevealElement(el);
            resolve(couldSwipe);
        }
        else {
            resolve(true);
        }
    });
}
function afterSwipe() {
    return new Promise((resolve) => {
        resolve();
    });
}
function lazyLoadContent(el) {
    return new Promise(async (resolve) => {
        const promises = [];
        promises.push(lazyLoadImages(el));
        promises.push(lazyLoadComponentContent(el, 'deckgo-gif'));
        promises.push(lazyLoadComponentContent(el, 'deckgo-youtube'));
        await Promise.all(promises);
        resolve();
    });
}

const LambdaSlideTitle = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.backgroundType = 'lambda';
        this.slideDidLoad = core.createEvent(this, "slideDidLoad", 7);
    }
    async componentDidLoad() {
        await hideLazyLoadImages(this.el);
        if (['malibu'].indexOf(this.backgroundType) !== -1) {
            this.el.style.color = '#212121';
        }
        if (['tory-blue', 'jazzberry-jam'].indexOf(this.backgroundType) !== -1) {
            this.el.style.color = 'white';
        }
        this.slideDidLoad.emit();
    }
    beforeSwipe(enter, reveal) {
        return beforeSwipe(this.el, enter, reveal);
    }
    afterSwipe() {
        return afterSwipe();
    }
    lazyLoadContent() {
        return lazyLoadContent(this.el);
    }
    revealContent() {
        return showAllRevealElements(this.el);
    }
    hideContent() {
        return hideAllRevealElements(this.el);
    }
    render() {
        return (core.h(core.Host, { class: { 'deckgo-slide-container': true } }, core.h("div", { class: "deckgo-slide" }, core.h("slot", { name: "title" }), core.h("slot", { name: "content" }), core.h("slot", { name: "notes" }), core.h("slot", { name: "actions" }), core.h("div", { class: 'title-bg ' + this.backgroundType }))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-khtml-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}div.title-bg.lambda{top:0;left:0;height:100%;width:100%;z-index:-1;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"3840\" height=\"6867\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"%23F1F3F5\" d=\"M0 0h3840v6867H0z\"/><g fill=\"%2372C3FC\"><path d=\"M3841 4498v696.803L1 6722v-696.755zM1 1962v696.803L3841 4186v-696.755zM3841-262v696.803L1 1962v-696.755z\"/></g></g></svg>\')}div.title-bg.lambda,div.title-bg.lambda:before{position:absolute;background-size:cover;background-repeat:no-repeat}div.title-bg.lambda:before{content:\" \";top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\')}div.title-bg.white{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#fff}div.title-bg.white:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat}div.title-bg.tory-blue{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#0d47a1}div.title-bg.tory-blue:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23fff\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23fff\"/></svg>\')}div.title-bg.jazzberry-jam{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#ad1457}div.title-bg.jazzberry-jam:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23fff\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23fff\"/></svg>\')}div.title-bg.malibu{position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background-color:#72c3fc}div.title-bg.malibu:before{content:\" \";position:absolute;top:23px;left:var(--slide-padding-start-default);height:1.5em;width:9.375em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23939498\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%2372C3FC\"/></svg>\');background-size:cover;background-repeat:no-repeat;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 64\" fill=\"none\"><path d=\"M85.71 17.73h6.2v35.9h18.79v5.46h-25l.01-41.36zm59.71 32.8h-20.28l-3.35 8.56H115l16.4-41.36h7.76l16.43 41.36h-6.82l-3.35-8.56zM126.94 45h16.68l-8.37-21.89L126.94 45zm70.43-18.78L184 59.09h-2.61L168 26.22v32.87h-6.2V17.73h8.86l12 29.7 12-29.7h8.87v41.36h-6.2l.04-32.87zm15.1-8.49h19.41c7.38 0 11.66 4.52 11.66 10.54a9.343 9.343 0 01-1.89 6.033 9.338 9.338 0 01-5.3 3.447c4.4.69 8 5.15 8 10.17 0 6.52-4.34 11.17-12 11.17h-19.88V17.73zm18.23 17.54c4.16 0 6.45-2.6 6.45-6s-2.29-6.08-6.45-6.08h-12v12.08h12zm.3 18.36c4.33 0 6.94-2.48 6.94-6.51 0-3.41-2.36-6.39-6.94-6.39h-12.33v12.9H231zm21.51-35.9h14.76c12.9 0 21.46 8.8 21.46 20.71s-8.56 20.65-21.46 20.65h-14.76V17.73zm14.76 35.9c9.55 0 15.07-6.82 15.07-15.19S277 23.18 267.27 23.18h-8.55v30.45h8.55zm52.63-3.1h-20.28l-3.35 8.56h-6.82l16.43-41.36h7.75l16.44 41.36h-6.83l-3.34-8.56zM301.42 45h16.68l-8.37-21.89L301.42 45zm49.29-27.27h6.2v41.36h-6.2V17.73zm26.53 5.45H364.4v-5.45h31.82v5.45h-12.78v35.91h-6.2V23.18z\" fill=\"%23212121\"/><path d=\"M33.75 28.57L22.33 59.09h-6.7L29.9 23.17h7.75l14.27 35.92h-6.7L33.75 28.57zm31.81 34.51h-6L35.28 2h6l24.28 61.08zM8 63.08H2l13.15-33.09h6L8 63.08z\" fill=\"%23212121\"/></svg>\')}::slotted([slot=content]),::slotted([slot=title]){text-align:left}"; }
};

exports.deckgo_slide_lambda_title = LambdaSlideTitle;
