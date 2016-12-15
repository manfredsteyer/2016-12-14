"use strict";
var flight_event_service_1 = require('./eventing/flight-event.service');
var shared_module_1 = require('./shared/shared.module');
var flight_history_component_1 = require('./flight-history/flight-history.component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_constants_1 = require('./app.constants');
var app_routes_1 = require("./app.routes");
var home_component_1 = require("./home/home.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.AppRouterModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                flight_history_component_1.FlightHistoryComponent
            ],
            providers: [
                { provide: app_constants_1.BASE_URL, useValue: "http://www.angular.at/api" },
                flight_event_service_1.FlightEventService
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