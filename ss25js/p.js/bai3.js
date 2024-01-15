function timSoLonNhat(n) {
    let m = 0;
    let tong = 0;
    while (tong + m + 1 <= n) {
        m++;
        tong += m;
    }
    console.log(`Số nguyên dương m lớn nhất sao cho tổng 1+2+3+...+m < ${n} là: ${m}`);
}
while (true) {
    let input = parseInt(prompt("Nhập vào một số nguyên dương n:"));
    if (!isNaN(input) && input > 0) {
        timSoLonNhat(input);
        break;
    } else {
        alert("Vui lòng nhập một số nguyên dương.");
    }
}
