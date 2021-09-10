const products = [
    {name:'laptop',price:10000, brand:'lanovo', color:'silver'},
    {name:'watch',price:3000, brand:'Mi', color:'black'},
    {name:'phone',price:15000, brand:'Onepuls', color:'black'},
    {name:'camera',price:100000, brand:'canon', color:'black'},
    {name:'water Botal',price:1000, brand:'rfl', color:'pink'},
    {name:'perfume',price:180, brand:'fog', color:'lightBlue'},
    {name:'pan',price:10, brand:'pinpoint', color:'red'}
];
// map methods 
const brands = products.map(product => product.brand)
console.log(brands);

const prices = products.map(product => product.price)
console.log(prices);

// foreach methods
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))


products.forEach(product => {
    console.log(product.color);
})

// filter  methods
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const name = products.filter(products => products.name.includes('k'));
console.log(name);

 // find 
 const special = products.find ( product => product.color.includes('black'));
 console.log(special);