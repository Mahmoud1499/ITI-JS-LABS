// console.log("bouns");2
let result =Number( prompt("Enter Fisrt Number") );

let operation = ['sum','multi','subtract','division','moduls'];
// let result =  firstNumber ;
let NeedAnotherOperaton = true;
do{
    let inputOperation = prompt("Enter Operation as (sum,multi,subtract,division,moduls) ");
    let secondNumber =Number( prompt("Enter Second Number"));

if(operation.includes(inputOperation)){
    
    switch(inputOperation){
        case "sum": result += secondNumber;
            break;
        case "multi": result  *= secondNumber;
            break;
        case "subtract":result -= secondNumber;
            break;
        case "division":result /= secondNumber;
            break;
        case "moduls": result %= secondNumber;
            break;      
        default :
            result = "AHAH"                                 
    }

    alert(`The Result is : ${result}  `)

    NeedAnotherOperaton = confirm("Do you need another operation on " + result); 
}else{
    alert("Enter valid operation")
}

}while(NeedAnotherOperaton);
