//-----------------------Event Delegation---------------------
//is se hum code ko optimised karte hain fast bana dete hai


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


//humne ispr 1 or event listener lagadiya hai delete karne ke liye 
// newcard.addEventListener('click',()=>{
//     newcard.remove()})

    //container ko append karenge 
container.append(newcard)
// console.log(newcard)
 })

//abb hum parent pr event lagadete hai kyuki agr hum sab newcard pr
 //event lagayenge to hamra app or web slow work karega
//------- newcard.addEventListener('click',()=>{
//        newcard.remove()})    -------


container.addEventListener('click',(e)=>{
// e.target.remove()
//humne ise kaha hai ke agr event target container ke equal na hoto delete kare 
if (e.target !== container){
    e.target.remove()
}
})

