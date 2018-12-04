import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../../sass/Menu.scss'
class Menu extends Component{
	constructor(){
		super();
		this.state={
			url:[],
			MenuList:[
				{
					title:'新房',
					path:'/newhome'
				},
				{
					title:'二手房',
					path:'/secondhome'
				},
				{
					title:'租房',
					path:'/rendhome'
				},
				{
					title:'豪装',
					path:'/haozhuang'
				},
				{
					title:'活动',
					path:'/activity'
				}
			]
		}
	}
	newhomeClick(){
		let {history,match}=this.props;
		let url = this.state.MenuList[0].path;
        history.push(url);
	}
	sechomeClick(){
		let {history,match}=this.props;
		let url = this.state.MenuList[1].path;
        history.push(url);
	}
	rendhomeClick(){
		let {history,match}=this.props;
		let url = this.state.MenuList[2].path;
        history.push(url);
	}
	haozhuaClick(){
		let {history,match}=this.props;
		let url = this.state.MenuList[3].path;
        history.push(url);
	}
	activityClick(){
		let {history,match}=this.props;
		let url = this.state.MenuList[4].path;
        history.push(url);
	}
	render(){
		return <div className='menuBox'>
			<ul>
				<li onClick={this.newhomeClick.bind(this)}>
					<i> <img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab01.png' alt="" /></i>
					<p>新房</p>
				</li>
				<li onClick={this.sechomeClick.bind(this)}>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab02.png' alt="" /></i>
					<p>二手房</p>
				</li>
				<li onClick={this.rendhomeClick.bind(this)}>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab03.png' alt="" /></i>
					<p>租房</p>
				</li>
				<li onClick={this.haozhuaClick.bind(this)}>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab04.png' alt="" /></i>
					<p>豪装</p>
				</li>
				<li onClick={this.activityClick.bind(this)}>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab05.png' alt="" /></i>
					<p>活动</p>
				</li>
			</ul>
		</div>
	}
}
Menu=withRouter(Menu);
export default Menu;