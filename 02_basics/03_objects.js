//singletone
//onjectliterals     method to declare objects

// Object.create   this is construct method to create a object first object aleays singletone

const mySym = Symbol("key1");

const JsUser = {
    name: "AJAY",
    age: 24,
    location: "Nashik",
    email: "ajay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"],
    [mySym]: "key1",
    "Full name": "AJAY ZALTE"

}

// console.log(JsUser.age);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ajayzofficial01@gmail.com";
// console.log(JsUser);

// Object.freeze(JsUser);
JsUser.name = "Ajay zalte";
JsUser.Adress = "Yeola";

JsUser.greeting = function(){
    console.log("Hello JS USer");
    
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

