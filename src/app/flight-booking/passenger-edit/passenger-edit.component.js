"use strict";
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var PassengerEditComponent = (function () {
    function PassengerEditComponent(route) {
        this.route = route;
    }
    PassengerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
    };
    PassengerEditComponent = __decorate([
        core_1.Component({
            template: "\n        <h1>PassengerEditComponent</h1>\n        <p>Platzhalter f\u00FCr Edit-Formular f\u00FCr Passagier {{id}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], PassengerEditComponent);
    return PassengerEditComponent;
}());
exports.PassengerEditComponent = PassengerEditComponent;
//# sourceMappingURL=passenger-edit.component.js.map