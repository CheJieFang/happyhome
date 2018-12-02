import React,{Component} from 'react';
import axios from 'axios'
export class Local extends Component{
	componentWillMount(){
		axios.post("api/mobile/userappHouseService/getNews?cityId=0&column=3&pageNum=1")
		.then((res)=>{
			console.log(res.data.result.list)
		})
	}
	render(){
		return <div>本地房子</div>
	}
}


export default Local;