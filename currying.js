/***********************************************************************************************************
 ***********************************************************************************************************

 Currying is a process of functional programming where we transforms a function with multiple arguments
 into a sequence of nesting functions taking 1 argument at a time

 function f(a,b,c) is transformed to f(a)(b)(c
    )
************************************************************************************************************
************************************************************************************************************/

const sum = (a, b, c) => a + b + c;

console.log(sum(1, 2, 3));

const curry = (fn) => (a) => (b) => (c) => fn(a, b, c);

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)

console.log(add5)
