//---------------------------------This Keywords In Javascript------------------------------
// Gobal space me jab hum this ko use karte hain to yeh window show karta hai 
// console.log(this);



// function hii(){
//     console.log(this);  
// }

// window.hii()
// idhar yeh window show hora hai function me 




// const user = {
//     firstName: 'Parvez',
//     lastName: 'Khan',
//     fullName(){
//         console.log (this)
//     }
// }

// call user.fullName()     
// abb idhr this user object ko point karr raha hai ...
// isa samjho jis method ko call kiya gaya uske left side wale keyword object hoga usko yeh point karega
// idhar yeh window show nhi kar raha balki user object ko point karr raha hai 


// const user = {
//     firstName: 'Parvez',
//     lastName: 'Khan',
//     fullName (){
//         function getAge(){
//         console.log('Getting Age');
//         console.log('this');
//     }
//     getAge()
// console.log(this);
//     }

// }
// method ke andr funtion define kiya hai
// idhar abb yeh fir se window show ho raha hai 
// jab function ke andr 1 or function hota hai to this window ke jesa behave karta hai ..........




// const user = {
//     firstName: 'Parvez',
//     lastName: 'Khan',
//     tags: ['a','b','c'],

//     printTags(){
//         this.tags.forEach( function(tags){

//           console.log(this)  
//         })
//     }
// }

// idhr abhi yeh function ke andr funtion use kiya hai isilie abhi yeh window ko point karr raha hai 
// ise fix karne ke liye foreach me this ko kispr point kara hai vo karsakhte haim




// const user = {
//     firstName: 'Parvez',
//     lastName: 'Khan',
//     tags: ['a','b','c'],

//     printTags(){
//         this.tags.forEach( function(tags){

//           console.log(this) 
          
//           //abb yahan pr  this ko braket pr point kardiya hai 
//           // agr 1 method ke undr dusra function hai to wahan pr this differently behave karega 
//           //uss object ko point nhi karega 
//         // } , {} )
//         }, this)
//     }
// }
// yeh to hogaya ke 1 object ke andr or 1 object ke method ke andrkese kaamkarta hai 







// constructor function me this ke uses 
//constructor function 1 object create karta hai or usko automatically return karta hai chahe tum return karo ya na karo
//or this uss object ko use karega
// construction function capital ko denote karta hai

// function Hi(){
// this.hello='world'
// console.log(this)
// }

// new Hi()

//abb idhr this hi ko use karr raha hai 




// Add Event Listener me this ka use 
// jab hum add event listener lagalete hain wahan pr yeh jo this hai uss object ko 
//ya uss element ko point karta hai jispr event listener lagatha 
// chahe vo h1 ho ya body 


// const h1 = document.querySelector('h1')
// h1.addEventListener('click',function(){
//     console.log(this);
// })



// abb agr hum h1 ki jagah body ko lagaden to 
// const body = document.querySelector('h1')
// body.addEventListener('click',function(e){
//     //console.log(e.target);
//     console.log(this);
// })





// Arrow Function ke andr this ka use 
// Arrow Function ka defination dekhenge to uspr hai ke arrow function ki khud ki binding nhi hai 
// this ,arguments,super  should not be use as method 
// Array function ko as a method use hi nhi karna hai 

// const user = {
//     firstName: 'Parvez',
//     lastName: 'Khan',
//     tags:['a','b','c'],
//     printTags: ()=>{
//         console.log(this);
//     }
// }


// Agr Hum Event listener me arrow function ka use karte hai to this window ko point karega 
// const body = document.querySelector('h1')
// body.addEventListener('click',(e) =>{
//     //console.log(e.target);
//     //console.log(e.currentTarget);
//     console.log(this);
// })





// Classes ke andr This ka uses
// class ke andr bhi this usi object point karr raha hai jisko usne create kiya hai
// constructor function ke andr this ko bhi getuser point karr raha hai  
class user{
    constructor (){
        this.firstName = 'Parvez'
        console.log(this);
    }
    getuser(){
        console.log(this);
    }
}



