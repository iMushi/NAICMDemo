import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Msg} from '../models/interface';

@Injectable()
export class MsgService   {

	public MsgSubject = new BehaviorSubject(null);
	public msg$ = this.MsgSubject.asObservable();

	constructor() {}

	setMsg(  msg: Msg  ) {
		this.MsgSubject.next(msg);
	}
}
