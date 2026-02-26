let isLogin=true;

window.onload=function(){
setTimeout(()=>{
document.getElementById("splash").style.display="none";
document.getElementById("auth").style.display="flex";
},3000);
};

function toggleAuth(){
isLogin=!isLogin;
document.getElementById("authTitle").innerText=isLogin?"Login":"Register";
document.querySelector(".auth-box button").innerText=isLogin?"Login":"Register";
document.getElementById("toggleAuth").innerText=isLogin?"Don't have account? Register":"Already have account? Login";
}

function login(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(!user || !pass){
alert("Enter details");
return;
}

if(isLogin){
let storedUser=localStorage.getItem("user");
let storedPass=localStorage.getItem("pass");

if(user===storedUser && pass===storedPass){
startApp();
}else{
alert("Invalid Login");
}
}else{
localStorage.setItem("user",user);
localStorage.setItem("pass",pass);
alert("Registered Successfully");
toggleAuth();
}
}

function startApp(){
document.getElementById("auth").style.display="none";
document.getElementById("app").style.display="block";
}

function logout(){
document.getElementById("app").style.display="none";
document.getElementById("auth").style.display="flex";
}

function openMenu(){
document.getElementById("sidebar").style.left="0";
}

function closeMenu(){
document.getElementById("sidebar").style.left="-250px";
}

function showSection(id){
document.querySelectorAll(".section").forEach(sec=>sec.classList.remove("active"));
document.getElementById(id).classList.add("active");
closeMenu();
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}