//WRITE YOUR CODE BELOW
//It's done when the names of five classmates are stored in a single variable named students.
students = ["Jeff","Erin","Joshua", "Dallen","Alvin"]
//It's done when the total number of elements in the students array is logged to the console.
console.log(students.length)
//It's done when, using a for loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the students array.
for (let index = 0; index < students.length; index++) {
    
    console.log("Great to see you, "+students[index])
    
}
