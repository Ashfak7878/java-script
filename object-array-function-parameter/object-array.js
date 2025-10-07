const students = [
    { name: 'ali', age: '23', grade: 'A' },
    { name: 'ashfak', age: '23', grade: 'C' },
    { name: 'ansar', age: '23', grade: 'B' },
]
//accessing datas
console.log(students[0].name);
console.log(students[1].grade);

//looing through object array 
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age}years old `);

}


)
