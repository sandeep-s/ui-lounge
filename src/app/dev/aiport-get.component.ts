import {Component} from 'angular2/core';
import {AirportGetTestService} from "./airport-get-test.component";

@Component({
    selector: 'airport-get',
    template: `
    <button (click)="ocClickGet()">
        Get Airport Details
    </button>
    <br>
    <p>
        {{ getAirportDetails }}
    </p>
    `,
    providers : [AirportGetTestService]
})

export class AirportGetComponent {
    getAirportDetails: string;

    constructor (private _airportGetService : AirportGetTestService) {

    }

    onClickGet(){
        this._airportGetService.getAirportDetails()
            .subscribe(
                data => this.getAirportDetails = JSON.stringify(data),
                    error => alert(error),
                        () => console.log("Request Processing Successfully Completed")
            );
    }
}