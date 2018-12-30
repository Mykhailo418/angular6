// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

// Custom Modules
import { AppRoutingUsersModule } from './app-routing-users.module';
import { SharedModule } from '../shared.module';

// Components
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';

const usersReducer = {}; // just for demo purpose
// For actions that related to Lasy loaded modules, need to extends interfaces from main interfaces
// Example:
// export interface usersSate extends appState{
//  usersItems: ...
// }

@NgModule({
  imports: [CommonModule, AppRoutingUsersModule, SharedModule, StoreModule.forFeature('users', usersReducer)],
  declarations: [UsersComponent, UserComponent]
})
export class AppUsersModule {
}
