let initCity={
	//true表示隐藏
	currentCity:"广州",
	cityId:20
}

let commonReducer=(state=initCity,action)=>{
	switch(action.type){
	case 'CHANGE_CURRENT_CITY':
	return{...state,currentCity:action.payload}
	default:
		return state;
}
}

export default commonReducer;