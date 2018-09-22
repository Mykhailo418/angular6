import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'error-page',
  templateUrl: './errorPage.component.html',
})

export class ErrorPage implements OnInit {
  message: String = '';

	constructor(private route: ActivatedRoute){}

  ngOnInit(){
    //this.message = this.route.shapshot.data['msg']; // add static data once after Init
    this.route.data.subscribe((data: Data) => { // add data dynamicaly if data.msg will changed
      this.message = data.msg;
    })
  }

}
