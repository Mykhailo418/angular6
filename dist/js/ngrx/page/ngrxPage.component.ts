import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as ItemsActions from '../common.actions';
import {state as itemsState} from '../reducers/common.reducer';
import {appState} from '../store.interface';

@Component({
	selector: 'ngrx-page',
	templateUrl: './ngrxPage.component.html'
})
export class NgrxPageComponent implements OnInit, OnDestroy {
	items: any[]
  itemsObservable: Observable<itemsState>;
  itemsSubscription: Subscription;
	constructor(private store: Store<appState>) {

  }

  dispatchMoreItem(){
    this.store.dispatch(new ItemsActions.AddItem({
      key: this.getRandomString(3),
      value: this.getRandomString(8)
    }) );
  }

  private getRandomString(length = 5) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  ngOnInit(){
    this.itemsObservable = this.store.select('itemsListReducer');
    this.itemsSubscription = this.itemsObservable.subscribe( ({items}: {items: any[]}) => {
      this.items = items;
    });
  }
  ngOnDestroy(){
    this.itemsSubscription.unsubscribe();
  }
}
