import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean> | boolean{
    return this.authService.isAuthenticted().then((isAuth: boolean) => {
      if(isAuth){ return true; }
      alert('You are not logged in');
      this.router.navigate(['/']);
      return false;
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | Promise<boolean> | boolean{
    return this.canActivate(route, state);
  }
}
