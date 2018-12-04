import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { QueryParamsComponent } from './queryParams/queryParams.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { EditingPageComponent } from './editingPage/editing.component';
import { ErrorPage } from './errorPage/errorPage.component';
import { ObservablesPageComponent } from './observablesPage/observablesPage.component';
import { FormsPageComponent } from './formsPage/forms.component';
import { PipesPageComponent } from './pipesPage/pipes.component';
import { HttpPageComponent } from './httpRequests/httpPage.component';

// Services
import { AuthGuard } from './services/auth/AuthGuard';
import { CanDeactivateGuard } from './services/auth/CanDeactivateGuard';

const directPath = './users';

const appRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'contacts', component: ContactsComponent},
	{path: 'queryparams', component: QueryParamsComponent},
	{path: 'observables', component: ObservablesPageComponent},
	{path: 'forms', component: FormsPageComponent},
	{path: 'pipes', component: PipesPageComponent},
	{path: 'http-page', component: HttpPageComponent},
	{path: 'users', loadChildren: '../dist/js/users/users.module#AppUsersModule'}, //TODO: can not find module
	{path: '500', component: ErrorPage, data: { msg: 'Error 500: Server Error' }},
	{path: '501', component: ErrorPage, data: { msg: 'Error 501: Not Implemented' }},
	{path: '404', component: NotFoundComponent},
	{path: 'editing-page', canDeactivate: [CanDeactivateGuard], component: EditingPageComponent},
	{path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
