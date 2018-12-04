import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';

// Services
import { AuthGuard } from '../services/auth/AuthGuard';
import { CanDeactivateGuard } from '../services/auth/CanDeactivateGuard';
import { UserResolveService } from '../services/user-resolve.service';

const appRoutes: Routes = [
	{path: '',
			//canActivate: [AuthGuard],
			//canActivateChild: [AuthGuard],
			component: UsersComponent,
			children: [
					{path: ':id', component: UserComponent, resolve: {userData: UserResolveService}},
			]
	},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingUsersModule {
}
