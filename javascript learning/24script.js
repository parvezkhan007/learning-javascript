//--------------------filter()function ------------------
//


//let array= [2,20,6,8,25,78,98]
//result = [20,25,78,98]

//------------Anonymous fuction--------------------- 
//let array1=array.filter(function (Ans){return Ans>10});



//let array1=array.filter(Ans=>Ans>10);
//console.log(array1)


// let team = [ {Name: "Parvez Khan",
//              city: "Indore",
//              Pincode: '455001'},
            
//              {Name: "Fardeen Khan",
//              city: "Dewas",
//              Pincode: '455001'},

//              { Name: "Abdul Khan",
//              city: "Dewas",
//              Pincode: '455001'}
//   ]
// let names= team.filter(Ans=>Ans.city=="Dewas");
// console.log(names)

//-------------------x------------------------------


//------------------Reduce array method ---------------
let people = [


    {name:"abc",age:30},
    {name:"xyz",age:38},
    {name:"pqr",age:52},
    {name:"stu",age:65},

]

let sum = people.reduce( (khuchbhi,aadmi)=>khuchbhi+aadmi.age,0)
console.log(sum);

let names = people.reduce((kucbhi,aadmi)=>kucbhi+ ":"+ aadmi.name,"")
console.log(names)

