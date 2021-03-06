"use strict";
var oauth_service_1 = require('angular2-oauth2/oauth-service');
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var app_constants_1 = require('../../app.constants');
var FlightService = (function () {
    function FlightService(http, oauthService, baseUrl) {
        this.http = http;
        this.oauthService = oauthService;
        this.baseUrl = baseUrl;
        this.flights = [];
        this.flight$ = new rxjs_1.BehaviorSubject([]);
    }
    FlightService.prototype.delay = function () {
        // Mutable "klassisch"
        var ONE_MINUTE = 1000 * 60;
        var oldFlights = this.flights;
        var oldFlight = oldFlights[0];
        var oldFlightDate = new Date(oldFlight.date);
        var newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);
        /*
        let newFlight = {
            id: oldFlight.id,
            from: oldFlight.from,
            to: oldFlight.to,
            date: newFlightDate.toISOString()
        }
        */
        var newFlight = Object.assign({}, oldFlight, { date: newFlightDate.toISOString() });
        var newFlights = [
            newFlight
        ].concat(oldFlights.slice(1));
        this.flights = newFlights;
        this.flight$.next(newFlights);
    };
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.baseUrl + "/flight";
            var search = new http_1.URLSearchParams();
            search.set('from', from);
            search.set('to', to);
            var headers = new http_1.Headers();
            headers.set('Accept', 'application/json');
            // headers.set('Authorization', 'Bearer ' +  this.oauthService.getAccessToken())
            _this
                .http
                .get(url, { search: search, headers: headers })
                .map(function (resp) { return resp.json(); })
                .subscribe(function (flights) {
                _this.flights = flights;
                _this.flight$.next(flights);
                resolve(flights);
            }, function (err) {
                console.error('Fehler beim Laden', err);
                reject(err);
                // Redirect auf login bei 401 oder 403
            });
        });
    };
    FlightService.prototype.findById = function (id) {
        var url = this.baseUrl + "/flight";
        var search = new http_1.URLSearchParams();
        search.set('id', id);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        return this
            .http
            .get(url, { search: search, headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    FlightService.prototype.save = function (flight) {
        var url = this.baseUrl + "/flight";
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        return this
            .http
            .post(url, flight, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    FlightService = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject(app_constants_1.BASE_URL)), 
        __metadata('design:paramtypes', [http_1.Http, oauth_service_1.OAuthService, String])
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map