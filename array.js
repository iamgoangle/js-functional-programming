var myArray = ['teerapong', 'porntheera', 'aomyada'];

// looping over array
myArray.forEach(function (item, index, array) {
	console.log(item);
	console.log(index);
	console.log(array);
});

// revemo last array value
myArray.pop(); // aomyada has been removed

// get first array value
myArray.shift(); // teerapong has been removed

// add to last array
myArray.push('test 02');

// add to front array
myArray.unshift('test 01');

console.log(myArray); // ['test 01', 'porntheera', 'test 02']

// remove item by specific position and add new one
myArray.splice(0, 1, 'Kuay');	// remove porntheera

console.log(myArray);
