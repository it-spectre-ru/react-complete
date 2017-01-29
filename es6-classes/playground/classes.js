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

class Child extends Person {
	constructor (name, age, like) {
		super(name, age);
		this.like = like;
	}
	getGreeting () {
		return `!!!! ${this.name} and i like ${this.like}`;
	}
}

class Baby extends Person {
	getGreeting () {
		return `whaaaaaaaaaa`;
	}
}

var me = new Person('andrew', 22);
console.log(me.getGreeting());

var anonymous = new Child('mike', 4, 'cars');
console.log(anonymous. ());

var baby = new Baby();
console.log(baby.getGreeting());