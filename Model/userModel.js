const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let userSchema =new Schema({
	usname:{type:Number,require:true},
	uspass:{type:String,require:true}
})
let usermodel=mongoose.model('users',userSchema);
module.exports=usermodel;
