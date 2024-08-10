
// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "12345"
tinderUser.name = "Ajay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email: "ajay@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ajay",
            lastname: "Zalte"
        }
    }
}
// console.log(regularuser.fullname.userfullname);

const obj1  = {1: "A", 2: "B"}
const obj2  = {3: "E", 4: "F"}
const obj3 = {5:"C", 6:"D"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// const obj5 = {...obj1, ...obj2,...obj3}

// console.log(obj5);
const newArr = [
    {
        id:"1",
        name:"AJAY Zalte"
    },
    {
        id:"2",
        name:"Sudya Gite"
    }

]
// console.log(newArr[1].id);
// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

