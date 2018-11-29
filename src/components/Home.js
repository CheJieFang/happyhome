import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import axios from 'axios'
import {Tabs} from 'antd-mobile'
import Local from './Newhome/Local'
import Overseas from './Newhome/Overseas'
import Travel from './Newhome/Travel'
export class Home extends Component{
	constructor(){
		super();
		this.state={
			tabs:[
				{
					title:'本地',
					path:'/local',
				
				},
				{
					title:'海外',
					path:'/overseas',
					
				},
				{
					title:'旅居',
					path:'/travel',
					
				}
			],
			currentTab:""
		}
		this.handlerTabClick=this.handlerTabClick.bind(this);
	}

	
	componentWillMount(){
		let hash=window.location.hash.slice(6);
		let {history}=this.props;
		let currentTab;
		this.state.tabs.some((item,index)=>{
			currentTab=index;
			return item.path===hash
		});
		this.setState({
	     currentTab:currentTab
	
	    }, () => {
	          console.log(this.state);
	          console.log('加载完成')
	
	    });
		
		
	}
		handlerTabClick(tab,index){
		this.setState({
			currentTab:index
		})
		let {history,match}=this.props;
		let url=match.path+tab.path
		history.push(url);
	}
	render(){
		let{match}=this.props;
		return <div>
			<Tabs tabs={this.state.tabs}
		      initialPage={this.state.currentTab}
		      onChange={(tab,index)=>{}}
		      onTabClick={this.handlerTabClick}
		    >
    	</Tabs>
    	<Switch>
    		<Route path={match.url + "/Local"} component={Local} />
    		<Route path={match.url + "/Overseas"} component={Overseas} />
    		<Route path={match.url + "/Travel"} component={Travel} />
    	</Switch>
	</div>
	}
	
}

export default Home;