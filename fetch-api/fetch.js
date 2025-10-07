async function getUsers() {
    try {
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let users = await response.json();

console.log("first fecting users");
users.slice(0,5).forEach(usr =>{
    console.log(`# $5 user ${usr.id} ${usr.username}`);
    
})

    }catch (error){
        console.log("error fetching user",error);
        
    }
}
getUsers();