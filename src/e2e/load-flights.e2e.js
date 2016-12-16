"use strict";
var protractor_1 = require('protractor');
describe("FlugApp", function () {
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should load page and read title', function () {
        var link = protractor_1.element(protractor_1.by.linkText("Flight Booking"));
        link.click();
        var vonFilter = protractor_1.element(protractor_1.by.name("from"));
        var nachFilter = protractor_1.element(protractor_1.by.name("to"));
        var suchen = protractor_1.element(protractor_1.by.css("button")); // <input type="button"
        // <button>
        vonFilter.clear();
        nachFilter.clear();
        vonFilter.sendKeys("Hamburg");
        nachFilter.sendKeys("Graz");
        suchen.click();
        // browser.sleep(4000);
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'info.png');
        });
        var cards = protractor_1.element.all(protractor_1.by.tagName("flight-card"));
        var first = cards.first();
        //cards.get(1);
        //cards.get(2);
        var h2 = first.element(protractor_1.by.tagName('h2'));
        expect(cards.count()).toBe(3);
        expect(h2.getText()).toMatch(/Hamburg/);
    });
    function writeScreenShot(data, filename) {
        var fs = require("fs");
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
});
//# sourceMappingURL=load-flights.e2e.js.map