// Promise: A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to handle asynchronous operations in a more manageable way compared to traditional callback functions.
// Creating a Promise
const myPromise=new Promise((resolve,reject)=>{
    const success=true; // Simulating an operation
    if(success){
        resolve("Operation was successful!"); // Resolve the promise
    }else{
        reject("Operation failed!"); // Reject the promise
    }

});
// Consuming a Promise using then and catch
myPromise.then((message)=>{
    console.log("Success: " + message);
}).catch((error)=>{
    console.error("Error: " + error);
});
// Chaining Promises
myPromise.then((message)=>{
    console.log("First then: " + message);
    return "Data from first then";  
}).then((data)=>{
    console.log("Second then: " + data);
}).catch((error)=>{
    console.error("Error in chain: " + error);
});

// Async/Await: A syntactic sugar over Promises that allows you to write asynchronous code in a synchronous manner.
// Example of async/await

async function asyncFunction(){
    try{
        const result=await myPromise; // Wait for the promise to resolve
        console.log("Async/Await Result: " + result);
    }catch(error){
        console.error("Async/Await Error: " + error);
    }
}
asyncFunction(); // Call the async function
// Example of fetching data from an API using async/await
async function fetchData(){
    try{    
        const response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data=await response.json();
        console.log("Fetched Data:",data);
    }catch(error){
        console.error("Error fetching data:",error);
    }
}
fetchData(); // Call the function to fetch data