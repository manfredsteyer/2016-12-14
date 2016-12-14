import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    template: `
        <h1>PassengerEditComponent</h1>
        <p>Platzhalter für Edit-Formular für Passagier {{id}}</p>
    `
})
export class PassengerEditComponent {

    id: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];            
        });
    }

}