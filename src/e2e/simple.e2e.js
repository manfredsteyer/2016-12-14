"use strict";
var protractor_1 = require('protractor');
describe("FlugApp", function () {
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should load page and read title', function () {
        var expectedTitle = 'FlightApp';
        var actualTitle = protractor_1.browser.getTitle();
        expect(actualTitle).toBe(expectedTitle);
    });
});
//# sourceMappingURL=simple.e2e.js.map