//-----------------------OOps in Javascript------------------------
//----------------------Object Oriented Programs -------------

// const user = {
//     firstName:'Parvez',
//     lastName: 'Khan',
//     Age : 22,
    
 
// }
// --------new Date().getFullYear()  call in console 
//yeh normal hai function hai isko oops me karne ke liye ise hum direct object me daal denge 
// function getAgeYear(age){
//     return new Date().getFullYear() - age
// }
//--------getAgeYear(user.Age) call in console 








// oops are 4 types 
// 1- Encapsulation
// 2- Abstraction
// 3- Inheritance 
// 4- Polmorphism


// 1-Encapsulation means alag alag code ko 1 hi jagah use karna for example -
// encapsulation me hum bahar se access nhi karskhte hain program ko  
// oops me hum object ke andr code ko use karte hain
// const user = {
//     firstName:'Parvez',
//     lastName: 'Khan',
//     Age : 22,
    
//    getAgeYear: function(){
//         return new Date().getFullYear()-user.Age
//     }

// }

//abb ise call karenge console me user.getAgeYear()






//-------------------------factory Function to improve codes --------------
// Agar hum ko multiple user ko add karna hai to kese karenge 
// const user1 = {
//     firstName:'Parvez',
//     lastName: 'Khan',
//     Age : 22,
    
//    getAgeYear: function(){
//         return new Date().getFullYear()-user.Age
//     }

// }
// const user2 = {
//     firstName:'Parvez',
//     lastName: 'Khan',
//     Age : 22,
    
//    getAgeYear: function(){
//         return new Date().getFullYear()-user.Age
//     }

// }

 


// const user = {
//     firstName:'Parvez',
//     lastName: 'Khan',
//     Age : 22,
    
//    getAgeYear: function(){
//         return new Date().getFullYear()-user.Age
//     }

// function ko hum short cut mee bhi likhsakhte hain new feature hai 
// getAgeYear(){
//     return new Date().getFullYear()-user.Age
//             }
 
// }
// function createUser( firstName, lastName,Age ){
    // const user={
    //     firstName:firstName,
    //     lastName:lastName,
    //     Age : Age,
    //  }
    // return user

    // agar humara property or value same hai to hum 1 shortcut use karsakhte hain new feature hai 
//     const user={
//         firstName,
//         lastName,
//         Age,
     
//     getAgeYear(){
//         return new Date().getFullYear()-user.Age
//     }
//     }
// return user 
// }

// const user1 = createUser ("Aman","Mishra","23")
// console call  createUser ("Aman","Mishra","23")





const user = {
    firstName:'Parvez',
    lastName: 'Khan',
    Age : 22,
    getAgeYear(){
        return new Date().getFullYear()-user.Age
                }
     
    }
    function createUser( firstName, lastName,Age ){
        const user={
            firstName,
            lastName,
            Age,
         
        getAgeYear(){
            return new Date().getFullYear()-user.Age
        }
        }
    return user 
    }
    
    const user1 = createUser ("Aman","Mishra","23")
    const user2 = createUser ("Amit","Malhotra","25")

    

    // abb iske andr 1 or problem hai jisko hume solve karna 
    //hai getyearage me user1 or user2 alag alag memory me save hora hai
    // uske liye hume constructor function ka use karna hai 