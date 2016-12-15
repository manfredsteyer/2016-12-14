import { OAuthService } from 'angular2-oauth2/oauth-service';
import {Component} from "@angular/core";

@Component({
    template: `
        <h1 *ngIf="givenName">Willkommen, {{ givenName }}!</h1>
        <h1 *ngIf="!givenName">Willkommen!</h1>

        <button (click)="login()" class="btn btn-default">Login</button>
        <button (click)="logout()" class="btn btn-default">Logout</button>
    `
})
export class HomeComponent {
    info = "Home"

    constructor(private oauthService: OAuthService) {
    }

    login() {
        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get givenName() {

        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;

        console.debug('claims', claims);
        return claims.given_name;

    }

}