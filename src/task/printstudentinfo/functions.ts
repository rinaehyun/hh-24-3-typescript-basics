import {Student, Subject} from "./studentType.ts";

// Step 1: write a function to print student info
// function
export const printAStudent = (student: Student): void => {
    console.log(student.firstname + " " + student.lastname + " (" + student.age + ")");
    console.log("=".repeat(30));

    console.log("Grades: ")
    // Iterate over each subject in the grades object
    for (const subject of Object.keys(student.grades) as (keyof Subject)[]) {
        const processedGrades: (string | number) [] = student.grades[subject]
            .map(entry => entry === undefined ? "*" : entry);

        console.log(subject + ": " + processedGrades.toString());
    }
}


// Step 4
export const printAllStudents = (students: Student[]): void => {
    students.forEach(student => printAStudent(student));
}