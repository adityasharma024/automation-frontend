// Normal function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Aditya");

// Arrow function expression
const greetArrow=(name)=>{
    console.log("Hello, "+ name + "!");

}
greetArrow("Sharma");


//Scope example
//three scopes: Global, Function, Block
let globalVar= "I am a global variable";
function testScope(){
    let localVar="I am a local variable";
    if(true){
        let blockVar="I am a block variable";
        console.log(blockVar);
    }
    console.log(localVar)
    console.log(globalVar);
}
testScope();