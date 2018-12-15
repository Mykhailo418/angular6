import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import RestService from '../services/rest.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'http-page',
  templateUrl: './httpPage.component.html',
})
export class HttpPageComponent implements OnInit {
  @ViewChild('formElement') form: NgForm;
  data: any[] = [];

	constructor(private restService: RestService){}

  onSubmit(formElement: NgForm){
      const data = this.setupData();
      this.restService.saveDate([data]).subscribe((res: any) => {
          console.log('Response Save',res);
      }, (error: any) => {
          console.error(error);
      });
      this.form.reset();
  }

  onUpdate(){
      const data = this.setupData();
      this.data.push(data);
      this.restService.updateDate(this.data).subscribe((res: any) => {
          const data = res;
          console.log('Response Update',res,data);
          this.data = data;
      }, (error: any) => {
          console.error(error);
      });
      this.form.reset();
  }

  onUpdateWithEvents(){
      const data = this.setupData();
      this.data.push(data);
      this.restService.updateDateWithEvents(this.data).subscribe((res: HttpEvent<Object>) => {
          switch(res.type){
            case HttpEventType.Sent:
              console.log('Update was sent');
            break;
            case HttpEventType.Response:
              const data: any[] = (<any[]>res.body);
              console.log('Response Update',res,data);
              this.data = data;
            break;
          }
      }, (error: any) => {
          console.error(error);
      });
      this.form.reset();
  }

  ngOnInit(){
    this.restService.getData().subscribe((data: Object | any[]) => {
        console.log('GET DATA', data);
        this.parseResponseData(data);
    });
    this.restService.errorUrl().subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
        console.error(error);
    });
  }

  private setupData (){
    console.log('setupData');
    return {
      name: this.form.value.name,
      value: this.form.value.value
    };
  }

  private parseResponseData(data: Object | Array<Object> | any[]) {
    if(!Array.isArray(data)){
      for(let k in data){
        this.data = this.data.concat(data[k]);
      }
    }else{
      this.data = this.data.concat(data);
    }
  }
}
