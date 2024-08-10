const marvel_heros = ["Thor","Iron Man", "SpiderMan"];
const dc_heros = ["SuperMan","BatMan", "Flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);


// const allHeros = marvel_heros.concat(dc_heros);                // concat used to combine two and more array 
// console.log(allHeros);

const new_allHeros =[...marvel_heros,...dc_heros];
// console.log(new_allHeros);
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 5]]];

// const real_array = another_array.flat(Infinity);    //Return New array by concatinating all array on specied depth

// console.log(real_arrlog
// console.log(Array.isArray("AJAY"));
// console.log(Array.from("AJAY"));              // from is used to convert anything into array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2, score3));   .of used to convert array


