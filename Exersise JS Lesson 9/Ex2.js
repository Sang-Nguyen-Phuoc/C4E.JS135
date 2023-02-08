let n = prompt("Nhập số n = "); 
let sum = 0; 

function sumOfTheOddNumbers(n) {
    for (let i = 0; i <= n; i += 2) 
        sum += i;
    return sum;  
}

console.log(sumOfTheOddNumbers(n)); 
