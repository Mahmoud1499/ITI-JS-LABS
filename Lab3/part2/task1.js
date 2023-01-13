let numbers =[];
let count =parseInt( prompt("Enter count of numbers"));
let sum = 0;
let avg = 0;

if(count>0){
    
    for(let i=0;i<count;i++){
        numbers.push(Number(prompt(`Enter Number ${i+1} ` )));
    }

    numbers.forEach(num => {
        sum += num;
      });
    
     avg = sum/count;    

    alert(`The sum is ${sum} and the Avg is ${avg}`);
}else{
    alert(`How the count is ${count}`)
}



