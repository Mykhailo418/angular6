// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { GreenTextDirective } from './directives/GreenText.directive';


@NgModule({
  declarations: [
    GreenTextDirective
   // place here directive, component or something else to share with other modules(good to share with multiple modules)
  ],
  exports: [
      CommonModule,
      GreenTextDirective
      // place here directive, component or something else to share with other modules(good to share with multiple modules)
  ]
})
export class SharedModule {
}
