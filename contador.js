const readline = require('readline'); // Inportamos el modulo readline

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // creamos la interfas para leer y mostrar en la terminal


rl.question('bros, ingresa una oracion : ', (texto) => {  // pedimos el texto al usuario

    texto = texto.toLowerCase();                  // combertimos todo a minusculas
    texto = texto.replace(/[.,:;;!?]/g, '');      // aqui iliminamos signos de puntuacion

    const palabras = texto.split(/\s+/);          // aqui dibidimos el texto en palabras

    const frecuencias = new Map();                 // con map (guardamos la palabra y su cantidad)

    for (const palabra of palabras) {
        if (frecuencias.has(palabra)){
            frecuencias.set(palabra, frecuencias.get(palabra) + 1);
        } else {
            frecuencias.set(palabra, 1)
        }
    }

    // el codigo de romel
    const resultado = [...frecuencias.entries()]; // convierte el map en un arreglo 
    resultado.sort((a,b) => b[1] - a[1]); // ordena de mayor a menor frecuencia 

    console.log('\nfrecuencia de palabras:  '); // titulo del reporte  
    console.log('-----------------');

    for (const [palabra, cantidad] of resultado){
        console.log(palabra + ': ' + cantidad); // muestra cada palabra y su cantidad
    }

    rl.close(); // cierra la interfas de entrada

});
