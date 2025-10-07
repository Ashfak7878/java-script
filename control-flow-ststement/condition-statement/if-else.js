const prompt=require('prompt-sync')();

let temperature =prompt('enter the temperature: ');

// let temperature = 15;

if (temperature > 20) {
    console.log("it's warm outside");
} else {
    console.log("its cool outside");


}

// let age = 1;
// if (age >= 18) {
//     console.log("you can vote");
// }else{
//     console.log("cant vote");
    
// }