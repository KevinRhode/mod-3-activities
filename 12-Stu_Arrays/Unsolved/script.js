// WRITE YOUR CODE HERE
okArray = ["kevin","joe","bob"]
firstStudent = "kevin"

//It's done when the total number of elements in the array is logged to the console.
console.log(okArray.length);

//t's done when the message "Welcome to the class STUDENT_NAME" is logged using each element in the array.
okArray.forEach(element => {
    console.log("Welcome to the class "+element);
});

//It's done when the first element in the array is replaced with the name of a new student.
okArray[0] = "Krevin";
//console.log(okArray[0]);
if (okArray[0] !== "kevin") {
    console.log(okArray[0] + " is in class")
}


//bonus
//okArray[okArray.length - 1]
console.log(okArray[okArray.length -1])