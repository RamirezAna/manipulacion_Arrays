
const numbers = [1,31,49,29,10,13];

//ejemplo 1
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30){
        rta= element;
        break;
    }
}
console.log('rta ', rta);


//ejemplo 2

const rta2 = numbers.find(item => item === 30);
console.log('rta2 ', rta2);



//ejemplo 3
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  //devuelve el objeto
  const rta3 = products.find(item => item.id === '🌭');
  console.log('rta3 ', rta3);
  
//devuelve la posicion en donde se encuentra
  const rta4 = products.findIndex(item => item.id === '🌭');
  console.log('rta4 ', rta4);