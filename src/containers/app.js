import React, {Component} from 'react';

export default class App extends Component {
	cnstructor() {
		this.state = {
			employees: {}
		}
	}
	componentDidMount(){
		fetch('src/data/employeeList.json')
			.then((response) => response.json())
			.then((responseJson) => console.log(responseJson))
			.catch(() => console.log("error in fetching data"));
	}
	render() {
		return (
			<h1>Hey!</h1>
		)
	}
}