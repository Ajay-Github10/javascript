const score = 500
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));   // for precesion values   imp in Ecommers commercial websites

const otherNumber = 123.896
// console.log(otherNumber.toPrecision(4));


const  hundreds = 1000000
// console.log(hundreds.toLocaleString());   //converts number to string in current local

// +++++++++++++++++++++++++ maths +++++++++++++++++++++++++


console.log(Math);           // Object Maths having lots of properties inside it

// console.log(Math.abs(-14));    // abs  - absolute values == converts only negative values into positive.(positive remains as it is).

// console.log(Math.round(4.8));                      //Round = gives the round up values

// console.log(Math.ceil(4.1));            // get and consioder the most maax / top value (ceiling)

// console.log(Math.floor(4.9));         // get and consider the lower value  (floor)

// console.log(Math.min(2,5,6,7,1,9));
 
// console.log(Math.max(1,9,2,7,3,8,4));

const min= 10
const max = 20

// console.log(Math.random());                       // any random values in change between 0 to 1 only.

// console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.floor(Math.random() * (max - min +1))+ min);
