const form=document.getElementById('loginform');
const usernameInput=document.getElementById('username');
const passwordInput=document.getElementById('password');
const message=document.getElementById('message');
form.addEventListener('submit',function(e){
    e.preventDefault();// Prevent form submission
    if(usernameInput.value===' ' && passwordInput.value===''){
        message.innerText='Please enter username and password.';
    } else {
        message.innerText=`Welcome, ${usernameInput.value}!`;
    }
})