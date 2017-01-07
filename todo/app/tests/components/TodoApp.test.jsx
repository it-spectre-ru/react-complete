var React = require ('react');
var ReactDOM = require ('react-dom');
var expect = require ('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var TodoApp = require ('TodoApp');

describe ('TodoApp', () => {
	it ('should exist', () => {
		expect (TodoApp).toExist ();
	});

	it ('should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'testText';
		var todoApp = TestUtils.renderIntoDocument (<TodoApp/>);

		todoApp.setState ({todos: []});
		todoApp.handleAddTodo (todoText);

		expect (todoApp.state.todos[0].text).toBe (todoText);
	});

	it ('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 21,
			text: 'some-text',
			completed: false
		};
		var todoApp = TestUtils.renderIntoDocument (<TodoApp/>);
		todoApp.setState ({todos: [todoData]});

		// check that todos first item has completed value of false
		expect (todoApp.state.todos[0].completed).toBe (false);
		// call handleToggle with 21
		todoApp.handleToggle(21);
		// verify that value changed
		expect (todoApp.state.todos[0].completed).toBe (true);
	});
});
