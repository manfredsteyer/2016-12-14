
import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {

    transform(value: any, fmt: string): any {

        // fmt: short, long
        let short, long;

        switch(value) {
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz Thalerhof"
                break;
            case "Hamburg":
                short = "HAM";
                long = "Airport Hamburg Fulsbüttel Helmut Schmidt"
                break;
            case "Salzburg":
                short = "SZG";
                long = "Flughafen Salzburg W. A. Mozard";
                break;
            default:
                short = long = "ROM";
        }

        if (fmt == 'short') return short;
        return long;
    }

}