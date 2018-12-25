import {ActionReducerMap} from '@ngrx/store';
import {state as itemsListState, itemsListReducer } from './reducers/common.reducer';

export interface appState {
  itemsListReducer: itemsListState
}

export const reducers: ActionReducerMap<appState> = {
  itemsListReducer
}
