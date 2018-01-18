import { Component, OnInit } from '@angular/core';
import { MsgService } from '../../common/msg.service';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Msg } from '../../models/interface';

declare var $;

@Component({
	selector: 'app-modal-msg',
	templateUrl: './modal-msg.component.html',
	styleUrls: ['./modal-msg.component.css']
})

export class ModalMsgComponent implements OnInit {

	public message: Msg = {message: ''};

	constructor(private _msgService: MsgService) {
	}

	ngOnInit() {

		this._msgService.msg$.map(
			x => this.isMsg(x) ? x : false
		).subscribe(
			(msg: Msg) => {
				if (!!msg) {
					this.message = msg;
					setTimeout(_ => {
						$('#modalMsg').modal({keyboard: true});
					}, 100);
				}
			}, err => console.log
		);
	}


	isMsg(value: any): value is Msg {
		return value && (typeof value.message === 'string');
	}
}
