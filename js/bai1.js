/*
 * Khối 1: Input
 * diem1,diem2,diem3
 * diemchuan, khuvuc, doituong
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính
 * + tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong
 * + tongDiem >= diemChuan
 * 
 * Khối 3: Output
 * tongDiem
 * ketQua = Dau/ Rot
 */

function tinhDiem() {
    var diem1 = document.getElementById("diem1").value;
    var diem2 = document.getElementById("diem2").value;
    var diem3 = document.getElementById("diem3").value;
    var khuVuc = document.getElementById("khuvuc").value;
    var doiTuong = document.getElementById("doituong").value;
    var diemChuan = document.getElementById("diemchuan").value;

    var diemKhuVuc = 0;
    switch (khuVuc) {
        case "X": diemKhuVuc = 0
            break;
        case "A": diemKhuVuc = 2
            break;
        case "B": diemKhuVuc = 1
            break;
        case "C": diemKhuVuc = 0.5
            break;
        default:
        alert("Bạn quên chọn khu vực!");
            break;
    }

    var diemDoiTuong = 0;
    switch (doiTuong) {
        case "0": diemDoiTuong = 0
            break;
        case "1": diemDoiTuong = 2.5
            break;
        case "2": diemDoiTuong = 1.5
            break;
        case "3": diemDoiTuong = 1
            break;
        default:
        alert("Bạn quên chọn đối tượng!");
            break;
    }

    var tongDiem = Number(diem1) + Number(diem2) + Number(diem3) + diemKhuVuc + diemDoiTuong;
    var ketQua;
    if (tongDiem >= diemChuan && diem1 != 0 && diem2 != 0 && diem3 !=0) {
        ketQua = "Thí sinh Đậu"
    } else {
        ketQua = "Thí sinh Rớt"
    }
    document.getElementById("Result").innerHTML = "Tổng điểm là: " + tongDiem +" => " +ketQua;

    // console.log(diem1, diem2, diem3, diemChuan);
    // console.log(diemKhuVuc);
    // console.log(diemDoiTuong);
    // console.log(tongDiem);
    // console.log(ketQua);

}

document.getElementById("btnCalc").onclick = tinhDiem;
