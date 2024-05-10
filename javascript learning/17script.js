
//--------------------Event loop & Callback Que------------------------


console.log ("Hi-1")

function hello(){console.log("Hello World")}

for(let i=1; i<=4; i++){
console.log(i);
}

//hello()    function(){console.log("Hi-3");} <---ise call back que kehte hain

setTimeout(  function(){console.log("Hi-3");},0  )

console.log('Hi-2')
