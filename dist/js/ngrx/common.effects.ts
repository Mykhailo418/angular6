import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {from} from 'rxjs';
import * as ItemsActions from './common.actions';
import {state} from './reducers/common.reducer';

@Injectable()
export class CommonEffects{
constructor(private actions$: Actions){}

  @Effect()
  commonEffect = this.actions$.pipe(
    ofType(ItemsActions.ADD_ITEM),
    map((action: ItemsActions.AddItem) => action.payload ),
    switchMap((payload: any) => {
        return from(
          new Promise((resolve, reject) => {
              return setTimeout(() => {
                  //action.payload.value +=  '_modified_by_effect'
                  resolve(payload);
                }, 1000);
          })
        )
    }),
    map((data: any) => {
      console.log('data',data);
      return new ItemsActions.UpdateLastItem({...data,
          value: data.value + '_modified_by_effect'
        });
    })
  );
}
