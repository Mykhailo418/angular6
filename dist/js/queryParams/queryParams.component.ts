import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'query-contacts',
  templateUrl: './queryParams.component.html',
})

export class QueryParamsComponent {
	param3:String = '';
	param4:String = '';

	params:Object = {};
	fragment:String = ''

	constructor(private router: Router, private route: ActivatedRoute, ){}

	clickQueryParams(){
		this.router.navigate(['/queryparams'], { 
			queryParams: {param3: this.param3, param4: this.param4},
			fragment: 'fragment'
		});
	}

	ngOnInit(){
		this.params = this.route.snapshot.queryParams;
		this.fragment = this.route.snapshot.fragment;

		this.route.queryParams.subscribe((params: Params) => {
			this.params = params;
		});
		this.route.fragment.subscribe((fragment: String) => {
			this.fragment = fragment;
		});
	}
}