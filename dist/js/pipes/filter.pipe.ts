import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // !IMPORTANT: it can make perfomance issues. This param allows to rerun pipe when anything was changed on the page.
              // The most populat example: when value(in this case it is array) was changed - was added new string or deleted, it will react on this chnage otherwise it will not rerun pipe
})
export class FilterPipe implements PipeTransform{
  transform(value: any, searchText: string){
    if(!value || !Array.isArray(value) || !value.length || !searchText){
      return value;
    }
    const result = [];
    for(const str of value){
      if(str.startsWith(searchText)){
        result.push(str);
      }
    }
    return result;
  }
}
