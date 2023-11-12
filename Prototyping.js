function Person (fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

const p1 = new Person("Bruce", "Wayne")
const p2 = new Person("John", "Doe")

p1.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
} // only 'p1' instance of `Person has this getFullNameMethod

// console.log(p1.getFullName()) // "Bruce Wayne"
// console.log(p2.getFullName()) // error

// if we use prototype
//used to share  properties and methods across instances
// this also support prototypal inheritance
Person.prototype.getFullerName = function () {
    return `${this.firstName} ${this.lastName}`
}


console.log(p1.getFullerName()) // "Bruce Wayne"
console.log(p2.getFullerName()) // "John Doe"


// Inheritance

function SuperHero(fName, lName) {
    Person.call(this, fName, lName) // inherit `Person`  props

    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function () {
    console.log("Fighting crime")
}

SuperHero.prototype = Object.create(Person.prototype)// method inheritance

const batman = new SuperHero("Spider", "Man")
SuperHero.prototype.constructor = SuperHero // ensure instances are created from SuperHero instead of Person

console.log(batman.getFullerName()) // use of inherited methodc(prototypal inheritance)




