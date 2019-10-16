import { Component, ViewChildren, ElementRef, QueryList,
  AfterViewChecked, AfterViewInit, Renderer2, ViewContainerRef,
  TemplateRef, ViewChild, ComponentFactoryResolver, OnInit, ComponentRef,
  Injector } from '@angular/core';
import {ACompViewContainer} from './a.component';
import {BCompViewContainer} from './b.component';

@Component({
	selector: 'app-view-container',
	templateUrl: './viewCont.component.html',
  entryComponents: [ACompViewContainer, BCompViewContainer]
})
export class AppViewContainerExample implements AfterViewChecked, AfterViewInit, OnInit {
  @ViewChildren('child', {read: ElementRef}) childrenList: QueryList<ElementRef>;
  @ViewChild('viewContainer', {read: ViewContainerRef}) viewCont: ViewContainerRef;
  @ViewChild('templ1', {read: TemplateRef}) template1: TemplateRef<null>;
  @ViewChild('templ2', {read: TemplateRef}) template2: TemplateRef<null>;

  @ViewChild('viewContainer2', {read: ViewContainerRef}) viewCont2: ViewContainerRef;
  aComponentRef: ComponentRef<ACompViewContainer>;
  bComponentRef: ComponentRef<BCompViewContainer>;

	constructor(private renderer: Renderer2, private hostEl: ElementRef, private resolver: ComponentFactoryResolver,
    private injector: Injector){}

  removeChild(){
    //this.renderer.removeChild(this.hostEl.nativeElement, this.childrenList.first.nativeElement); // bad approach
    this.viewCont.remove();
  }

  showComponent(type: string){
    const view = (type === 'a') ? this.aComponentRef.hostView : this.bComponentRef.hostView;
    this.viewCont2.detach();
    this.viewCont2.insert(view);
  }

  ngOnInit(){
    const aComponentFactory = this.resolver.resolveComponentFactory(ACompViewContainer);
    const bComponentFactory = this.resolver.resolveComponentFactory(BCompViewContainer);
    this.aComponentRef = aComponentFactory.create(this.injector);
    this.bComponentRef = bComponentFactory.create(this.injector);
  }

  ngAfterViewInit(){
    this.viewCont.createEmbeddedView(this.template1);
    this.viewCont.createEmbeddedView(this.template2);
  }

  ngAfterViewChecked(){
    console.log(this.childrenList.length);
  }
}
