import { PassengerEditComponent } from './flight-booking/passenger-edit/passenger-edit.component';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";

// /flight-search --> ../flight-edit
// /flight-edit
const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
