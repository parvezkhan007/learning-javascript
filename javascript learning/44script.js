//---------------------------callback hell let's fix with promises-----------

function makeHttpRequest(method, url) {

    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    const p = new Promise((resolve,reject)=>{
 
      xhr.addEventListener('load', () => {
      resolve(xhr.response)
      })

      xhr.addEventListener('error', () => {
        reject('Request Failed')
        })
    })
    // xhr.addEventListener('load', () => {
    //   callback(xhr.response)
    // })
  
    xhr.open(method, url)
    xhr.send()
    return p
  }
// makeHttpRequest('Get','https://dummyjson.com/users')
// .then((userData)=>{return  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`)})
// .then((postdata)=>{console.log (postdata)})

makeHttpRequest('Get','https://dummyjson.com/users')
.then((usersData)=>makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((postsData)=>makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
.then((commentsData)=>makeHttpRequest('GET', `https://dummyjson.com/comments/post/${commentsData.posts[0].id}`))
.then((userdata)=>console.log(userdata))
.catch((error)=>console.log(error))
