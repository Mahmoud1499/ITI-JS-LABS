let isRightFullName = true

// do{
    let firstName = prompt("Enter your Fisrt Name ");
    let lastName  = prompt("Enter your Last Name ");
 
    if(firstName || lastName){
        let isRightFullName=  confirm(`Is your name is ${firstName} ${lastName}`);
      
        if(isRightFullName){
            let age =  prompt("Enter your Age Name ");
           alert(`Welcome ${firstName} ${lastName} you are ${age} years old`);
       }
}
   
// }while(isRightFullName == false)



  