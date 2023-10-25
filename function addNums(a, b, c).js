function addNums(a, b, c) { 
    let sum; 
    if (a < 0) { 
       sum = Math.abs(a) + Math.abs(b) + Math.abs(c); 
    } 
    else { 
       sum = a + b + c; 
    } 
    console.log(sum);   
 } 
  
 let x = addNums(-1, 3, 7)
 