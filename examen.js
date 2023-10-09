"use strict";

// Crear un objeto para almacenar los jugadores por equipo
const equipos = {};

// let ficheros = ['d1.txt', 'd2.txt', 'd3.txt']
let ficheros = ['/Users/nacho/js/challenges/doc.txt'];

// Carga de ficheros de datos de entrada
ficheros.forEach(fichero => {
    fetch(fichero)   // Carga el fichero
        .then(respuesta => respuesta.text())   // Saca el texto
        .then(funcion1)   // Pasa el texto a funcion1
});

function funcion1(entrada) {
    if (!entrada) throw 'El fichero está vacío.';

    // Dividir la entrada en líneas primero
    const lineas = entrada.split('\n');

    // Luego, para cada línea, dividir por comas y procesar los datos
    lineas.forEach(linea => {
        // Eliminar espacios en blanco al principio y al final de la línea
        linea = linea.trim();
        
        // Verificar si la línea está vacía después de eliminar espacios en blanco
        if (linea === '') {
            return; // Ignorar líneas vacías
        }

        const datos = linea.split(',');
        if (datos.length !== 2) {
            console.error('Error en el formato de línea:', linea);
            return; // Saltar esta línea y continuar con la siguiente
        }
        const nombreEquipo = datos[0].replace(/"/g, '').trim(); // Eliminar comillas y espacios en blanco
        const nombreJugador = datos[1].replace(/"/g, '').trim();

        // Verificar si el equipo ya existe en el objeto equipos
        if (!equipos[nombreEquipo]) {
            equipos[nombreEquipo] = []; // Si no existe, crea una nueva lista de jugadores
        }

        // Agregar el jugador a la lista de jugadores del equipo
        equipos[nombreEquipo].push(nombreJugador);
    });
    // Imprimir la lista de jugadores por equipo
    for (const equipo in equipos) {
        if (equipos.hasOwnProperty(equipo)) {
            const jugadores = equipos[equipo].join(', ');
            console.log(`${equipo}: ${jugadores}`);
        }
    }
  console.log(equipos)
}
