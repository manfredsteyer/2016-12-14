"use strict";
var rxjs_1 = require('rxjs');
var FlightEventService = (function () {
    function FlightEventService() {
        this.flightSelected = new rxjs_1.ReplaySubject();
    }
    return FlightEventService;
}());
exports.FlightEventService = FlightEventService;
//# sourceMappingURL=flight-event.service.js.map