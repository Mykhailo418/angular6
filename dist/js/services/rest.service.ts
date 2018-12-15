import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class RestService{
    firebaseUrl: String = 'https://angular-90284.firebaseio.com/';
    constructor(private http: HttpClient){}

    saveDate(data: any[]){
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.firebaseUrl + 'data.json', data);
    }

    updateDate(data: any[]){
      return this.http.put(this.firebaseUrl + 'data.json', data);
    }

    getData(){
      return this.http.get(this.firebaseUrl + 'data.json', {
        observe: 'response', // get whole response
        responseType: 'text' // get response in text format(usually it is in json)
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
