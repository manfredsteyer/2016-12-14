"use strict";
var oauth_service_1 = require('angular2-oauth2/oauth-service');
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent(oauthService) {
        this.oauthService = oauthService;
        this.info = "Home";
    }
    HomeComponent.prototype.login = function () {
        this.oauthService.initImplicitFlow();
    };
    HomeComponent.prototype.logout = function () {
        this.oauthService.logOut();
    };
    Object.defineProperty(HomeComponent.prototype, "givenName", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims)
                return null;
            console.debug('claims', claims);
            return claims.given_name;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n        <h1 *ngIf=\"givenName\">Willkommen, {{ givenName }}!</h1>\n        <h1 *ngIf=\"!givenName\">Willkommen!</h1>\n\n        <button (click)=\"login()\" class=\"btn btn-default\">Login</button>\n        <button (click)=\"logout()\" class=\"btn btn-default\">Logout</button>\n    "
        }), 
        __metadata('design:paramtypes', [oauth_service_1.OAuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map