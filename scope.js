
// Global scope variable
let a = "a"

function outer () {
    let b = "b"
    function inner() {
        // inner function scope
        let c = "c"
        console.log({a,b,c})
    }
    inner()
}

outer()

