"use strict";
var oauth_service_1 = require('angular2-oauth2/oauth-service');
var custom_preloading_strategy_1 = require('./preload/custom-preloading-strategy');
var can_deactivate_guard_1 = require('./guards/can-deactivate.guard');
var auth_guard_1 = require('./guards/auth.guard');
var city_pipe_1 = require('./pipes/city.pipe');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                city_pipe_1.CityPipe
            ],
            providers: [
                oauth_service_1.OAuthService,
                auth_guard_1.AuthGuard,
                can_deactivate_guard_1.CanDeactivateGuard,
                custom_preloading_strategy_1.CustomPreloadingStrategy
            ],
            exports: [
                city_pipe_1.CityPipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map