import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class RestService{
    firebaseUrl: String = 'https://angular-90284.firebaseio.com/';
    constructor(private http: HttpClient){}

    saveDate(data: any[]){
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers.append('Accept','application/json');
      return this.http.post(this.firebaseUrl + 'data.json', data, {headers});
    }

    updateDate(data: any[]){
      return this.http.put(this.firebaseUrl + 'data.json', data);
    }

    updateDateWithEvents(data: any[]){
      return this.http.put(this.firebaseUrl + 'data.json', data, {observe: 'events'});
    }

    getData(){
      return this.http.get(this.firebaseUrl + 'data.json', {
        observe: 'response', // get whole response
        responseType: 'text' // get response in text format(usually it is in json), if set to 'json' will receive standart object. 'json' is default
      }).map((res: any) => {
          console.log('data.json - response = ',res);
          const data = JSON.parse(res.body);
          return data;
      });
    }

    errorUrl(){
      return this.http.get(this.firebaseUrl + 'data').catch((error: any) => {
        return Observable.throw('Wrong Url');
      });
    }
}
