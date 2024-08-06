// Step 1
const numberArray: number[] = [3, 10, 8, 25, 16, 35];
const mappedNumberArray: number[] = numberArray.map((num: number) => num * 2);
console.log("The original: " + numberArray);
console.log("The doubled array: " + mappedNumberArray);

// Step 2
const stringArray: string[] = ["Today", "is", "on", "eighteen-th", "of", "August", "It", "is", "on", "Tuesday"];
const newStringArray: string[] = stringArray.filter((word: string) => word.length > 5);
console.log("The original: " +stringArray);
console.log("The array with >5 length : " +newStringArray);

// Step 3
const reducedNumberArray: number = numberArray.reduce((num1: number, num2: number) => num1 + num2);
console.log("The original: " + numberArray);
console.log("The sum of elements in array: " + reducedNumberArray);

// Step 4
const checkIfNumGrateThan10: boolean = numberArray.some((num: number) => num > 10);
console.log("Check if at least one number is greater than 10: " + checkIfNumGrateThan10);
