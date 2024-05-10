//-----------------------------------Getters and Setters in Javascript------------------------------------------
// const user = {
//     firstname: 'parvez',
//     lastname:"khan,"
//      fullname:function(){
//         return `${this.firstname} ${this.lastname}`

        //isme full name set nhi hoga full name 1 property ban chuki hai jo ki hum call karenge to error dega
        // isiliye getter or setter ka use hota hai
//     }
// }
// console.log(user.firstname+' '+user.lastname)
// // stringtemplestes ka use 
// console.log(`${user.firstname} ${user.lastname}`)

// console.log (user.fullname());


// const user = {
//     firstname: 'parvez',
//     lastname:'khan',
//     get fullname (){
//         return `${this.firstname} ${this.lastname}`},
//         set fullname(value){
//             const [firstName,lastName]  = value.split(" ")
//             this.firstName=firstName
//             this.lastName=lastName
//             console.log(value);
//             console.log('setting')
//         }
//     }


//-------------------------------------------yahi cheez hum classes ke sath bhi karsakhte hain---------------

class createUser {

     
        constructor(firstName,lastName,age){
            
            this.firstName=firstName
            this.lastName=lastName
            this.age=age
        }
    
    
    
        get BirthYear(){
                   return new Date().getFullYear()-this.age
                  }
        get FullName(){
                   return this.firstName + " " + this.lastName
                          }
                    
          set FullName(value){  const [firstName,lastName]  = value.split(" ")
                      this.firstName=firstName
                      this.lastName=lastName
                      console.log(value);
                      console.log('setting')}                
                        }
        const user1 = new createUser('Aman', 'Mishra', 32)
        const user2 = new createUser('Anurag', 'Singh', 72)