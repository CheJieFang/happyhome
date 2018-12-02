import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '../../sass/carvn.scss'
class Carvn extends Component{
	render(){
		return <div className='carvnBox'>
			<div className='toutiao'>
			<img src="http://weixin.xfj100.com/image/mobile/image/headnews.png"/>
			  <WingBlank>
			    <Carousel className="my-carousel"
			      vertical
			      dots={false}
			      dragging={false}
			      swiping={false}
			      autoplay
			      infinite
			    >
			      <div className="v-item">一线城市住宅地价同比增幅连续7个季度收窄</div>
			      <div className="v-item">柬埔寨金边之心钻石岛210米超级地标-摩根大厦</div>
			      <div className="v-item">全球楼市繁荣隐现裂缝，半数风险城市房价动摇</div>
			      <div className="v-item">一二线城市土地市场进入“年底冲刺”</div>
			      <div className="v-item">楼市调控要打持久战</div>
			      <div className="v-item">楼市调控不放松，房贷利率下调难掀潮</div>
			      <div className="v-item">楼市降温苗头显现，11月中国各地调控频次骤减</div>
			    </Carousel>
			  </WingBlank>
			  </div>
		</div>
	}
}
export default Carvn;