function inSoVaTinhTong(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        console.log(i);
        tong += i;
    }
    if (tong % 2 === 0) {
        tong += 1;
    }
    console.log(`Tổng các số là: ${tong}`);
}
while (true) {
    let a = parseFloat(prompt("nhap a"));
    if (!isNaN(a) && a > 0) {
        inSoVaTinhTong(a);
        break;
    } else {
    alert("Vui lòng nhập một số nguyên dương.");
    }
}
