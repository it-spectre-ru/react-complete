import React from 'react';

class ComponentTwo extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			count : 1000
		};
	}
	render () {
		return (
			<div>
				<h3>from componentTwo using react.component</h3>
				<p>cout {this.state.count}</p>
			</div>
		);
	}
}

export default ComponentTwo;