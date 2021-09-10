// array destructuring

const number = [65, 85]
const[x,y] = [65, 85]


function boxify(num1, num2) {
    const num =[num1, num2];
    return num;
}
console.log(boxify(90,100));


const [first, second] = [90,35]

 // object destructuring 
  const {name, age} = {name:'ali', age:14}

  const {name, age} = {name:'ali', age:14}




  const employee = {
      id:'VS Code',
      disignation:'developer',
      machine:'mac',
      languages:['html', 'css', 'js'],
      specification: {
          hieght:60,
          weight:50,
          address:'Dhaka',
          drink:'water',
          watch: {
              color:'black',
              price:500,
              brand:'Mi'
          }
      }
  }


  const {machine,id} = employee;
  const {weight,address} = employee?.specification;
  const {price,brand} = employee.specification.watch;