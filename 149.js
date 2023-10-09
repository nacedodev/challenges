// SAN FERMINES

/*ENTRADA: onsta de una serie de casos de prueba, cada uno en una línea. El primer número de la misma indica el número de toros que intervienen en la carrera (n ≥ 1). A continuación aparece un entero por cada uno de los toros, indicando la velocidad a la que correrá ese toro (recuerda, es velocidad constante). La velocidad es siempre positiva y no excede 109.*/

/* SALIDA: Para cada caso de prueba se mostrará una línea en la que aparecerá la velocidad a la que deberán ir los corredores expertos para mantener el espectáculo.*/

/* 
   INPUT:
    7 1 9 8 7 10 3 12
    1 10
   OUTPUT:
    12
    10
*/


const procesar = (contenido) => {
  input = contenido.trim().split("\n");
  const casos = input.map((linea) => linea.split(" ").map(Number));
  
  console.log(input)

  let maxV = -Infinity;

  for (let i = 0; i < casos.length; i++) {
    if (casos[i].some(velocidad => velocidad > Math.pow(10, 9)))
      throw Error("Velocidad de la luz excedida");
    maxV = Math.max(...casos[i]);
    console.log(String(maxV));
  }
};

ficheros = ["/Users/nacho/js/challenges/doc.txt"];

ficheros.forEach((fichero) => {
  fetch(fichero) //CARGA EL FICHERO
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesar); //LO ENVIA A LA FUNCION PROCESAR
});
