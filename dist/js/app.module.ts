// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { NgrxPageComponent } from './ngrx/page/ngrxPage.component';

// Directives
import { AppUnlessDirective } from './directives/AppUnless.directive';

// Pipes
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

// Interceptors
import { CommonInterceptor } from './services/common.interceptor';
import { IncomingRequestInterceptor } from './services/incomingReq.interceptor';

// Reducers
import {reducers} from './ngrx/store.reducer';
import {CommonEffects} from './ngrx/common.effects';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, SharedModule, CoreModule,
    StoreModule.forRoot(reducers), EffectsModule.forRoot([CommonEffects]),StoreRouterConnectingModule, StoreDevtoolsModule.instrument()],
  declarations: [AppComponent, CustomComponent, AppUnlessDirective,
		ListComponent, HomeComponent, ContactsComponent, QueryParamsComponent,
    NotFoundComponent, EditingPageComponent, ErrorPage, ObservablesPageComponent, FormsPageComponent, ReactiveFormComponent,
    PipesPageComponent, ShortenPipe, FilterPipe, HttpPageComponent, NgrxPageComponent],
  bootstrap: [AppComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: IncomingRequestInterceptor, multi: true}
  ]
})
export class AppModule {
}
