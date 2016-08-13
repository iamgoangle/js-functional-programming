var obj = {
	foo: function () {
		console.log(this);
		console.log(this === obj);
	}
}

// value of this keyword depends on how the function called
// in this case is the "obj" is context of this case
obj.foo(); // return true

// this context is not "obj", it is "golf" context instead
var golf = Object.create(obj);
golf.foo(); // return false

function test () {
	this.name = "Teerapong Singthong";
	console.log(this);
}

test();	// node, global context object in this case window
new test();	// test context
