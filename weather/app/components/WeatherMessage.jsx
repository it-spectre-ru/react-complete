var React = require( 'react' );

var WeatherMessage = React.createClass( {
	render: function () {
		return (
			<div>
				<h3>It's it 40 in Olabama</h3>
			</div>
		);
	}
} );

module.exports = WeatherMessage;