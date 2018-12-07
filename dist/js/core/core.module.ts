// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { MenuComponent } from './menu/menu.component';

// Services
import { AuthGuard } from '../services/auth/AuthGuard';
import { AuthService } from '../services/auth/AuthService';
import { CanDeactivateGuard } from '../services/auth/CanDeactivateGuard';
import { UserResolveService } from '../services/user-resolve.service';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [AuthService, AuthGuard, CanDeactivateGuard, UserResolveService]
})
export class CoreModule {
}
