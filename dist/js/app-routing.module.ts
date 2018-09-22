import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { QueryParamsComponent } from './queryParams/queryParams.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { EditingPageComponent } from './editingPage/editing.component';
import { ErrorPage } from './errorPage/errorPage.component';

// Services
import { AuthGuard } from './services/auth/AuthGuard';
import { CanDeactivateGuard } from './services/auth/CanDeactivateGuard';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'users',
			//canActivate: [AuthGuard],
			canActivateChild: [AuthGuard],
			component: UsersComponent,
			children: [
					{path: ':id', component: UserComponent},
			]
	},
	{path: 'contacts', component: ContactsComponent},
	{path: 'queryparams', component: QueryParamsComponent},
	{path: '500', component: ErrorPage, data: { msg: 'Error 500: Server Error' }},
	{path: '501', component: ErrorPage, data: { msg: 'Error 501: Not Implemented' }},
	{path: '404', component: NotFoundComponent},
	{path: 'editing-page', canDeactivate: [CanDeactivateGuard], component: EditingPageComponent},
	{path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
