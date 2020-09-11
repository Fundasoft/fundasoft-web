
window.addEventListener("load", function () {
    var destino = window.location.href;

    if (destino.indexOf("?nosotros") > 0) {
        document.getElementById("idNosotros").scrollIntoView(true);
    } 
    else if (destino.indexOf("?areas") > 0){
        document.getElementById("idAreas").scrollIntoView(true);
    }
    else if (destino.indexOf("?canales") > 0){
        document.getElementById("idCanales").scrollIntoView(true);
    }
    else if (destino.indexOf("?plataforma") > 0){
        document.getElementById("idPlataforma").scrollIntoView(true);
    }
    else if (destino.indexOf("?comunidad") > 0){
        document.getElementById("idComunidad").scrollIntoView(true);
    }
    else if (destino.indexOf("?contacto") > 0){
        document.getElementById("idContacto").scrollIntoView(true);
    }
    else{
        document.getElementById("idHome").scrollIntoView(true);
    }
    
});