"use strict";
var rxjs_1 = require('rxjs');
var CustomPreloadingStrategy = (function () {
    function CustomPreloadingStrategy() {
    }
    CustomPreloadingStrategy.prototype.preload = function (route, fn) {
        if (route.data['preload']) {
            return fn();
        }
        else {
            return rxjs_1.Observable.of(null);
        }
        //return Observable.of(true).delay(7000).flatMap(_ => fn());
    };
    return CustomPreloadingStrategy;
}());
exports.CustomPreloadingStrategy = CustomPreloadingStrategy;
//# sourceMappingURL=custom-preloading-strategy.js.map