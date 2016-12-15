import { OAuthService } from 'angular2-oauth2/oauth-service';
import { CustomPreloadingStrategy } from './preload/custom-preloading-strategy';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { AuthGuard } from './guards/auth.guard';
import { CityPipe } from './pipes/city.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule
    ],
    declarations: [
        CityPipe
    ],
    providers: [
        OAuthService,
        AuthGuard,
        CanDeactivateGuard,
        CustomPreloadingStrategy
    ],
    exports: [
        CityPipe
    ]
})
export class SharedModule {

}