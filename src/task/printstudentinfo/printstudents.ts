// type
export type Student = {
    firstname: string,
    lastname: string,
    age: number,
    // Step 2: allow string and numbers as grades
    grades: (string | number | undefined)[]
}

// Step 1: write a function to print student info
// function
const printAStudent = (student: Student): void => {
    console.log(student.firstname + " " + student.lastname + " (" + student.age + ")");
    console.log("=".repeat(30));

    // Step 3: Allow undefined as a value (displayed as *)
    const processedGrades: (string | number) [] = student.grades
        .map(entry => entry === undefined ? "*" : entry);

    console.log("Grades: ", processedGrades.toString());
}


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
    grades: ["A", undefined, 1]
}

const Caeser: Student = {
    firstname: "Cäsar",
    lastname: "Schmidt",
    age: 17,
    grades: ["A",1, undefined,3,2,4,5]
}


// Test printAStudent
printAStudent(Anton);


// Step 4: Print a list of all students in the console
console.log(" *** print all students *** ")
const listOfStudents: Student[] = [Anton, Berta, Caeser];
console.log(listOfStudents);

const printAllStudents = (students: Student[]): void => {
    for (let i: number = 0; i < students.length; i++)
    printAStudent(students[i])
}

// Test printAllStudents
printAllStudents(listOfStudents);