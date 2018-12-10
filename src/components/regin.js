import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {tabbar,login} from '../actions';
import '../sass/login.scss'
class Login extends Component{
	constructor(){
		super();
		this.state={
			status:''
		}
	}
	componentWillMount(){
//		this.props.changetabStatus(false);
	
	}
	componentDidMount(){
	}
	componentWillUnMount(){
//		this.props.changetabStatus(true);
	}
	goHomeClick(){
		this.props.history.push('/home')
	}
	loginClick(){
		let arr=[];
		let usname=document.querySelector("#usname");
		let uspass=document.querySelector("#uspass");
		var reg = /^1[345789]\d{9}$/;
            if (reg.test(usname.value)){
               localStorage.setItem('usname',JSON.stringify(usname.value));
               arr.push(true);
            }else{
                alert('请输入正确的手机号')
            }
            var reg1=/^[0-9A-Za-z]{6,}$/;
            if(reg1.test(uspass.value)){
            	localStorage.setItem('uspass',JSON.stringify(uspass.value));
            	arr.push(true);
            	console.log(arr)
            }else{
            	alert('请输入6位以上的密码')
            }
            if(arr[0]==arr[1]==true){
            	alert('注册成功！')
				this.props.history.push('/login');
            }
		
	}
	reginClick(){
//		

	}
	render(){
		return <div className="regin">
		<div className='home' onClick={this.goHomeClick.bind(this)}>
		<img className='gohome' src={'https://public.wutongwan.org/public-20180202-FtmNbHV0EwA33J9vBf4y7Y2N9jpo'}/>
		</div>
		<img src={'https://img.xfj100.com/uploads/2018/0929/b62dbe51-7474-4eb3-b309-d903410412e6.jpg'}/>
		<div className='reginBox'>
		<div className='usname'>
			<input type="" name="" id="usname"  placeholder="请输入用户名"/>
		</div>
		<div className='uspass'>
			<input type="password" name="" id="uspass"  placeholder="请输入密码"/>
		</div>
		</div>
		<div className='reginBtn' onClick={this.loginClick.bind(this)}>
			<a>注册</a>
		</div>
		
	</div>
	}
	
}
let mapStateToProps=state=>{
	return {}
}
let mapDispatchToProps=dispatch=>{
		return {
					changetabStatus(status){
					dispatch(tabbar(status));
				},
				changelogStatus(status){
					dispatch(login.loginstatus(status));
				}
				
		}
	
}
Login=withRouter(Login);
Login=connect(mapStateToProps,mapDispatchToProps)(Login);
export default Login;
