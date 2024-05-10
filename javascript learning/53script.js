//----------------------------Static Properties And Method -------------------------------------------


class createUser {
    
        // ise constructor method bolte hai jo ki classes ke andr use hota hai
        constructor(firstName,lastName,age){
            // console.log(firstName,lastName,age);
            // console.log ('hiiiiiiiiii');
            // console.log (this);
            this.firstName=firstName
            this.lastName=lastName
            this.age=age
        }
    
    // static hi = 'hello'
    // static{
    //     console.log ("world")
    // }
    
    static {
        this.hi= 'hello'
        this.getFullName = function(){
            return this.firstName+' '+this.lastName
        }
    }


        getBirthYear(){
                   return new Date().getFullYear()-this.age
                  }
        // static getFullName(){
        //            return this.firstName + " " + this.lastName
        //                   }
                    
                        }
        const user1 = new createUser('Aman', 'Mishra', 32)
        const user2 = new createUser('Anurag', 'Singh', 72) 
    
    
    
    