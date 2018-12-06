import React,{Component} from 'react';
import {Route,withRouter} from 'react-router-dom';
import axios from 'axios'
import '../../sass/local.scss'
import '../../sass/overseas.scss'
import {connect} from 'react-redux';
import '../../js/cookie.js'
export class Local extends Component{
	constructor(){
		super();
		this.state={
			houselist:[],
			houseInfo:[
				{
					title:'本地房产详情',
					path:'/localHose'
				}
			],
			cityId:'',
			pageNum:1
		}
		
		this.handleScroll=this.handleScroll.bind(this);
	}
	
	componentWillMount(){
		console.log("paops",this.props.currentCity)
		var list = {};
		var arr = this.props.currentCity;
		for (var key in arr) {
		    list[key] = arr[key];
		}
		var cityId=list[1].length<=1?20:list[1]
		this.setState({
			cityId:cityId
		})
		var pageNum=this.state.pageNum;
		console.log('999',pageNum);
		axios.get("/api/mobile/userappHouseService/getHotNewHouse?priceHigh=999999&cityId="+cityId+"&pageNum="+pageNum)
		.then((res)=>{
			this.setState({
				houselist:res.data.extend.sources,
				
			})
		})
		
	}
	 componentDidMount(){
    	window.addEventListener('scroll', this.handleScroll);	
	  }
	     
	  handleScroll(){
	  	//滚动条距离
//	    console.log('滚动条距离',window.scrollY);
	    var scrolltop=window.scrollY;
	    //文档的高度
//	    console.log('文档的高',document.documentElement.scrollHeight);
	    var documentHeight=document.documentElement.scrollHeight;
	    //可视区域的高度
//	    console.log('可是区域的高',document.documentElement.clientHeight);
	    var clientHeight=document.documentElement.clientHeight;
	    if((documentHeight-clientHeight-scrolltop)<1){
	    	var pageNum=this.state.pageNum;
	    	var cityId=this.state.cityId;
	    	pageNum++;
	    	axios.get("/api/mobile/userappHouseService/getHotNewHouse?priceHigh=999999&cityId="+cityId+"&pageNum="+pageNum)
			.then((res)=>{
				if(res.data.extend.sources){
					this.setState({
					houselist:[...this.state.houselist,...res.data.extend.sources],
					pageNum:pageNum
				})
				}
			
		})
	    }
	  }
	  
	handerClick(id){
		let {history} = this.props;
        let url = this.state.houseInfo[0].path;
        history.push(url);
        //用localStorage传id
		localStorage.setItem('id',JSON.stringify(id));
		
	}
	render(){
		let index=0;
		return <div className='scroll-body'>
			<div className='search'>
				<div className='searchInput'>
					<img src="http://weixin.xfj100.com/image/mobile/image/15.png"/>
					 <input type="" name="" id=""  placeholder="请输入关键字进行搜素"/>
				</div>
				<div className='select'>筛选</div>
			</div>
		<ul className='ulBox'>
		 {this.state.houselist.map(houseDesc => (
		 	<li className="houseLi" key={houseDesc.tuanId}  onClick={this.handerClick.bind(this,houseDesc.projectId)}>
			<div className='img'>
				<img src={"https://img.xfj100.com/"+houseDesc.mainImage}/>
			</div>
			<div className='housedesc'>
				<div className='titleBox'>
					<p className='houseTitle'><span>[{houseDesc.areaName}]</span>{houseDesc.projectName}</p>
					<span className='housePrice'>{houseDesc.avgPrice}元/㎡</span>
				</div>
				<p className='junjia'>{houseDesc.tuanAbout}/m</p>
				<p className='huxing'>主推户型{houseDesc.mainHouse}</p>
			</div>
			</li>
		 ))}
			
		</ul>
		</div>
	}
}
let mapStateToProps=state=>{
	return {
		currentCity:state.currentCity.currentCity,
	}
	
}
Local=connect(mapStateToProps)(Local);
Local=withRouter(Local);
export default Local;