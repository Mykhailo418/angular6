import { Component, } from '@angular/core';
import { CanComponentDeactivate } from '../services/auth/CanDeactivateGuard';
import { Observable } from 'rxjs';

@Component({
  selector: 'editing-page',
  templateUrl: './editing.component.html',
})

export class EditingPageComponent implements CanComponentDeactivate {
  editField: String = '';
  fieldChanged: Boolean =  false;

	constructor(){}

  onChangeField(e:Event){
    this.fieldChanged = true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.fieldChanged) return true;
    else if(confirm('Do you want to leave?')){
       this.fieldChanged = false;
       return true;
     }else{
        return false;
      }
  }
}
