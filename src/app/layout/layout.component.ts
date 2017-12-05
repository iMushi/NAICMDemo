import {Component, OnInit} from '@angular/core';
import {PrestoService} from "../common/presto.service";

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

	public breadTitle: string;

	constructor() {}

	ngOnInit() {
		this.breadTitle = '';
	}

}
