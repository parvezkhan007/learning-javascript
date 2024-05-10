// -----------------------Destructing in Javascript-----------
//----------------first use in array -------
// const colors = ["red", "blue", "green", "yellow" ,"pink", "black"]

// const color1=  colors[0]
// const color2=  colors[1]
// const color3=  colors[2]


// Abb destructing use karke karte hain 
// const [color1,color2,color3] = colors
// Abb agr mujhe only green lena hoto 
//const [, , color3]=colors
//const {10:color}=colors

//---------------function destructing in array -------------
//---------isme hume array braket ka use karna padhta hai -------
const colors = ["red", "blue", "green", "yellow" ,"pink", "black"]
// function printcolor([a,b,c,d,e,f]){
//      console.log([a,b,c,d,e,f])}

     function printcolor({5:f}){
        console.log({5:f})} 


printcolor (colors)



// ----------------------second use in object ---------------------

// const user = {

//     name:"parvez",
//     age:22,
//   address: {city:"Dewas",state:"Madhya Pradesh ",}

// }

//-----------------------------Normal--------------
// const name=user.name
// const age=user.age
//-----------------------------Destructing--------
//const {name,age}=user
// const {name:username, age:userage}=user

// const{address}=user
// const {address:{city}}=user


//----------------Function Me Destructing-----------------
// function intro({age,name,address:{city}}){
// console.log(age,name,{address:city});


// }
// intro (user)


