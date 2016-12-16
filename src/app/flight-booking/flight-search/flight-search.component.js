"use strict";
var flight_event_service_1 = require('./../../eventing/flight-event.service');
var core_1 = require("@angular/core");
var flight_service_1 = require("../service/flight.service");
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService, flightEventService) {
        this.flightService = flightService;
        this.flightEventService = flightEventService;
    }
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlightSearchComponent.prototype, "flights$", {
        get: function () {
            return this.flightService.flight$;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.search = function () {
        if (!this.from || !this.to) {
            return Promise.reject('args');
        }
        return this.flightService.find(this.from, this.to);
    };
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    FlightSearchComponent.prototype.select = function (flight) {
        this.selectedFlight = flight;
        this.flightEventService.flightSelected.next(flight);
    };
    FlightSearchComponent = __decorate([
        core_1.Component({
            selector: 'flight-search',
            templateUrl: './flight-search.component.html',
        }), 
        __metadata('design:paramtypes', [flight_service_1.FlightService, flight_event_service_1.FlightEventService])
    ], FlightSearchComponent);
    return FlightSearchComponent;
}());
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map