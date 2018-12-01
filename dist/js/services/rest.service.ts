import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs';

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

    updateDate(data: any[]){
      return this.http.put(this.firebaseUrl + 'data.json', data);
    }

    getData(){
      return this.http.get(this.firebaseUrl + 'data.json').map((res: Response) => {
          const data = res.json();
          return data;
      });
    }
}
