var Greeter = React.createClass({

	getDefaultProps: function () {
		return {
			name: 'React..',
			msg: 'This is from a component!'
		};
	},

	getInitialState: function () {
		return {
			name: this.props.name
		};
	},

	onButtonClick: function ( e ) {
		e.preventDefault();

		var nameRef = this.refs.name;
		var name = nameRef.value;
		nameRef.value = '';

		if (typeof  name === 'string' && name.length > 0) {
			this.setState({
				name: name
			});
		}
	},

	render: function () {
		var name = this.state.name;
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