var numRef = document.getElementById("currentNumber");
var num = 0;
var btnPlus = document.getElementsByName("adicionar");
var btnMinus = document.getElementsByName("subtrair");
var error = document.getElementById("error");

function decrement() {
    if (num < 1) {
        btnMinus.disabled = true;
        numRef.classList.remove("currentNumber");
        numRef.classList.add("currentRed");
        error.innerHTML = "Número não pode ser menor que zero";
    } else {
        error.innerHTML = "";
        btnMinus.disabled = false;
        num = num - 1;
        numRef.innerHTML = num;
        numRef.classList.remove("currentRed");
        numRef.classList.add("currentNumber");
    }
}

function increment() {
    if (num >= 0) {
        error.innerHTML = "";
        numRef.classList.remove("currentRed");
        numRef.classList.add("currentNumber");
    }
    num = num + 1;
    numRef.innerHTML = num;
}