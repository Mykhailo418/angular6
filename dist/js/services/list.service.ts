import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService{
	private listNumbers: Number[] = [2323,5875,27256,278,28];
	setNumber = new EventEmitter<Number>();
	private currentNumber: Number;

	constructor(){}

	getListNumbers(){
		return this.listNumbers;
	}
}