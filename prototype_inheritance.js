/**
 * Inherit concept and overide method
 *
 */

// simple case
var baseClass = {
	fullname: "Teerapong Singthong",
	num: 2,
	sumNum : function (b) {
		return this.num + b;
	}
}

console.log(baseClass.sumNum(3));

// extend from baseClass
var subClass = Object.create(baseClass);
subClass.num = 10;

console.log(subClass.sumNum(5));

/**
 * Creating a prototype
 *
 */

function Person(first, last, age, eyecolor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyecolor;
}

// Adding new property to prototype
Person.prototype.nationality = "Thailand";
Person.prototype.run = function () {
	return "Go go";
}

// Instance object and extend from Prototype
var me = new Person("Teerapong", "Singthong", 20, "Brown");

// Adding method to sub-class
me.info = function () {
	return this.firstName;
}

console.log(me.info());
