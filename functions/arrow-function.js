//arrow functioin is a shorter syntax for writing functions in js,introduce in ES6(ECMA SCRIPT)



// const  handlesubmit = () =>{
//     //block of code
// }

// ----function deceleration---

// function add(a,b):{
//     add(2,4)
//     console.log(add(2,4));

// }
//arrow function
const add = (a, b) => a + b;
console.log(add(2, 2));

//--single parameter(no parantheses needed)--

const square = x => x * x;
console.log("square of 4:", square(4));

//-- No Parameter(empty parentheses)

const greet = () => console.log("hloo...");
greet();

//--multi-line function
const divide = (a, b) => {

    const result = a / b;
    return result;
}

console.log("division of 10 ,2", divide(10, 2));

