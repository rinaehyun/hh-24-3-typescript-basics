// Step 1
let age: number = 15;

// Step 2
let i;
for (i = 1; i < age; i++) {
    console.log(i);
}

// Step 3
if (age > 18) {
    console.log("The person is an adult.");
} else {
    console.log("The person is minor.");
}

// Step 4
let score: number = 0;

// Step 5
if (typeof score !== "undefined") {
    console.log("Score is available.");
} else {
    console.log("Score is not available.");
}

// Step 6
if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy.");
}

// Step 7
let username: String = "";

// Step 8
if (typeof username !== "undefined") {
    console.log("Username is available.");
} else {
    console.log("Username is not available.");
}

// Step 9
if (username) {
    console.log("Username is evaluated as truthy.");
} else {
    console.log("Username is evaluated as falsy.");
}

// Step 10
let isAdmin: boolean = false;

// Step 11
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.");
}

// step 12
if (isAdmin) {
    console.log("isAdmin is true.");
} else {
    console.log("isAdmin is false.");
}
