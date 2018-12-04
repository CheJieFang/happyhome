import React,{Component} from 'react';
import '../../sass/region.scss'
import axios from 'axios'
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
		axios.get("/app/ic.asp")
		.then((res)=>{
			let ip=res.data.split("[")[1].split("]")[0]
//			console.log(ip)
//			console.log(typeof(ip))
			axios.get("/city/service/getIpInfo.php?ip="+ip).then((res)=>{
//				console.log("ipcity",res)
			})
		})
		
		axios.get("/api/mobile/projectService/getCityListV3?language=CHS")
		.then((res)=>{
			let data=res.data.extend;
			this.setState({
				hotCity:data[0].cityList,
				overseas:data[1].cityList,
				others:data[2].cityList
			})
		})
		
	}
	handlerClick(cityName,cityId){
		this.setState({
			currentCity:cityName,
			currentIdx:cityId
		})
		
	}
	gohomeClick(){
		this.props.history.push('/home')
	}
	componentDidMount(){
		
	}

	render(){
		return <div>
			<header>
			<i onClick={this.gohomeClick.bind(this)}></i>
			<h3>
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
						this.state.hotCity.map((city,cityId)=>{
						return <dl className={this.state.currentIdx == cityId ? 'active' : ''} onClick={this.handlerClick.bind(this,city.cityName,cityId)}  key={cityId} >{city.cityName}</dl>
						
					})
					}
					
				</dl>
			</div>
			<div className='regionCont'>
				<dl className='overseas'>
					<dt className="cityTitle">海外城市</dt>
					{
						this.state.overseas.map((city,cityId)=>{
						return <dl className="cityItem"  key={cityId}>{city.cityName}</dl>
						
					})
					}
					
				</dl>
			</div>
			<div className='regionCont'>
				<dl className='others'>
					<dt className="cityTitle">其他城市</dt>
					{
						this.state.others.map((city,cityId)=>{
						return <dl className="cityItem"  key={cityId}>{city.cityName}</dl>
						
					})
					}
				</dl>
			</div>
		</div>
	}
	
}
export default Region;