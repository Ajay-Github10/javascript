const userEmail = 'ajayzoffcial@gmail.com'

// if(userEmail){
//     console.log(`Found the UserEmail ${userEmail}`);
    
// }else{
//     console.log("Dont Found The UserEmail");
    
// }

//Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truth Valuess
// "false" ,  '0', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array Is Empty");
    
}else{
    console.log("somthing values is there");
    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object Is Empty");
    
}

// Nulish Coalescing Operator (??): For Null  and undefined  values
let val1 = 5 ?? 10
console.log(val1);

let val2 = null ?? 50
console.log(val2);

let val3 = undefined ?? 10
console.log(val3);


//Ternary ooperator  ?
// condition ? true : false

const price = 100
price >= 20 ? console.log("Greater than 50") : console.log("Less than 20");

let name = "ajay"
name = "ajay" ? console.log("Correct Name"): console.log("Wrong name")

