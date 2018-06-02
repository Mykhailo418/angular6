import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-custom',
	templateUrl: './custom.component.html',
	encapsulation: ViewEncapsulation.None,
})

export class CustomComponent implements OnInit  {
	@Input('serPref') serverPrefix: String = '';
	@Input() newMsg: Object;
	@ViewChild('someTitle') titleFromDOM: ElementRef;
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

	changeSomeTitle(titleEl: HTMLElement){
		titleEl.textContent = 'Another Title '+Math.round(Math.random()*10);
	}

	ngOnInit() {
		// Your script here
	 	console.log('H3 title from DOM = ', this.titleFromDOM); // ElementRef: {nativaElement}
	}
}