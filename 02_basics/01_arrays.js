//array
// () parenthesis,          [] brackets,      {} curly braces
// inside array contents called as ELEMENTS

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["IronMan", "Captain", "HULK", "THOR"];

// console.log(myHeros);
const myArr2 = new Array(1,2,3,4,5,6);
// console.log(myArr2);
// console.log(myHeros[0] + myArr[1]);

//array Methods.
// myArr.push(6);                 //to add new element or  values.
// myArr.push(7);                


// myArr.pop();             //to remove last added values

//myArr.unshift(10);           //  to add element or any values in first position by shifting all values.
//myArr.shift();                //to remove first shifted /added element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(15));

// const newArr = myArr.join();      // used to create of array element in separated string format   // converts values into string
// console.log(myArr);
// console.log(typeof newArr);

//Slice and Splice

console.log("A", myArr);
const myNew1 = myArr.slice(0, 3);               //slice  is used to get a specific section of an array in range between indexing except last value. 

console.log("Sliced -> ", myNew1);
const myNew2 = myArr.splice(0, 3);

console.log("C-Spliced -> ", myNew2);





