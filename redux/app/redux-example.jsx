var redux = require('redux');

console.log('start redux example');

var stateDefault = {
	name: 'anonymous',
	hobbies: [],
	noobies: []
};

var nextHobbyId = 1;
var nextNoobyId = 1;
var reducer = (state = stateDefault, action) => {
	// state = state || {name: 'Anonymous'};

	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		case 'ADD_HOBBY':
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
				]
			};
		case 'ADD_NOOBIES':
			return {
				...state,
				noobies: [
					...state.noobies,
					{
						id: nextNoobyId++,
						noobby: action.noobby,
						kind: action.kind,
						title: action.title
					}
				]
			};
		default:
			return state;
	}
};

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension()  : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('name is: ', state.name);
	document.getElementById('app').innerHTML = state.name;

	console.log('New state: ', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('current: ', currentState);


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Piter'
});

store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Running'
});

store.dispatch({
	type: 'ADD_NOOBIES',
	noobby: 'noobs_)',
	kind: 'off',
	title: 'Title noobies'
});

store.dispatch({
	type: 'ADD_NOOBIES',
	noobby: 'noobs_)2222222',
	kind: 'off2222222222222',
	title: 'Title noobies2222222222222222222'
});

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'emily'
});
