import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import '../../sass/houseInfo.scss'
import {tabbar} from '../../actions';
class Newhouseinfo extends Component{
	constructor(){
		super();
		this.state={
			mapPhoto:'',
			projectPhotos:[],
			houseTypePhotos:[],
			projectSlogan:'',
			tuanAbout:'',
		}
	}
	componentWillMount(){
		//隐藏底部
		this.props.changetabStatus(false);
		let id = JSON.parse(localStorage.getItem('id'));
		//根据传过来的id渲染详情页
		axios.get("/api/mobile/userappHouseService/getProjectDetail?projectId="+id)
		.then((res)=>{
			console.log('info',res.data.extend);
			console.log(res.data.extend.mapPhoto.fullPath)
			this.setState({
				mapPhoto:res.data.extend.mapPhoto.fullPath,
				projectPhotos:res.data.extend.projectPhotos,
				houseTypePhotos:res.data.extend.houseTypePhotos,
				projectSlogan:res.data.extend.projectSlogan,
				tuanAbout:res.data.extend.tuanAbout,
				
			})
			console.log('state1',this.state)
		})
	}
	componentWillUnmount(){
		 this.props.changetabStatus(true);
	}
	render(){
		let {projectPhotos}=this.state;
		var len=projectPhotos.length;
		console.log('map',this.state.houseTypePhotos)
		return <div className='infoBox'>
			<div className='infoSwiper'>
				<ul>
					{
						projectPhotos.map((imglist,index)=>{
							return <li key={index}>
								<img src={"https://img.xfj100.com/"+imglist.fullPath}/>
							</li>
						})
					}
				</ul>
			</div>
			<div className='infoTitle'>
				<h1>{this.state.projectSlogan}</h1>
				<p>{this.state.tuanAbout}</p>
				<div>
					<div className='leftBox'>报名人数11</div>
					<div className='rightBox'>剩余时间23</div>
				</div>
			</div>
			<div className='houseBox'>
				<h3>
					户型与价格
					<span>更多></span>
				</h3>
				{
					this.state.houseTypePhotos.map((item,index)=>{
						return <div className='houseTypeleft' key={index}>
							<p className='houseType'>三房两厅</p>
							<p className='housePrice'>8800/m</p>
							<img src={"https://img.xfj100.com/"+item.fullPath}/>
						</div>
						
					})
				}
				
			</div>
			<div className='daohang'>
				<h3>
					项目地图
					<span>导航></span>
				</h3>
				
				<div className='img'>
					<img src={"https://img.xfj100.com/"+this.state.mapPhoto}/>
				</div>
			</div>
			<div className='toRegin'>
				<a>预先报名</a>
			</div>
		</div>
	}
	
}
let mapStateToProps=state=>{
	return {}
}
let mapDispatchToProps=dispatch=>{
		return {
					changetabStatus(status){
					dispatch(tabbar(status));
				}
				
		}
	
}
Newhouseinfo=connect(mapStateToProps,mapDispatchToProps)(Newhouseinfo);
export default Newhouseinfo;