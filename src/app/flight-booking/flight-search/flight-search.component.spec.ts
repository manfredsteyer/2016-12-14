import { FlightEventService } from './../../eventing/flight-event.service';
import { AppModule } from './../../app.module';
import { BASE_URL } from './../../app.constants';
import { Flight } from './../../entities/flight';
import {
    inject,
    async,
    fakeAsync,
    tick,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs';
import {FlightSearchComponent} from "./flight-search.component";
import {FlightService} from "../service/flight.service";
import {SharedModule} from "../../shared/shared.module";

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {FlightCardComponent} from "./flight-card.component";
import {CityPipe} from "../../shared/pipes/city.pipe";
import {FlightBookingModule} from "../flight-booking.module";


class FlightServiceMock {
    findById(id) { return null; }
    find(von, nach) {
        var result = [{ id: 1, from: 'Graz', to: 'Hamburg', date: '2017-01-01' }];
        //return Observable.from([result]);
        return Promise.resolve(result);
    }
    save(flug) { return null; }
}


describe('FlugSuchen', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule, FlightBookingModule, SharedModule.forRoot()],
            declarations: [],
            providers: [
                {provide: FlightService, useClass: FlightServiceMock},
                {provide: BASE_URL, useValue: ''}
            ]
        });

        // 'compile' wird beim Einsatz von webpack inkl. template-loader nicht benötigt
        // TestBed.compileComponents();
    });

    it('should have no selected flight initially', () => {
        var flightSearch = TestBed.createComponent(FlightSearchComponent);
        expect(flightSearch.componentInstance.selectedFlight).toBeUndefined();
    });

    it('should not load flights', async(() => {

        TestBed
            .overrideComponent(
                FlightSearchComponent, 
                { set: { providers:[ {provide: FlightService, useClass: FlightServiceMock} ] }})

                var flightSearch = TestBed.createComponent(FlightSearchComponent);


                flightSearch.componentInstance.from = "Graz";
                flightSearch.componentInstance.to = "";

                let ok = true;

                flightSearch.componentInstance.search()
                    .catch(_ => {
                        ok = false;    
                    })
                    .then(_ => {
                        expect(ok).toBe(false);
                    })

    }));

    it('should load flights', async(() => {

        TestBed
            .overrideComponent(FlightSearchComponent, { set: { providers:[ {provide: FlightService, useClass: FlightServiceMock} ] }})

            var flightSearch = TestBed.createComponent(FlightSearchComponent);

            flightSearch.componentInstance.from = "Graz";
            flightSearch.componentInstance.to = "Hamburg";

            flightSearch.componentInstance.search().then((fluege: Flight[]) => {
                expect(fluege.length).toEqual(1);
            });

    }));

});