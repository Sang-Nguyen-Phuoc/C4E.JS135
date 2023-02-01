let a = prompt("Nhap so thu 1: "); 
let b = prompt("Nhap so thu 2: "); 
let c = prompt("Nhap so thu 3: "); 

if (a > b) {
    if (a > c)
        console.log(`${a} la so lon nhat.`);
    else 
        console.log(`${c} la so lon nhat.`);  
} else {
    if (b > c) 
        console.log(`${b} la so lon nhat.`); 
    else 
        console.log(`${c} la so lon nhat.`); 
}
