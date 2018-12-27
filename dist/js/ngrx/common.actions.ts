import { Action } from '@ngrx/store';
import {state} from './reducers/common.reducer';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_LAST = 'UPDATE_LAST';

export class AddItem implements Action{
  readonly type = ADD_ITEM;
  constructor(public payload: state["items"][0]){}
}
export class UpdateLastItem implements Action{
  readonly type = UPDATE_LAST;
  constructor(public payload: state["items"][0]){}
}

export type ItemsActions = AddItem | UpdateLastItem; // example: ItemsActions = AddItem | UpdateItem | DeleteItem;
