import React,{Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import '../../sass/list.scss'
class List extends Component{
	constructor(){
		super();
		this.state={
			consultation:[],
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
			console.log('res',res.data.extend.consultation)
			let rentHouse = [];
			let consultation=[];
			if(res.data.extend.rentHouse){
				rentHouse = res.data.extend.rentHouse
				
			}
			if(res.data.extend.consultation){
				consultation=res.data.extend.consultation
			}
			this.setState({
				consultation,
				esfHouse:res.data.extend.esfHouse,
				newHome:res.data.extend.projectLabelList[0].projectList,
				overSeas:res.data.extend.projectLabelList[1].projectList,
				rendHome:res.data.extend.projectLabelList[2].projectList,
				rentHouse
			})
			console.log('ppp',this.state.consultation)
			
		})
		
		
	}
	
	render(){
		console.log('state',this.state)
		let {newHome}=this.state;
		let {overSeas}=this.state;
		let {rendHome}=this.state
		let len=this.state.rentHouse.length
		console.log('len',this.state.consultation);
		return <div className='listBox'>
			<div className={newHome == 0 ? 'displaynone' : 'newHome'}>
			<h2><span>特惠新房</span><span className='cht_more'>更多></span></h2>
			<div className="ulBox">
			<ul>
				{
					newHome.map((home,index)=>{
						return <li key={index}>
						<div className='img'> <img src={"https://img.xfj100.com/"+home.mainImage}/> <span>{home.cityName}</span> </div>
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
						<div className='img'><img src={"https://img.xfj100.com/"+home.mainImage}/><span>{home.areaName}</span></div>
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
						<div className='img'><img src={"https://img.xfj100.com/"+home.mainImage}/><span>{home.areaName}</span></div>
						<p className='housedesc'>{home.projectName}</p>
						<p className='houseprice'>{home.tuanAbout}</p>
					</div>
					})
				}
			</ul>
			</div>
			</div>
			<div className={len == 0 ? 'displaynone' : 'zufang'}>
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
			
			<div className='houseZixun'>
			<h2><span>全国咨询</span><span className='cht_more'>更多></span></h2>
			<div>
			<ul>
			{
				this.state.consultation.map((item,index)=>{
					return <li className="houseLi" key={index}>
					<div className='zixunimg'>
						<img src={"https://img.xfj100.com/"+item.photoFile}/>
					</div>
					<div className='zixundesc'>
							<p className='houseTitle'>{item.title}</p>
						
						<p className='zixunTime'>{item.publishTime}</p>
					</div>
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