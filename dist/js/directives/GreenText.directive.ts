import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
	selector: '[greenTextDrc]'
})

export class GreenTextDirective implements OnInit{
	constructor(private elRef: ElementRef){

	}

	ngOnInit(){
		this.elRef.nativeElement.style.color = 'green';
	}
}