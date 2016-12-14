import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FlightService} from "../service/flight.service";
import {Flight} from "../../entities/flight";

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
    info = "FlightEdit"
    id: string;
    flight: Flight;
    message: string = "";

    constructor(private route: ActivatedRoute, private flightService: FlightService) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.flightService.findById(p['id']).subscribe(
                (flight: Flight) => this.flight = flight,
                (err) => console.error('Fehler beim Laden', err)
            )
        });
    }

    save() {
        this.flightService.save(this.flight).subscribe(
            (flight: Flight) => {
                this.flight = flight
                this.message = "Erfolgreich gespeichert!";
            },
            (err) => {
                this.message = "Fehler beim Speichern: " + err.text();
                console.error('Fehler beim Laden', err)
            }
        )
    }
}