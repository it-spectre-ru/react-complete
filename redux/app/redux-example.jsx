var redux = require('redux');

console.log('start redux example');

// pure function
function add(a, b) {
	return a + b;
}


var a = 3;
function add(b) {
	return a + b;
}


var result;
function add(a, b) {
	result = a + b;
	return result;
}

function add(a, b) {
	return a + b + new Date().getSeconds();
}


function changeProp(obj) {
	return {
		...obj,
		name: 'jen'
	};
	//obj.name = 'jen';
	//return obj;
}

var startingVaule = {
	name: 'andrew',
	age: 26
}

var res = changeProp(startingVaule);
console.log(startingVaule);
console.log(res);
