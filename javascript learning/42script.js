//----------------------callback hell---------------------------

// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'
// xhr.addEventListener('load', () => {
//   console.log(xhr.response.user[0].id)
// })
// xhr.open('GET', 'https://dummyjson.com/users')
// xhr.send()

//ise hum bhot use kaenge isiliye ise hum 1 function bana dete hai makeHttpRequest name se 
// makeHttpRequest()

function makeHttpRequest(method, url, callback) {

    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
      callback(xhr.response)
    })
  
    xhr.open(method, url)
    xhr.send()
  }
  
  //callback 1 function liya hai humne
  
  makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {

    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {

      makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {

        makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
          console.log(userData);
        });
      
       });
   
    });
  
})
