
const buttton = document.getElementById('ubahfoto');
const h1 = document.getElementById('foto');

const gambar = document.querySelector("img");

buttton.addEventListener("click", gantiFoto);

function gantiFoto(){
    if(gambar.getAttribute("src") == "pfp2.jpg")
        gambar.setAttribute("src", "pfp1.png");
    else if(gambar.getAttribute("src") == "pfp1.png"){
        gambar.setAttribute("src", "pfp2.jpg");
        gambar.setAttribute("alt", "gambar2");
    }
}