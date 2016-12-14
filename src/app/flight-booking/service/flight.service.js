"use strict";
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var app_constants_1 = require('../../app.constants');
var FlightService = (function () {
    function FlightService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    FlightService.prototype.find = function (from, to) {
        var url = this.baseUrl + "/flight";
        var search = new http_1.URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        return this
            .http
            .get(url, { search: search, headers: headers })
            .map(function (resp) { return resp.json(); });
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
        __param(1, core_1.Inject(app_constants_1.BASE_URL)), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map