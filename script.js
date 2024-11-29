//Part 1
let student = {
    name: "Mitzi Garcia",
    age: 20,
    enrolled: true,
    courses: ["Java Script", "Web Programming", "Computer Science"],

    greet: function() {
        console.log("My name is " + this.name);
        console.log("I am " + this.age + " years old.");
        console.log("Enrollment: " + (this.enrolled ? "Enrolled" : "Not Enrolled"));
        console.log("Courses: " + this.courses.join(", "));
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
student.greet();  

//Part 2

let studentJSON = JSON.stringify(student);

// JSON string
console.log(studentJSON);

// Converting the JSON string back into a JavaScript object
let studentObj = JSON.parse(studentJSON);

// Logging the new object and comparing with the original
console.log(studentObj);