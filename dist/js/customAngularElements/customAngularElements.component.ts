import { Component, OnInit, Injector, OnDestroy} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {CustomElementTimerComponent} from './timer/timer.component';

@Component({
  selector: 'custom-ang-elements',
  templateUrl: './customAngularElements.component.html',
})

export class CustomAngularElementsPageComponent implements OnInit,OnDestroy {
  content: SafeHtml;
  interval: number;
  timerName = 'my-timer';
  constructor(private injector: Injector, private domSanitizer: DomSanitizer){

  }

  ngOnInit(){
    if(!customElements.get(this.timerName)){
      const TimerElement = createCustomElement(CustomElementTimerComponent, {injector: this.injector});
      customElements.define(this.timerName, TimerElement);
    }
    this.interval = setInterval(() => {
      this.content = this.domSanitizer.bypassSecurityTrustHtml('<my-timer></my-timer>');
    },1000);
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }
}
