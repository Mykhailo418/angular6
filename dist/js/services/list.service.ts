import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService{
	private listNumbers: Number[] = [];
	setNumber = new EventEmitter<Number>();
	private currentNumber: Number;

	constructor(){
		for(let i = 0; i < 5; i++){
			this.listNumbers.push(Math.floor(Math.random()*10000));
		}
	}

	getListNumbers(){
		return this.listNumbers.slice();
	}
}