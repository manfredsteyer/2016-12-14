"use strict";
var flight_booking_component_1 = require('./flight-booking.component');
var flight_booking_routes_1 = require('./flight-booking.routes');
var router_1 = require('@angular/router');
var passenger_edit_component_1 = require('./passenger-edit/passenger-edit.component');
var passenger_search_component_1 = require('./passenger-search/passenger-search.component');
var flight_edit_component_1 = require('./flight-edit/flight-edit.component');
var flight_search_component_1 = require('./flight-search/flight-search.component');
var flight_card_component_1 = require('./flight-search/flight-card.component');
var shared_module_1 = require('./../shared/shared.module');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var FlightBookingModule = (function () {
    function FlightBookingModule() {
    }
    FlightBookingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                router_1.RouterModule,
                flight_booking_routes_1.FlightBookingRouterModule
            ],
            declarations: [
                flight_booking_component_1.FlightBookingComponent,
                flight_search_component_1.FlightSearchComponent,
                flight_edit_component_1.FlightEditComponent,
                flight_card_component_1.FlightCardComponent,
                passenger_search_component_1.PassengerSearchComponent,
                passenger_edit_component_1.PassengerEditComponent
            ],
            providers: [],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], FlightBookingModule);
    return FlightBookingModule;
}());
exports.FlightBookingModule = FlightBookingModule;
//# sourceMappingURL=flight-booking.module.js.map