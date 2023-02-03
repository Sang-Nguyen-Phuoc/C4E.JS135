let day = prompt("Nhap ngay sinh: ");
let month = prompt("Nhap thang sinh: ");


switch (Number(month)) {
    case (1):
        if (Number(day) > 19)
            console.log("Cung bao binh");
        else
            console.log("Cung ma ket.");
        break;
    case (2):
        if (Number(day) > 18)
            console.log("Cung song ngu");
        else
            console.log("Cung bao binh.");
        break;
    case (3):
        if (Number(day) > 20)
            console.log("Cung bach duong");
        else
            console.log("Cung song ngu.");
        break;
    case (4):
        if (Number(day) > 20)
            console.log("Cung kim nguu");
        else
            console.log("Cung bach duong.");
        break;
    case (5):
        if (Number(day) > 20)
            console.log("Cung song tu");
        else
            console.log("Cung kim nguu.");
        break;
    case (6):
        if (Number(day) > 21)
            console.log("Cung cu giai ");
        else
            console.log("Cung song tu.");
        break;
    case (7):
        if (Number(day) > 22)
            console.log("Cung su tu ");
        else
            console.log("Cung cu giai.");
        break;
    case (8):
        if (Number(day) > 22)
            console.log("Cung xu nu");
        else
            console.log("Cung su tu.");
        break;
    case (9):
        if (Number(day) > 22)
            console.log("Cung thien binh");
        else
            console.log("Cung xu nu.");
        break;
    case (10):
        if (Number(day) > 23)
            console.log("Cung bo cap");
        else
            console.log("Cung thien binh.");
        break;
    case (11):
        if (Number(day) > 22)
            console.log("Cung nhan ma");
        else
            console.log("Cung bo cap.");
        break;
    case (12):
        if (Number(day) > 21)
            console.log("Cung ma ket");
        else
            console.log("Cung nhan ma.");
        break;
}