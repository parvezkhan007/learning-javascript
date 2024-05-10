//-------------------------Es6 default parameters----------
function multiply (a,b){return a*b}
//---- 2*undfined = undefined , 2* = undefined 

function multiply (a,b=1){return a*b}
//---- 2*undefined = 2 , 2* = 2





// dice default 
// function rollDie(){return Math.floor(Math.random()* 6)+1}

function rollDie(no_ofsides=6) {return Math.floor(Math.random()*no_ofsides)+1}

// function rollDie(no_ofsides=6) {
//     if(no_ofsides===undefined) {no_ofsides=6}
//     return Math.floor(Math.random()*no_ofsides)+1}


