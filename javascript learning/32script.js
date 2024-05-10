//---------------------------Event Listener----------------------------

// const h1=document.querySelector('h1')
// const card=document.querySelector('.card')
// const container=document.querySelector('.container')



// function sayhi(){
//     console.log('hiiiiiii');

// }
// function sayhi2(){console.log('2hiiiiii')}
// // h1.onclick=sayhi



// h1.addEventListener('click',sayhi) //YEH ONCLICK KI TARAH FUNCTION SHOW
//                                    // NIKARTA BEHIND THE SCENE WORK KARTA HAI
// //  h1.addEventListener('click',function(){console.log('2hi')})
// h1.addEventListener('click',sayhi2)
// card.addEventListener('click',sayhi)


 
//--------------------------Add New Card-------------------


const h1=document.querySelector('h1')
const card=document.querySelector('.card')
const container=document.querySelector('.container')


let count=1

card.addEventListener('click',()=>{
    const newcard=document.createElement('div')


// yahan pr hume css dena padega jis seki jo braket hai color hai vo use bhi miljay div dono class se 
newcard.classList.add('card')


// abb number kese add kare bracket me 
newcard.innerText=count++


//container ko append karenge 
container.append(newcard)

    console.log(newcard)
 })

