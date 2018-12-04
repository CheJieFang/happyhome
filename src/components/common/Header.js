import React,{Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import '../../sass/Header.scss'
export class Header extends Component{
	constructor(){
		super();
		this.state={
			city:[
				{
					title:'关键字搜索',
					path:'/keyword'
				},
				{
					title:'区域搜索',
					path:'/region'
				}
			]
		}
		this.handerClick = this.handerClick.bind(this);
	}
	handerClick(){
        let {history,match} = this.props;
        let url = this.state.city[1].path;
        history.push(url);
	}
	keywordClick(){
		 let {history,match} = this.props;
        let url =  this.state.city[0].path;
        history.push(url);
	}
	componentDidMount(){
		console.log('history',this.props);
	}
	render(){
		return <div className='searchBox'>
		<div className='leftBox'>
			<div className='select' onClick={this.handerClick.bind(this)}>
				<span>广州</span>
				<img src='http://weixin.xfj100.com/image/mobile/image/downdraw.png'></img>
			</div>
		</div>
		<div className='rightBox'>
			<a>
				<div className='searchInput'  onClick={this.keywordClick.bind(this)}>
				<img src='http://weixin.xfj100.com/image/mobile/image/15.png' alt="" />
					<input type="" name="" id="search" value="" placeholder="请输入关键字进行搜素"/>
				</div>
			</a>
		</div>
	</div>
	}
}
Header=withRouter(Header);
export default Header;