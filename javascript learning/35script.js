//---------------------------Mouse Event----------------------------




 
//--------------------------Add New Card-------------------


const h1=document.querySelector('h1')
const card=document.querySelector('.card')
const container=document.querySelector('.container')


let count=1
//-----------------------Mouse Event List---------------------------
// card.addEventListener('click',()=>{
    // card.addEventListener('dblclick',()=>{
    //     card.addEventListener('mouseup',()=>{
    //         card.addEventListener('mousedown',()=>{
                // card.addEventListener('mouseenter',()=>{
                    // card.addEventListener('mouseleave',()=>{
                    //     card.addEventListener('mousemove',()=>{
                    //         card.addEventListener('mouseout',()=>{
                                // card.addEventListener('mouseover',()=>{
         //  card.addEventListener('wheel',()=>{    
        // card.addEventListener('touchstart',()=>{   
       // card.addEventListener('touchend',()=>{  
      // card.addEventListener('touchmove',()=>{   
                                      
    // document.body.addEventListener('scroll',()=>{ 
        // h1.addEventListener('drag',(e)=>{
        
    //-------pointerevent for mobile&pc
    //card.addEventListener('pointermove',()=>{ 
             card.addEventListener('pointerenter',()=>{ 
                // card.addEventListener('pointerleave',()=>{ 
                    
                
      const newcard=document.createElement('div')


// yahan pr hume css dena padega jis seki jo braket hai color hai vo use bhi miljay div dono class se 
newcard.classList.add('card')


// abb number kese add kare bracket me 
newcard.innerText=count++


//container ko append karenge  
container.append(newcard)


    console.log(newcard)
 })
