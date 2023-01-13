let firstNumber =Number( prompt("Enter Fisrt Number") );
let inputOperation = prompt("Enter Operation as (sum,multi,subtract,division,moduls) ");
let secondNumber =Number( prompt("Enter Second Number"));
let operation = ['sum','multi','subtract','division','moduls'];
let result = 0 ;


if(operation.includes(inputOperation)){
    
    switch(inputOperation){
        case "sum": result =  firstNumber+ secondNumber;
            break;
        case "multi": result = firstNumber * secondNumber;
            break;
        case "subtract":result =  firstNumber- secondNumber;
            break;
        case "division":result = firstNumber/ secondNumber;
            break;
        case "moduls": result = firstNumber % secondNumber;
            break;      
        default :
            result = "AHAH"                                 
    }

    alert(`The Result is : ${result}  `)
}else{
    alert("Enter valid operation")
}