function tinhBieuThuc(n){
    let S = 0.0;
    for(let i = 1; i < n; i++){
        S += 1 / Math.pow(i, 3);    
    }
    return S.toFixed(5);
    }
while(true){
    let n = parseFloat(prompt("nhap n"));
    if (!isNaN(n) && n > 0) {
    let ketQua = tinhBieuThuc(n);
    console.log(`Kết quả biểu thức S = ${ketQua}`);
    break;
    } else {
        console.log("khong hop le");
    }
}