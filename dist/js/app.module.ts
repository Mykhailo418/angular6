// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
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
import { EditingPageComponent } from './editingPage/editing.component';
import { ErrorPage } from './errorPage/errorPage.component';
import { ObservablesPageComponent } from './observablesPage/observablesPage.component';
import { FormsPageComponent } from './formsPage/forms.component';
import { ReactiveFormComponent } from './formsPage/reactiveForms.component';
import { PipesPageComponent } from './pipesPage/pipes.component';

// Directives
import { GreenTextDirective } from './directives/GreenText.directive';
import { AppUnlessDirective } from './directives/AppUnless.directive';

// Services
import { AuthGuard } from './services/auth/AuthGuard';
import { AuthService } from './services/auth/AuthService';
import { CanDeactivateGuard } from './services/auth/CanDeactivateGuard';
import { UserResolveService } from './services/user-resolve.service';

// Pipes
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [AppComponent, MenuComponent, CustomComponent, GreenTextDirective, AppUnlessDirective,
		ListComponent, UsersComponent, UserComponent, HomeComponent, ContactsComponent, QueryParamsComponent,
    NotFoundComponent, EditingPageComponent, ErrorPage, ObservablesPageComponent, FormsPageComponent, ReactiveFormComponent,
    PipesPageComponent, ShortenPipe],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, CanDeactivateGuard, UserResolveService]
})
export class AppModule {
}
