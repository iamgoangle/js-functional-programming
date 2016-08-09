var product = {
	name: "Banana testing",
	getProduct: function (price) {
		return `${this.name} ${price}`
	}
}

var obj = {
	name: "Golf product"
}

console.log(product.getProduct(10)); // Banana testing 10
console.log(product.getProduct.call(obj, 1000)); // Golf Product 1000
console.log(product.getProduct.bind(obj, 1000)); // [Function: bound]
var bb = product.getProduct.bind(obj, 1000);
console.log(bb()); // Golf Product

// call(specific this object, params, ...) seperate with comma
