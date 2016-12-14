import { FlightService } from './service/flight.service';
import { Component } from '@angular/core';


@Component({
    templateUrl: './flight-booking.component.html',
    providers: [FlightService]
})
export class FlightBookingComponent {
}