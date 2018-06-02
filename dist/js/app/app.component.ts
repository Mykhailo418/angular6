import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
})

export class AppComponent {
	title = 'angular';
	name = '';
	newMessage: Object = {msg: ''};
	textForContentSection: String = 'Content For Content Section!';

	onNewMessage(event: Object){
		this.newMessage = event;
	}
}