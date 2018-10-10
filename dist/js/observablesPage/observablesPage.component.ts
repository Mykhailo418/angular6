import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx'

@Component({
  selector: 'observables-page',
  templateUrl: './observablesPage.component.html',
})

export class ObservablesPageComponent {
  second: Number;
  myObserverValue: String;
  secondsSubscription: Subscription;
  myObserverSubscription: Subscription;

	constructor(){}

  ngOnInit() {
    const seconds = Observable.interval(1000);
    this.secondsSubscription = seconds.subscribe((second: Number) => {
      console.log(second);
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
     this.myObserverSubscription = myObserver.subscribe((data: string) => {
       this.myObserverValue = data;
     }, (error: string) => {
       this.myObserverValue = 'Errorr: ' + error;
     }, () => {
       this.myObserverValue = 'myObserver is completed';
     });
  }

  ngOnDestroy(){
    this.secondsSubscription.unsubscribe();
    this.myObserverSubscription.unsubscribe();
  }
}
