import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
	currentNum: Number;
	@Output('newMessage') sendMessage = new EventEmitter<{msg: String}>();

	constructor(private listService: ListService){}

	onSendMessage(e: Event){
		e.preventDefault();
		this.sendMessage.emit({
			msg: 'Random number is ' + Math.round(Math.random() * 1000)
		});
	}

	ngOnInit(){
		this.listService.setNumber.subscribe((num: Number)=>{
			this.currentNum = num;
		})
	}
}