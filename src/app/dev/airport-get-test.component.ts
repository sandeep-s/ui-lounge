import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AirportGetTestService {
    constructor (private _http: Http) {}

    getAirportDetails() {
        return this._http.get('http://localhost:8090/airports')
            .map(res => res.json());
    }
}