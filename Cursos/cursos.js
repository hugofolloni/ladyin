var username = localStorage.getItem('username');
var helloUser = document.getElementById('HelloUser');
console.log(username)

helloUser.textContent = "Olá, " + username 