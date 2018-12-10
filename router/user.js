
const express=require('express');
const Router=express.Router();

//引入了Model就可以用它底下的find()方法
const userModel=require('../model/userModel.js')
const utils=require('../utils/utils.js');

/**
 * @api {post} /user/log/ login
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} usname username.
 *@apiParam {String} uspass userpass.
 * @apiSuccess {String} err error message.
 * @apiSuccess {String} msg  successful message.
 */
let obj={}
Router.post('/log',(req,res)=>{
	let{usname,uspass}=req.body;
	console.log(req.body)
	userModel.find({usname,uspass})
	.then((data)=>{
		console.log(data)
		//长度>=1说明能查到数据
		if(data.length>=1){
			return res.send(utils.sendData(1,'登录成功,自动跳到主页',null))
		}else{
			res.send(utils.sendData(-1,'登录失败',null));
		}
	})
	
})

/**
 * @api {post} /user/reg/ regin
 * @apiName regin
 * @apiGroup User
 *
 * @apiParam {String} usname userneme.
 *@apiParam {String} uspass userpass.
 * @apiSuccess {String} err error message.
 * @apiSuccess {String} msg  successful message.
 */
Router.post('/reg',(req,res)=>{
	let{usname,uspass}=req.body;
	console.log(req.body)
	userModel.find({usname})
	.then((data)=>{
		console.log(data);
		if(data.length>=1){
			res.send(utils.sendData(-1,'注册失败，该用户已存在',null));
		}else{
				console.log(obj[usname])
				userModel.insertMany({usname,uspass})
				res.send(utils.sendData(0,'注册成功,即将跳到登录页面',null))
		}
	})
	.catch((err)=>{
		console.log(err);
		res.send(utils.sendData(-1,'注册失败',null))
		
	})
})
//将写好的路由分发模块抛出
module.exports=Router;
