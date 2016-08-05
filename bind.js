// nornal case this refer to caller function
var obj = {
    firstname: "Teerapong",
    lastname: "Singthong",
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`
    }
}

console.log(obj.getFullName()); // Teerapong Singthong

// function call function
// there is an error for this case, because this keyword references to top caller
var print = function (fn) {
    console.log(fn());
}

var objTest = {
    firstname: "Teerapong",
    lastname: "Singthong",
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`
    }
}

print(objTest.getFullName); // undefined undefined

// we will solve this case by using bind keyword to let ${this} keyword know
// that where it should be considered
var print = function (fn) {
    console.log(fn());
}

var objTest = {
    firstname: "Teerapong",
    lastname: "Singthong",
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`
    }
}

print(objTest.getFullName.bind(objTest)); // Teerapong Singthong


// Bind keyword use when need borrow properties from another object or function
