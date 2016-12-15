"use strict";
var core_1 = require('@angular/core');
var oauth_service_1 = require('angular2-oauth2/oauth-service');
var AuthGuard = (function () {
    function AuthGuard(oauthService) {
        this.oauthService = oauthService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        //let ok = this.oauthService.hasValidAccessToken() && 
        //             this.oauthService.hasValidIdToken();
        return true;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [oauth_service_1.OAuthService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map