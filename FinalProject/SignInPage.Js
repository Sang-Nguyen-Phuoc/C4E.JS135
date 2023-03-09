const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    if (event.target.password.value == user.password) {
        if (event.target.username.value == user.username || event.target.email.value == user.username) {
            localStorage.setItem("isSign", true);
            alert("Đăng nhập thành công!");
        }
        else 
            alert("Đăng nhập thất bại!"); 
    }
    else
    alert("Đăng nhập thất bại!");
})