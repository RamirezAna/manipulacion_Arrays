const numbers = [1, 4, 3, 5];

//ejemplo 1
let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
        if (element %2 === 0) {
            rta = true;
            break;
        }
}
console.log(rta);

//ejemplo 2
//item = valor iterado , => luego va la condicion
const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);



//ejemplo 3 con objetos
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: false,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: false,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: false,
    },
  ];


  const rta3 = orders.some(item => item.delivered  === true);
  console.log(rta3);


//ejemplo 4 con array de fechas = instalamos libreria de date funtcion
//C:\Users\anar\Desktop\PLatzi\curso_manipulacionAarray_JavaScript
//\curso-manipulacion-de-arrays\server>npm i date-fns

  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 8, 30),
}

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    });
}

console.log('se sobre pone o no: ',isOverlap(newAppointment));
