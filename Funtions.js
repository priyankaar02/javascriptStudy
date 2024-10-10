
function sayMyName() {
    // console.log("p");
    // console.log("r");
    // console.log("i");
    // console.log("y");
    // console.log("a");
}

sayMyName()

function addTwoNumbers(number1,number2){
    return number1+number2;
}

const result = addTwoNumbers(3,4)
//console.log("Result:", result);

function loginUserMessage(username){
    if(!username) {
        console.log("please enter a username");
        return
    }
    return `User ${username} just logged in`
}
//console.log(loginUserMessage("priya"))
//console.log(loginUserMessage())

/* ---------------REST Operator(...) ----------------*/
 function calculateCartPrice(...num1) {  /*when you do not know how many arguments are coming from backend*/
    return num1;
 }
 //console.log(calculateCartPrice(100,200,300)); /* Output: Converts to an array => [100,200,300] */

 function calculateCartPrice2(val1, val2,...num2){
    return num2;
 }
 //console.log(calculateCartPrice2(100,200,300,1000)); 

 /*-------Passing Objects to functions as parameter --------------*/

const userObj = {
    username: "Sam",
    price: 2000
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`); 
}
//handleObject(userObj) /* Method 1 */
handleObject({          /* Method 2 */
    username: "Sam",
    price: 2000
})

/*----------------- Passing Array to a function ----------------*/

const myArr = [100, 200, 300, 400]
function returnArrayValue(getArray) {
    return getArray[2]
}
//console.log(returnArrayValue(myArr));                /* Method 1 */
console.log(returnArrayValue([100, 200, 300, 400]))    /* Method 2 */




