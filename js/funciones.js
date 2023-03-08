let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

window.onscroll = function(){
    efectoHabilidades();
}

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("normaiso9001");
        habilidades[1].classList.add("normaiso14001");
        habilidades[2].classList.add("normaiso45001");
        habilidades[3].classList.add("sistemascontraincendios");
        habilidades[4].classList.add("usoymanejodematafuegos");
    }
}