import { Component } from '@angular/core';

@Component({
  selector: 'custom-element-timer',
  templateUrl: './timer.component.html',
})

export class CustomElementTimerComponent {
  date = new Date();
}
