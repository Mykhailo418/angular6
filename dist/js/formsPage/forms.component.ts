import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'forms-page',
  templateUrl: './forms.component.html',
})
export class FormsPageComponent  {
  currentFormComponent: String = 'RF';

  @ViewChild('formElement') form: NgForm;
  ganderValue: String = 'female';
  user = {
    name: '',
    email: '',
    gender: '',
    age: 0
  };
  submitted: Boolean = false;
	constructor(){}

  onSubmit(formElement: NgForm){
      console.log(formElement, this.form);
      this.user.name = this.form.value.userData.name;
      this.user.email = this.form.value.userData.email;
      this.user.gender = this.form.value.gender;
      this.user.age = this.form.value.age;
      this.submitted = true;
      this.form.reset();
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
