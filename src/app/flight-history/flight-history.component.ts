import { Flight } from './../entities/flight';
import { FlightEventService } from './../eventing/flight-event.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './flight-history.component.html'
})
export class FlightHistoryComponent {

    flights: Flight[] = [];

    constructor(private flightEventService: FlightEventService) {
        flightEventService.flightSelected.subscribe(
            (flight: Flight) => {
                this.flights.push(flight);
                if (this.flights.length > 3) {
                    this.flights = this.flights.slice(1);
                }
            }
        )
    }

}