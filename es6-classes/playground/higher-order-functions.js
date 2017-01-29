// function one(name, location) {
// 	console.log(name, location);
// }
//
// function two() {
// 	console.log('Arg: ', arguments);
// 	one.apply(undefined, arguments);
// }
//
// two('Andrew', 'San-diego');
//
// two.apply(undefined, ['jen', 'san']);

var add = (a, b) => a + b;
var square = (a) => a * a;

var callAndLog = (func) => {
	return function() {
		var res = func.apply(undefined, arguments);
		console.log('result ' + res);
		return res;
	}
};

console.log(add(99, 1));

var addAndLog = callAndLog(add);
console.log(addAndLog(144, -43));

var squareAndLog = callAndLog(square);
squareAndLog(5);