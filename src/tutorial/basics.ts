// ** Variables ** //

// const & let

const s1 = "Hello World"
let n1 = 42

n1 = 42

// Data Types
let n2 = 42;
let s2 = "Hello World"
let bo1 = false
let o1 = { id : "value", age : 30, isHappy: true }
let ar1 = [1,2,3,4,5, true, "Rinae"]
let nullExample = null
let undefinedExample
undefinedExample = 42
console.log(undefinedExample)


// Arithmetic Operations
let sum = 5 + 3
let subtraction = 10 - 4
let multiplication = 6 * 7
let division = 40 / 4


// Comparision operations
// @ts-ignore
let isEqual = 5 == "5" // true (loose equality)
console.log(isEqual)

// @ts-ignore
let isStrictEqual = 5 === "5" // false (strict equality)
console.log(isStrictEqual)

let isLessThan = 10 < 20
let isGreaterThan = 15 > 5
console.log(isLessThan)
console.log(isGreaterThan)


// Logic Operations
let andOperator = true && true
let orOperator = true || false
let notOperator = !true

// Assignment operation
let x = 10
x = x + 5
x += 10
x -= 1
console.log(x)


// ** Controls ** //

// if & else
let condition = true;
if (condition) {
    console.log("Condition is true.")
} else {
    console.log("Condition is false.")
}

// Switch
let option = "B"
switch(option) {
    case "A":
        console.log("Option A selected.")
        break
    case "B":
        console.log("Option B selected")
        break
    default:
        console.log("No option selected")
}

// for
for (let i = 0; i < 5; i++) {
    console.log("For loop: " + i)
}

// while
let j = 2;
while (j < 5) {
    console.log("The value j is: " + j)
    j++;
}

// function
function sumFunction (a, b) {
    return a + b;
}

const sumResult = sumFunction(5, 6);
console.log(sumResult);

const sumWiwhoutName = function(a, b) {
    return a + b;
}
console.log(sumWiwhoutName(10, 5))

const subtractionArrow = (a,b) => {return a - b};
console.log(subtractionArrow(20, 3))


// ** Objects and Arrays ** //

// Arrays
let color = ["red", "blue", "green"]
console.log(color[0])

// Object
let person = {
    name : "JM",
    age: 29,
    isStudent: false
}

console.log("This person's age is: " + person.age)


// ** Typescript ** //

let number1: number = 30;

function addition(a: number, b: number): number {
    return a + b;
}

console.log(addition(38, 29))


// any
let anything: any = 10
console.log("before: " + anything)
anything = "Hello World"
console.log("after: " + anything)


// ** falsy & truthy ** //
// falsy = false, 0, "", null, undefined or NaN
// truthy = true, 1, "  ", [], {}