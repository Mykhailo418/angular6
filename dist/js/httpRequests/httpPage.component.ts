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
      const data = this.setupData();
      this.restService.saveDate([data]).subscribe((res) => {
          console.log('Response Save',res);
      }, (error) => {
          console.error(error);
      });
      this.form.reset();
  }

  onUpdate(){
      const data = this.setupData();
      this.data.push(data);
      this.restService.updateDate(this.data).subscribe((res: Response) => {
          const data = res.json();
          console.log('Response Update',res,data);
          this.data = data;
      }, (error) => {
          console.error(error);
      });
      this.form.reset();
  }

  ngOnInit(){
    this.restService.getData().subscribe((res: Response) => {
        const data = res.json();
        this.parseResponseData(data);
    });
  }

  private setupData = () => {
    return {
      name: this.form.value.name,
      value: this.form.value.value
    };
  }

  private parseResponseData = (data: Object | Array<Object>) => {
    if(!Array.isArray(data)){
      for(let k in data){
        this.data = this.data.concat(data[k]);
      }
    }else{
      this.data = this.data.concat(data);
    }
  }
}
