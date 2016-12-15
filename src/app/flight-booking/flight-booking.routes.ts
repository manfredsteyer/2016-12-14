import { CanDeactivateGuard } from './../shared/guards/can-deactivate.guard';
import { AuthGuard } from './../shared/guards/auth.guard';
import { FlightBookingComponent } from './flight-booking.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { Routes, RouterModule } from '@angular/router';


const FLIGHT_BOOKING_MODULE: Routes = [

    {
        path: '',
        canActivate: [AuthGuard],
        component: FlightBookingComponent,
        children: [
            {
                path: 'flight-search',  // flight-booking/flight-search
                component: FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent,
                canDeactivate: [CanDeactivateGuard]
            },
            {
                path: 'passenger-edit/:id',
                component: PassengerEditComponent
            },
        ]    
    }


];

// RouterModule.forRoot()
export const FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_MODULE);