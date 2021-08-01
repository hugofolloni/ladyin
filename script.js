var nameLabel = document.getElementById('nome');
var username = localStorage.getItem('username');
var inputSearch = document.getElementById('inputSearch');
var postsBar = document.getElementById('posts');

nameLabel.textContent = username

inputSearch.addEventListener('keyup', searchOnSite);

function searchOnSite(){
    if (event.key == "Enter"){
        window.open('error.html', '_blank');
    }
}

var publishTextInput = document.getElementById('publishText');
var submitPost = document.getElementById('submit');

submitPost.addEventListener('click', postMessage);

function postMessage(){
    var postText = publishTextInput.value;
    var username = nameLabel.textContent;
    var newPost = document.createElement('div');
    newPost.style.cssText = 'background-color: white; display: flex; flex-direction: column; padding: 20px; border-radius: 10px; margin-bottom: 20px; font-size: 14px;';
    var newLabel = document.createElement('div');
    newLabel.style.cssText = 'display: flex; flex-direction: row; margin-bottom: 10px;';
    var newPhoto = document.createElement('img');
    var nameLabelPost = document.createElement('div')
    newPhoto.src = 'assets/profilepicpng.png';
    newPhoto.style.cssText = 'width: 40px; height: 40px; margin-left: 5px;'
    var newP = document.createElement('p');
    newP.textContent = postText;
    newLabel.appendChild(newPhoto);
    nameLabelPost.appendChild('username');
    newPost.appendChild(nameLabelPost)
    newPost.appendChild(newLabel);
    newPost.appendChild(newP);
    posts.appendChild(newPost);
}

