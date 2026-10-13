
function palindrom(str) {
    let str2 = str.split('').reverse().join('');
    if (str === str2) {
        return true;
    }
    return false;
}

console.log(palindrom("madam"));
