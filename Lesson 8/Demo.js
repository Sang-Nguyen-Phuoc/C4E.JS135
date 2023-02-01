let oldIndex = 1000; 
let newIndex = 1147; 


let Number = newIndex - oldIndex;
let total = 0; 
if (Number < 0) {
    console.log("Error!"); 
}

const lmt1 = 50, lmt2 = 100, lmt3 = 150, lmt4 = 200, lmt5 = 250; 

const prc1 = 1243, prc2 = 1384, prc3 = 1644, prc4 = 1886, prc5 = 1976, prc6 = 2297; 

const tmp1 = (lmt1 - 0) * prc1,
      tmp2 = (lmt2 - lmt1) * prc2 + tmp1, 
      tmp3 = (lmt3 - lmt2) * prc3 + tmp2, 
      tmp4 = (lmt4 - lmt3) * prc4 + tmp3, 
      tmp5 = (lmt5 - lmt4) * prc5 + tmp4;

    if (Number <= lmt1) {
        total = number * prc1;
}   else if (Number <= lmt2) {
        total = tmp1 + (Number - lmt1) * prc2; 
}   else if (Number <= lmt3) {
        total = tmp2 + (Number - lmt2) * prc3; 
}   else if (Number <= lmt4) {
        total = tmp3 + (Number - lmt3) * prc4;
}   else if (Number <= lmt5) {
        total = tmp4 + (Number - lmt4) * prc5; 
}   else {
        total = tmp5 + (Number - lmt5) * prc6; 
}

    console.log(total); 