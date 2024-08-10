function myName(){
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("Y");
    
}

// myName // Reference
// myName();   //Execution

// function addTwoNumbers(num1, num2){
//     var num3 = num1 + num2 
//     console.log(num3);
    
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    console.log(result);

    return result
    
}
// const Result = addTwoNumbers(15, 25)
// console.log("Result- ",Result);

function loginUser(username){
    // return username+` Just logged in...!!!` 
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in...!!!`
}
// console.log(loginUser());

//... rest operator

function calculatecartPrice(...num1){
    return num1
}

// console.log(calculatecartPrice(2, 3, 4 ,5, 100,  500));

const user = {
    username: "Ajay",
    price: "1500"
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);

}
// handleObject(user);
handleObject({
    username: "Sam",
    price: "1200"
})


const myNewArray = [200, 300, 400, 500]
function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 300, 400]));

