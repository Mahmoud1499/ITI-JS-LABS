
for(let i =0 ; i<=24 ; i++){
    
    let clock
    
    if(i==0){
        clock = `12 AM`;
    }else if(i<=12){
        clock = `${i} AM `;
    }else if (i<=23){
        clock = `${i % 12} PM` ;
    }else if (i==24){
        clock = `12 PM`;
    }

    document.write(`${i} -> ${clock} <br> `);

}



