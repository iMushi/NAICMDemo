import {Component, OnInit} from '@angular/core';
import {PrestoService} from "../common/presto.service";

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

	public breadTitle: string;

	constructor(private prestoService: PrestoService) {
		console.log("Constructor Layout");
	}

	ngOnInit() {
		this.breadTitle = '';
		console.log("Cargando Layout");
	}

	receiveBreadTitle(ev) {
		console.log("Recibiendo");
		console.log(ev);
	}

}
