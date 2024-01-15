function timUCLN(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function timBCNN(a, b) {
    return Math.abs(a * b) / timUCLN(a, b);
}
let a = parseInt(prompt("nhap a"));
let b = parseInt(prompt("nhap b"));
let c = parseInt(prompt("nhap c"));
let d = parseInt(prompt("nhap d"));
let bcnn_ab = timBCNN(a, b);
let bcnn_abc = timBCNN(bcnn_ab, c);
let bcnn_abcd = timBCNN(bcnn_abc, d);
console.log(`Bội chung nhỏ nhất của ${a}, ${b}, ${c}, ${d} là: ${bcnn_abcd}`);
