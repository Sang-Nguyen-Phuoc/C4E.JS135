let num = prompt("Nhập một số để kiểm tra có phải số nguyên tố hay không: "); 
let bool = true; 

    if (num < 2) {
        console.log(`Số ${num} không là số nguyên tố. `);
}   else if (num == 2 || num == 3 || num == 5 || num == 7) {
        console.log(`Số ${num} là số nguyên tố. `);
}   else {
        for (let i = 3; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                 bool = false; 
                 break;
            }
        }
}
    if (bool) {
        console.log(`Số ${num} là số nguyên tố. `)
    } else {
        console.log(`Số ${num} không là số nguyên tố. `);
    }