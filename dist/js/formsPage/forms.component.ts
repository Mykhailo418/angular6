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

  suggestName(){
    // this.form.setValue({}) - overrides all fields
    this.form.form.patchValue({ // set value do not override other fields
      userData: { // local mark  #userData="ngModelGroup"
        name: 'Vasya'
      }
    });
  }
}
