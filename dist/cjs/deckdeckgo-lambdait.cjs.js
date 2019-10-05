'use strict';

const core = require('./core-4696c1da.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["deckgo-slide-lambda-title.cjs",[[1,"deckgo-slide-lambda-title",{"backgroundType":[513,"background-type"],"beforeSwipe":[64],"afterSwipe":[64],"lazyLoadContent":[64],"revealContent":[64],"hideContent":[64]}]]]], options);
});
