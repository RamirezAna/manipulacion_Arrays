const items = [1,2,3,4,4];

//ejemplo 1
const rta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
},{})

console.log(rta);

//ejemplo 2
const data = [
    {
      customerName: "Nicolas",
      level: 'low',
    },
    {
      customerName: "Zulema",
      level: 'medium',
    },
    {
      customerName: "Santiago",
      level: 'higth',
    },
    {
      customerName: "Valentina",
      level: 'low',
    },
    {
      customerName: "Lucia",
      level: 'higth',
    },
  ];


 const rta2 = data
 .map(item => item.level)
 .reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
},{})

console.log('rta2: ',rta2);
