"use strict";
var core_1 = require("@angular/core");
var flight_service_1 = require("../service/flight.service");
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.flights = [];
    }
    FlightSearchComponent.prototype.search = function () {
        var _this = this;
        this.flightService
            .find(this.from, this.to)
            .subscribe(function (flights) { return _this.flights = flights; }, function (err) { return console.error('Fehler beim Laden', err); });
    };
    FlightSearchComponent.prototype.select = function (flight) {
        this.selectedFlight = flight;
    };
    FlightSearchComponent = __decorate([
        core_1.Component({
            selector: 'flight-search',
            templateUrl: './flight-search.component.html',
            providers: [flight_service_1.FlightService]
        }), 
        __metadata('design:paramtypes', [flight_service_1.FlightService])
    ], FlightSearchComponent);
    return FlightSearchComponent;
}());
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map