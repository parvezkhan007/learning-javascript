//----------------------Promises--------------------
//promise 1 special object hai jo browser handle karta hai 
const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise ((resolve,reject)=>{

    resolveBtn.addEventListener('click',()=>{resolve ("Promise Resolve")});
    rejectBtn.addEventListener('click',()=>{reject ("Promise Rejected")})
    
})
// p.then((data)=>{console.log(data);})   //resolve ("Promise Resolve")
// .catch((error)=>{console.log(error);}) // reject ("Promise Rejected")
//agr hum finally lagate hai to resolve or reject dono show hoga 
// .finally((data)=>{console.log(data,'Final Result');})
// setTimeout(()=>{console.log('hii')},4000)


p.then((data)=>{console.log(data);return 'pk'})
.then((data)=>{console.log(data);return 'gk'}) 
.then((data)=>{console.log(data);return 'cd'})
.catch((error)=>{console.log(error);return errorshow})
.then((data)=>{console.log(data);return 'mk'})
//----------------------callback hell with promises-------------

