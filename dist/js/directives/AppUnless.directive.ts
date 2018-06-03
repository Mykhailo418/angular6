import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appUnless]'
})

export class AppUnlessDirective{
	@Input() set appUnless(condition: Boolean){
		console.log('appUnless', condition);
		if(!condition){
			this.vcRef.createEmbeddedView(this.templateRef);
		}else{
			this.vcRef.clear();
		}
	}

	constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ){}
}