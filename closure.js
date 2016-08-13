function foo () {
	var localOfFoo = "Teerapong Singthong";

	return function bar () {
		var localOfBar = "Golf";

		console.log(localOfFoo + ' - ' + localOfBar);
	}
}

var test = foo();
console.log(test);

// we can call test again, actually it should be destroyed
test();
test();
