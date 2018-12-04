import React,{Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import { Tabs } from 'antd-mobile';
import Local from './Local';
import Overseas from './Overseas';
import Travel from './Travel';
import axios from 'axios'
export class Newhome extends Component{
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
		console.log('ddd',window.location.hash);
		let hash=window.location.hash.slice(9);
		let {history}=this.props;
		let currentTab;
		this.state.tabs.some((item,index)=>{
			currentTab=index;
			return item.path===hash
		});
		this.setState({
	     currentTab:currentTab
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
		let {match} = this.props;
		return <div>
			<Tabs tabs={this.state.tabs}
		      initialPage={this.state.currentTab}
		      onChange={(tab,index)=>{}}
		      onTabClick={this.handlerTabClick}
		      useOnPan='true'
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


export default Newhome;