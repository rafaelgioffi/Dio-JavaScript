function numeros(num1, num2) {
    let soma;
    let msg;

    soma = num1 + num2;
    msg = num1 !== num2 ? `Os números ${num1} e ${num2} não são iguais.` : `Os números ${num1} e ${num2} são iguais.`;
    msg+= ` Sua soma é ${soma}`;
    msg+= soma > 10 ? `, que é maior que 10 e ` : `, que é menor que 10 e `;
    msg+= soma > 20 ? `maior que 20.` : `menor que 20.`;

    return msg;
}

console.log(numeros(10, 20));