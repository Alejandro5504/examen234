
//leer HTML
const FRASE1 = document.getElementById("primera");
const FRASE2 = document.getElementById("segunda");

function comprobar() {


    //guardar y convertir datos de HTML  

    let frase1 = (FRASE1.value);
    let frase2 = (FRASE2.value);

    //conseguir frases sina acentos
    let f1Sacentos = eliminar(frase1);
    console.log(f1Sacentos);
    let f2Sacentos = eliminar(frase2);
    console.log(f2Sacentos);

 

    let resultado =  contarVocalesAmbas(f1Sacentos, f2Sacentos);
    console.log(resultado.frase1);
    console.log(resultado.frase2);

   document.getElementById("cantidad").innerHTML =  `Vocales frase 1: ${resultado.frase1} <br> Vocales frase 2: ${resultado.frase2}`;
   
}

function eliminar(frases) {
    return frases
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") //quitar acentos
        .replace(/\s+/g, "") // quitar espacios
        .toLowerCase();
}


//contar ambas frases por separado y devolver ambas
function contarvocales(frase) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];//array para comparar
    let contador = 0;//contador

    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

function contarVocalesAmbas(f1Sacentos, f2Sacentos) {
    return {
        frase1: contarvocales(f1Sacentos),
        frase2: contarvocales(f2Sacentos)
    };
}









