function Cambiar(){

    let Primernumero = parseInt(document.getElementById("Solicitud").value);

    let Segundonumero = parseInt(document.getElementById("Solicitud2").value);

    let Resultado = Primernumero + Segundonumero;

    let txt = document.getElementById("Parrafo");
    
    txt.innerHTML = "El resultado de la súma de " + Primernumero + " y " + Segundonumero + " es: " + Resultado;

}


function Sumar(){

    let Primernumero = parseInt(document.getElementById("Solicitud").value);

    let Segundonumero = parseInt(document.getElementById("Solicitud2").value);

    let Resultado = Primernumero + Segundonumero;

    let txt = document.getElementById("Parrafo");

    txt.innerHTML = "El resultado de la súma de " + Primernumero + " y " + Segundonumero + " es: " + Resultado;

}