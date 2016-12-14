"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var flight_search_component_1 = require("./flight-booking/flight-search/flight-search.component");
var passenger_search_component_1 = require("./flight-booking/passenger-search/passenger-search.component");
var flight_edit_component_1 = require("./flight-booking/flight-edit/flight-edit.component");
// /flight-search --> ../flight-edit
// /flight-edit
var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
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
        component: flight_edit_component_1.FlightEditComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
exports.AppRouterModule = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map