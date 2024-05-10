// ------------------for of vs for in loop ------------------------
const fruits = ['apple','banana','mango','grapes']

// for (let i= 0; i<fruits.length;i++){
//     console.log(fruits [i]);
// }

// console.log('Program Ended');

// for(const 
//     num of fruits) {console.log(num);}

//for of ko hum object par use nahi karsakte hai 


//-------------------- For in loop-------------------------
// for in loop ko hum object pr use karsakhte hai 

const person = {
    firstname: "Parvez",
    lastname: "Khan",
    Age: 22,
    City: "Dewas",
    Pincode:"455001",
}

// for(const intro in person ){console.log (intro, ':',person[intro])}
// for(const intro in person ){console.log (person[intro])}

const personkeys = Object.keys(person) 
//Object.keys 
//Object.values
//Object.entries
//fast kaam karta hai for in or for of se 
for (const key of personkeys){
console.log(person[key]);
}
