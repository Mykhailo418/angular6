import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-view-container-child',
	templateUrl: './viewContChild.component.html'
})

export class AppViewContainerChildExample  {
  @Input() name: string;
	constructor(){}
}
