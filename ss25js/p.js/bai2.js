let a = parseFloat(prompt("nhap a"));
let b = parseFloat(prompt("nhap b")); 
let tongLe = 0;
let tongChan = 0;
for(let i = a; i < b; i++){
    if(i%2 === 0){
        tongChan += i;
    }else if(i%2 === 1){
        tongLe += i;
    }else (
        console.log("khong hop le.Vui lòng nhập lại")
    )
}  
console.log(`Tổng các số chẵn trong khoảng giữa ${a} và ${b} là: ${tongChan}`);
console.log(`Tổng các số lẻ trong khoảng giữa ${a} và ${b} là: ${tongLe}`);