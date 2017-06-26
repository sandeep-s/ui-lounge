import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPTestService{
  constructor(private _http:Http){}
    getAirportDetails(){
      return this._http.get("http://localhost:8090/airports")
      .map(res=>res.json());
    };    

    /*getUsersByPromise(){
      return this._http.get("http://localhost:8090/airports")
      .toPromise()
      .then(res=>res.json());
    }*/
}
