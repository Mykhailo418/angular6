import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const NORMAL_STATE = 'normal';
const HIGHLIGHTED_STATE = 'highkighted';
const SHRINK_STATE = 'shrink';

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
    ]),
    trigger('wildState', [
      state(NORMAL_STATE, style({
        'background-color': 'black',
        transform: 'translateX(0) scale(1)'
      }) ),
      state(HIGHLIGHTED_STATE, style({
        'background-color': 'red',
        transform: 'translateX(100px) scale(1)'
      }) ),
      state(SHRINK_STATE, style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      }) ),
      transition(`${NORMAL_STATE} <=> ${HIGHLIGHTED_STATE}`, animate(300)),
      transition(`${SHRINK_STATE} <=> *`, [
				style({
					'background-color': 'orange'
				}),
				animate(1000, style({
					borderRadius: '50px'
				}) ),
				animate(500)
			] ),
    ]),
		trigger('addingItem', [
      transition(`void => *`, [
				style({
				  transform: 'translateY(-100px)'
				}),
				animate(300)
			]),
			transition(`* => void`, [
				style({
					position:'static',
				  'z-index': -1
				}),
				animate(300, style({
					opacity: 0,
				  transform: 'translateY(-100px)',
				}) )

			])
    ]),
  ]
})
export class AnimationPageComponent {
  state: string = NORMAL_STATE;
  wildState: string = NORMAL_STATE;
	list: string[] = ['item 1', 'item 2', 'item 3'];
	constructor(){}

  onAnimate(){
    this.state = (this.state === NORMAL_STATE) ? HIGHLIGHTED_STATE : NORMAL_STATE;
    this.wildState = (this.wildState === NORMAL_STATE) ? HIGHLIGHTED_STATE : NORMAL_STATE;
  }

  onShrink(){
    this.wildState = (this.wildState !== SHRINK_STATE) ? SHRINK_STATE : NORMAL_STATE;
  }

	addItem(value: string){
		this.list.push(value);
	}

	onDelete(index: number){
		this.list.splice(index, 1);
	}
}
