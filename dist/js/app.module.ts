// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Declarations
import { AppComponent } from './app/app.component';
import { MenuComponent } from './menu/menu.component';
import { CustomComponent } from './custom/custom.component';
import { GreenTextDirective } from './directives/GreenText.directive';
import { AppUnlessDirective } from './directives/AppUnless.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MenuComponent, CustomComponent, GreenTextDirective, AppUnlessDirective],
  bootstrap: [AppComponent]
})

export class AppModule {
}