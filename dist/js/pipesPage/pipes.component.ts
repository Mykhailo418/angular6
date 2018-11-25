import { Component } from '@angular/core';

@Component({
  selector: 'pipes-page',
  templateUrl: './pipes.component.html',
})
export class PipesPageComponent  {
  uppercaseText: String = 'this text should be uppercase';
  date: Date = new Date()
  longText: String = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
}
