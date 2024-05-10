
const myname= { firstname:"parvez", Subject: "commerce", }
const user2= { firstname:"parvez", "last-name":'khan',Ramesh : 'developer' 
,'is-student': true, pata: {city:'dewas',state :'Madhya Pradesh',pincode:"1456"}  }

console.log(user2.firstname)
console.log(user2["last-name"])
console.log(user2[myname])
console.log(user2["first"+"name"])

user2.pata.city.wheather = "nice"


delete user2.Ramesh
//delete ho gya 

Object.seal()

Object.freeze()
 
"Madhya Pradesh" in user2

console.log ("city" in user2)












