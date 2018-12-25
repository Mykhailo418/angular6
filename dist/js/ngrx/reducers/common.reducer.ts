import { Action } from '@ngrx/store';
import * as ItemsActions from '../common.actions';

export interface state {
    items: {key: string, value: string|number}[]
}

const initialState: state = {
  items: [{key: 'key1', value: 123}]
}

export function itemsListReducer(state = initialState, action: ItemsActions.ItemsActions){
  switch(action.type){
    case ItemsActions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
  }
  return state;
}
