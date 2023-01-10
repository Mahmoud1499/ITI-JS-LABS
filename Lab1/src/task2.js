alert("This is the first release of a calculator that only has a summation feature.");

let firstNumber = Number (prompt("Enter the first numberer ") );
let secondNumber = Number (prompt("Enter the second numberer "));

if(  isNaN(firstNumber)&& isNaN(secondNumber)){
    alert("Enter Valid Number please");
}else{
    let result =  firstNumber + secondNumber  ;
    alert(`summation result  is = ${result} `);
}