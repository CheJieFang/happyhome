import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import '../../sass/banner.scss'
class Banner extends Component{
	constructor(){
		super();
		this.state={
			Banlist:[]
		}
	}
	componentWillMount(){
		axios.get('/api/mobile/userappHouseService/getNewsPageBannerAd?siteNo=wx_index_roll&cityId=756')
		.then((res)=>{
			
			this.setState({
				Banlist:res.data.extend
			})
			
		})
		
	}
	render(){
		return <div className='banRoot'
			style={{padding:'10px'}}
		>
             <Carousel
                autoplay={true}
                infinite
                >
                {this.state.Banlist.map(bans => (
                    <a
                    key={bans.Id}
                    href="#"
                    
                    >
                    <img
                        src={"https://img.xfj100.com/"+bans.PhotoFile}
                        style={{ width: '100%', verticalAlign: 'top',borderRadius:'5px'}}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                        }}
                    />
                    </a>
                ))}
                </Carousel>
                </div>
	}
}
export default Banner;