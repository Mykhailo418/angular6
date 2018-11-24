import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.component.html',
})
export class ReactiveFormComponent implements OnInit  {
  signupForm: FormGroup;
  forbiddenNames: String[] = ['Vasya', 'Petya'];
  forbiddenEmails: String[] = ['test@test.com', 'vasya@mail.com'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData' :  new FormGroup({
        'name': new FormControl(null, [
          Validators.required,
          this.customNameValidator.bind(this),
          // Validators.pattern(/^[1-9]+[0-9]*$/) - validating by pattern
        ]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.customEmailValidatorAsync.bind(this)),
       }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe((value) => {
      console.log('-- Value Changes', value);
    });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log('-- Status Changes', status);
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  customNameValidator(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenNames.indexOf(control.value) > -1 ){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  customEmailValidatorAsync(control: FormControl): Promise<any> | Observable<any>{
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if(this.forbiddenEmails.indexOf(control.value) > -1 ){
          resolve({'emailIsForbidden': true});
        }
        resolve(null);
      }, 1000);
    });
  }
}
