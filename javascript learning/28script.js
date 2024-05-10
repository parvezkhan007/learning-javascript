//-----------------Arguments Normal ----------------
//   function abc(arguments){
//     console.log(arguments)
//     let sum=0
//     for(let i =0; i<arguments.length;i++)
//     {sum=sum + arguments[i]}
//     return sum
// }
// -------------------Es6 Rest Paramaters-------------
// const num1 = [1,2,3,4,5,6,7]
// function add(...num){
//     console.log(num)
//     let sum=0
//     for(let i =0; i<num.length;i++)
//     {sum=sum + num[i]}
//     return sum
// }
// .............spread operator use karenge-----------
// spread ko hum object me use nahi karsakhte hain only string or number ka use hota hai 
//const result = add(...num1)


// -----------Rest params -----------
const num1 = [1,2,3,4,5,6,7]

// hum rest params ko aage nahi use karsakhte hain only piche use hoga 
//function add(...num,a,b,c)
//agar hum a,b,c me agr khuch na rakhe to vo undefined show hoga or wahi agr hum rest param (...num ) 
//ki value na hoto vo empty [] array show karega 

// function add(a,b,c,...num){
//     console.log(a,b,c);
//     console.log("num:",num)
    
// }
// const result = add(...num1,85,76,23)




// ----------------Rest params ke andr reduce ka use ------------------
// function add(...num){ 
//     return num.reduce((acc,curr)=>acc+curr)
// }
// // const result = add(85,76,23,54,32,12)
// const result = add(...num1)


//-------------Arguments ko array me convert karke spread banakr use karne ki trick----------

// function add(){ 
//     return [...arguments].reduce((acc,curr)=>acc+curr)
// }
// const result = add(...num1)


// function add(){ 
//     return Array.from(arguments).reduce((acc,curr)=>acc+curr)
// }
// const result = add(...num1)
