//a promising in js an object that represent the eventual completion or failure of an asynchronous operation an its resulting value

// resolve- call whrn the operation is successfull
//reject-called when the operation is failed
//.then -if the promise is resolved
//.catch-execute when the promise is rejected
//.finally-execute regardless of wheather the promise is resolved/rejected

//creating promise

let mypromise = new Promise((resolved, reject) => {

    let success = false;
    setTimeout(() => {
        if (success) {
            resolve("promised resolved successfully!")
        } else {
            reject("promise rejected")
        }
    }, 2000)
});//creating promise object

mypromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("promise execution is finished "));