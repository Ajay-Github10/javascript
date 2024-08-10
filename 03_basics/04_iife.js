//Immediately Invoked Function Expression (IIFE)

// const chai = () => {
// console.log('DB Connected !!!');

// }
// chai()

// function chai(){
// console.log('DB Connected !!!');

// }
// chai()
              //IIFE function is used to remove the global variables and declaration polution    ()()

(function chai(){
    //named IIFE function
    console.log('Hey Db Connected !!!!');
    
})();

( () => {
    //UnNamed iife function
    console.log('DB CONNECTED');
    
})();

( (name) => {
    console.log(`Hey ${name} Db is Connected `);
    
})("AJAY");

