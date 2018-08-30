import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { QueryParamsComponent } from './queryParams/queryParams.component';
import { NotFoundComponent } from './notFound/notFound.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'users', component: UsersComponent,  children: [
			{path: ':id', component: UserComponent},
	]},
	{path: 'contacts', component: ContactsComponent},
	{path: 'queryparams', component: QueryParamsComponent},
	{path: '404', component: NotFoundComponent},
	{path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
