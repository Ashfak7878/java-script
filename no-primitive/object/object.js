const person = {
name:"akash",
age: 22,
isStudent: false

}
console.log(person.name);
console.log(person.age);
    // add or modify data
    person.city = "new york";

    person.age = 31;

    console.log(person);

//delete city from the person details 
    delete person.city;
    console.log('finalaise the details of the person',person);

