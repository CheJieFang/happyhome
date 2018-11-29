import React,{Component} from 'react';
import axios from 'axios'
export class Overseas extends Component{
	componentWillMount(){
		axios.post("api/design/homecases?page=1&size=20")
		.then((res)=>{
			console.log(res.data.result.list)
		})
	}
	render(){
		return <div>海外房子</div>
	}
}


export default Overseas;