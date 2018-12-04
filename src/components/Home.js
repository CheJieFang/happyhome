import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import axios from 'axios'
import {Tabs} from 'antd-mobile'
import Header from './common/Header'
import Banner from './Home/Banner'
import Menu from './Home/Menu'
import Carvn from './Home/carvn'
import List from './Home/List'
import '../sass/common.scss'
export class Home extends Component{
	constructor(){
		super();
		this.state={
			imgUrl:[]
			
		}
		
	}
	componentWillMount(){
		axios.post("api/mobile/userappHouseService/getNewsPageBannerAd?siteNo=wx_index_roll&cityId=756")
		.then((res)=>{
			
			this.setState({
				imgUrl:res.data.extend
			})
		})
	}
	render(){
		return <div>
		<Header></Header>
		<div className='container'>
		<div className='content'>
		<Banner></Banner>
		<Menu></Menu>
		<Carvn></Carvn>
		<List></List>
		</div>
		</div>
			{/*
			  * {this.state.imgUrl.map(imgs => (
				<img 
				图片路径拼接
			src={"https://img.xfj100.com/"+imgs.PhotoFile}
			/>
			))}	
			  * */}
			
			
	</div>
	}
	
}

export default Home;