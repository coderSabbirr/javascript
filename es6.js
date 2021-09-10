
// arrow function
const getResult = () => 55;
const addsixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addMulti =(x ,x ,y) => x + y + z;

const doMath = (num1, num2) => {
    const sum =  num1 + num2;
    return sum;
}

// spread oparator
const  number =[52, 20 , 60 ,40 ,60 , 50, 50, 90,]

const newNumber = [...number];
number.push(85)
number.push(89)
number.push(75)
// console.log(number);
// console.log(newNumber);



// create a new array from an older array and add an element 

const currentNumber =[...number,60,45,68]
console.log(number);
console.log(newNumber);
console.log(currentNumber);