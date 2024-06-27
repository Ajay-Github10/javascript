// # Primitive data Types
// 7 Types :   String , Number , boolean , null, undefined, Symbol, BigInt


//  Reference Type Data TYpes  (Non Primitive)

// TYpes :  Array, objects , functions, 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false;

const id = Symbol('123');
const nextId = Symbol('123');

// console.log(id === nextId);

const bigNumber = 9145135739n;
// console.log(typeof bigNumber);


// array , Object
const heros = ['Ironman', ' captain','Thor','Hulk'];
// console.log(heros);

const myObj = {
    name : 'Ajay Zalte',
    age : '25',
    city : 'Nashik',
    number : '9145135739'
}

// console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello Ajay...!!!");
}
// ***************** type of all nonPrimitive datatypes is object. except function.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Stack memory used in all Primitive datatypes), Heap (used in  all Non-Primitive dataTYpes)
// in stack we get COPY of that value

let myName = "AjayZalte"
let myFriend = myName;
myFriend = "Shubham Chikni";

// console.log(myName);
// console.log(myFriend);

let userOne = {
    email : "ajay@gmail.com",
    age : 25
}

let userTwo = userOne;
userTwo.email = "ajstarkkk@gmail.com";

// console.log(userOne.email);
// console.log(userTwo.email);

// in Heap we get reference and change in original value





