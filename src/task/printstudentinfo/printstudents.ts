import { Student } from "./studentType.ts";
import { printAStudent, printAllStudents } from "./functions.ts";

// variables
const Anton: Student = {
    firstname: "Anton",
    lastname: "Meier",
    age: 17,
    grades: {
        Sport: ["A",4,"F"],
        Art: [1,3,2],
        Math: [1,2]
    }
}

const Berta: Student = {
    firstname: "Berta",
    lastname: "Müller",
    age: 17,
    grades: {
        Sport: ["A", undefined, 1],
        Art: [1,3,2],
        Math: [1,2]
    }
}

const Caeser: Student = {
    firstname: "Cäsar",
    lastname: "Schmidt",
    age: 17,
    grades: {
        Sport: ["B", 2, undefined],
        Art: [1,4, "C"],
        Math: [1,2,3]
    }
}
console.log(typeof Berta.grades);

// Test printAStudent
printAStudent(Anton);


// Step 4: Print a list of all students in the console
console.log(" *** print all students *** ")
const listOfStudents: Student[] = [Anton, Berta, Caeser];
console.log(listOfStudents);

// Test printAllStudents
printAllStudents(listOfStudents);