// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Declarations
import { AppComponent } from './app/app.component';
import { MenuComponent } from './menu/menu.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MenuComponent, CustomComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}