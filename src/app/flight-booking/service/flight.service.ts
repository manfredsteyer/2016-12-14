import {Http, URLSearchParams, Headers} from "@angular/http";
import {Injectable, Inject} from "@angular/core";
import {Observable} from "rxjs";
    // Reactive Extensions for JS
import {Flight} from "../../entities/flight";
import { BASE_URL } from '../../app.constants';

@Injectable()
export class FlightService {

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string) {
    }

    find(from: string, to: string): Observable<Flight[]> {

        let url = this.baseUrl + "/flight";

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json());
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