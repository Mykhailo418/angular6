import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import UsersService from '../services/users.service';
import UserModel from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent {
	currentUser: UserModel;

	constructor(private router: Router, private route: ActivatedRoute,
		private usersService: UsersService){}

	private setCurrentUser(params: Params){
		if(params.id){
			this.currentUser = this.usersService.getUserById(params.id);
		}
	}

	ngOnInit(){
		// this.setCurrentUser(this.route.snapshot.params);
		// this.route.params.subscribe((params: Params) => {
		// 	this.setCurrentUser(params);
		// });

    // -- Using resolver to get User
    this.route.data.subscribe((data: Data)=>{
      this.currentUser = data.userData.user;
    });
	}

}
