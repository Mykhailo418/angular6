import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

@Injectable({
  providedIn: 'root',
})
export default class RestService{
    firebaseUrl: String = 'https://angular-90284.firebaseio.com/';
    constructor(private http: Http){}

    saveDate(data: any[]){
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.firebaseUrl + 'data.json', data, {headers});
    }
}
