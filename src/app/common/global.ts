import { isArray } from 'rxjs/util/isArray';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


export const GLOBAL = {

	MALE: 'M',
	FEMALE: 'F',
	MALEPHOTO: 'assets/customer-512.png',
	FEMALEPHOTO: 'assets/girl-512.png',
	MPHOTOURL: 'assets/customer-512.png',
	FPHOTOURL: 'assets/girl-512.png',
	RESTAPI: 'http://localhost:3000/enrolamiento',
	DEFAULTPERPAGE: 10,
	DEFAULTPERPAGEMASIVA: 5,
	DEFAULTPERSON: {empresas: [{}]},
	errorCargaMasiva: 'errorCargaMasiva.log',
	cargaMasiva: 'cargaMasiva.log',

	BUSCAENROL: 'enrolamiento',
	BUSCAMANAGEMENT: 'management',

	// RESTAPINJS : 'http://localhost:5000/api/',
	// RESTAPINJS : 'https://aqueous-beyond-82335.herokuapp.com/api/',

	RESTAPINJS: environment.restUrl,
	BASEURL : environment.base || '',


	checkToArray: (obj: any): Array<any> => {
		if (!isArray(obj)) {
			if (obj) {
				return [obj];
			} else {
				return [];
			}
		} else {
			return obj;
		}

	},
	/**
	 * Convert Object to HttpParams
	 * @param {Object} obj
	 * @returns {HttpParams}
	 */
	toHttpParams(obj: Object, includes?: Array<String>): HttpParams {
		return Object.getOwnPropertyNames(obj)
			.reduce((p, key) => {
				let val = '';
				if (obj[key]) {
					val = GLOBAL.includesAny(key, includes) ? obj[key] : obj[key].toUpperCase();
				}
				return p.set(key, val);
			}, new HttpParams());
	},

	dataURLtoFile(dataurl, filename) {
		const arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]);
		let n = bstr.length;
		const u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type: mime});
	},
	includesAny: (testStr, checkList) => checkList.reduce((prev, curr) => prev || testStr.includes(curr), false)

}
;


