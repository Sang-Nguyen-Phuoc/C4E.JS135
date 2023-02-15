let num = prompt("Nhap mot so lon hon 0: "); 

while (isNaN(num) || num <= 0)
   num = prompt("Nhap mot so lon hon 0: "); 

const tinhcuuchuong = document.getElementById("bangcuuchuong"); 
for (let i = 0; i < 10; i++) {
    let product = Number(num) * i; 
    const liElement = document.createElement("li"); 
    liElement.innerHTML = `${num} * ${i} = ${product} `; 
    tinhcuuchuong.append(liElement); 
}
