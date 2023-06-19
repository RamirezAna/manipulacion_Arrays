const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1);/**splice quita el elemento al array */
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


//update
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update ={
    id: '🥞',
    changes: {
        price: 200,
        descripcion: 'Con dulces',
    }
}
const productI = productsV2.findIndex(item => item.id ===  update.id);
productsV2[productI] = {
    ...productsV2[productI], //update
    ...update.changes,//update
};
console.log('productsV2', productsV2);


