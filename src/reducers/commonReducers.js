let initTabState={
	//true表示隐藏
	tabStatus:true
}

let commonReducer=(state=initTabState,action)=>{
	switch(action.type){
	case 'GET_TABSTATUS':
	return{...state,tabStatus:action.payload}
	default:
		return state;
}
}

export default commonReducer;
