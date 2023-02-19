const form = document.getElementById("sign-up"); 

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")); 
    if ((user.email  === event.target.email.value) && (user.password === event.target.password.value)) {
        window.location.href = "./Index.html"; 
        localStorage.setItem("isLogin", true); 
    }
    else 
        alert("Ban da nhap sai."); 
})