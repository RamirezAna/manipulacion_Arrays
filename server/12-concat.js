
const elements = [1,1,2,2];
const othertselements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othertselements.length; index++) {
    const element = othertselements[index];
    newArray.push(element);
}

console.log('for', newArray);

//2
const rta = elements.concat(othertselements);
console.log('concat', rta);

//3
const rta2 =  [...elements, ...othertselements];
console.log('concat rta2', rta2);

//4
elements.push(...othertselements);
console.log('elements ', elements);

