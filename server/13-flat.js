
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    //const array = matriz[i];   
    for (let j = 0; j < matriz.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for ', newArray);

//ejemplo 2
const rta = matriz.flat();
console.log('flat ', rta);



//ejemplo 3 con recursividad
 
function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArrayA = profundidad(matriz);

console.log('recursividad ', newArrayA);

