import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const NORMAL_STATE = 'normal';
const HIGHLIGHTED_STATE = 'highkighted';

@Component({
	selector: 'animation-pagr',
	templateUrl: './animationPage.component.html',
  animations: [
    trigger('divState', [
      state(NORMAL_STATE, style({
        'background-color': 'black',
        transform: 'translateX(0)'
      }) ),
      state(HIGHLIGHTED_STATE, style({
        'background-color': 'red',
        transform: 'translateX(100px)'
      }) ),
      transition(`${NORMAL_STATE} <=> ${HIGHLIGHTED_STATE}`, animate(300)),
      //transition(`${HIGHLIGHTED_STATE} => ${NORMAL_STATE}`, animate(800)),
    ])
  ]
})
export class AnimationPageComponent {
  state: string = NORMAL_STATE;

	constructor(){}

  onAnimate(){
    this.state = (this.state === NORMAL_STATE) ? HIGHLIGHTED_STATE : NORMAL_STATE;
  }
}
