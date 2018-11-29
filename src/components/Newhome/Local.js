import React,{Component} from 'react';
import axios from 'axios'
export class Local extends Component{
	componentWillMount(){
		axios.post("api/design/homecases?page=1&size=20")
		.then((res)=>{
			console.log(res.data.result.list)
		})
	}
	render(){
		return <div>本地房子</div>
	}
}


export default Local;