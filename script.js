const imgDisco = document.getElementById('img-disco');
const audioMusic = document.getElementById('audio-music');

imgDisco.addEventListener('click',ativarMusica);

function ativarMusica(){
    console.log("AODIAO")
    audioMusic.play();
    imgDisco.style.animation = "spin 5s linear infinite";
}