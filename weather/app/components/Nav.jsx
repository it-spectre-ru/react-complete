var React = require( 'react' );
var { Link } = require( 'react-router' );

var Nav = React.createClass( {
	render: function () {
		return (
			<div>
				<h2>Nav component</h2>
				<Link to="/">Get weather</Link>
				<Link to="/about">About</Link>
				<Link to="/examples">Examples</Link>
			</div>

		);
	}
} );

module.exports = Nav;