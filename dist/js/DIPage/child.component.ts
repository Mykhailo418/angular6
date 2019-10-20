import { Component, SkipSelf, Optional, Inject } from '@angular/core';
import {Parent, provideParent} from './DIPage.component';

@Component({
	selector: 'app-di-child-page',
	template: `<li>
    {{title}} (Parent title: <i>{{parent.title}}</i>)
    <ul><app-di-sub-child-page></app-di-sub-child-page></ul>
    </li>`,
  providers: [provideParent(DIChildComponent)]
})
export class DIChildComponent {
	title: string = 'child Page';

	constructor(@SkipSelf() @Optional() @Inject(Parent) public parent: { title: string }){}
}
