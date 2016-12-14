import {Component} from "@angular/core";
import {Flight} from "../../entities/flight";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {FlightService} from "../service/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [{provide: FlightService, useClass: FlightService}]
})
export class FlightSearchComponent {

    from: string;
    to: string;
    selectedFlight: Flight;
    flights: Flight[] = [];

    constructor(private flightService: FlightService) {
    }

    search() {
        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (err) => {
                    console.error('Fehler beim Laden', err);
                } 
            );
    }

    select(flight: Flight) {
        this.selectedFlight = flight;
    }

}
