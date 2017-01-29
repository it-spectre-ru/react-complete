import React from 'react';

class ComponentTwo extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			count: props.count
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

ComponentTwo.defaultProps = {
	count: 789
};

ComponentTwo.propTypes = {
	count: React.PropTypes.number
};

export default ComponentTwo;