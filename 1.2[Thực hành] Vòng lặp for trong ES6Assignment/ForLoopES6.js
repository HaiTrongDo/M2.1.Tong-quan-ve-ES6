function geeks() {
    console.log("for(;;)")
    for (let i = 0; i <= 10; i += 2) {
        console.log(i + " ")
    }
}
geeks();

// Bước 2: Sử dụng vòng lặp for... of để in ra các đối tượng trong mảng
// Cập nhật chương trình, bổ sung đoạn mã nguồn sau:


    console.log("for...of")
for (let i of ['Ha Noi', 20.32, 3000]) {
    console.log(i + " ")
}

// Bước 3: Sử dụng vòng lặp for... in để lặp qua các thuộc tính của một đối tượng
// Cập nhật chương trình, khai báo biến obj và bổ sung đoạn mã nguồn sau:


let obj = {name: 'Peter', age: 25, salary: 3000};

console.log("for...in")
for (let i in obj) {
    console.log(obj[i] + " ");
}