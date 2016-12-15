"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flight_service_1 = require("../service/flight.service");
var FlightEditComponent = (function () {
    function FlightEditComponent(route, flightService) {
        this.route = route;
        this.flightService = flightService;
        this.info = "FlightEdit";
        this.message = "";
        this.warning = {
            resolve: null,
            showDialog: false
        };
    }
    FlightEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.warning.showDialog = true;
        return new Promise(function (resolve) {
            _this.warning.resolve = resolve;
        });
    };
    FlightEditComponent.prototype.decide = function (d) {
        this.warning.showDialog = false;
        this.warning.resolve(d);
    };
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.flightService.findById(p['id']).subscribe(function (flight) { return _this.flight = flight; }, function (err) { return console.error('Fehler beim Laden', err); });
        });
    };
    FlightEditComponent.prototype.save = function () {
        var _this = this;
        this.flightService.save(this.flight).subscribe(function (flight) {
            _this.flight = flight;
            _this.message = "Erfolgreich gespeichert!";
        }, function (err) {
            _this.message = "Fehler beim Speichern: " + err.text();
            console.error('Fehler beim Laden', err);
        });
    };
    FlightEditComponent = __decorate([
        core_1.Component({
            templateUrl: './flight-edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, flight_service_1.FlightService])
    ], FlightEditComponent);
    return FlightEditComponent;
}());
exports.FlightEditComponent = FlightEditComponent;
//# sourceMappingURL=flight-edit.component.js.map