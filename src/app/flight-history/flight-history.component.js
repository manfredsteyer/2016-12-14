"use strict";
var flight_event_service_1 = require('./../eventing/flight-event.service');
var core_1 = require('@angular/core');
var FlightHistoryComponent = (function () {
    function FlightHistoryComponent(flightEventService) {
        var _this = this;
        this.flightEventService = flightEventService;
        this.flights = [];
        flightEventService.flightSelected.subscribe(function (flight) {
            _this.flights.push(flight);
            if (_this.flights.length > 3) {
                _this.flights = _this.flights.slice(1);
            }
        });
    }
    FlightHistoryComponent = __decorate([
        core_1.Component({
            templateUrl: './flight-history.component.html'
        }), 
        __metadata('design:paramtypes', [flight_event_service_1.FlightEventService])
    ], FlightHistoryComponent);
    return FlightHistoryComponent;
}());
exports.FlightHistoryComponent = FlightHistoryComponent;
//# sourceMappingURL=flight-history.component.js.map