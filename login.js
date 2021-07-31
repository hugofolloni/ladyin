var username = document.getElementById('username');
var button = document.getElementById('button');

button.addEventListener('click', saveUsername);

function saveUsername(){
    var usernameLogin = username.value;
    localStorage.setItem('username', usernameLogin)
}

