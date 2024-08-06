// Step 1
const numberArray: number[] = [3, 10, 8, 25, 16, 35];
const mappedNumberArray: number[] = numberArray.map((num: number): number => num * 2);
console.log("The original: " + numberArray);
console.log("The doubled array: " + mappedNumberArray);

// Step 2
const stringArray: string[] = ["Today", "is", "on", "eighteen-th", "of", "August", "It", "is", "on", "Tuesday"];
const filteredArray: string[] = stringArray.filter((word: string): boolean => word.length > 5);
console.log("The original: " + stringArray);
console.log("The array with >5 length : " + filteredArray);

// Step 3
const reducedNumberOfArray: number = numberArray.reduce((num1: number, num2: number): number => num1 + num2);
console.log("The original: " + numberArray);
console.log("The sum of elements in array: " + reducedNumberOfArray);

// Step 4
const checkIfNumGrateThan10: boolean = numberArray.some((num: number): boolean => num > 10);
console.log("Check if at least one number is greater than 10: " + checkIfNumGrateThan10);


// ** BONUS ** //
const liste: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
console.log("The original array: ");
console.log(liste);

// Sort the numbers in ascending order -> .sort() modifies the original array
console.log("Sorted Array in ascending order: ");
console.log(liste.sort((a: number, b: number): number => a - b));

// Square the numbers -> .map() copies an array
const squaredList: number[] = liste.map((num: number): number => num * 2);
console.log("Squared numbers in array: ");
console.log(squaredList);

// Remove the two smallest numbers and the four biggest numbers
console.log(liste.length);
const removedMinAndMaxList: number[] = liste.slice(2, liste.length - 4);
console.log("Remove the smallest 2 and biggest 4 numbers: ");
console.log(removedMinAndMaxList);

// Remove the numbers, which can be divided by 4 -> .filter() copies an array
const notDividedByFourList: number[] = liste.filter((num: number): boolean => num % 4 != 0);
console.log("Remove the numbers, which can be divided by 4: ");
console.log(notDividedByFourList);

// Add all elements in the array
const sumOfElements: number = liste.reduce((num1: number, num2: number): number => num1 + num2);
console.log("Add all elements in the array: ")
console.log(sumOfElements);
