"use strict";
var core_1 = require("@angular/core");
var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value, fmt) {
        // fmt: short, long
        var short, long;
        switch (value) {
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz Thalerhof";
                break;
            case "Hamburg":
                short = "HAM";
                long = "Airport Hamburg Fulsbüttel Helmut Schmidt";
                break;
            case "Salzburg":
                short = "SZG";
                long = "Flughafen Salzburg W. A. Mozard";
                break;
            default:
                short = long = "ROM";
        }
        if (fmt == 'short')
            return short;
        return long;
    };
    CityPipe = __decorate([
        core_1.Pipe({
            name: 'city',
            pure: true
        }), 
        __metadata('design:paramtypes', [])
    ], CityPipe);
    return CityPipe;
}());
exports.CityPipe = CityPipe;
//# sourceMappingURL=city.pipe.js.map