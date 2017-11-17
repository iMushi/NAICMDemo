import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

	public breadTitle:string;

	constructor() {
		console.log("Constructor Layout");
	}

	ngOnInit() {
		this.breadTitle = '';
		console.log("Cargando Layout");
	}

	receiveBreadTitle(ev){
		console.log("Recibiendo");
		console.log(ev);
	}

}
