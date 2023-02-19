const form = document.getElementById("sign-in"); 

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")); 
    if ((user.email  === event.target.email.value) && (user.password === event.target.pw.value)) {
        localStorage.setItem("isLogin", true); 
        window.location.href = "./Index.html"; 
       
    }
    else 
        alert("Ban da nhap sai."); 
})