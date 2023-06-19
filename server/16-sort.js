//1
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log('sort',months);

//2
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a-b); //para ordenar de menor a mayor
console.log('sort',numbers);

//3
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
console.log('sort',words);

//4
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b) => b.total - a.total);
console.log('sort',orders);

