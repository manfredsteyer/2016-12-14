import { Flight } from './../entities/flight';
import { Subject, ReplaySubject } from 'rxjs';

export class FlightEventService {
    flightSelected: Subject<Flight> = new ReplaySubject<Flight>(3);
}