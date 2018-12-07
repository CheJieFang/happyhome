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
		this.props.changelogStatus(true);
		console.log(this.props)
		this.props.history.push('/mine')
	}
	reginClick(){
//		this.props.history.push('/regin')
	}
	render(){
		return <div className="regin">
		<div className='home' onClick={this.goHomeClick.bind(this)}>
		<img className='gohome' src={'https://public.wutongwan.org/public-20180202-FtmNbHV0EwA33J9vBf4y7Y2N9jpo'}/>
		</div>
		<img src={'https://img.xfj100.com/uploads/2018/0929/b62dbe51-7474-4eb3-b309-d903410412e6.jpg'}/>
		<div className='reginBox'>
		<div className='usname'>
			<input type="" name="" id=""  placeholder="请输入用户名"/>
		</div>
		<div className='uspass'>
			<input type="" name="" id=""  placeholder="请输入密码"/>
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
