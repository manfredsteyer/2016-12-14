"use strict";
var custom_preloading_strategy_1 = require('./shared/preload/custom-preloading-strategy');
var flight_history_component_1 = require('./flight-history/flight-history.component');
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
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
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
        data: {
            preload: true
        }
    },
    {
        path: 'history',
        component: flight_history_component_1.FlightHistoryComponent,
        outlet: 'aux'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
exports.AppRouterModule = router_1.RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: custom_preloading_strategy_1.CustomPreloadingStrategy
});
//# sourceMappingURL=app.routes.js.map