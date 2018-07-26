import { Component } from '@angular/core';
import { Router, ActivateRoute } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})

export class UsersComponent {
	constructor(private router: Router, private route: ActivateRoute){}

	gotoContacts(){
		this.router.navigate(['/contacts']);
	}

	notWorkingReload(){
		this.router.navigate(['users'], {
			relativeTo: this.route // relative to which component navigate, by default it navigtes from root /
		});
	}
}