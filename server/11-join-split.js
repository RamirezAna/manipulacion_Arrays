const elements = ["Fire", "Air", "Water"];

//ejemplo 1 
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('for ', rtaFinal);

//ejemplo 2
const rta= elements.join('--')
console.log('join ', rta);

//split para separar de acuerdo a un patron.
//join para unir de acuerdo a un patron.
const title = 'Curso de manipulacion de arrays';
const titleFinal =title.split(' ').join('-').toLowerCase();  

console.log(titleFinal);





// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL 
// en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).
// Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

// title: Un String con el título.
// Dentro del cuerpo de la función parseToURL debes escribir tu solución.

// Ejemplo 1:

// Input: "La forma de correr Python"
// Output: "la-forma-de-correr-python"
 

// export function parseToURL(title) {
//     // Tu código aquí 👈
//     return title.toLowerCase().replace(/ /g, "-");
//   }
    
