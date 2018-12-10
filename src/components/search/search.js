import React,{Component} from 'react';
import {Route,withRouter} from 'react-router-dom';
import axios from 'axios'
import '../../sass/local.scss'
import '../../sass/overseas.scss'
import {connect} from 'react-redux';
import '../../js/cookie.js'
export class Search extends Component{
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
			pageNum:1,
			status:false,
			mykeys:false
		}
	}
	componentWillMount(){
		let data=JSON.parse(localStorage.getItem('selected'));
		data=encodeURI(data);
			axios.get("/api/mobile/userappHouseService/getHotNewHouse?priceHigh=999999&cityId=756&pageNum=1&keyWord="+data)
			.then((res)=>{
				var len=res.data.extend.sources.length;
				if(len>0){
					this.setState({
						mykeys:true,
						houselist:res.data.extend.sources
					
				})
//					localStorage.removeItem('selected');
				}
			})
	}
	 componentDidMount(){}
	     
	  handleScroll(){}
	  
	handerClick(id){
		let {history} = this.props;
        let url = this.state.houseInfo[0].path;
        history.push(url);
        //用localStorage传id
		localStorage.setItem('id',JSON.stringify(id));
		
	}
	render(){
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
Search=connect(mapStateToProps)(Search);
Search=withRouter(Search);
export default Search;