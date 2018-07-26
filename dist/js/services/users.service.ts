import { Injectable } from '@angular/core';
import UserModel from '../users/user.model';

@Injectable({
  providedIn: 'root',
})
export default class UsersService{
	private users: UserModel[] = [
		new UserModel(1, 'Vasya', 23),
		new UserModel(2, 'Petya', 21)
	];

	constructor(){
	}

	getAllUsers(){
		return this.users.slice();
	}

	getUserById(id:number){
		for(let user of this.users){
			if(user.id == id){
				return user;
			}
		}
	}
}