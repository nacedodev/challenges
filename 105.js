// VENTAS

/* ENTRADA: El programa recibirá una lista de semanas a evaluar. Cada semana constará de un valor para cada día. El *número de semanas es indeterminado. El programa terminará de ejecutarse cuando para el primer día de la semana se *indique una venta de -1.
*/

/* SALIDA: Para cada caso de prueba, el programa escribirá una línea conteniendo dos días de la semana (MARTES, *MIERCOLES, JUEVES, VIERNES, SABADO o DOMINGO). El primero indicará el día de más ventas y el segundo el de menos. *Después se indicará un SI si el domingo se realizaron más ventas que la media semanal, y NO en caso contrario. Las *tres palabras se separarán entre ellas por un espacio.
*Si hay empate en alguno de los valores de ventas mínimo y máximo, se especificará EMPATE.
*/

/* ANALISIS
  INPUT:
    martes: NUMBER
    miercoles: NUMBER
    jueves: NUMBER
    viernes: NUMBER
    sabado: NUMBER
    domingo: NUMBER
  OUTPUT:
    analisis: STRING
    
    EJEMPLO:
    INPUT:
      185.50
      250.36
      163.45
      535.20
      950.22
      450.38
      -1    
    OUTPUT:
      SABADO JUEVES SI
*/

ficheros = ["/Users/nacho/js/challenges/doc.txt"]

const DOMINGO = 5

const diaSemana = {
  0: "MARTES",
  1: "MIERCOLES",
  2: "JUEVES",
  3: "VIERNES",
  4: "SABADO",
  5: "DOMINGO"
}


const procesar = contenido => {
  input = contenido.trim().split("\n").map(Number)
  const numDias = input.findIndex(n => n === -1)
  input.pop()
  
  if(numDias % 6 !== 0)
    throw Error("Los valores de entrada deben de coincidir con semanas completas")
  
  const maxVenta = Math.max(...input)
  const minVenta = Math.min(...input)
  const diaMaxVenta = diaSemana[input.findIndex(n => n === maxVenta)]
  const diaMinVenta = diaSemana[input.findIndex(n => n === minVenta)]
  const mediaSemanal = input.reduce((total, valor) => total + valor,0) / input.length
  console.log(mediaSemanal)
  
  
  console.log(`${diaMaxVenta} ${diaMinVenta} ${input[DOMINGO] > mediaSemanal ? "SI" : "NO"}`)
  
}

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A PROBABILIDAD
})

    

