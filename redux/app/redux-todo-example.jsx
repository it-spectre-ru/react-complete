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

var store = redux.createStore(reducer);

console.log('state: ', store.getState());


store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'job'
});

console.log('searchText will be \'job\'', store.getState());