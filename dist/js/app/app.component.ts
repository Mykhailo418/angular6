import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
})

export class AppComponent {
	newMessage: Object = {msg: ''};

	onNewMessage(event: Object){
		this.newMessage = event;
	}
}