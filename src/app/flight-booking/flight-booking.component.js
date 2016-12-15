"use strict";
var flight_service_1 = require('./service/flight.service');
var core_1 = require('@angular/core');
var FlightBookingComponent = (function () {
    function FlightBookingComponent() {
    }
    FlightBookingComponent = __decorate([
        core_1.Component({
            templateUrl: './flight-booking.component.html',
            providers: [flight_service_1.FlightService]
        }), 
        __metadata('design:paramtypes', [])
    ], FlightBookingComponent);
    return FlightBookingComponent;
}());
exports.FlightBookingComponent = FlightBookingComponent;
//# sourceMappingURL=flight-booking.component.js.map