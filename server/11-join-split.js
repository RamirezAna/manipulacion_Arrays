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

