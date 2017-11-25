import {Component, Input, OnInit} from '@angular/core';
import {PrestoService} from "../../common/presto.service";


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input() breadTitle : string;

	constructor(
		private _prestoService : PrestoService
	) {}

	ngOnInit() {

		let presto : string = this._prestoService.getPrestoService();

		console.log('Init de header : ' + presto);

	}


	openNav() {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("mainDiv").style.marginLeft = "270px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
	closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mainDiv").style.marginLeft = "0";
		document.body.style.backgroundColor = "white";
	}

	keyPressBuscar(...eve){

		if(eve[0].keyCode === 13){
			this.buscarPorNombre(eve[1].value);
		}
	}

	buscarPorNombre(value){
		this._prestoService.getEnrolamientoByName(value.split(",")
			.map(val => val.trim()));
	}

}
