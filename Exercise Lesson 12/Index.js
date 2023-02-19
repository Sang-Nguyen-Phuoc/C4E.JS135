const isLogin = localStorage.getItem("isLogin"); 

if(!isLogin) {
    window.location.href = "SignInPage.html"; 
}