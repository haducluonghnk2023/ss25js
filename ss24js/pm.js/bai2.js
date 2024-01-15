let a = parseInt(prompt("nhap a"));
let b = parseInt(prompt("nhap b"));
let tong = 0;
for (let i = a; i <= b; i++) {
    tong += i;
}
console.log(`Tổng các số nguyên trong khoảng giữa ${a} và ${b} là: ${tong}`);