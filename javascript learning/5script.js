const grade= "a"

debugger

switch (grade.toLocaleUpperCase()) {

    case 'A':
    console.log(`your score is between 85% to 100%`)
    break

    case 'B':
        console.log(`your score is between 71% to 84%`)
        break

         case 'C':
            console.log(`your score is between 51% to 70% `)
            break
           
            case 'D':
                console.log(`your score is between 33% to 50% `)
                break
              
                case 'E':
                    console.log(`your score is between 0% to 33%`)
                    break
  
  
    default : console.log ("please enter a valid grade you're failed")

}