// function passing another function as an argument its called callBack function

//asynchrouons
//functions of callBack
//
// 2. customize behaviour of general functions purpose
// 3. avoid blocking call execution

//this is our callBack function
function greetUser(name){
    console.log(`hello ${name}`);
    
}

// this functio takes another (callBack function)as an parameter
function getUserInput(callback){
    const name= "mufeeda";
    callback(name); //calling the callback function with the user's name
}
getUserInput(greetUser);

// pyramid of doom/ callBack hell
//multiple nested callbacks make the code difficult to read and maintain