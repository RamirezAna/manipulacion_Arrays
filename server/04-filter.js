
const words = ['spray', 'limit', 'elite', 'exubetant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length>=6){
        newArray.push(element)
    }
}

console.log('newArray '+newArray);
console.log('words '+words)

//usando filter
const rta = words.filter(item => item.length >=6); 
console.log('rta '+rta)
console.log('words '+words)


///ejemplo 3 usando filter
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const rta3 = orders.filter(item => item.delivered && item.total>=100)
  console.log('rta3', rta3);

  //filtro haciendo un  buscador

  const buscar = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
  }
console.log('este: ',buscar('a'));  //le pasamos que nos pase nombres que tengan la silaba 'Va'

