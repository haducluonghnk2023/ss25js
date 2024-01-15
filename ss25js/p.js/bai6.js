function fibonacci(n) {
    if (n <= 0) {
        return "nhập 1 số nguyên dương.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        let a = 0, b = 1;
        for (let i = 3; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}
function main() {
    let n = parseInt(prompt("Nhập vào số nguyên dương n:"));
        let result = fibonacci(n);
        console.log(`Số Fibonacci thứ ${n} là: ${result}`);
}
main();
