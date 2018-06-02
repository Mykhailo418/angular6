import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html'
})

export class MenuComponent {
	@Output('newMessage') sendMessage = new EventEmitter<{msg: String}>();

	onSendMessage(e: Event){
		e.preventDefault();
		this.sendMessage.emit({
			msg: 'Random number is ' + Math.round(Math.random() * 1000)
		});
	}
}