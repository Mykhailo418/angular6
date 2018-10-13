import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'forms-page',
  templateUrl: './forms.component.html',
})
export class FormsPageComponent  {
	constructor(){}

  onSubmit(formElement: NgForm){
      console.log(formElement);
  }
}
