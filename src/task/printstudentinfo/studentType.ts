export type Student = {
    firstname: string,
    lastname: string,
    age: number,
    // Step 2: allow string and numbers as grades
    grades: Subject
}

type GermanGrades = 1 | 2 | 3 | 4 | 5 | 6;
type AmericanGrades = "A" | "B" | "C" | "D" | "E" | "F";

export type Subject = {
    Sport: (GermanGrades | AmericanGrades | undefined)[],
    Art: (GermanGrades | AmericanGrades | undefined)[],
    Math: (GermanGrades | AmericanGrades | undefined)[]
}