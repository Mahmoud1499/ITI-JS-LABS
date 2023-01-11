let cancel = false ;

do{
  let age= Number(prompt("Enter your age"));
  let msg ; 
    

  if(isNaN(age) ){
    msg="Enter a valid age pleaseee !!";
  }else if( age <= 10){
    msg= " You are a Child !!!";
  }else if(age <= 18 ){
    msg= " You are a Teenager  !!!";
  }else if( age <=50 ){
    msg= " You are Grown Up  !!!";
  }else if(50 < age ){
    msg= " You are Old  !!!";
  }
//   else{
//     msg = " Enter a valid age ";
//   }
  
  alert(msg);

  cancel = confirm ("You want to Enter another age ????? ");

}while(cancel)