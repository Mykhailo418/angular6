import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx'

@Component({
  selector: 'observables-page',
  templateUrl: './observablesPage.component.html',
})

export class ObservablesPageComponent {
  second: Number;

	constructor(){}

  ngOnInit() {
    const seconds = Observable.interval(1000);
    seconds.subscribe((second: Number) => {
      this.second = second;
    });
  }
}
