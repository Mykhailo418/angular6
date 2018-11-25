import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
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
