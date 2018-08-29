import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import UsersService from '../services/users.service';
import UserModel from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})

export class UsersComponent {
	usersList: UserModel[];
	currentUser: UserModel;

	constructor(private router: Router, private route: ActivatedRoute,
		private usersService: UsersService){}

	gotoContacts(){
		this.router.navigate(['/contacts']);
	}

	notWorkingReload(){
		this.router.navigate(['users'], {
			relativeTo: this.route // relative to which component navigate, by default it navigtes from root /
		});
	}

	private setCurrentUser(params: Params){
		if(params.id){
			this.currentUser = this.usersService.getUserById(params.id);
		}
	}

	ngOnInit(){
		this.usersList = this.usersService.getAllUsers();
		this.setCurrentUser(this.route.snapshot.params);
		this.route.params.subscribe((params: Params) => {
			this.setCurrentUser(params);
		});
	}

}
