var Greeter = React.createClass({

	getDefaultProps: function () {
		return {
			name: 'React..',
			msg: 'This is from a component!'
		};
	},

	onButtonClick: function ( e ) {
		e.preventDefault();
		
		var name = this.refs.name.value;
		alert(name);
	},

	render: function () {
		var name = this.props.name;
		var msg = this.props.msg;
		return (
			<div>
				<h1>hello {name}</h1>
				<p>{msg}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set name</button>
				</form>
			</div>
		);
	}
});

var firstName = 'Andrew';
var message = 'message!!!!';

ReactDOM.render(
	<Greeter name={firstName} msg={message}/>,
	document.getElementById('app')
);