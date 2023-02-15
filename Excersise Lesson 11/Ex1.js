function check(check) {
    const img = document.getElementsByClassName("btn-img"); 
    if (check == 'off') {
        img[0].setAttribute('src', "./image/pic_bulboff.png");
    }
    else 
        img[0].setAttribute('src', './image/pic_bulbon.png');
}