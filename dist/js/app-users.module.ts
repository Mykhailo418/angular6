// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { AppRoutingUsersModule } from './app-routing-users.module';

// Components
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';

@NgModule({
  imports: [CommonModule, AppRoutingUsersModule],
  declarations: [UsersComponent, UserComponent]
})
export class AppUsersModule {
}
