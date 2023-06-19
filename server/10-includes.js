const pets = ['cat', 'dog', 'bat'];


let includeInArray = false;

//ejemplo 1
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog'){
        includeInArray= true;
        break;
    }
}

console.log('includeInArray',includeInArray);


//ejemplo 2 => en includes se le pasa directamente el elemento que se esta buscando.
const rta= pets.includes('dog');
console.log('includeInArray rta' ,rta);



//reto
function filterByTerm(array, term) {
    return  array.filter(item => {
        return item.includes(term);
      }) 
    
  }

  filterByTerm(["ana", "santi", "nico", "anastasia"],  "ana") ;
  


