//-------------------------------Classes in Javascript ---------------------------------------

// class createUser {

// }

// => createUser f 
// typeof createUser 
// => 'function' 
// console.dir(createUser)
// => class createUser 
// jab bhi hume classes ko use karna hota hai to humko pehle new keywords ka istemal karna hota hai 
// new createUser()
// => createUser{}
// isne hume 1 Object banakrdiya 


// class createUser {}
//        createUser.prototype.getBirthYear = function(){
//        return new Date().getFullYear()-this.age
//       }

//        createUser.prototype.getFullName= function(){
//        return this.firstName + " " + this.lastName
//       }


//       const user1 = new createUser('Aman', 'Mishra', 32)
//       const user2 = new createUser('Anurag', 'Singh', 72)


//-------------------------------classes example-------------------------------

// class createUser {

//     // ise constructor method bolte hai jo ki classes ke andr use hota hai
//     constructor(firstName,lastName,age){
//         // console.log(firstName,lastName,age);
//         // console.log ('hiiiiiiiiii');
//         // console.log (this);
//         this.firstName=firstName
//         this.lastName=lastName
//         this.age=age
//     }



//     getBirthYear(){
//                return new Date().getFullYear()-this.age
//               }
//     getFullName(){
//                return this.firstName + " " + this.lastName
//                       }
                
//                     }
//     const user1 = new createUser('Aman', 'Mishra', 32)
//     const user2 = new createUser('Anurag', 'Singh', 72)        



    //--------------------------------Private Class Fields----------------------------------

    // pehle javascript me constructor pr koi restriction nhi thi 
    // to koi bhi value ko access karleta tha uske bachne ke liye sab 
    // underscore use karte the lakeen fir bhi access hota tha isiliye isko implement karne 
    // ke liye hi private class fields ka use kiya gaya

    // constructor(firstName,lastName,age){
    
    //     this.__firstName=firstName
    //     this.__lastName=lastName
    //     this.__age=age
    // }

// Abb isko implement karne ke liye # ka use karenge this.#age this.#firstname 
//isko hum constructor ke andr or constructor ke bahar bhi use karsakhte hain
// agr kisi ki value change karna hai to hum use constructor ke andr likhenge or 
// agr change na karni hoto constructor ke bahar likhenge 


class createUser {
#age
    // ise constructor method bolte hai jo ki classes ke andr use hota hai
    constructor(firstName,lastName,age){
        // console.log(firstName,lastName,age);
        // console.log ('hiiiiiiiiii');
        // console.log (this);
        this.firstName=firstName
        this.lastName=lastName
        this.#age=age
    }



    #getBirthYear(){
               return new Date().getFullYear()-this.age
              }
    #getFullName(){
               return this.firstName + " " + this.lastName
                      }
                
                    }
    const user1 = new createUser('Aman', 'Mishra', 32)
    const user2 = new createUser('Anurag', 'Singh', 72) 



