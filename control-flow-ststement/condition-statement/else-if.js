
const prompt = require('prompt-sync')();

let score = prompt("enter the grade: ");

if (score >= 90) {
    console.log("grade: A");
} else if (score >= 80) {
    console.log("grade:B");
}else if (score >= 70) {
    console.log("grade:c");
} else if (score >= 60) {
    console.log("grade:D");
} else {
    console.log("grade: F");

}