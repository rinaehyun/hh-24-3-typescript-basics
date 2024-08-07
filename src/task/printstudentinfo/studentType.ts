export type Student = {
    firstname: string,
    lastname: string,
    age: number,
    // Step 2: allow string and numbers as grades
    grades: (GermanGrades | AmericanGrades | undefined)[]
}

type GermanGrades = 1 | 2 | 3 | 4 | 5 | 6;
type AmericanGrades = "A" | "B" | "C" | "D" | "E" | "F";