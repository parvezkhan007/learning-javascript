//---------------------Form Event and Event Object-------------------
const usernameinput=document.querySelector('#username')
const paragraph=document.querySelector('p')
const form=document.querySelector('form')

// usernameinput.addEventListener('click',()=>{
//     console.log('input clicked')
// })

// usernameinput.addEventListener('dblclick',()=>{
//     console.log('input dblclicked')
// })

// let inputvalue=
// usernameinput.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     inputvalue=e.target.value
//     paragraph.innerText=e.target.value
//     })

// let inputvalue=
// usernameinput.addEventListener('change',(e)=>{
//     console.log(e.target.value)
//     inputvalue=e.target.value
//     paragraph.innerText=e.target.value
//     })

//     let inputvalue=
// usernameinput.addEventListener('focus',(e)=>{
//     console.log(e.target.value)
//     inputvalue=e.target.value
//     paragraph.innerText=e.target.value
//     })

//     let inputvalue=
// usernameinput.addEventListener('blur',(e)=>{
//     console.log(e.target.value)
//     inputvalue=e.target.value
//     paragraph.innerText=e.target.value
//     })


form.addEventListener('submit',(e)=>{
    //e.preventDefault() page relod mhi hoga submit kaenge to
    console.log(e)

})


