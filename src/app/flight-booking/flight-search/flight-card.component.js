"use strict";
var core_1 = require("@angular/core");
var FlightCardComponent = (function () {
    function FlightCardComponent() {
        this.selectedItemChange = new core_1.EventEmitter();
    }
    FlightCardComponent.prototype.select = function () {
        this.selectedItemChange.next(this.item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlightCardComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlightCardComponent.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FlightCardComponent.prototype, "selectedItemChange", void 0);
    FlightCardComponent = __decorate([
        core_1.Component({
            selector: 'flight-card',
            templateUrl: './flight-card.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FlightCardComponent);
    return FlightCardComponent;
}());
exports.FlightCardComponent = FlightCardComponent;
//# sourceMappingURL=flight-card.component.js.map