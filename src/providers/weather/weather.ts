//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey :'be6ed582b42068f5';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/be6ed582b42068f5/conditions/q';
    }

    getWeather(city ,state) {
      return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map((res: Response) => res.json() );
    }

}
