this // used for to get the current context value      this refers to the current contexts

const user = {
    username : "Ajay",
    price: "2100",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sudya"
// user.welcomeMessage();
//console.log(this);                       //   if this is empty then it is always window objct


// function chai(){
//     let username = "Ajay"
//     console.log(this.username);
    
// }
// chai();
// const chai = function() {
//     let username = "Ajay"
//     console.log(this.username);
    
// }

//Arrow Function
//  const chai = () => {
// let username = "Ajay"
// console.log(this);

//  }
//  chai()


// const addTwo = (num1, num2) => {                            // this is called as Explicit return with Return keyword in {} code
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)                  //no need to write return in () parenthesis  // this is called as implicit return without writing return

const addTwo = (num1, num2) => ({username: "AJAY ZALTE"})     

console.log(addTwo(15, 30));

 const myArray = [2,3,4,5,67,88]
 