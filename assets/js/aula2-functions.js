function soma(a, b) {
    console.log(a + b); //exibe no console
    return a + b;
}

soma(3, 5);

// desafio

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(array[i]," não é par.");
        }
    }
    return evenNums;
}

let array = [1, 2, 4, 5, 7, 8];

console.log("Os números pares são: ",returnEvenValues(array));