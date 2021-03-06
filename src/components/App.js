import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from './Home';
import Enjoy from './Enjoy';
import Loan from './Loan';
import Mine from './Mine';
import Login from './login';
import Regin from './regin'
import Keyword from './search/keyword';
import Region from './search/region';
import Search from './search/search';
import Newhome from './Newhome/Newhome';
import Secondhome from './secondhome/Secondhome'
import Rendhome from './rendhome/Rendhome'
import Haozhuang from './haozhuang/Haozhuang'
import Activity from './activity/Activity'
import Localnewhouse from'./houseInfo/localNewHouseInfo'
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import '../sass/page.scss'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faCommentDots,faChevronCircleUp,faScroll,faUser} from '@fortawesome/free-solid-svg-icons'
axios.defaults.baseURL="http://localhost:9999"
library.add(faHome,faCommentDots,faChevronCircleUp,faScroll,faUser)
class App extends Component{
	constructor(props){
		super(props);
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
					path:'/newhome/local',
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
//		console.log(this.props)
	}
	componentWillMount(){
		console.log('ww',this.props)
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
//	shouldComponentUpdate(props){
//		console.log('www',this.props)
//		return this.props.history.action=='PUSH'
//	}
    render(){
    	let {match} = this.props;
//  	console.log("tabs",typeof(this.state.tabs))
        return <div className='box'> 
        <Switch>
			<Route path='/home' component={Home}/>
			<Route path="/keyword" component={Keyword} />
			<Route  path='/region' component={Region}/>
			<Route  path='/search' component={Search}/>
			<Route  path='/newhome' component={Newhome}/>
			<Route  path='/localHose' component={Localnewhouse}/>
			<Route  path='/secondhome' component={Secondhome}/>
			<Route  path='/rendhome' component={Rendhome}/>
			<Route  path='/haozhuang' component={Haozhuang}/>
			<Route  path='/activity' component={Activity}/>
			<Route path='/loan' component={Loan}/>
			<Route path='/enjoy' component={Enjoy}/>
			<Route path='/mine' component={Mine}/>
			<Route path='/login' component={Login}/>
			<Route path='/regin' component={Regin}/>
		</Switch>
        <TabBar
        	tintColor="#f45815"
        	noRenderContent='true'
        	hidden={!this.props.tabStatus}
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
let mapStateToProps=state=>{
//	console.log('tomaprop',state)
	return {
		tabStatus:state.commonReducer.tabStatus,
		currentCity:state.currentCity.currentCity,
	}
	
}
App=connect(mapStateToProps)(App);
//高阶组件
App=withRouter(App);
// 暴露接口
export default App;