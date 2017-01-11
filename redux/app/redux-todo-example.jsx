var redux = require('redux');

console.log('start: ');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: []
};
var reducer = (state = stateDefault, action) => {
	return state;
};

var store = redux.createStore(reducer);

console.log('state: ', store.getState());