import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-custom',
	templateUrl: './custom.component.html'
})

export class CustomComponent implements OnInit  {
	@Input('serPref') serverPrefix: String = '';
	@Input() newMsg: Object;
	serverName: String = '';
	outServerName: String = '';
	isServerName: boolean = false;
	idServer: Number = 123;

	onChangeServerName(e:Event){
		this.serverName = (<HTMLInputElement>e.target).value;
	}

	outputServerName(e:Event){
		this.isServerName = (this.serverName) ? true : false;
		this.outServerName = 'Server name is ' + this.serverPrefix + ': ' + this.serverName;
	}

	ngOnInit() {
		// Your script here
	 	console.log(this.newMsg);
	}
}