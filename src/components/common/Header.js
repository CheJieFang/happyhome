import React,{Component} from 'react';
import {connect} from 'react-redux';
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
		
	}
	render(){
		console.log('header',this.props.currentCity)
		var list = {};
		var arr = this.props.currentCity;
		for (var key in arr) {
		    list[key] = arr[key];
		}
		var cityName=list[0].length<=1?"广州":list[0]
		
		console.log(cityName)
		return <div className='searchBox'>
		<div className='leftBox'>
			<div className='select' onClick={this.handerClick.bind(this)}>
				<span>{cityName}</span>
				<img src='http://weixin.xfj100.com/image/mobile/image/downdraw.png'></img>
			</div>
		</div>
		<div className='rightBox'>
			<a>
				<div className='searchInput'  onClick={this.keywordClick.bind(this)}>
				<img src='http://weixin.xfj100.com/image/mobile/image/15.png' alt="" />
					<input type="" name="" id="search"  placeholder="请输入关键字进行搜素"/>
				</div>
			</a>
		</div>
	</div>
	}
}
let mapStateToProps=state=>{
//	console.log('tomaprop',state)
	return {
		currentCity:state.currentCity.currentCity
	}
	
}
Header=connect(mapStateToProps)(Header);
Header=withRouter(Header);
export default Header;