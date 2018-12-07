let initlogin={
	status:false
}

let commonReducer=(state=initlogin,action)=>{
	switch(action.type){
	case 'LOGIN_STATUS':
	return{...state,status:action.payload}
	default:
		return state;
}
}

export default commonReducer;