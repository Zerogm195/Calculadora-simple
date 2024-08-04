function CambiarSuma(){

    let cambio = true;

    let textocambio = document.getElementById("Parrafo");
    let textocambio2_5 = document.getElementById("Operacion");
    let textocambio2 = document.getElementById("Boton");
    let textocambio3 = document.getElementById("Operacion_Signo");


    textocambio2_5.innerHTML = "Suma";

    textocambio.innerHTML = "Ingrese 2 números para Sumar";

    textocambio3.innerHTML = "+"

    textocambio2.innerHTML = "Sumar";

    textocambio2.onclick = Sumar;
  
}

function CambiarResta(){

    let cambio = true;

    let textocambio = document.getElementById("Parrafo");
    let textocambio2_5 = document.getElementById("Operacion");
    let textocambio2 = document.getElementById("Boton");
    let textocambio3 = document.getElementById("Operacion_Signo");


    textocambio2_5.innerHTML = "Resta";

    textocambio.innerHTML = "Ingrese 2 números para restar";

    textocambio3.innerHTML = "-"

    textocambio2.innerHTML = "Restar";

    textocambio2.onclick = Restar;
  
}

function CambiarMultiplicacion(){

    let cambio = true;

    let textocambio = document.getElementById("Parrafo");
    let textocambio2_5 = document.getElementById("Operacion");
    let textocambio2 = document.getElementById("Boton");
    let textocambio3 = document.getElementById("Operacion_Signo");


    textocambio2_5.innerHTML = "Multiplicacion";

    textocambio.innerHTML = "Ingrese 2 números para Multiplicar";

    textocambio3.innerHTML = "*"

    textocambio2.innerHTML = "Multiplicar";

    textocambio2.onclick = Multiplicar;
  
}

function CambiarDivision(){

    let cambio = true;

    let textocambio = document.getElementById("Parrafo");
    let textocambio2_5 = document.getElementById("Operacion");
    let textocambio2 = document.getElementById("Boton");
    let textocambio3 = document.getElementById("Operacion_Signo");


    textocambio2_5.innerHTML = "División";

    textocambio.innerHTML = "Ingrese 2 números para Dividir";

    textocambio3.innerHTML = "/"

    textocambio2.innerHTML = "Dividir";

    textocambio2.onclick = Dividir;
  
}


function Sumar(){

    let Primernumero = parseInt(document.getElementById("Solicitud").value);

    let Segundonumero = parseInt(document.getElementById("Solicitud2").value);

    let Resultado = Primernumero + Segundonumero;

    let txt = document.getElementById("Parrafo");

    txt.innerHTML = "El resultado de la súma de " + Primernumero + " y " + Segundonumero + " es: " + Resultado;

}

function Restar(){

    let Primernumero = parseInt(document.getElementById("Solicitud").value);

    let Segundonumero = parseInt(document.getElementById("Solicitud2").value);

    let Resultado = Primernumero - Segundonumero;

    let txt = document.getElementById("Parrafo");

    txt.innerHTML = "El resultado de la resta de " + Primernumero + " y " + Segundonumero + " es: " + Resultado;

}

function Multiplicar(){

    let Primernumero = parseInt(document.getElementById("Solicitud").value);

    let Segundonumero = parseInt(document.getElementById("Solicitud2").value);

    let Resultado = Primernumero * Segundonumero;

    let txt = document.getElementById("Parrafo");

    txt.innerHTML = "El resultado de la multiplicación de " + Primernumero + " y " + Segundonumero + " es: " + Resultado;

}

function Dividir(){

    let Primernumero = parseInt(document.getElementById("Solicitud").value);

    let Segundonumero = parseInt(document.getElementById("Solicitud2").value);

    let Resultado = Primernumero / Segundonumero;

    let txt = document.getElementById("Parrafo");

    txt.innerHTML = "El resultado de la división de " + Primernumero + " y " + Segundonumero + " es: " + Resultado;

}