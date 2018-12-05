// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class CoreModule {
}
