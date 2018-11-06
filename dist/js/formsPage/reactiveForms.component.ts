import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.component.html',
})
export class ReactiveFormComponent implements OnInit  {
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
