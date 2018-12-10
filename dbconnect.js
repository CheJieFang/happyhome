const mongoose=require('mongoose');
//1.数据库连接
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true });
let db=mongoose.connection;
db.on('error',()=>{console.log('connetion error:')});
db.on('open',function(){
	console.log('数据库已连接');
});
db.on('disconnected',function(){
	console.log('数据库已断开连接');
});

