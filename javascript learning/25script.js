//------------------- Some () array method ------------
//const evenNumbers =[0,2,4,6,8]
//const result = evenNumbers.some(num=> num>4)
// console.log(result)


   // const result = evenNumbers.some((num,i)=> {if (num %2 ===1 ) 
        //{console.log(i)} num %2===1
 //   })
// console.log(result)




//---------------------Every() array method----------------

// const evenNumbers =[2,4,6,8]


// const result =evenNumbers.every((num,i)=> {if(num % 2 ===0){console.log (i) }return num %2===0})
// console.log (result)


//--------------------Arguments--------------------------
function add(a,b){console.log(arguments);
return a+b}


function add(){
    let sum=0
    for (let i=0; i<arguments.length;i++)
    {sum=sum + arguments[i]}return sum
}

//----------------------Rest parameters es6-----------------------