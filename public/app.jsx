var GreeterMessage = React.createClass( {
	render: function () {
		return (
			<div>
				<h1>h1 tag/</h1>
				<p>paragraph tag/</p>
			</div>
		);
	}
} );

var GreeterForm = React.createClass( {
	render: function () {
		return (
			<form>
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

	onButtonClick: function ( e ) {
		e.preventDefault();

		var nameRef = this.refs.name;
		var name = nameRef.value;
		nameRef.value = '';

		if ( typeof  name === 'string' && name.length > 0 ) {
			this.setState( {
				name: name
			} );
		}
	},

	render: function () {
		var name = this.state.name;
		var msg = this.props.msg;
		return (
			<div>

				<GreeterMessage/>

				<GreeterForm/>

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