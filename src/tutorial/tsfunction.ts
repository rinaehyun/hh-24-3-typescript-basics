// Example of a function
function add(num1: number, num2: number): number {
    console.log("Add");
    return num1 + num2;
}

const result: number = add(3, 1);
console.log(result);


// Example of an arrow function
const myFunction = (num1: number, num2: number): number => {
    return num1 + num2;
}

const result2: number = myFunction(8, 1);
console.log(result2);


// Arrays
// @ts-ignore
const myList: number[] = [2, 9, 15, 0 -1, 6];
console.log(myList);

myList.push(13);
console.log(myList);

// .filter() creates a copy
const newList: number[] = myList.filter((element: number): boolean => element >= 5);

console.log(myList);
console.log(newList);

// .map() creates a copy
const stringArray: string[] = myList.map((element: number) => {
    return element.toString();
})

console.log(stringArray);

// .sort()
console.log(myList.sort());
console.log(myList.sort((a, b) => a - b));