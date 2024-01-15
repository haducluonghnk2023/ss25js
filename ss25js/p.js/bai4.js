function tinhBieuThuc(n) {
    let S = 0;
    let P = 1;
    for (let i = 1; i <= n; i++) {
        P *= 10;
        S += P * i + 1;
    }
    console.log(`Giá trị biểu thức S là: ${S}`);
}
while (true) {
    let input = parseInt(prompt("Nhập vào một số nguyên dương n:"));
    if (!isNaN(input) && input > 0) {
        tinhBieuThuc(input);
        break;
    } else {
        alert("Vui lòng nhập một số nguyên dương.");
    }
}
