//----------------------Async Await--------------------------
// iss se hum .then .catch ko easy small and easy karsakhte hain---------------------

async function makeRequest() {
    // //return 'Hello World'
    // throw new Error ('Hello World')
    // const url = 'https://6wrlmkp9u2.execut-api.us-east-1.amazonaws.com/?sleep=5000'
    // fetch(url)


    const url = 'https://6wrlmkp9u2.execut-api.us-east-1.amazonaws.com/?sleep=5000'
    // const responsePromise = fetch(url);
    // responsePromise.then((response)=>{ 
    //     console.log(response);
    // })
    //  responsePromise.then((res)=>res.json()).then((data)=>{console.log(data)})
    const response = await fetch(url);
    console.log(response)
    console.log('hiii')
    }
makeRequest()


