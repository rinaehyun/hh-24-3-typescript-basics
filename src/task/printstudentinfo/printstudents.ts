import { Student } from "./studentType.ts";
import { printAStudent, printAllStudents } from "./functions.ts";


// variables
const Anton: Student = {
    firstname: "Anton",
    lastname: "Meier",
    age: 17,
    grades: ["A",4,"F",1,3,2,1,2]
}

const Berta: Student = {
    firstname: "Berta",
    lastname: "Müller",
    age: 17,
    grades: ["A","*",1]
}

const Caeser: Student = {
    firstname: "Cäsar",
    lastname: "Schmidt",
    age: 17,
    grades: ["A",1,"*",3,2,4,5]
}


// Test printAStudent
printAStudent(Anton);


console.log(" *** print all students *** ")
const listOfStudents: Student[] = [Anton, Berta, Caeser];
console.log(listOfStudents);


// Test printAllStudents
printAllStudents(listOfStudents);