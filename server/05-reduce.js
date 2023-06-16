const totales = [1,2,3,4];

let sum =0;
//realizar con un for
// for (let index = 0; index < totales.length; index++) {
//     const element = totales[index];
//     sum = sum + element;
// }

// console.log('suma '+sum);


// hacer la suma con reduce
//valor acumulado por la función ,  => sum
//valor actual del elemento iterado.,  => item
// índice del elemento iterado.,   => ejecuta la funcion sum + item
// 0  => el estado inicial, como se inicializa la variable sum, en este caso
const rta = totales.reduce((sum, item) => sum+item, 0);
console.log('rta: ', rta);
