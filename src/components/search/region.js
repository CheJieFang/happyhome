import React,{Component} from 'react';
import {connect} from 'react-redux';
import '../../sass/region.scss'
import axios from 'axios'
import {city,tabbar} from '../../actions';
class Region extends Component{
	constructor(){
		super();
		this.state={
			hotCity:[],
			overseas:[],
			others:[],
			currentCity:'广州',
			currentIdx:0
		}
	}
	componentWillMount () {
//		axios.get("/app/ic.asp")
//		.then((res)=>{
//			let ip=res.data.split("[")[1].split("]")[0]
//			console.log(ip)
//			console.log(typeof(ip))
//			axios.get("/city/service/getIpInfo.php?ip="+ip).then((res)=>{
//				console.log("ipcity",res)
//			})
//		})
		
		axios.get("/api/mobile/projectService/getCityListV3?language=CHS")
		.then((res)=>{
			let data=res.data.extend;
			this.setState({
				hotCity:data[0].cityList,
				overseas:data[1].cityList,
				others:data[2].cityList
			})
		})
		 
//		console.log("dispa",this.props);
		 this.props.changetabStatus(false);
	}
	componentWillUnmount(){
           this.props.changetabStatus(true);
          
    }
	handlerClick(cityName,cityId){
		this.setState({
			currentCity:cityName,
			currentIdx:cityId
		})
		 this.props.changecity(cityName,cityId);
		//props.changecity方法存在
		console.log('func',this.props)
		this.props.history.push('/home')
	}
	gohomeClick(){
		this.props.history.push('/home')
		
	}
	render(){
		
		return <div>
			<header>
			<i onClick={this.gohomeClick.bind(this)}></i>
			<h3 className="h3">
			所在城市-<span>{this.state.currentCity}</span>
			</h3>
			</header>
			<div className='regionCont'>
				<dl className="digwei">
					<dt className="cityTitle">当前定位城市</dt>
					<dl><span>广州</span></dl>
				</dl>
			</div>
			<div className='regionCont'>
				<dl className='cityList'>
					<dt className="cityTitle">热门城市</dt>
					
					{
						this.state.hotCity.map((city,index)=>{
						return <dl className={this.state.currentIdx == index ? 'active' : ''} onClick={this.handlerClick.bind(this,city.cityName,city.cityId)}  key={index} >{city.cityName}</dl>
						
					})
					}
					
				</dl>
			</div>
			<div className='regionCont'>
				<dl className='overseas'>
					<dt className="cityTitle">海外城市</dt>
					{
						this.state.overseas.map((city,index)=>{
						return <dl className="cityItem"  key={index}>{city.cityName}</dl>
						
					})
					}
					
				</dl>
			</div>
			<div className='regionCont'>
				<dl className='others'>
					<dt className="cityTitle">其他城市</dt>
					{
						this.state.others.map((city,index)=>{
						return <dl className="cityItem"  key={index}>{city.cityName}</dl>
						
					})
					}
				</dl>
			</div>
		</div>
	}
	
}
let mapStateToProps=state=>{
	console.log('fhh',state)
	return {}
}
let mapDispatchToProps=dispatch=>{
		return {
					changetabStatus(status){
					dispatch(tabbar(status));
				},
					changecity(cityName,cityId) {
					dispatch(city.changecity(cityName,cityId));
				}
				
		}
	
}
Region=connect(mapStateToProps,mapDispatchToProps)(Region);
export default Region;