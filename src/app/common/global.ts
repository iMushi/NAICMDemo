import {isArray} from "rxjs/util/isArray";

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

	}
};


