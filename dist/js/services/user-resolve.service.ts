import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import UserModel from '../users/user.model';
import UsersService from './users.service';

interface Output {
  user: UserModel
}

@Injectable()
export class UserResolveService implements Resolve<Output>{
    constructor(private userService: UsersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Output> | Promise<Output> | Output{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({
                user: this.userService.getUserById(+route.params.id)
              });
            },1000);
        })
    }
}
