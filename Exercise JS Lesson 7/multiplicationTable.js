let num = prompt("Nhập vào màn hình số muốn tính cửu chương: "); 
console.log("Bảng cửu chương", Number(num), ":");
for (let i = 1; i < 11; i++)
{
    console.log(num, "x", i, "=", Number(num)*i);
}