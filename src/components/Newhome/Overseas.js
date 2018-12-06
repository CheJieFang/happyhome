import React,{Component} from 'react';
import axios from 'axios'
import '../../sass/overseas.scss'
export class Overseas extends Component{
	constructor(){
		super();
		this.state={
			houselist:[],
			houseInfo:[
				{
					title:'本地房产详情',
					path:'/localHose'
				}
			]
		}
	}
	componentWillMount(){
		axios.get("/api/mobile/userappHouseService/getNewHouseList?cityId=20&labelType=2")
		.then((res)=>{
			console.log(res.data.extend.sources)
			this.setState({
				houselist:res.data.extend.sources
			})
			console.log(this.state.houselist);
		})
	}
	handerClick(id){
		let {history} = this.props;
        let url = this.state.houseInfo[0].path;
        history.push(url);
        //用localStorage传id
		localStorage.setItem('id',JSON.stringify(id));
		
	}
	render(){
		return <div>
		<ul className='ulBox'>
		 {this.state.houselist.map(houseDesc => (
		 	<li className="houseLi" key={houseDesc.tuanId} onClick={this.handerClick.bind(this,houseDesc.projectId)}>
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


export default Overseas;