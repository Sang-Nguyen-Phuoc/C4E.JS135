const form = document.getElementById("sign-up"); 

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const user = {
        email: event.target.email.value, 
        password: event.target.pw.value, 
    }
    localStorage.setItem("user", JSON.stringify(user)); 
}) 