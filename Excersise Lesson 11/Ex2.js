

function change() {
    const text = "Chúc mừng bạn đã đăng kí thành công!";
    const changeColor = document.getElementById("btn");
    const content = document.getElementById("content"); 
    content.innerHTML = text; 
    content.style.color = "red"; 
    changeColor.disabled = true;
}
