import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../sass/Mine.scss'
class Mine extends Component{
	constructor(){
		super();
		
		
	}
	componentWillMount(){
		console.log('props',this.props)
		if(this.props.regin===false){
			this.props.history.push('/login')
		}else{
			this.props.history.push('/mine')
		}
	}
	componentDidMount(){
		
	}
	goHomeClick(){
		this.props.history.push('/home')
	}
	render(){
		return <div className="Mine">
		<div className='usInfo'>
			<img src={'http://public.wutongwan.org/public-20180206-FgzEN9SiY65F_cmpAhVWLXfPjYpp'}/>
			<p>用户<span>3702</span></p>
		</div>
		<ul className='mylist'>
		<li><img src={'http://weixin.xfj100.com/image/mobile/image/overseas/ctab01.png'}/>我的买房委托<span>></span></li>
		<li><img src={'http://weixin.xfj100.com/image/mobile/image/overseas/ctab02.png'}/>我的买房委托<span>></span></li>
		<li><img src={'http://weixin.xfj100.com/image/mobile/image/overseas/ctab03.png'}/>我的出租房源<span>></span></li>
		<li><img src={'http://weixin.xfj100.com/image/mobile/image/overseas/ctab04.png'}/>我的家装申请<span>></span></li>
		<li><img src={'http://weixin.xfj100.com/image/mobile/image/overseas/ctab05.png'}/>我的礼品<span>></span></li>
		</ul>
	</div>
	}
	
}
let mapStateToProps=state=>{
	console.log('tomaprop',state.regin)
	return {
		regin:state.regin.status,
		tabStatus:state.commonReducer.tabStatus
		
	}
	
}

Mine=connect(mapStateToProps)(Mine);
Mine=withRouter(Mine);
export default Mine;
