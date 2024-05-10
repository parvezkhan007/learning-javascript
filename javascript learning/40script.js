// --------------What is Api ....... get , post,delete----------//

const image = document.querySelector('img')
const button = document.querySelector('button')

// button.addEventListener('click',()=>{

// fetch('https://dog.ceo/api/breads/image/random')
// .then((response)=>response.json())
// .then((json)=>{image.src=json.message})

// })



button.addEventListener('click',()=>{

const xhr= new XMLHttpRequest()
// console.log(xhr)

xhr.responseType= 'json'

xhr.addEventListener('load',()=>{
    // console.log(xhr.response)
    // console.log(JSON.parse(xhr.response))
    // console.log(xhr.response)
    image.src = xhr.response.message
    console.log(xhr);
})

xhr.open('GET','https://dog.ceo/api/breads/image/random');
xhr.send()

 })


