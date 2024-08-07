// Typing
// ** type, interface
type Person = {
    id: string,
    name: string,
    age: number
}

const myObject: Person = {
    id: "123",
    name: "Test",
    age: 35
}

const secondObject: Person = {
    id: "456",
    name: "hello",
    age: 20
}

myObject.age = 40;
console.log(myObject.age);
console.log(secondObject);


// type including another type
type ListType = {
    list: string[],
    myObject: Person
}

const listWithType: ListType = {
    list: ["hello", "world"],
    myObject: {
        id: "876",
        name: "world",
        age: 25
    }
}
console.log(listWithType);


// ** enum
type MyEnum = "OPEN" | "IN_PROGRESS" | "DONE";
const status: MyEnum = "DONE"
console.log(status);


// ** with undefined / null
let myName: undefined;
let myAge: null;
// @ts-ignore
console.log("Variables with undefined and null: " + myName + myAge);

let test: string | undefined
console.log(test?.length);

if (test !== undefined) {
    console.log(test.length);
}

let abc: unknown;
console.log(typeof abc);
abc= "string";
console.log(typeof abc);


// ** Functions -> before '=': types, after '=': values
const myFunction = (num1: number, num2: number): number => {
    return num1 + num2;
}

// with typing
const myFunction2: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2;
}
console.log(myFunction2(3,5));

const secondFunction: (num1: number, num2: number) => number = myFunction;
console.log(secondFunction(13,5));