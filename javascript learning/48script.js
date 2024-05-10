//---------------------------------Optional Chaining in Javascript -----------------------------
const user = {
firstname :"Parvez",
LastName :"Khan",
Age : 22,
Address : {
    city : "Dewas"
}

// ise hum strings me or function me use karsakhte hain
// getFullName define nhi hai abhi yeh function nahi hai 
// getFullName : function(){
//     return user.firstname + ""+ user.LastName
// }

}
// const a = 'city'

// agar humne address ko define kiya hai to address ke andr jo khuch bhi hai vo console pr show hoga
// agr humne address ko define hi nhi kiya likha hi nhi hai to undefined show karega
 // yeh thoda bada code hai isi jayada easy optional chaining 

 // console.log(user.Address && user.Address.city)    Normal code

 // console.log(user?.Address?.city)  Optional Chaining      
// console.log(user?.Address?.[a])    Optional Chaining
// console.log (user.getFullName?.()) Optional Chaining 
