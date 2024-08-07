import {Student} from "./studentType.ts";

// Step 1: write a function to print student info
// function
export const printAStudent = (student: Student): void => {
    console.log(student.firstname + " " + student.lastname + " (" + student.age + ")");
    console.log("=".repeat(30));
    console.log("Grades: ", student.grades.toString());
}


// Step 4
export const printAllStudents = (students: Student[]): void => {
    for (let i: number = 0; i < students.length; i++)
        printAStudent(students[i])
}