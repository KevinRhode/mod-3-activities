// Write Your JavaScript Code Here
var x = 51;
function callSwitchCase(value){

    expression1 = (value >= 50);
    expression2 = (value == 51);

    
    switch (expression1 && expression2) {
        case (true && true):
            console.log("True ✅ True ✅");
            break;
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
