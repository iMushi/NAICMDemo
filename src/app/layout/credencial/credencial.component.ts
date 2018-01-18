import {Component, Input, OnInit} from '@angular/core';
import {TpersonCredencial} from '../../models/interface';
import {GLOBAL} from '../../common/global';


@Component({
	selector: 'app-credencial',
	templateUrl: './credencial.component.html',
	styleUrls: ['./credencial.component.css']
})
export class CredencialComponent implements OnInit {

	@Input() personEnrol: TpersonCredencial;

	constructor() {
	}




	public imageUrl;

	ngOnInit() {
		console.log(this.personEnrol);
		this.imageUrl = GLOBAL.RESTAPINJS + 'getImageEnrol/' + this.personEnrol.imgName;
		if (!this.personEnrol.imgName) {
			this.imageUrl = `${GLOBAL.BASEURL}assets/s.gif`;
		}
	}
}
