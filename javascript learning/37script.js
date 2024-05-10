//----------------------Event Simulate-----------

const h1=document.querySelector('h1')
const card=document.querySelector('.card')
const container=document.querySelector('.container')
const input=document.querySelector('input')
const form=document.querySelector('form')
const button=document.querySelector('button')

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

 //  for(let i=0;i<=100;i++){
//     card.click()
//  }
//  const intervalid= setInterval(()=>{
// if(count>100){clearInterval(intervalid)}
// card.click()
// },20)



//input.focus()
 setTimeout(()=>{ input.focus()},1000)

 //input.blur()
 setTimeout(()=>{ input.blur()},2000)

// form.submit()
setTimeout(()=>{ form.submit() },2000)

// form.reset()
setTimeout(()=>{ form.reset() },2000)

 

