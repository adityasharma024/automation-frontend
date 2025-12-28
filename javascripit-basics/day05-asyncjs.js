// Asynchrous JavaScript
// Asynchronous JavaScript allows the program to continue executing while waiting for an operation to complete.
// This is useful for operations that take time, such as fetching data from a server or reading files.
// Example of asynchronous code using setTimeout
console.log("Start"); // Synchronous code
setTimeout(()=>{
    console.log("This is asynchronous code executed after 2 seconds"); // This will execute after 2 seconds
},2000);
console.log("End");  // Synchronous code
// Example of asynchronous code using Promises
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data={name:"Aditya",age:25};
            resolve(data); // Resolve the promise with data
        },3000);
    });
}
fetchData().then(data=>{  // Handle the resolved data
    console.log("Data fetched:",data);
}).catch(error=>{
    console.error("Error fetching data:",error);
});

// Example of asynchronous code using async/await
async function getData(){
    try{
        const data=await fetchData(); // Wait for the promise to resolve
        console.log("Data received using async/await:",data);
    }catch(error){
        console.error("Error in async/await:",error);
    } 
}
getData(); // Call the async function

// Example of fetching data from an API using async/await
async function fetchUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const users=await response.json();
        console.log("Users fetched from API:",users);
    }catch(error){
        console.error("Error fetching users from API:",error);
    }                

}
fetchUsers(); // Call the function to fetch users

