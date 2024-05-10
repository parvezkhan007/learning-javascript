 //-------------------Lexical scope Vs Block Scope --------------------------

//  function substract(){
// const x= 15
// conat y= 28
// const z=78
// console.log(x-y)
// console.log(username)


function child(){

    debugger

const childname = 'Golu'
console.log (childname);
//console.log (z) 
//jab dusre function ka declare variable const,let,var chil
 //function me call karte hain use clouser kehte hain 
 
//Block Scope ko hum function ke andr only braket me use kar 
//sakhte hain braket bahar nahi let or const block scope hain 
// for example -------


{var num1 = 78
    // console.log (num1)
}
console.log (num1)

function grandchild(){
const grandchildname ="Molu"
console.log (grandchildname)
}
grandchildname()

}
 child()

//}




console.log('Program Ended')


