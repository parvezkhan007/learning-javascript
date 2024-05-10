//---------------------------------- Prototypal Inheritnce Object Oriented Program -----------------------------
class User {

     
    constructor(firstName,lastName,age, standard){
        
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.standard=standard
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
           console.log('setting')}  } 

    const user1 = new User('Aman', 'Mishra', 32)
    const user2 = new User('Anurag', 'Singh', 72)




// inheritance and super 

   
    class Students extends User{
        constructor(firstName,lastName,age, standard){
            super(firstName,lastName,age,standard)
            this.standard=standard
    }
    study(){console.log("studying")}
        
    }
        
    
    class Employee extends User{
        constructor(firstName,lastName,age,company){
            super(firstName,lastName,age)
            this.company=company
    }
    Work (){console.log("Working")}
        
    }
     
    const student1 = new Students('Amit', 'Mehra', 32,'Cs')
    const company2 = new Employee('Annu', 'Singhania', 45,'google')


//abb yeh sab alag alag bada code hai isko inherited karne ke liye hume student or employee ko blank karke
 //student ke aage sirf extends likhna hai  

   
 


    