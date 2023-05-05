

function tinhTienDien(){

    var hoTen = document.getElementById("hoten").value;
    var soKW = document.getElementById("soKW").value;
    var giaTien;

    if (soKW <= 50) {
        giaTien = soKW * 500
    } else if (50 < soKW && soKW <=100) {
        giaTien = 50*500 + (soKW-50)*650
    } else if (100 < soKW && soKW <=200) {
        giaTien = 50*500 + 50*650 + (soKW-100)*850
    } else if (200 < soKW && soKW <=350) {
        giaTien = 50*500 + 50*650 + 100*850 + (soKW-200)*1100
    } else {
        giaTien = 50*500 + 50*650 + 100*850 + 150*1100+ (soKW-350)*1300
    }

    document.getElementById("Result").innerHTML = "Họ và tên: "+ hoTen + "<br>Tiền điện là: " +giaTien.toLocaleString() +" VND";
}

document.getElementById("btnCalc").onclick = tinhTienDien;