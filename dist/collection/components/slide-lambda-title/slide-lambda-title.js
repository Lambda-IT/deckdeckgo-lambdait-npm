import { h, Host } from "@stencil/core";
import { hideLazyLoadImages, afterSwipe, beforeSwipe, lazyLoadContent, hideAllRevealElements, showAllRevealElements, } from '@deckdeckgo/slide-utils';
export class LambdaSlideTitle {
    constructor() {
        this.backgroundType = 'lambda';
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
        return (h(Host, { class: { 'deckgo-slide-container': true } },
            h("div", { class: "deckgo-slide" },
                h("slot", { name: "title" }),
                h("slot", { name: "content" }),
                h("slot", { name: "notes" }),
                h("slot", { name: "actions" }),
                h("div", { class: 'title-bg ' + this.backgroundType }))));
    }
    static get is() { return "deckgo-slide-lambda-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["slide-lambda-title.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["slide-lambda-title.css"]
    }; }
    static get properties() { return {
        "backgroundType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'lambda' | 'white' | 'tory-blue' | 'jazzberry-jam'",
                "resolved": "\"jazzberry-jam\" | \"lambda\" | \"tory-blue\" | \"white\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "background-type",
            "reflect": true,
            "defaultValue": "'lambda'"
        }
    }; }
    static get events() { return [{
            "method": "slideDidLoad",
            "name": "slideDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "beforeSwipe": {
            "complexType": {
                "signature": "(enter: boolean, reveal: boolean) => Promise<boolean>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "afterSwipe": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "lazyLoadContent": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "revealContent": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "hideContent": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
