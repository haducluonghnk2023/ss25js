function findMinimumSquaresLengthWidth(length, width) {
    let minimumSquares = 0;
    while (width > 0) {
        minimumSquares += Math.floor(length / width);
        let temp = length % width;
        length = width;
        width = temp;
    }
    return minimumSquares;
}
function main() {
    let length = parseInt(prompt("Nhập chiều dài :"));
    let width = parseInt(prompt("Nhập chiều rộng :"));
    let result = findMinimumSquaresLengthWidth(length, width);
    console.log(`Số hình vuông tối thiểu có thể cắt từ hình chữ nhật là: ${result}`);
}
main();
