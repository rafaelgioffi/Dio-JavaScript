function TrocaPares(num) {
    if (num.length <= 0) return -1;

    for(let i = 0; i < num.length; i++) {
        if (num[i] === 0) {
            console.log(`O número da posição ${i} já é zero...`);
        }

        else if (num[i] % 2 === 0) {
            console.log(`Substituindo ${num[i]} por 0...`);
            num[i] = 0;
        }
        else if (num[i] % 2 !== 0) {
            console.log(`${num[i]} não é par.`);
        }
    }
    return num;
}

console.log(TrocaPares([1, 3, 6, 0, 0, 9, 16, 80, 13, 90]));