//-------------------------Try / Catch Block In Javascript-------------------------
//javascript ko hum kehrahe hain ki tum try karo agr error aaye to catch ko run kardena simply
//ise hum asynchronous function ke liye use karte hain kyuki usme error aane ki gunjaish hoti hai

// const user = { 
//     name: 'parvez khan', 
//     age: 23 
// }
// // console.log(user.address.city)
// //undefined ki value show mhi hoti lakeen jab hum ise 
// //try function me use karenge to error mhi batayega

// try{
//     console.log(user.address.city)
//     } 
    
// catch (error){
//     console.dir(error.message)
//     //catch block jab run hoti hai jab koi error show hota hai  
//     //error is a object
// }finally{
//     console.log("Error Aaye Ya Na Aaye Finally Always work karega")
// }


// console.log(3+7)


async function makeAsyncRequest(){
try{
const url='https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000'
const response = await fetch(url)
const data = await response.json()
console.log(data);
return data
}
catch (error){
    console.log(error);
}
}
makeAsyncRequest()


