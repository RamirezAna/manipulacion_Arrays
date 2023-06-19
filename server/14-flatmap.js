const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]; 

//ejemplo 1
const rta= users.map(user => user.attributes).flat();
console.log('map-flat', rta);

//ejemplo 2
const rta2= users.flatMap(user => user.attributes);
console.log('flatMap', rta2);

//ejemplo 3
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  //aca traemos el valor de starDate en la rta3
const rta3= Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
 
console.log('flatMap-calendars', rta3);


/*RETO*/
// En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método 
// que retorne el número de palabras totales que tiene el array.
// Para solucionarlo vas a encontrar una función llamada countWords que tiene un parámetro de entrada:
// array: Un array de frases
// Dentro del cuerpo de la función countWords debes escribir tu solución.
// Ejemplo:
// Input: [
//   "Beautiful is better than ugly",
//   "Explicit is better than implicit",
//   "Simple is better than complex",
//   "Complex is better than complicated",
// ]


const array = 
    [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ];

  function contar(array){
    return cuenta= array.flatMap(item => item.split(' ')).length;
}

  console.log('contar', contar(array));





