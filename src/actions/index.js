import * as city from './currentCity'
export function tabbar(status){
	return {
		type:'GET_TABSTATUS',
		payload:status
	}
}
export {city};
