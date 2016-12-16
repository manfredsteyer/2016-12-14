import { OAuthService } from 'angular2-oauth2/oauth-service';
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Injectable, Inject} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
    // Reactive Extensions for JS
import {Flight} from "../../entities/flight";
import { BASE_URL } from '../../app.constants';

@Injectable()
export class FlightService {

    flights: Flight[] = [];
    flight$ = new BehaviorSubject<Flight[]>([]);

    constructor(
        private http: Http,
        private oauthService: OAuthService,
        @Inject(BASE_URL) private baseUrl: string) {
    }

    delay() {

        // Mutable "klassisch"

        const ONE_MINUTE = 1000 * 60;

        let oldFlights = this.flights;
        let oldFlight = oldFlights[0];
        let oldFlightDate = new Date(oldFlight.date);

        let newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);
        
        /*
        let newFlight = {
            id: oldFlight.id,
            from: oldFlight.from,
            to: oldFlight.to,
            date: newFlightDate.toISOString()
        }
        */
        let newFlight: Flight = 
                Object.assign(
                        {}, 
                        oldFlight, 
                        {date: newFlightDate.toISOString()});

        let newFlights = [
            newFlight,
            ...oldFlights.slice(1)
        ];

        this.flights = newFlights;
        this.flight$.next(newFlights);
    }

    find(from: string, to: string) {

        return new Promise((resolve, reject) => { 
            
            let url = this.baseUrl + "/flight";

            let search = new URLSearchParams();
            search.set('from', from);
            search.set('to', to);

            let headers = new Headers();
            headers.set('Accept', 'application/json');
            headers.set('Authorization', 'Bearer ' +  this.oauthService.getAccessToken())

            this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json())
                .subscribe(
                    (flights: Flight[]) => {
                        this.flights = flights;
                        this.flight$.next(flights);
                        resolve(flights);
                    },
                    (err) => {
                        console.error('Fehler beim Laden', err);
                        reject(err);
                        // Redirect auf login bei 401 oder 403
                    }
                );

            });
    }


    findById(id: string): Observable<Flight> {

        let url = this.baseUrl + "/flight";

        let search = new URLSearchParams();
        search.set('id', id);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json());
    }


    save(flight: Flight): Observable<Flight> {

        let url = this.baseUrl + "/flight";

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
            .http
            .post(url, flight,{ headers })
            .map(resp => resp.json());
    }


}