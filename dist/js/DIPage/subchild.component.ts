import { Component,  Optional, Inject } from '@angular/core';
import {Parent} from './DIPage.component';

@Component({
	selector: 'app-di-sub-child-page',
	template: `<li>{{title}} (Parent title: <i>{{parent.title}}</i>)</li>`,
})
export class DISubChildComponent {
	title: string = 'Sub child Page';

	constructor(@Optional() @Inject(Parent) public parent: { title: string }){}
}
