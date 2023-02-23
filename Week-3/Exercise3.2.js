/*
 * Q3.2. Create 3 simple functions where call, bind and apply are used. The intention of this exercise is to
 * understand how they work and their differences.
 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    printName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
    hobby: function(hobby){
        console.log(this.firstName + ' ' + this.lastName, "has a hobby of", hobby);
    }
};

person.printName();// Prints "John Doe".

const printFullName = person.printName;// Scope of this is set to global
printFullName();// returns undefined undefined;
printFullName.bind(person)();// Binds the this value to the object person. Prints "John Doe". 

printFullName.call(person);// Calls the function with this value set to be the person object. Prints "John Doe".

person.hobby("playing football");// Prints "John Doe has a hobby of playing football"

const printHobby = person.hobby;
printHobby("playing football");// returns "undefined undefined has a hobby of playing football"
printHobby.apply(person, ["playing football"]);// Appy is similar to call, just accepts arguments in array for, returns "John Dor has a hobby of playing football"