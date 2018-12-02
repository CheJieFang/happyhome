import React,{Component} from 'react';
import '../../sass/Header.scss'
export class Header extends Component{
	render(){
		return <div className='searchBox'>
		<div className='leftBox'>
			<select>
				<option value="广州">广州</option>
				<option value="深圳">深圳</option>
				<option value="上海">上海</option>
			</select>
		</div>
		<div className='rightBox'>
			<a>
				<div className='searchInput'>
				<img src='http://weixin.xfj100.com/image/mobile/image/15.png' alt="" />
					<input type="" name="" id="search" value="" placeholder="请输入关键字进行搜素"/>
				</div>
			</a>
		</div>
	</div>
	}
	
}
export default Header;