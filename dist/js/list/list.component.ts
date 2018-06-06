import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {
	listNumbers: Number[];

	constructor(private listService: ListService){}

	selectNumber(e: Event, num: Number){
		e.preventDefault();
		this.listService.setNumber.emit(num);
	}

	ngOnInit(){
		this.listNumbers = this.listService.getListNumbers();
	}
}