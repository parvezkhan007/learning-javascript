//--------------------------Constructor Function in Javascript-------------------------------
// -------------------------This keyword Use---------------
    //this ek keywords hota hai javascript ke andr bowser provide karta
    // jisko hum kahin bhi use karsakhte hain globally
    // this basically 1 time pr kisi na kisi object ko point karega 
    //yeh change hota rehta hai code ke according
    // agr this ko hum function ke andr console karenge to woh function window ko ponit karega
    // or agr hum ise object ke andr call karenge to object ki tarah show karega


// function getBirthYear(){
  
//     console.log (this);
//     return new Date().getFullYear()-this.age
//     //yahan user global pr save nhi hai local me save hai
//     // isko global me access karne ke liye this kaa use karenge 
//     // jese hi abb hum user1 ko call karenge to abb this user1 ko point karega
//     //jese hi abb hum user2 ko call karenge to abb this user2 ko point karega 

// }



// function createUser(firstName, lastName, age) {
//     const user = {
//       firstName,
//       lastName,
//       age,

//       getBirthYear,
// //       getBirthYear() {
// //         return new Date().getFullYear() - user.age
// //       },
//     }
//     return user
//  }
  
  
//   const user1 = createUser('Aman', 'Mishra', 32)
//   const user2 = createUser('Anurag', 'Singh', 72)
  
//   const arr1 = [1,2]
//   const arr2 = [3, 4]



  // console kiya        user1.getBirthYear()
  // console kiya        user2.getBirthYear()
  // user1.getBirthYear ===  user2.getBirthYear


  // Abb Yahan Pr 1 Or Problem Hogaya Hai 
  // Yahan Pr humne Polymorphism Ko achieve karliya 


  
  
  //------------------------------- Polymorphism ---------------------------------
  // 1 function jo alag alag roop badalta rehta hai 1 hi memory me save hokr jese user1, user2,user3 ise
  // hum polymorphism kehte hain 
  // poly means many  morphism means roop = many roop alag alag roop
  

//   abb iski wajah se hum ne 2 rule tod diye hain 
//   1 - Encapsulation  jo kehta hai bahar jayada cheez na rakho
//    agr bahar ki dunya se call karlega user to gadbad hojayegi

//   2 - Abstraction jo kehta hai hiding the complexity yaani hum compexity ko bada rahe hain 
//   ek cheez ko sahih karke dusre ko bigaad rahe hain 


// abb isko sahih karne ke liye hum createUser jo ki 1 function hai lakeen behind the scene 1 object hai 
// uspr hum key value save karsakhte hain 

// for example - createUser.hello = "world"
// abb agr hume hello save kiya hua dekhna hai to hum console.dir(createUser) karenge 
//jab bhi hum console.dir karte hain to object ki saari value show hojati hai 
// abb hume hello na save karke 1 or method save karna chahiye jise hum common method kehte hain 
// for example - createUser.commonMethods = {} Empty Object
// iss se yeh hoga ki commonMethods = {}Empty Object  ke andr hum bhot sare alag alag methods ko rakhsakhte hain 





// function getBirthYear(){
  
//     console.log (this);
//     return new Date().getFullYear()-this.age

// }

 

//----------------------------------------------------------------------------------------------------------------



// ise new commonMethod ke according solve karenge jiski wajah se abb hume koi oops rule nhi todenge  
// function createUser(firstName, lastName, age) {
//     const user = {
//       firstName,
//       lastName,
//       age,
//       getBirthYear : createUser.commonMethods.getBirthYear
//       //getBirthYear ki jagah hum dusra name bhi desakhte hain 
//     }
//     return user
//  }
  
//  createUser.commonMethods = {
//    getBirthYear(){
//   return new Date().getFullYear()-this.age
//    }

//  }
  
//   const user1 = createUser('Aman', 'Mishra', 32)
//   const user2 = createUser('Anurag', 'Singh', 72)
  
//   const arr1 = [1,2]
//   const arr2 = [3,4]

  //jese hum user1 ko console ya user2 ko karenge to abb hume commonMethods show hoga getBirthYear
  // abb isme khas baat yeh hogi ke yeh dono equal honge 
  // user1.getBirthYear ===  user2.getBirthYear
  // abb yeh bahar ki duniya me acess nhi hosakhta hai or naahi humne koi compexity badhayi hai koi bhi rule break nhi horaha hai 


  // abb yeh code bhot bada hogaya hai abb iski short me karne ke liye
  //  javascript 1 tarikaa deta hai jise hume apne hath se yeh sab code likhne ki jaroorat nahi hoti hai 
  // javascript automatic kardeta hai uss method ko prototype kehte hain 




  //--------------------------------------------------------------------------------------------------------------

//   function createUser(firstName, lastName, age) {
//     const user = {
//       firstName,
//       lastName,
//       age,
 
//     }
//     return user
//  }
  
//   const user1 = createUser('Aman', 'Mishra', 32)
//   const user2 = createUser('Anurag', 'Singh', 72)
  
//   const arr1 = [1,2]
//   const arr2 = [3,4]

  // console.dir (createUser)    isme hume 1 prototype ki 1 property milegi joki 1 object hai
  // or usko open karenge to cunstructor = function show hoga wahi same function milega createuser ka 
  //abhii tak hum ne function ko kese call kiya hai normal 
  
  // function sayhi (){
  //   console.log('hii')
  //   return 'hello'}
  // => ' hello '

  // abb hum oops me new keyword ka use karenge 
  // new keyword kya karta hai ke by default 1 function ko object hi show karega chahe tum sayhi likho ya na likho

  // function sayhi (){
  //   return 'hello'}

  // console pr jakar agr me new sayhi() karenge to return humne hello kiya hai lakeen ayega sayhi() object 
  // jab hum new keyword lagake call karte hain to function dusri tarah se react karta hai 
  // or this bhi new keywords ke andr dusri tarah se react karega 
  
  //for example - 
  // function sayhi(){
  //   console.log(this)
  // }
  // => sayhi()
  // abb normaly call karunga to window show hoga 

  // => new sayhi()
  // abb new keywods ke sath call karunga to vo object show hoga jisko isne create kiya hai sayhi() object 




 // abb iska use kese karenge ------------------------------------------------------------------------

 
    // function createUser(firstName, lastName, age) {
    //   this.firstName = firstName
    //   this.lastName = lastName
    //   this.age = age

      // abb this ne new window me firstname, lastname,age ko create karliya hai 
    // }

    // =>  new createUser('Parvez')
    // abb yeh hoga yeh ki mera firstname ki jagah undefined ki jagah vo value ajayegi jo hum batayenge 
  

    // const user1 = new createUser('Aman', 'Mishra', 32)
    // const user2 = new createUser('Anurag', 'Singh', 72)

    // abb agr hum createUser ko call karenge to this wala window show hoga isiliye hum 
    // new createUser karenge jiss se hamara answer perfect ayega 





//--------------------------- PROTOTYPE-----------------
// ISKE ANDR 1 KHAS BAAT HAI JO KI ISS FUNCTION KO JIS BHI OBJECT KO CREATE KIYA JAYEGA 
//USKE PROTOTYPE KO UNDER SCORE UNDER SCORE __proto_ PROTOTYPE KE ANDR DAAL DIYA JAYEGA 
//ISKI KHAS BAAT YEH HAI KI __proto_ KE ANDR KA PROPERTY BHI HUM DEKHSAKHTE HAIN 
// USER1.__proto_.GETBIRTHYEAR()    OR AGR THIS LAGA HOGA TO NAN SHOW KAREGA 


    function createUser(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  createUser.prototype.getBirthYear = function(){
      return new Date().getFullYear()-this.age
        }

         createUser.prototype.getFullName= function(){
      return this.firstName + " " + this.lastName
        }

      const user1 = new createUser('Aman', 'Mishra', 32)
      const user2 = new createUser('Anurag', 'Singh', 72)
   
      // ABB JO CREATEUSER KE ANDR JO PROTOTYPE HAI OR USER1 OR USER2 KA JO constructor Property HAI VO SAME HAI 
      // OR USKA NAME ALAG HOGAYA HAI LAKEEN Property SAME HAI 
      // FOR EXAMPLE - createUser.prototype
      //           =>  constructor : f
      //             - user1.__proto_
      //           =>  constructor: f
      // YAANI KE HUM CREATEUSER KE ANDR OR BHI PROPERTY RAKH SAKHTE HAIN 



// Abb yeh constructor function short syntax me karne ke liye classes ka introduction hua hai next pro uspr hi hoga


