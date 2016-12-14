import { FlightBookingComponent } from './flight-booking.component';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { RouterModule } from '@angular/router';
import { FlightService } from './service/flight.service';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        RouterModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightBookingComponent,
        FlightSearchComponent,
        FlightEditComponent,
        FlightCardComponent,
        PassengerSearchComponent,
        PassengerEditComponent
    ],
    providers: [
        //FlightService
    ],
    exports: [
    ]
})
export class FlightBookingModule {

}