// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

// Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
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
import { HttpPageComponent } from './httpRequests/httpPage.component';

import { AppUnlessDirective } from './directives/AppUnless.directive';

// Pipes
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpModule, SharedModule, CoreModule],
  declarations: [AppComponent, CustomComponent, AppUnlessDirective,
		ListComponent, HomeComponent, ContactsComponent, QueryParamsComponent,
    NotFoundComponent, EditingPageComponent, ErrorPage, ObservablesPageComponent, FormsPageComponent, ReactiveFormComponent,
    PipesPageComponent, ShortenPipe, FilterPipe, HttpPageComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
