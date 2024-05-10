//--------------------Es6 Spread operators---------------------

let array = [1,2,3,4,5,6,7]
let array1 = [5,4,3,2,1]

//const joinedarray = array.concat(array1)  // normal 
let joinedarray = [...array,...array1]

// //strings ke sath bhi use karsakhte hain 
 const myname ="Parvez"
// let joinedarray = [...array,...array1,...myname]

// //object ke sath bhi use karsakhte hain
const user={
name:"parvez",
Age:22
}
const updateduser={...user,city:'Dewas'}

// //function call karte samay  bhi use karsakhte hain

function add() {
    console.log(arguments);
    let sum= 0 
for(let i = 0 ; i<arguments.length;i++)
{sum=sum+ arguments[i]}
return sum 
}
