import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})

export class HomeComponent {
	title = 'angular';
	name = '';
	textForContentSection: String = 'Content For Content Section!';
	
	constructor(){}
}