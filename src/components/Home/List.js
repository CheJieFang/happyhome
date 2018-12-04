import React,{Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import '../../sass/list.scss'
class List extends Component{
	constructor(){
		super();
		this.state={
			esfHouse:[],
			newHome:[],
			overSeas:[],
			rendHome:[],
			rentHouse:[]
		}
	}
	componentWillMount(){
		var list = {};
		var arr = this.props.currentCity;
		for (var key in arr) {
		    list[key] = arr[key];
		}
		var cityId=list[1].length<=1?20:list[1]
		axios.get("api/mobile/userappHouseService/userIndex?showIndex=1&cityId="+cityId)
		.then((res)=>{
			
			let rentHouse = [];
			if(res.data.extend.rentHouse){
				rentHouse = res.data.extend.rentHouse
			}
			this.setState({
				esfHouse:res.data.extend.esfHouse,
				newHome:res.data.extend.projectLabelList[0].projectList,
				overSeas:res.data.extend.projectLabelList[1].projectList,
				rendHome:res.data.extend.projectLabelList[2].projectList,
				rentHouse
			})
			console.log('ppp',this.state.rentHouse)
			
		})
	}
	render(){
		console.log('state',this.state)
		let {newHome}=this.state;
		let {overSeas}=this.state;
		let {rendHome}=this.state;
//		let {rentHouse}=this.state;
		console.log("rentHouse78",this.state.rentHouse)
		console.log("overSeas",overSeas)
		console.log('len',overSeas.length);
		return <div className='listBox'>
			<div className={newHome == 0 ? 'displaynone' : 'newHome'}>
			<h2><span>特惠新房</span><span className='cht_more'>更多></span></h2>
			<div className="ulBox">
			<ul>
				{
					newHome.map((home,index)=>{
						return <li key={index}>
						<div><img src={"https://img.xfj100.com/"+home.mainImage}/></div>
						<p className='housedesc'>{home.projectName}</p>
						<p className='houseprice'>{home.avgPrice}元/㎡</p>
					</li>
					})
				}
			</ul>
			</div>
			</div>
			<div className='travalhome'>
			<h2><span>全国旅居</span><span className='cht_more'>更多></span></h2>
			<div className="ulBox">
			<ul>
				{
					
					overSeas.map((home,index)=>{
						return <li key={index}>
						<div><img src={"https://img.xfj100.com/"+home.mainImage}/></div>
						<p className='housedesc'>{home.projectName}</p>
						<p className='houseprice'>{home.avgPrice}元/㎡</p>
					</li>
					})
				}
			</ul>
			</div>
			</div>
			<div className='overseas'>
			<h2><span>海外置业</span><span className='cht_more'>更多></span></h2>
			<div>
			<ul>
				{
					
					this.state.rendHome.map((home,index)=>{
						return <div key={index}>
						<div><img src={"https://img.xfj100.com/"+home.mainImage}/></div>
						<p className='housedesc'>{home.projectName}</p>
						<p className='houseprice'>{home.tuanAbout}</p>
					</div>
					})
				}
			</ul>
			</div>
			</div>
			<div className={newHome == 0 ? 'displaynone' : 'zufang'}>
			<h2><span>精选租房</span><span className='cht_more'>更多></span></h2>
			<div className="ulBox">
			<ul>
				{
					
					this.state.rentHouse.map((home,index)=>{
						return <li key={index}>
								<div><img src={home.image}/></div>
								<p className='housedesc'>{home.rentTitle}</p>
								<p className='houseprice'>{home.priceStr}</p>
						</li>
					})
				}
			</ul>
			</div>
			</div>
		</div>
	}
}
let mapStateToProps=state=>{
	return {
		currentCity:state.currentCity.currentCity,
	}
	
}
List=connect(mapStateToProps)(List);
export default List;