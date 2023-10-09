// MODIFICACION DE TABLAS
/*ENTRADA: 
  4 5 3
  2 0 3 1
  0 1 2 -1
  2 1 1 2
  0 0 0
*/

/* SALIDA: 
  0 0 1 0 0
  -1 0 3 0 0
  -1 0 1 0 0
  0 0 1 0 0
*/


const procesar = contenido => {
  const input = contenido.trim().split("\n")
  const [filas,columnas,mods] = input.shift().split(" ").map(Number)
  input.pop()
  console.log(input)
  
let tabla = new Array(filas).fill(0).map(() => new Array(columnas).fill(0));
console.log(tabla)
  for(let i = 0; i < mods;i++){
  const [columna,desdeF,hastaF,num] = input[i].split(" ").map(Number)
  let j = 0;
    for(let j = desdeF;j <= hastaF;j++){
      tabla[j][columna] += num
    }
  }
  let tablaResultado = "";

for (let i = 0; i < filas; i++) {
  tablaResultado += tabla[i].join(" ") + "\n";
}

console.log(tablaResultado);
  


}


ficheros = ["/Users/nacho/js/challenges/doc.txt"];

ficheros.forEach((fichero) => {
  fetch(fichero) //CARGA EL FICHERO
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesar); //LO ENVIA A LA FUNCION PROCESAR
});