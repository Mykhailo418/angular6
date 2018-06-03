import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
	selector: '[greenTextDrc]'
})

export class GreenTextDirective implements OnInit{
	@HostBinding('style.color') colorEl: String = 'green';
	constructor(private elRef: ElementRef, private renderer: Renderer2){}

	ngOnInit(){
		//this.elRef.nativeElement.style.color = 'green';
		this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green'); // better way to change the DOM
	}

	@HostListener('mouseenter') onMousEenter(e: Event){
		//this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
		this.colorEl = 'red';
		this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
	}

	@HostListener('mouseleave') onMousLeave(e: Event){
		//this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
		this.colorEl = 'green';
		this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'initial');
	}
}