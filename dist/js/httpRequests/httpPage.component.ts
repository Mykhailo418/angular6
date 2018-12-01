import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import RestService from '../services/rest.service';
import { Response } from '@angular/http';

@Component({
  selector: 'http-page',
  templateUrl: './httpPage.component.html',
})
export class HttpPageComponent implements OnInit {
  @ViewChild('formElement') form: NgForm;
  data: Array<Object> = [];

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

  ngOnInit(){
    this.restService.getData().subscribe((res: Response) => {
        const data = res.json();
        if(!Array.isArray(data)){
          for(let k in data){
            this.data = this.data.concat(data[k]);
          }
        }else{
          this.data = this.data.concat(data);
        }
    });
  }
}
