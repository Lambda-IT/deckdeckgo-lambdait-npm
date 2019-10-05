import { EventEmitter } from '../../stencil.core';
import { DeckdeckgoSlide } from '@deckdeckgo/slide-utils';
export declare class LambdaSlideTitle implements DeckdeckgoSlide {
    el: HTMLElement;
    slideDidLoad: EventEmitter<void>;
    backgroundType: 'lambda' | 'white' | 'tory-blue' | 'jazzberry-jam';
    componentDidLoad(): Promise<void>;
    beforeSwipe(enter: boolean, reveal: boolean): Promise<boolean>;
    afterSwipe(): Promise<void>;
    lazyLoadContent(): Promise<void>;
    revealContent(): Promise<void>;
    hideContent(): Promise<void>;
    render(): any;
}
