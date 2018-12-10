function sendData(err,msg,data){
	return{
		err:err,
		msg:msg,
		data:data
	}
}
//抛出模块
module.exports={sendData}
//该模块的主要作用是构建返回数据
