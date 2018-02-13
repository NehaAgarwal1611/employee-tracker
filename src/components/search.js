import React, {Component} from 'react';

export default class Search extends Component {
	render() {
		return(
			<div className='searchBar'>
				<form>
					<input type="text" placeholder="Enter Employee's Name" />
				</form>
			</div>
		)
	}
}