import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, OnChanges, 
	SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
	OnDestroy, ContentChild } from '@angular/core';

import { ListService } from '../services/list.service';

@Component({
	selector: 'app-custom',
	templateUrl: './custom.component.html',
	encapsulation: ViewEncapsulation.None,
})

export class CustomComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
	@Input('serPref') serverPrefix: String = '';
	@Input() newMsg: Object;
	@ViewChild('someTitle') titleFromDOM: ElementRef;
	@ContentChild('contentElement') contentFromDOM: ElementRef;
	titleForSomeTitle: String = 'Some Title!';
	serverName: String = '';
	outServerName: String = '';
	isServerName: Boolean = false;
	idServer: Number = 123;
	unlessCondition: Boolean = false;
	currentNum: Number;

	constructor(private listService: ListService){

	}

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

	changeUnlessCondition(){
		this.unlessCondition = !this.unlessCondition;
	}

 /* -- Angular Life cycle Hooks -- */
	ngOnInit() {
		// Your script here
	 	console.log('H3 title from DOM = ', this.titleFromDOM); // ElementRef: {nativeElement}
	 	console.log('Text Title Some Title(On Init) = '+this.titleFromDOM.nativeElement.textContent);
	 	console.log('Text Content Element(On Init) = '+this.contentFromDOM.nativeElement.textContent);
		this.listService.setNumber.subscribe( (num: Number) => {
			this.currentNum = num;
		} )
	}

	ngOnChanges(changes: SimpleChanges){
		console.log('-- CHANGES:', changes);
	}

	ngDoCheck(){
		console.log('DOCheck - custom Compoennt');
	}

	ngAfterContentInit(){
		console.log('AfterContentInit - custom Compoennt');
		console.log('Text Content Element(AfterContentInit) = '+this.contentFromDOM.nativeElement.textContent);
	}

	ngAfterContentChecked(){
		console.log('AfterContentChecked - custom Compoennt');
	}

	ngAfterViewInit(){
		console.log('AfterViewInit - custom Compoennt');
		console.log('Text Title Some Title(AfterViewInit) = '+this.titleFromDOM.nativeElement.textContent);
	}

	ngAfterViewChecked(){
		console.log('AfterViewChecked - custom Compoennt');
	}

	ngOnDestroy(){
		console.log('AfterViewChecked - custom Compoennt');
	}
}