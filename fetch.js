
// json > stringify , parse
const student = {
    id:50,
    name:'sabbir',
    age:18
}


const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);



const studentObj = JSON.parse(studentJson);
console.log(studentObj);


 //fetch 
 fetch('url')
 .then( res => res.json)
 .then(data => console.log(data))


// keys ,value 
const keys = Object.keys(student)
const values = Object.values(student)

// for 

const numbers=[50,60,70,90,60,80]
numbers.forEach(num => console.log(num));


// for of on array like object
//loop on an like object useing in


const products = [
    {name:'laptop',price:10000, brand:'lanovo', color:'silver'},
    {name:'watch',price:3000, brand:'Mi', color:'black'},
    {name:'phone',price:15000, brand:'Onepuls', color:'black'},
    {name:'camera',price:100000, brand:'canon', color:'black'},
    {name:'water Botal',price:1000, brand:'rfl', color:'pink'},
    {name:'perfume',price:180, brand:'fog', color:'lightBlue'},
];

const newProduct =  {name:'pan',price:10, brand:'pinpoint', color:'red'}

// copy products array and then add newProduct

const newProducts=[...products,newProduct]

// console.log(newProducts);

// remove phone means create a new array without the

const remaining = products.filter(product => product.name !=='laptop')
console.log(remaining);
