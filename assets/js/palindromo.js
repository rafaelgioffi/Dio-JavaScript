// solução 1...
function Palindrome(string) {
    if (!string) return "string inexistente";

    if (string.split("").reverse().join("") === string) {
        return `"${string}" é um palindromo!`;
    }
    else {
        return `"${string}" não é um palindromo...`;
    }
}

console.log(Palindrome("ama"));

// solução 2...
function Palindrome2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return `"${string}" não é um palindromo...`;
        }
    }
    return `"${string}" é um palindromo!`;
}

console.log(Palindrome2("abracecar"));