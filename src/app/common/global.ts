import {isArray} from "rxjs/util/isArray";
import {HttpParams} from "@angular/common/http";

export const GLOBAL = {

	MALE : 'M',
	FEMALE : 'F',
	MALEPHOTO : 'assets/customer-512.png',
	FEMALEPHOTO : 'assets/girl-512.png',
	MPHOTOURL : '../../../assets/customer-512.png',
	FPHOTOURL : '../../../assets/girl-512.png',
	RESTAPI : 'http://localhost:3000/enrolamiento',

	DEFAULTPERSON : {empresas:[{}]},

	RESTAPINJS : 'http://localhost:3789/api/',

	checkToArray: (obj: any): Array<any> => {
		if (!isArray(obj)) {
			if (obj) {
				return [obj];
			} else {
				return [];
			}
		}else{
			return obj;
		}

	},
	/**
	 * Convert Object to HttpParams
	 * @param {Object} obj
	 * @returns {HttpParams}
	 */
	toHttpParams(obj: Object): HttpParams {
		return Object.getOwnPropertyNames(obj)
			.reduce((p, key) => p.set(key, obj[key] ? obj[key] : '' ), new HttpParams());
	}

};

