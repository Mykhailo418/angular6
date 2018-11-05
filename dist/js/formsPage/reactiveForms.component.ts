import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.component.html',
})
export class ReactiveFormComponent implements OnInit  {
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male'),
    });
  }
}
