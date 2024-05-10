//--------------------------------ES6 Modules---------------------------------

// agar hum code start karenge to 2440 se start hoga
// isko isiliye hum split karenge alag se 1 or file create karenge javascript ki


// import usersData from "./usersData.js";
// import {mynames as myname} from "./usersData.js";
//single line me code karenge -

// import usersData,{myname , getFirstUser} from "./usersData.js";

//abb iss line me humne 1 function ko use kiya jo ki error dega isiliye is ko remove 
//karenge to userdata as a function work karega isiliye uska name hum change karenge userdata se getFirstUser

// import getFirstUser, {myname} from "./usersData.js";
// ab iss se better 1 or tarika hai 

import * as something from'./usersData.js'
// import productsdata from "../productsData.js";   // default

// import productsdata from".productsData.js"
// import getFirstUser from './usersData.js'
// import a from".productsData.js"


// console.log (usersData)
// console.log (myname)
// console.log (productsdata)
// console.log(a)
// console.log (getFirstUser)
console.log(something.default());
