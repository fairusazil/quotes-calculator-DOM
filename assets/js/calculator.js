function calculation() {

    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let operand = document.getElementById("operand").value;
    let resultOperand = document.getElementById("result");

    if (isNaN(input1) || isNaN(input2)) {
        alert("Jangan kosong bung, isi pakai angka!!")
    } else {
        if (operand == "+") {
            total = input1 + input2;
        } else if (operand == "-") {
            total = input1 - input2;
        } else if (operand == "*") {
            total = input1 * input2;
        } else if (operand == "/") {
            total = input1 / input2;
        }
    }
    resultOperand.value = total;
}