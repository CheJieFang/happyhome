import React,{Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from './Home';
import Enjoy from './Enjoy';
import Loan from './Loan';
import Mine from './Mine';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import '../sass/page.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faCommentDots,faChevronCircleUp,faScroll,faUser} from '@fortawesome/free-solid-svg-icons'

library.add(faHome,faCommentDots,faChevronCircleUp,faScroll,faUser)
class App extends Component{
	constructor(){
		super();
		this.state={
			tabs:[
				{
					title:'首页',
					path:'/home',
					icon:'home'
				},
				{
					title:'微聊',
					path:'/loan',
					icon:'comment-dots'
				},
				{
					title:'一键服务',
					path:'/enjoy',
					icon:'chevron-circle-up'
				},
				{
					title:'看房',
					path:'/mine',
					icon:'scroll'
				},
				{
					title:'我的',
					path:'/mine',
					icon:'user'
				}
			],
			currentTab:0
		}
		
	}
	handlerClick(index,path){
		this.setState({
			currentTab:index
		})
		this.props.history.push(path)
		console.log(this.props)
	}
	componentWillMount(){
		let hash=window.location.hash.slice(1);
		let currentTab=0
		this.state.tabs.some((item,index)=>{
			currentTab=index;
			return item.path===hash
		});
		this.setState({
			currentTab
		});
	}
    render(){
        return <div className='box'> 
        <Switch>
			<Route path='/home' component={Home}/>
			<Route path='/loan' component={Loan}/>
			<Route path='/enjoy' component={Enjoy}/>
			<Route path='/mine' component={Mine}/>
		</Switch>
        <TabBar
        	tintColor="#f45815"
        	noRenderContent='true'
        >
        	{
        		this.state.tabs.map((tab,index)=>{
        			return <TabBar.Item
			            title={tab.title}
			            key={tab.path}
			            icon={<FontAwesomeIcon icon={tab.icon}/>}
			            selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
			            selected={this.state.currentTab === index}
			            onPress={this.handlerClick.bind(this,index,tab.path)}
		          	>
        			
        			</TabBar.Item>
        		})
        	}
          </TabBar> </div>
    }
}
//高阶组件
//App=withRouter(App);
// 暴露接口
export default App;