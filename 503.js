/* CONTAMOS CON 2 DADOS , ENTRE 4 Y 20 CARAS*/
// TIRA LOS DADOS CUANDO HACE UN AUGURIO
// DEPENDE DE EL NUMERO DE CARAS , EL SUCESO ES MAS O MENOS PROBABLE
// 

//LAPLACE = CASOS PROBABLES / CASOS POSIBLES
//MOSTRAR LOS CASOS MAS PROBABLES Y LOS MENOS PROBABLES
//PARA CADA CASO DE PRUEBA SE MOSTRARA LA SUMA MAS PROBABLE , SI FUESEN VARIAS IGUALMENTE PROBABLES , SE IMPRIMEN TODAS , IGUAL PARA LAS MENOS PROBABLES

/*
  INPUT:
    4 , 6 - CARAS DE CADA DADO INTRODUCIDO
  OUTPUT:
  5 6 7
  2 10
    
*/

// 1. ANALISIS
// 2. EJEMPLOS
// 3. ANDAMIO
// 4. PARSEO
// 5. RESOLUCION

ficheros = ["/Users/nacho/js/challenges/doc.txt"]

const probabilidad = (contenido) => {
  
  if (contenido.length === 0) {
        throw new Error("El fichero está vacío");
    }
  
  const dados = contenido.split(",")
  const arrText = dados.map(item => item.trim()).filter(item => item);
  console.log(arrText)
  
  if (arrText.length === 1) {
        throw new Error("El archivo debe contener exactamente dos valores separados por coma");
    }
  
  const d1 = Number(dados[0])
  const d2 = Number(dados[1])
  
  const carasD1 = Array.from({ length: d1 }, (_, i) => i + 1);
  const carasD2 = Array.from({ length: d2 }, (_, i) => i + 1);

  const casosPosibles = d1 * d2;
  const sumaDados = [];

  const probabilidadSumas = [];
  let maxP = -Infinity;
  let minP = Infinity
  let pos = [];
  let posm = []

  for (let i = 0; i < d1; i++) {
    sumaDados.push([]);
    probabilidadSumas.push([]);
    for (let j = 0; j < d2; j++) {
      sumaDados[i][j] = carasD1[i] + carasD2[j];
      probabilidadSumas[i][j]  = (contarSumas(sumaDados, sumaDados[i][j]) /         casosPosibles).toFixed(2);
      
      if (parseFloat(probabilidadSumas[i][j]) > maxP) {
        maxP = parseFloat(probabilidadSumas[i][j]);
        pos = [sumaDados[i][j]]; // Inicializa el array con la nueva suma máxima
      } else if (parseFloat(probabilidadSumas[i][j]) === maxP) {
        pos.push(sumaDados[i][j]); // Agrega la suma a la lista si la probabilidad es igual a la máxima
      } 
    }
}
  
  posm.push(sumaDados[0][0])
  posm.push(sumaDados[d1 - 1][d2 - 1])
  
  console.log(pos.join(', '));
  console.log(posm.join(', '))
};

const contarSumas = (sumaDados, n) => {
  let contador = 0;
  sumaDados.forEach((fila) => {
    fila.forEach((valor) => {
      if (valor === n) {
        contador++;
      }
    });
  });
  return contador;
};

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(probabilidad)		//PASA EL TEXTO A PROBABILIDAD
})