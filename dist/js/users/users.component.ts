import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})

export class UsersComponent {
	constructor(private router: Router){}

	gotoContacts(){
		this.router.navigate(['/contacts']);
	}
}