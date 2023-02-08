function calculatePhoneBill (n) {
    let total = 25000; 
    if (n <= 50) {
        total += 600; 
    } else if (total <= 200) {
        total += 600 + (n - 50)*400;
    } else {
        total += 600 + 150*400 + 200*(n - 200); 
    }
    
    return total; 
}

let n = prompt("nhap so phut goi trong thang: ");
console.log(calculatePhoneBill(n)); 