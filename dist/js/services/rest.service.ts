import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders,  HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class RestService{
    firebaseUrl: String = 'https://angular-90284.firebaseio.com/';
    constructor(private http: HttpClient){}

    saveDate(data: any[]){
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers = headers.append('Accept','application/json');
      return this.http.post(this.firebaseUrl + 'data.json', data, {headers});
    }

    updateDate(data: any[]){
      return this.http.put(this.firebaseUrl + 'data.json', data);
    }

    updateDateWithEvents(data: any[]){
      return this.http.put(this.firebaseUrl + 'data.json', data, {observe: 'events'});
    }

    updateDataWithRequest(data: any[]){
      const req = new HttpRequest('PUT', this.firebaseUrl + 'data.json', data, {
        reportProgress: true // in order to receive progress events data
      });
      return this.http.request(req);
    }

    getData(){
      const params = new HttpParams().set('param1', '123').append('param2', '123');
      return this.http.get(this.firebaseUrl + 'data.json', {
        observe: 'response', // get whole response
        responseType: 'text', // get response in text format(usually it is in json), if set to 'json' will receive standart object. 'json' is default
        params: params
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
