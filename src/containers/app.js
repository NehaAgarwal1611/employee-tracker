import React, {Component} from 'react';
import Header from '../components/header';
import Search from '../components/search';
import Filter from '../components/filter';

export default class App extends Component {
	cnstructor() {
		this.state = {
			employees: {}
		}
	}
	componentDidMount(){
		fetch('src/data/config.js')
			.then((response) => response.json())
			.then((responseJson) => console.log(responseJson))
			.catch(() => console.log("error in fetching data"));
	}
	render() {
		return (
			<div className="main">
				<Header />
				<Search />
				<Filter />
			</div>
		)
	}
}