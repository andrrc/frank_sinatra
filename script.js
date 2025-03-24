const imgDisco = document.getElementById("img-disco");
const audioMusic = document.getElementById("audio-music");

imgDisco.addEventListener("click", ativarMusica);

var StartMusic = 0;
function ativarMusica() {
  if ((StartMusic == 0)) {
    audioMusic.play();
    imgDisco.style.animation = "spin 5s linear infinite";
    StartMusic = 1;
  } else {
    audioMusic.pause();
    imgDisco.style.animation = "none";
    StartMusic = 0;
  }
}
