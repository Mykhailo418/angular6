import { Directive, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
	selector: '[greenTextDrc]'
})

export class GreenTextDirective implements OnInit{
	constructor(private elRef: ElementRef, private renderer: Renderer2){

	}

	ngOnInit(){
		//this.elRef.nativeElement.style.color = 'green';
		this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green'); // better way to change the DOM
	}
}