import {Component, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";
import {GLOBAL} from "../../common/global";

@Component({
	selector: 'app-blank-page',
	templateUrl: './blank-page.component.html',
	styleUrls: ['./blank-page.component.css']
})
export class BlankPageComponent implements OnInit {

	constructor(private _prestoService: PrestoService) {
	}

	buscaEnrol: string = GLOBAL.BUSCAENROL;
	buscaManagement: string = GLOBAL.BUSCAMANAGEMENT;

	ngOnInit() {
		this._prestoService.setBreadCrumb([]);
	}

}
