class Person {
	constructor (name = 'Anonymous', age = 33) {
		this.name = name;
		this.age = age;
	}
	getGreeting () {
		return `Hi ${this.name}`;
	}
	getDescription () {
		return `${this.name} is ${this.age} year(s) old`;
	}
	toString () {
		return JSON.stringify(this)
	}
}

var me = new Person('andrew', 22);
console.log(me.getDescription());

var anonymous = new Person();
console.log(anonymous.getDescription());