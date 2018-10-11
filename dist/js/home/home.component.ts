import { Component } from '@angular/core';
import AccountService from '../services/account.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})

export class HomeComponent {
	title = 'angular';
	name = '';
	textForContentSection: String = 'Content For Content Section!';

	constructor(private accountService: AccountService){}

	onActivateDeactivate(value: Boolean){
		this.accountService.accountActivated.next(value)
	}
}
