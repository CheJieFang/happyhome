import React from 'react';
import {render} from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';
import App from './components/App';
//引入redux
import {createStore} from 'redux';
//初始化的仓库
const initState={
	goodslist:[{
		name:'aaa',
		price:4999,
		qty:1
	}]
}
//规定数据修改逻辑，并返回一个新的state
let reducer=function(oldState=initState,action){
	switch(action.type){
		//添加商品
		case 'ADD_TO_CART':
		return {
			//在前面加入新的商品
			goodslist:[action.payload,...oldState.goodslist]
		}
		//删除商品
		case 'REMOVE_GOODS':
		return {
			goodslist:oldState.goodslist.filter(goods=>goods.name!=action.payload.name)
		}
		//默认的返回值，在以上两种情况都不满足的情况下
		default:
            return oldState;
	}
	
}
let store =createStore(reducer);
console.log('initial:',store.getState())
//监听数据的修改
store.subscribe(function(){
	console.log('modified:',store.getState())
})

let goods={
	name:'bbb',
	price:998,
	qty:1
}
let action={
	type:'ADD_TO_CART',
	payload:goods
}
//添加商品
store.dispatch(action);
//只能通过dispatch修改state
//删除商品
store.dispatch({
	type:'REMOVE_GOODS',
	payload:{name:'aaa'}
})
render(
	<HashRouter>
    <Route component={App}/>
    </HashRouter>,
    document.getElementById('app')
)