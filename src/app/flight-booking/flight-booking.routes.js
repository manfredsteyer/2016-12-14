"use strict";
var can_deactivate_guard_1 = require('./../shared/guards/can-deactivate.guard');
var auth_guard_1 = require('./../shared/guards/auth.guard');
var flight_booking_component_1 = require('./flight-booking.component');
var passenger_edit_component_1 = require('./passenger-edit/passenger-edit.component');
var flight_edit_component_1 = require('./flight-edit/flight-edit.component');
var passenger_search_component_1 = require('./passenger-search/passenger-search.component');
var flight_search_component_1 = require('./flight-search/flight-search.component');
var router_1 = require('@angular/router');
var FLIGHT_BOOKING_MODULE = [
    {
        path: '',
        canActivate: [auth_guard_1.AuthGuard],
        component: flight_booking_component_1.FlightBookingComponent,
        children: [
            {
                path: 'flight-search',
                component: flight_search_component_1.FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: passenger_search_component_1.PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: flight_edit_component_1.FlightEditComponent,
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
            },
            {
                path: 'passenger-edit/:id',
                component: passenger_edit_component_1.PassengerEditComponent
            },
        ]
    }
];
// RouterModule.forRoot()
exports.FlightBookingRouterModule = router_1.RouterModule.forChild(FLIGHT_BOOKING_MODULE);
//# sourceMappingURL=flight-booking.routes.js.map