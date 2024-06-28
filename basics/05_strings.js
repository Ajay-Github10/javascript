const name = "Ajay Zalte";
const repoCount = 50;

// console.log(name + repoCount + " Nashik");

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //``  backtics       //${} varible inject

//known as string interPolation

const myName = new String('Aj-Starkk-boss')                        ///string declaration.

// console.log(myName[0]);
// console.log(myName.__proto__);


// console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(5));                       //at position
console.log(myName.indexOf('k'));                    //at which position 

const newString = myName.substring(0,5);                // to make substring
console.log(newString);



const anotherString = myName.slice(-8, 5);               // to make string ofany position  (- canbe taken)
console.log(anotherString);


const newStringOne = "                  AJAy_BOSS                  ZALTE            NASHIK ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ajay.com/ajay%20zalte";
console.log(url.replace('%20', '-'));

// console.log(url.includes('sudya'));

console.log(myName.split('-'));                      //string into array
console.log(myName.split(''));                      //string into array


console.log(myName.split('*'));                      //string into array
