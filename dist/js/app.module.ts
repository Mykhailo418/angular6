// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';
import { MenuComponent } from './menu/menu.component';
import { CustomComponent } from './custom/custom.component';
import { ListComponent } from './list/list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { QueryParamsComponent } from './queryParams/queryParams.component';
import { NotFoundComponent } from './notFound/notFound.component';

// Directives
import { GreenTextDirective } from './directives/GreenText.directive';
import { AppUnlessDirective } from './directives/AppUnless.directive';

// Services
import { AuthGuard } from './services/auth/AuthGuard';
import { AuthService } from './services/auth/AuthService';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, MenuComponent, CustomComponent, GreenTextDirective, AppUnlessDirective,
		ListComponent, UsersComponent, UserComponent, HomeComponent, ContactsComponent, QueryParamsComponent, NotFoundComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard]
})
export class AppModule {
}
