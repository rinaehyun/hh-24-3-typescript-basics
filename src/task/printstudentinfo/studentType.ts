export type Student = {
    firstname: string,
    lastname: string,
    age: number,
    // Step 2: allow string and numbers as grades
    grades: (string | number)[]
}