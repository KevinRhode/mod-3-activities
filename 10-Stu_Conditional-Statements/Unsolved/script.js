// Change the values and operators below to test your algorithm meets all conditions
let x = 50;
// var expression1 = (x > 25);
// var expression2 = (x > 50);

// Write Your JavaScript Code Here
function callSwitchCase(value){

    expression1 = (value <= 50);
    expression2 = (value == 50);

    
    switch (expression1 && expression2) {
        case (true && true):
            console.log("True ✅ True ✅");
            break;
        // case false && true:
        //     console.log("False ❌ True ✅");
        //     break;
        case (true && false):
            if (expression1) {
                console.log("True ✅ False ❌");
            }

            if (expression2) {
                console.log("False ❌ True ✅");
            }
            break;
        case (false && false):
            console.log("False ❌ False ❌");
            break;
    
        default:
            break;
    }
}

callSwitchCase(x);
x=45;
callSwitchCase(x);

