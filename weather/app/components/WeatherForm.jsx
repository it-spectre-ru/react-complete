var React = require( 'react' );

var WeatherForm = React.createClass( {
	render: function () {
		return (
			<div>
				<form action="">
					<input type="text"/>
					<button>Get weather</button>
				</form>
			</div>
		);
	}
} );

module.exports = WeatherForm;