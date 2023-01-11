let vowels = ['a','e','o','u','i'];
let userInput = prompt("Enter a String"); 
let count =0 ;

for (let letter of userInput.toLowerCase() ){
    for(let vowel of vowels){
       if(letter === vowel)
        count++;
    }
}

alert(`You have ${count} vowels in the string `);