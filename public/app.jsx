var GreeterMessage = React.createClass( {
	render: function () {
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>hello {name} ...</h1>
				<p>{message}</p>
			</div>
		);
	}
} );

var GreeterForm = React.createClass( {
	onFormSubmit: function ( e ) {
		e.preventDefault();

		var name = this.refs.name.value;

		if (name.length > 0 ) {
			this.refs.name.value = '';
			this.props.onNewName(name);
		}
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/>
				<button>Set name</button>
			</form>
		);
	}
} );


var Greeter = React.createClass( {

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

	handleNewName: function ( name ) {
		this.setState({
			name: name
		});
	},

	render: function () {
		var name = this.state.name;
		var msg = this.props.msg;
		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
} );

var firstName = 'Andrew';
var message = 'message!!!!';

ReactDOM.render(
	<Greeter name={firstName} msg={message}/>,
	document.getElementById( 'app' )
);