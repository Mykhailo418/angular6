import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.component.html',
})
export class ReactiveFormComponent implements OnInit  {
  signupForm: FormGroup;
  forbiddenNames: String[] = ['Vasya', 'Petya'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData' :  new FormGroup({
        'name': new FormControl(null, Validators.required, this.customNameValidator.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email]),
       }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  customNameValidator(control: FormControl): {[s: string]: boolean} | Promise<{[s: string]: boolean}>{
    if(this.forbiddenNames.indexOf(control.value) > -1 ){
      return Promise.resolve({'nameIsForbidden': true});
    }
    return  Promise.resolve(null);
  }
}
