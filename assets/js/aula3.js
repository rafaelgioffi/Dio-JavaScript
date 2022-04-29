var numRef = document.getElementById("currentNumber");
var num = 0;
var btnPlus = document.getElementsByName("adicionar");
var btnMinus = document.getElementsByName("subtrair");

function decrement() {
    if (num < 1) {
        btnMinus.disabled = true;
        numRef.classList.remove("#currentNumber");
        numRef.classList.add("currentRed");   
    } else {
        btnMinus.disabled = false;
        num = num - 1;
        numRef.innerHTML = num;
        numRef.classList.remove("currentRed");
        numRef.classList.add("#currentNumber");
    }
}

function increment() {
    if (num > 0) {
        numRef.classList.remove("currentRed");
        numRef.classList.add("#currentNumber");
    }
    num = num + 1;
    numRef.innerHTML = num;
}