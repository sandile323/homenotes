class Person {
    constructor(fName, lName) {
        this.fName = fName
        this.lName = lName
    }

    sayName() {
        return `${this.fName} ${this.lName}`
    }
}

const p1 = new Person("Bruce", "Wayne")

console.log(p1.sayName)


// Inheritence

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName) // inheritance
        this.IsSuperHero = true

    }

    fightCrime() {
        console.log("Fighyinh crime")
    }
}

const batman  = new SuperHero("Bruce", "Wayne")

console.log(batman.sayName())

// no need for prototypal inheritance