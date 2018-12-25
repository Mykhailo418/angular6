import { Action } from '@ngrx/store';
import {state} from './reducers/common.reducer';

export const ADD_ITEM = 'ADD_ITEM';

export class AddItem implements Action{
  readonly type = ADD_ITEM;
  constructor(public payload: state["items"][0]){}
}

export type ItemsActions = AddItem; // example: ItemsActions = AddItem | UpdateItem | DeleteItem;
