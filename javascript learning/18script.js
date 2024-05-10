// --------------------Return Functions with Closures ---------------

// kisi bhi variable ko bahar se udhakr jab hum function me define
//  karte hain or uss varible ko hum child function me use karte
//   hain jab vo closures kehlata hai 

// function dada(){
//     const x=5
//     const y=10
   
//     debugger 
    
//    function baap(){console.log(x+y);}
//    return baap
// }

// const grandfather = dada()
// console.dir(grandfather)


function outer() {
         const a = 5;

 function parent(){
        const b = 10;
 
 function add () {
    
    console.log(a + b );

}
       
    return add 
   
   
 }
   
    return parent()

}
const add1 = outer()
console.dir(add1)



