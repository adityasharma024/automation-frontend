//Closures
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// This allows the inner function to remember the environment in which it was created.
// Example of a closure
function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);

    }
}
const newFunction=outerFunction("outside");
newFunction("Insider");
// Another example of closure
function makeCounter(){
    let count=0;
    return function inner(){
        count++;
        return count;
    }
    
}
const counter=makeCounter();
console.log(counter())


// Closure with arrow function
const makeAdder=(x)=>{
    return (y)=>{
        return x + y;

    }
}
const add5=makeAdder(5);
console.log(add5(10)); //15
console.log(add5(20)); //25

const add10=makeAdder(10);
console.log(add10(10));

// Closure to create private variables
function Person(name){
    let age=25; // private variable
    this.name=name;
    this.getAge=function(){
        return age;
    }
}
const person1=new Person("Aditya");
console.log(person1.name); // Aditya
console.log(person1.getAge()); // 25
// console.log(person1.age); // undefined (age is private)