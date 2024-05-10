//----------------------Event Bubbling & Capturing ------------------
const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


// green.addEventListener('click',(e)=>{
//     console.log('green event listener')
// })

// pink.addEventListener('click',(e)=>{
//     console.log('pink event listener')
// })

blue.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('blue event listener')
},{capture:true,once:true}    )


