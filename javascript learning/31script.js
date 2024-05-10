//---------------------createElement------------------


// const h1 = document.querySelector('h1')
// const container = document.querySelector('.container')
// const firstImage = document.querySelector("img")

// const paragraph = document.createElement('p')
// paragraph.innerText = 'Hello'
// paragraph.classList.add('my-para')

// container.append(paragraph)

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 1; i <= 100; i++) {
//   const newImg = document.createElement('img')
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(newImg)
// }

// const newImage = document.createElement('img')

// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

// container.append(newImage)



//---------------document.createElement--------------


//const container = document.querySelector('.container')

// for(let i = 1; i <= 100; i++) {
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container')

//     const newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     const paragraph = document.createElement('p')
//     paragraph.innerText = i

//     imgContainer.append(newImage, paragraph)
//     container.append(imgContainer)
// }




// const newfile = document.createElement('img') 
// newfile.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
// container.append(newfile)








//------------------------javascrip se html div banakr create karna ------------------------------

const container = document.querySelector('.container')

for (let i=1;i<=100;i++){
// const newfile= document.createElement('img')
// newfile.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
// container.append(newfile)


const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}


//----------short tarike se javascript se html div create karna  ------------


// const container = document.querySelector('.container')

//        let myHTML = ``

//        for (let i = 1; i <= 100; i++) {
//        myHTML += `
//        <div class="img-container">
//                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//                  <p>${i}</p>
//        </div>
//        `
//        }


// container.innerHTML = myHTML


// const myimg=document.querySelector("body > div > div:nth-child(5)")     remove ()
