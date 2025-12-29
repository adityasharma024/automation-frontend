//The Event Loop is a mechanism in JavaScript that handles asynchronous operations by 
// coordinating the Call Stack, Web APIs, Callback Queue, and Microtask Queue.
//JS ek time pe ek hi kaam karta hai.
//Jo kaam time leta hai (API, timer), usko side me rakh deta hai.
// Components:
// Call Stack → JS ka execution area
// Web APIs → Browser async kaam karta hai
// Microtask Queue → Promises (then, await)
// Callback Queue → setTimeout, events
console.log("Start"); // Synchronous code
setTimeout(()=>{
    console.log("This is from setTimeout"); // Callback Queue
},0);

Promise.resolve("This is from Promise").then(res=>{
    console.log(res); // Microtask Queue
});
console.log("End"); // Synchronous code

//Execution Order:
// 1. Call Stack: "Start" → "End"
// 2. Microtask Queue: Promise resolution
// 3. Callback Queue: setTimeout