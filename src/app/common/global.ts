import {isArray} from "rxjs/util/isArray";
import {HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

export const GLOBAL = {

	MALE : 'M',
	FEMALE : 'F',
	MALEPHOTO : 'assets/customer-512.png',
	FEMALEPHOTO : 'assets/girl-512.png',
	MPHOTOURL : 'assets/customer-512.png',
	FPHOTOURL : 'assets/girl-512.png',
	RESTAPI : 'http://localhost:3000/enrolamiento',
	DEFAULTPERPAGE : 10,
	DEFAULTPERSON : {empresas:[{}]},

	//RESTAPINJS : 'http://localhost:5000/api/',
	//RESTAPINJS : 'https://aqueous-beyond-82335.herokuapp.com/api/',

	RESTAPINJS : environment.restUrl,

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


