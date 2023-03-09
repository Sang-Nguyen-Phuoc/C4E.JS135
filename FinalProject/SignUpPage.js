const form = document.getElementById("form"); 

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const user = {
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value, 
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Đăng kí thành công!");
    window.location.href = "SignInPage.html"
})