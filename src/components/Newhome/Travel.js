import React,{Component} from 'react';
import axios from 'axios'
export class Travel extends Component{
	componentWillMount(){
		axios.post("api/design/homecases?page=1&size=20")
		.then((res)=>{
			console.log(res.data.result.list)
		})
	}
	render(){
		return <div>旅居</div>
	}
}


export default Travel;