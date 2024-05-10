const username = 'Parvez'
const userAge =  24

debugger

switch (true) {

    case(userAge >= 0 && userAge <= 4):
    console.log(`${username} is a kid.`)
    console.log('And he/she is playing.')
    break
  
    case(userAge >= 5 && userAge <= 17):
    console.log(`${username} is a school student.`)
    console.log('And he/she is studing.')
    break
  
    case(userAge >= 18 && userAge <= 24):
    console.log(`${username} is a college student.`)
    console.log('And he/she is professonal.')
    break
  
    case(userAge >= 25 && userAge <= 45):
    console.log(`${username} is a experienced person.`)
    console.log('And he/she is programmer.')
    break
  
    case(userAge >= 45 && userAge <= 121):
    console.log(`${username} is a retired.`)
    console.log('And he/she is retired.')
    break
  
    default : console.log ('please enter a valid number')

}