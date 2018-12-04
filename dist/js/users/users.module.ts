// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { AppRoutingUsersModule } from './app-routing-users.module';
import { SharedModule } from '../shared.module';

// Components
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';

@NgModule({
  imports: [CommonModule, AppRoutingUsersModule, SharedModule],
  declarations: [UsersComponent, UserComponent]
})
export class AppUsersModule {
}
