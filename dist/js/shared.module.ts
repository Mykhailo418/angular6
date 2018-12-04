// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { GreenTextDirective } from './directives/GreenText.directive';


@NgModule({
  declarations: [
    GreenTextDirective
    // place here directive or something else to share with other modules
  ],
  exports: [
      CommonModule,
      GreenTextDirective
      // place here directive or something else to share with other modules
  ]
})
export class SharedModule {
}
