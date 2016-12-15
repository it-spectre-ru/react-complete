var Greeter = React.createClass({
	render: function () {

		return React.createElement(
			'h1',
			null,
			'Hello React.CreateElement'
		)

		// return (
		// 	<div>
		// 		<h1>hello...</h1>
		// 		<p>this is from a component...</p>
		// 	</div>
		// );
	}
});

ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);