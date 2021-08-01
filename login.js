var username = document.getElementById('username');
var button = document.getElementById('button');
var password = document.getElementById('password')

button.addEventListener('click', saveUsername);


function saveUsername(){
    if((username.value != '') && (password.value != '')) {
        button.href = 'index.html'
        var usernameLogin = username.value;
        console.log(usernameLogin)
        localStorage.setItem('username', usernameLogin)
    }   
}

