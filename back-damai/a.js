let express = require('express');
let proxy = require('http-proxy-middleware');

var app = express();
app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method=="OPTIONS"){
    	res.send(200);
    }else{
    	next();
    }
});

//let options = {
//	target:'https://m.piaoniu.com',
//	changeOrigin:true,
//	pathRewrite:{
//		'^/api':'/'
//	}
//}
//
//var exampleProxy = proxy(options);
//app.use('/api',exampleProxy);




app.use('/api', proxy({
	"target": "https://m.piaoniu.com", 
	"changeOrigin": true,
	"pathRewrite":{
		"^/api":"/"
	}
}))
app.listen(8000,function(){
	console.log('Server running on http://localhost:8000');
});
