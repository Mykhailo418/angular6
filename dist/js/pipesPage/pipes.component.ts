import { Component } from '@angular/core';

@Component({
  selector: 'pipes-page',
  templateUrl: './pipes.component.html',
})
export class PipesPageComponent  {
  uppercaseText: String = 'this text should be uppercase';
  date: Date = new Date()
  longText: String = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  list: String[] = [
    "Contrary to popular belief",
    "The standard chunk of Lorem",
    "There are many variations of passages",
    "It is a long established fact that a reade",
    "Many desktop publishing packages and web page"
  ];
  searchField: String = '';
}
