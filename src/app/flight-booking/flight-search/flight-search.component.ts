import { FlightEventService } from './../../eventing/flight-event.service';
import {Component} from "@angular/core";
import {Flight} from "../../entities/flight";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {FlightService} from "../service/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    // providers: [{provide: FlightService, useClass: FlightService}]
})
export class FlightSearchComponent {

    from: string;
    to: string;
    selectedFlight: Flight;

    constructor(
        private flightService: FlightService,
        private flightEventService: FlightEventService) {
    }

    get flights(): Flight[] {
        return this.flightService.flights;
    }

    get flights$() {
        return this.flightService.flight$;
    }


    search(): Promise<Flight[]> {

        if (!this.from || !this.to) {
            return Promise.reject('args');
        }

        return this.flightService.find(this.from, this.to);
    }

    delay() {
        this.flightService.delay();
    }

    select(flight: Flight) {
        this.selectedFlight = flight;
        this.flightEventService.flightSelected.next(flight);
    }

}
