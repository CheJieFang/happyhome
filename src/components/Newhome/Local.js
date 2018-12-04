import React,{Component} from 'react';
import axios from 'axios'
import '../../sass/local.scss'
import '../../sass/overseas.scss'
export class Local extends Component{
	constructor(){
		super();
		this.state={
			houselist:[]
		}
	}
	componentWillMount(){
		axios.post("/api/mobile/userappHouseService/getHotNewHouse?priceHigh=999999&cityId=20&pageNum=1")
		.then((res)=>{
			this.setState({
				houselist:res.data.extend.sources
			})
		})
	}
	render(){
		return <div>
			<div className='search'>
				<div className='searchInput'>
					<img src="http://weixin.xfj100.com/image/mobile/image/15.png"/>
					 <input type="" name="" id="" value="" placeholder="请输入关键字进行搜素"/>
				</div>
				<div className='select'>筛选</div>
			</div>
		<ul className='ulBox'>
		 {this.state.houselist.map(houseDesc => (
		 	<li className="houseLi" key={houseDesc.tuanId}>
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


export default Local;