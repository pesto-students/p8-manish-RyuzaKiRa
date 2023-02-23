/*
 * Q. Create an object called "Teacher" derived from the "Person" class, and implement a method called "teach"
 * which receives a string calledsubject, and prints out:
 * [teacher's name]is now teaching[subject]
 */

var Person = function() {};
Person.prototype.initialize=function(name,age){
    this.name=name;
    this.age=age;
}

// TODO: create the class Teacher and a method teach
var Teacher1 = function() {};
Teacher1.prototype.teach=function(subject){
    console.log(`${this.name} is now teaching ${subject}`);
}

Object.setPrototypeOf(Teacher1.prototype, Person.prototype);
var him = new Teacher1();

him.initialize("Adam",45);
him.teach("Inheritance");