var img = document.getElementById('img-div');
var basura = document.getElementById('hover');
basura.addEventListener("click", fadeImageIn);

function fadeImageIn() {
    img.innerHTML="<img src="+'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254'+' />';
}