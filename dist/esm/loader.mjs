import { a as patchEsm, b as bootstrapLazy } from './core-6763d845.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["deckgo-slide-lambda-title",[[1,"deckgo-slide-lambda-title",{"backgroundType":[513,"background-type"],"beforeSwipe":[64],"afterSwipe":[64],"lazyLoadContent":[64],"revealContent":[64],"hideContent":[64]}]]]], options);
  });
};

export { defineCustomElements };
