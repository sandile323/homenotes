//avoiding using for loops as you need to know data structure and other variables to manage indexing your logic

// Iterators make it possible to go through elements of a data structure without having to go worry about how to access the 
// elements
// An object which implements the iterable protocol is called an itetable
// For an object to be an iterable it must implemenmt a meethod at the key [symbol.iterator]
// that object should not accept any args and should return an object which conforms to the iterator protocol

// Types of Iterators

// `For of` loop ietrates values in a collections 

// The iterator protocal decides whether an obect is an iterator

// The object must have a next() method that returns an object wiith 2 props:
// - `value` which gives the current element
// - `done` a bool indicating whether or not there are any other elements that could be iterated upon i

// For Example custom iterable: 

const obj = {
    [Symbol.iterator]: function () {
        let step = 0
        const iterator = {
            next: function () {

                step++
                if (step === 1) {
                    return { value: "hello", done: false }
                } else if (step === 2) {
                    return { value: "you", done: false }
                }

                return { value: undefined, done: true }
            }
        }
        return iterator
    }
}


for (const word of obj) {
    console.log({ word })
}

// JS has thi sfor `strings`, `arrays`, `maps` and `sets`


// Generators easy ways to iterate

function normalFn () {
    console.log("Hello")
    console.log("World")

} // normal function usus execute to completion model


// generator can a functon that that can pause itself

function* generatorFunction()  {

    yield "hello2"
    yield "World2"

} 
const generatorObject = generatorFunction() // generatorOject is an iterable obj


// Examplefor ()

for (const word of generatorObject) {
    console.log( word )
}









