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
	let user=JSON.parse(localStorage.getItem('usname'));
	let pass=JSON.parse(localStorage.getItem('uspass'));
	if(usname.value==user){
		arr.push(true)
	}else{
		alert('用户名错误')
	}
	if(uspass.value==pass){
		arr.push(true)
	}else{
		alert('密码错误！')
	}
	if(arr[0]==arr[1]==true){
		alert('登录成功');
		this.props.changelogStatus(true);
		this.props.history.push('/mine');
	}
	}
	reginClick(){
		this.props.history.push('/regin')

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
			<input type="passwword" name="" id="uspass"  placeholder="请输入密码"/>
		</div>
		</div>
		<div className='reginBtn' onClick={this.loginClick.bind(this)}>
			<a>登录</a>
		</div>
		<div className='others'>
		<span className='zhuce' onClick={this.reginClick.bind(this)}>立即注册?</span>
		<span className='wjmm'>忘记密码?</span>
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
