import * as city from './currentCity'
import * as login from './login'
export function tabbar(status){
	return {
		type:'GET_TABSTATUS',
		payload:status
	}
}
export {city,login};
