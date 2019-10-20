import { Component, forwardRef, InjectionToken } from '@angular/core';

// Create Injection token
export const Parent = new InjectionToken<{ title: string }>('parent compoennt');
//export abstract class Parent { title: string; } // if use this one, do not need to use @Inject() in child components

// heper function
export function provideParent(component: any) {
  // forwardRef is used to use component that will be declared little bit later, for example DIParentPageComponent is below this function
    return { provide: Parent, useExisting: forwardRef(() => component) };
}

@Component({
	selector: 'app-di-parent-page',
	templateUrl: './DIPage.component.html',
  providers: [provideParent(DIParentPageComponent)]
})
export class DIParentPageComponent {
	title: string = 'parent Page';

	constructor(){}
}
