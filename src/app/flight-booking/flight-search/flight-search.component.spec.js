"use strict";
var app_constants_1 = require('./../../app.constants');
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var flight_search_component_1 = require("./flight-search.component");
var flight_service_1 = require("../service/flight.service");
var flight_booking_module_1 = require("../flight-booking.module");
var FlightServiceMock = (function () {
    function FlightServiceMock() {
    }
    FlightServiceMock.prototype.findById = function (id) { return null; };
    FlightServiceMock.prototype.find = function (von, nach) {
        var result = [{ id: 1, from: 'Graz', to: 'Hamburg', date: '2017-01-01' }];
        //return Observable.from([result]);
        return Promise.resolve(result);
    };
    FlightServiceMock.prototype.save = function (flug) { return null; };
    return FlightServiceMock;
}());
describe('FlugSuchen', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule, flight_booking_module_1.FlightBookingModule],
            declarations: [],
            providers: [
                { provide: flight_service_1.FlightService, useClass: FlightServiceMock },
                { provide: app_constants_1.BASE_URL, useValue: '' }
            ]
        });
        // 'compile' wird beim Einsatz von webpack inkl. template-loader nicht benötigt
        // TestBed.compileComponents();
    });
    it('should have no selected flight initially', function () {
        var flightSearch = testing_1.TestBed.createComponent(flight_search_component_1.FlightSearchComponent);
        expect(flightSearch.componentInstance.selectedFlight).toBeUndefined();
    });
    it('should not load flights', testing_1.async(function () {
        testing_1.TestBed
            .overrideComponent(flight_search_component_1.FlightSearchComponent, { set: { providers: [{ provide: flight_service_1.FlightService, useClass: FlightServiceMock }] } });
        var flightSearch = testing_1.TestBed.createComponent(flight_search_component_1.FlightSearchComponent);
        flightSearch.componentInstance.from = "Graz";
        flightSearch.componentInstance.to = "";
        var ok = true;
        flightSearch.componentInstance.search()
            .catch(function (_) {
            ok = false;
        })
            .then(function (_) {
            expect(ok).toBe(false);
        });
    }));
    it('should load flights', testing_1.async(function () {
        testing_1.TestBed
            .overrideComponent(flight_search_component_1.FlightSearchComponent, { set: { providers: [{ provide: flight_service_1.FlightService, useClass: FlightServiceMock }] } });
        var flightSearch = testing_1.TestBed.createComponent(flight_search_component_1.FlightSearchComponent);
        flightSearch.componentInstance.from = "Graz";
        flightSearch.componentInstance.to = "Hamburg";
        flightSearch.componentInstance.search().then(function (fluege) {
            expect(fluege.length).toEqual(1);
        });
    }));
});
//# sourceMappingURL=flight-search.component.spec.js.map