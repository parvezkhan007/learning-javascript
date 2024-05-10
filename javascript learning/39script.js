const elementname= document.querySelector('.name-tag')
const nameInput=document.querySelector('.name')


const elementage= document.querySelector('.age-tag')
const ageInput=document.querySelector('.age')


// // elementname.innerText=localStorage.myName
// elementname.innerText=localStorage.getItem('myName')

// nameInput.addEventListener('input',(e)=>{
// // console.log(e.target.value)
// // localStorage.myName=e.target.value
// // elementname.innerText=e.target.value
// localStorage.setItem('myName',e.target.value)
//  elementname.innerText=localStorage.getItem('myName')

// })
//-----------------------------------------------------------------------//

// elementage.innerText=localStorage.getItem('myAge')

// ageInput.addEventListener('input',(e)=>{
//     // console.log(e.target.value)
//     // localStorage.myAge=e.target.value
//     // elementage.innerText=e.target.value
//     localStorage.setItem('myAge',e.target.value)
//      elementage.innerText=localStorage.getItem('myAge')
    
//     })


//--------------------------object ko kese save karenge local storage me ---------------------
// const myData ={name:"",age:""}                     yeh 1 object hai 
// const myData =localStorage.getItem('myData')       yeh 1 strings hai or hume object chahiye hota hai 
const myData = JSON.parse(localStorage.getItem('myData')) || {}

if(myData.name){elementname.innerText=myData.name }
if(myData.age){elementage.innerText=myData.Age}

nameInput.addEventListener('input',(e)=>{

    myData.name=e.target.value
    localStorage.setItem( 'myData',JSON.stringify(myData))
    //JSON.stringify object se string me convert karta hai 
// abb browser pr kese dikhayenge
elementname.innerText=e.target.value

})

ageInput.addEventListener('input',(e)=>{

    myData.Age=e.target.value
    localStorage.setItem( 'myData',JSON.stringify(myData))
    //JSON.stringify object se string me convert karta hai 
// abb browser pr kese dikhayenge
elementage.innerText=e.target.value

})
// browser pr agr name nahi diya hoto undefined show karega 
// elementname.innerText=myData.name
// elementage.innerText=myData.Age
//undefined value kese hataye 
// if(myData.name){elementname.innerText=myData.name }
// if(myData.age){ elementage.innerText=myData.Age}
// local storage kese clear kare javascript se         localStorage.clear/ localStorage.removeitems()
