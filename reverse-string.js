
// using loop
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}
console.log(reverseString("world"))

// using built-in method

function reverse_string(str) {
    return str.split('').reverse().join('');
}
console.log(reverse_string("hello"));
