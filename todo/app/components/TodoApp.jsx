var React = require ('react');
var TodoList = require ('TodoList');

var TodoApp = React.createClass ({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk to gym'
				},
				{
					id: 2,
					text: 'be awesome!'
				}, {
					id: 3,
					text: 'one!'
				}, {
					id: 4,
					text: 'play'
				}
			]
		}
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoApp;