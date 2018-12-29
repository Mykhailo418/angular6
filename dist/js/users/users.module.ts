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

@NgModule({
  imports: [CommonModule, AppRoutingUsersModule, SharedModule, StoreModule.forFeature('users', usersReducer)],
  declarations: [UsersComponent, UserComponent]
})
export class AppUsersModule {
}
