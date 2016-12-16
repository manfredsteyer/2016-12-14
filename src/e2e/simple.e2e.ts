import { browser, by, element } from 'protractor';

describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should load page and read title', function() {

          let expectedTitle = 'FlightApp';
          let actualTitle = browser.getTitle();
          expect(actualTitle).toBe(expectedTitle);
 
    });
});
