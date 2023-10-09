// LA FIESTA ABURRIDA

/*ENTRADA: comienza con un número que indica la cantidad de gente a la que Tinín no conoce en la fiesta en la que está. A continuación viene una línea por cada una de esas personas en la que se presenta indicando su nombre: "Soy Lotario". La línea siempre tendrá el mismo formato; una primera palabra "Soy" seguida del nombre de la persona que será simple (no será un nombre compuesto por varias palabras) y formado por como mucho 100 letras del alfabeto inglés.*/

/*SALIDA: Para cada persona que se le aproxima, se debe escribir la cadena "Hola, [nombre].".*/

/* 
   INPUT:
    3
    Soy Lotario
    Soy Aldonza
    Soy Ender
   OUTPUT:
    Hola, Lotario.
    Hola, Aldonza.
    Hola, Ender.
*/

ficheros = ["/Users/nacho/js/challenges/doc.txt"]; //PUEDES PONER MULTIPLES CASOS DE PRUEBA SI QUIERES , UNO POR FICHERO

const SALUDO = "Hola, ";

const procesar = (contenido) => {
  
  input = contenido.trim().split("\n");
  let numDesconocidos = Number(input.shift());
  
  for (let i = 0; i < numDesconocidos; i++) {
    const [, nombre] = input[i].split(" ");
    if (nombre.length >= 100)
      throw Error("Nombre demasiado largo");
    console.log(`${SALUDO}${nombre}.`);
  }
};

ficheros.forEach((fichero) => {
  fetch(fichero) // CARGA EL FICHERO 
    .then((respuesta) => respuesta.text()) // SACA EL TEXTO
    .then(procesar); // PASA EL TEXTO A LA FUNCION PROCESAR
});
