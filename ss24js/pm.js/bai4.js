let soNguyen = parseFloat(prompt("nhập 1 số nguyên dương bất kì"));
let tong = 0;
for (let i = 2; i <= soNguyen; i += 2) {
    console.log(i*i);
    tong += i * i;
    if (tong >= soNguyen) {
        break;
    }
}
