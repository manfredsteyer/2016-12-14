import { Injectable } from '@angular/core';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private oauthService: OAuthService) {

    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):  boolean {
        
        /*
        let ok = this.oauthService.hasValidAccessToken() && 
                     this.oauthService.hasValidIdToken();
        */
        return true;

    }

}