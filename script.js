var nameLabel = document.getElementById('nome');
var username = localStorage.getItem('username');
var inputSearch = document.getElementById('inputSearch')

nameLabel.textContent = username

inputSearch.addEventListener('keyup', searchOnSite);

function searchOnSite(){
    if (event.key == "Enter"){
        window.open('error.html', '_blank');
    }
}


