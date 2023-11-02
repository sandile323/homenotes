// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log({counter})
//     }
//     inner()
// }

// outer() // output: 1
// outer() // output: 1


function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log({ counter })
    }
    return inner
}

const fn = outer()
fn() // output: 1
fn() // by returning the inner function and its scope the memory 
//persists and the value of counter is 1 when this line is executed output is therefore 2



// In JS when we return a function from another, we are effectively returning a combination of that function definition
// along with the function's scope. This would let the function have an associated persistant memory which could hold on to
// live data between executions. This combinations of the function and its scope is what is called closure in JS.

