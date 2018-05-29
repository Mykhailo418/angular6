import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-custom',
	templateUrl: './custom.component.html'
})

export class CustomComponent implements OnInit  {
	serverName: String = '';
	isOutputName: Boolean = false;
	idServer: Number = 123;

	onChangeServerName(e:Event){
		this.serverName = (<HTMLInputElement>e.target).value;
	}

	outputServerName(e:Event){
		this.isOutputName = true;
	}

	getServerName(){
		if(this.isOutputName){
			this.isOutputName = false;
			return 'Server name is ' + this.serverName;
		}
	}

	ngOnInit() {
		// Your script here
	 
	}
}