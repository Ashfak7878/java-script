//you can store function inside object  are called object methods.
//".this" - keyword = its refers the objects itself.(used to access properties and methods)
const car = {
    brand: "toyota",
    strat: function () {
        // console.log("car started")
        console.log(`${this.brand} is started`)


    }
}
car.strat();