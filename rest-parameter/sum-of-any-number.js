function sum(...Numbers) {
    return Numbers.reduce((total, num)=> total + num, 0)
}
console.log(sum(1,2));
console.log(sum(3,4,5,6));
console.log(sum(13,14,15,16));

