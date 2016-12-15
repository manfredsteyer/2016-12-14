import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from "@angular/core";
import {Flight} from "../../entities/flight";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent {
    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter<Flight>();

    select() {
        this.selectedItemChange.next(this.item);
    }
}