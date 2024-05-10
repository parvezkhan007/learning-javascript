//-----------------------------BOM------------------
//-------browser object model------------


// HTML elements behind the scene objects hote hain jo javascript pr behind the scene save hote hain
// document.body.children[0].innerHTML

// variable ke andr store karte
// const myparagraph=document.body.children[0]









//---------------------DOM--------------------------

//--------------------------Selecting Element-------------------------------
// document.getElementsByTagName()
// document.images











//------------appendchild & append --------------------------
const h1=document.querySelector("hi")

const container=document.querySelector(".container")
const card = document.querySelector(".card")

// for (let i=0; i<=100; i++){

//     const newCard=card.cloneNode()
//     newCard.innerText=i
//     container.appendChild(newCard)
    
// }

// aapendchild ke andr hum strings ko nahi use karsakhte hain 
// container.appendChild('hi') not working 
const newtext=document.createTextNode("hi")
container.appendChild(newtext)
// appendchild ke andr return value show hoti hai 
// appendchild me hum multiple elements use nhi karsakhte hain 


//---------Append---------
// aapend ke andr hum strings ko use karsakhte hain 
// container.append('hi') working 

// append ke andr return value show nahi hoti hai 
// append me hum multiple elements use karsakhte hain 
container.append("hi",h1,undefined,null)


for (let i=2; i<=100; i++){

    const newCard=card.cloneNode()
    newCard.innerText=i
    container.append(newCard)
    
}






