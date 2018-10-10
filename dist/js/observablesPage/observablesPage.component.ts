import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx'

@Component({
  selector: 'observables-page',
  templateUrl: './observablesPage.component.html',
})

export class ObservablesPageComponent {
  second: Number;
  myObserverValue: String;

	constructor(){}

  ngOnInit() {
    const seconds = Observable.interval(1000);
    seconds.subscribe((second: Number) => {
      this.second = second;
    });

     const myObserver = Observable.create((observer: Observer<string>) => {
       setTimeout(() => {
         observer.next('First data');
       }, 2000);
       setTimeout(() => {
         observer.next('Second data');
       }, 4000);
       // setTimeout(() => {
       //   observer.error('Failed');
       // }, 5000);
       setTimeout(() => {
         observer.complete();
       }, 6000);
     });
     myObserver.subscribe((data: string) => {
       this.myObserverValue = data;
     }, (error: string) => {
       this.myObserverValue = 'Errorr: ' + error;
     }, () => {
       this.myObserverValue = 'myObserver is completed';
     });
  }
}
