"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
require('style-loader!bootstrap/dist/css/bootstrap.css');
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.browser.js.map