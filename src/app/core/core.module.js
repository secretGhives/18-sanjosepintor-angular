const shared = angular.module('core.shared', []);


import * as beforeAfterDirective from './directives/before-after/before-after.directive';
import * as affixTopDirective from './directives/affix-top/affix-top.directive';
import * as zoomDirective from './directives/zoom/zoom.directive';
import * as translateLanguageSelectDirective from './directives/translate-language-select/translate-language-select.directive';
import * as toucanDirective from './directives/toucan/toucan.directive';
import * as starRatingDirective from './directives/star-rating/star-rating.directive';
// Add directive imports above

import * as storeFactory from './services/store/store.factory';
import * as localeFactory from './services/locale/locale.factory';
// Add service imports above

shared.directive('beforeAfter', beforeAfterDirective);
shared.directive('affixTop', affixTopDirective);
shared.directive('zoom', zoomDirective);
shared.directive('translateLanguageSelect', translateLanguageSelectDirective);
shared.directive('toucan', toucanDirective);
shared.directive('starRating', starRatingDirective);
// Add directive to module above

shared.factory('store', storeFactory);
shared.factory('localeFactory', localeFactory);
// Add service to module above

export default shared;
