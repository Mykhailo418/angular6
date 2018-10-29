import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'forms-page',
  templateUrl: './forms.component.html',
})
export class FormsPageComponent  {
  @ViewChild('formElement') form: NgForm;
  ganderValue: String = 'female';
	constructor(){}

  onSubmit(formElement: NgForm){
      console.log(formElement, this.form);
  }
}
