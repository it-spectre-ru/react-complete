var redux = require('redux');

console.log('start: ');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: []
};
var reducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
store.subscribe(() => {
	var state = store.getState();

	document.getElementById('app').innerHTML = state.searchText;
});

console.log('state: ', store.getState());

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'job'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'job222'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'job3333'
});

