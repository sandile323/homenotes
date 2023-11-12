/*  How to detemnine "this" 

There are 4 ways: 

Implicit binding
Explicit binding
New binding
Default binding


*/

globalThis.name = "glogBob"

// Implicit binding -  states  when a function is invoked in dot notation the object on the left side
//  of the dot, is what 'thhis' keyword is referencig

const person = {
    name: "BOB",
    sayMyName: function() {
        console.log(`My name is ${this.name}`)
    } 
}

// person.sayMyName() 

// Explicit binding

function sayMyName() {
    console.log(`My name is ${this.name}`)
} 
sayMyName.call(person) // the call method allows you to specify the context in which a function is called

// // New binding when a function - when a function is invoked with a new keyword, within the dunction
// 'this' will always reference a new empty object

// function person2 (name){
        // this = {}
//     this.name = name

// }

// const p1 = new person2("Rob") 
// const p2 = new person2("Steve")

//console.log(p1.name,p2.name)

// default binding
sayMyName() // undefined because it looks up this as `globalThis`

// Order of prcedence

// 1 New binding
// 2 Explicit binding
// 3 Implicit binding
// 4 Default binding
