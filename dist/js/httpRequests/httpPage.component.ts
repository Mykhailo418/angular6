import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import RestService from '../services/rest.service';

@Component({
  selector: 'http-page',
  templateUrl: './httpPage.component.html',
})
export class HttpPageComponent  {
  @ViewChild('formElement') form: NgForm;

	constructor(private restService: RestService){}

  onSubmit(formElement: NgForm){
      const data = {name: '', value: ''}
      data.name = this.form.value.name;
      data.value = this.form.value.value;
      this.restService.saveDate([data]).subscribe((res) => {
          console.log('Response',res);
      }, (error) => {
          console.error(error);
      });
      this.form.reset();
  }
}
