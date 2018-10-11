import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ListService } from '../services/list.service';
import AccountService from '../services/account.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit, OnDestroy {
	currentNum: Number;
	accountActevated: Boolean;
	@Output('newMessage') sendMessage = new EventEmitter<{msg: String}>();

	constructor(private listService: ListService, private accountService: AccountService){}

	onSendMessage(e: Event){
		e.preventDefault();
		this.sendMessage.emit({
			msg: 'Random number is ' + Math.round(Math.random() * 1000)
		});
	}

	ngOnInit(){
		this.listService.setNumber.subscribe((num: Number)=>{
			this.currentNum = num;
		});
		this.accountService.accountActivated.subscribe((isActevated: Boolean) => {
			this.accountActevated = isActevated;
		})
	}

	ngOnDestroy(){
		this.accountService.accountActivated.unsubscribe();
	}
}
