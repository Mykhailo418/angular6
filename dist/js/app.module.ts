// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

// Components
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { CustomComponent } from './custom/custom.component';
import { ListComponent } from './list/list.component';
import { ContactsComponent } from './contacts/contacts.component';

// Directives
import { GreenTextDirective } from './directives/GreenText.directive';
import { AppUnlessDirective } from './directives/AppUnless.directive';

// Routes
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'users', component: UsersComponent},
	{path: 'users/:id', component: UsersComponent},
	{path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, MenuComponent, CustomComponent, GreenTextDirective, AppUnlessDirective, ListComponent, UsersComponent, HomeComponent, ContactsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}