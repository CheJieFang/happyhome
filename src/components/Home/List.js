import React,{Component} from 'react';
import axios from 'axios'
import '../../sass/list.scss'
class List extends Component{
	constructor(){
		super();
		this.state={
			esfHouse:[],
			projectLabelList:[],
			rentHouse:[]
		}
	}
	componentWillMount(){
		axios.get("api/mobile/userappHouseService/userIndex?showIndex=1&cityId=756")
		.then((res)=>{
			console.log(res.data.extend)
			this.setState({
				esfHouse:res.data.extend.esfHouse,
				projectLabelList:res.data.extend.projectLabelList,
				rentHouse:res.data.extend.rentHouse
			})
			console.log(this.state)
		})
	}
	render(){
		return <div className='listBox'>
			<div className='newHome'>
			<h2><span>特惠新房</span><span className='cht_more'>更多></span></h2>
			<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			</ul>
			</div>
			<div className='newHome'>
			<h2><span>全国旅居</span><span className='cht_more'>更多></span></h2>
			<ul><li></li></ul>
			</div>
			<div className='overseas'>
			<h2><span>海外置业</span><span className='cht_more'>更多></span></h2>
			<ul><li></li></ul>
			</div>
			<div className='zufang'>
			<h2><span>租房</span><span className='cht_more'>更多></span></h2>
			<ul><li></li></ul>
			</div>
		</div>
	}
}
export default List;