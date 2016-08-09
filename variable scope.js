// local
function test () {
	var name = "Teerapong Singthong";
	console.log(name);
}

//test();

// global
var a1 = "Teerapong Singthong";
function getName () {
	console.log(a1);
}

//getName();

// Hoisting / Automatically global scope
function getT () {
	a2 = "bb";
}
getT();
console.log(a2);

/**
 * The lifetime of a JavaScript variable starts when it is declared.

	Local variables are deleted when the function is completed.

	Global variables are deleted when you close the page.
 */
