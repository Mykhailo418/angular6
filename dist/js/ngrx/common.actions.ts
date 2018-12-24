import { Action } from '@ngrx/store';

export const ADD_ITEM = 'ADD_ITEM';

export class AddItem implements Action{
  readonly type = ADD_ITEM;
  constructor(public payload: {key: string, value: number|string}){}
}

export type ItemsActions = AddItem;
