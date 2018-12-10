import React,{Component} from 'react';
import axios from 'axios'
import '../../sass/keyword.scss'
class Keyword extends Component{
	constructor(){
		super();
		this.state={
			hostSearch:[]
		}
	}
	componentWillMount(){
		axios.get("/api/mobile/userappHouseService/getHotNewHouse?cityId=756&pageNum=1&rowsDisplayed=10")
		.then((res)=>{
			this.setState({
				hostSearch:res.data.extend.sources
			})
		})
		
	}
	cancelClick(){
		console.log(this.props)
		this.props.history.push('/home')
	}
	selectClick(selected){
		localStorage.clear();
		console.log(selected)
		//把选中的存到localStore
		localStorage.setItem('selected',JSON.stringify(selected));
		this.props.history.push('/search');
	}
	render(){
		return <div>
			<div className='searchBox'>
				<div className='keywordBox'>
					<input placeholder="请输入关键字进行搜"/>
					<select>
					  <option value ="新房">新房</option>
					  <option value ="二手房">二手房</option>
  				</select>
				</div>
				<div className='cancel' onClick={this.cancelClick.bind(this)}>取消</div>
			</div>
			<div className='searchContent'>
			<div className='historySearch'>
			<p>历史搜索</p>
			<div className='historyContent'>
				<span>时代倾城</span>
			</div>
			<p>清除历史记录</p>
			</div>
			<div className='hotSearch'>
			<p>热门搜索</p>
			<div>
				{
					this.state.hostSearch.map((item,index)=>{
						return <span key={index} onClick={this.selectClick.bind(this,item.projectName)}>{item.projectName}</span>
					})
				}
			</div>
			</div>
			
			</div>
		</div>
	}
	
}
export default Keyword;