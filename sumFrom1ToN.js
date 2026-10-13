
function sumOfn(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

// Using Formula
function sumFromN(n) {
    let result = n * (n + 1) / 2;
    return result;
}

console.log(sumFromN(5));
