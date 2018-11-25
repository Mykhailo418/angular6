import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
  transform(value: any, limits: number = 20, symbols: string = '...'){
    if(value.length > limits){
      return value.substr(0, limits) + ` ${symbols}`;
    }
    return value;
  }
}
