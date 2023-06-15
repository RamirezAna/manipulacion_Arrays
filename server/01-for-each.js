
const letters = ['a', 'b', 'c'];

//--------1
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element)
}

//-------2
letters.forEach(element => console.log('forEach', element));
