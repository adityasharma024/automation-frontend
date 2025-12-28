//DOM Manipulation
//Selecting Elements
// Accessing elements using API methods

/* HTML Structure:
<button id="load">Load Users</button>
<ul id="list"></ul> */
const loadButton=document.getElementById('load');
const userList=document.getElementById('list');
loadButton.addEventListener('click',async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await res.json();
    userList.innerHTML='';
    users.forEach(user=>{
        const li=document.createElement('li');
        li.textContent=`${user.name} (${user.email})`;
        userList.appendChild(li);
    });
});