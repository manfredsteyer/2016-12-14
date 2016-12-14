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
    exports: [
        CityPipe
    ]
})
export class SharedModule {

}