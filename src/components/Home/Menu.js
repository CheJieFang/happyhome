import React,{Component} from 'react';
import '../../sass/Menu.scss'
class Menu extends Component{
	constructor(){
		super();
		this.state={
			url:[]
		}
	}
	render(){
		return <div className='menuBox'>
			<ul>
				<li>
					<i> <img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab01.png' alt="" /></i>
					<p>新房</p>
				</li>
				<li>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab02.png' alt="" /></i>
					<p>二手房</p>
				</li><li>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab03.png' alt="" /></i>
					<p>租房</p>
				</li><li>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab04.png' alt="" /></i>
					<p>豪装</p>
				</li><li>
					<i><img src='http://weixin.xfj100.com/image/mobile/image/overseas/ctab05.png' alt="" /></i>
					<p>活动</p>
				</li>
			</ul>
		</div>
	}
}
export default Menu;