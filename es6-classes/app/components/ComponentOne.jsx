import React from 'react';

var ComponentOne = React.createClass({
	getInitialState: function() {
		return {
			count: this.props.count
		};
	},
	getDefaultProps: function() {
		return {
			count: 22
		};
	},
	propTypes: {
		count: React.PropTypes.number
	},
	render: function() {
		return (
			<div>
				<h3>component one using React.createClass</h3>
				<p>Current count: {this.state.count}</p>
			</div>
		);
	}
});

export default ComponentOne;