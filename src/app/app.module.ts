import { FlightEventService } from './eventing/flight-event.service';
import { SharedModule } from './shared/shared.module';
import { FlightHistoryComponent } from './flight-history/flight-history.component';
// import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { PassengerEditComponent } from './flight-booking/passenger-edit/passenger-edit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {FlightService} from "./flight-booking/service/flight.service";
import { BASE_URL} from './app.constants';
import {CityPipe} from "./shared/pipes/city.pipe";
import {FlightCardComponent} from "./flight-booking/flight-search/flight-card.component";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,  
    HttpModule,   
    AppRouterModule,
    SharedModule
    //FlightBookingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FlightHistoryComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: "http://www.angular.at/api"},
    FlightEventService
  ],
  bootstrap: [        
     AppComponent 
  ]
})
export class AppModule {
}

