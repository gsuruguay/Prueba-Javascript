/**
 * On this module you should write your answer to question #1.
 * This file would be executed with:
 * $ node scritp.js
 */

function cantidadFormasParaSubir(cantidadEscalones){
    if (cantidadEscalones < 0) {
        console.log(`No puedes introducir escalones con números negativos`);
    }else{
        let formasSubir = (cantidadEscalones < 3) ? cantidadEscalones : (cantidadEscalones-1) + (cantidadEscalones-2);
        console.log(`Hay ${formasSubir} formas de subir la escalera de ${cantidadEscalones} escalones`);
    }
}

cantidadFormasParaSubir(15);
cantidadFormasParaSubir(-4);
cantidadFormasParaSubir(2);
cantidadFormasParaSubir(100);
cantidadFormasParaSubir(1);
cantidadFormasParaSubir(0);
