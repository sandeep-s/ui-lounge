import {Component}  from 'angular2/core';
import {HTTPTestService} from './http-test.service';

@Component({
  selector:'http-test',
  template:`
    <button (click)="onGet()">Get Aiport Details</button><br/>
    <div>Output:{{getAirportDetails}}</div><br/>   
  `,
  providers:[HTTPTestService]
})

export class HTTPTestComponent {
  getAirportDetails:string;
  
  constructor(private _httpService:HTTPTestService){}

  onGet(){
    console.log('Getting details now.');
    this._httpService.getAirportDetails().subscribe(
      data =>this.getAirportDetails = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Get')
    );
  }
}