"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var flight_search_component_1 = require("./flight-booking/flight-search/flight-search.component");
var app_constants_1 = require('./app.constants');
var city_pipe_1 = require("./shared/pipes/city.pipe");
var flight_card_component_1 = require("./flight-booking/flight-search/flight-card.component");
var app_routes_1 = require("./app.routes");
var home_component_1 = require("./home/home.component");
var passenger_search_component_1 = require("./flight-booking/passenger-search/passenger-search.component");
var flight_edit_component_1 = require("./flight-booking/flight-edit/flight-edit.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.AppRouterModule
            ],
            declarations: [
                app_component_1.AppComponent,
                flight_search_component_1.FlightSearchComponent,
                flight_card_component_1.FlightCardComponent,
                city_pipe_1.CityPipe,
                home_component_1.HomeComponent,
                flight_search_component_1.FlightSearchComponent,
                passenger_search_component_1.PassengerSearchComponent,
                flight_edit_component_1.FlightEditComponent
            ],
            providers: [
                { provide: app_constants_1.BASE_URL, useValue: "http://www.angular.at/api" }
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map