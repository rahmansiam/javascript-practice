
function evenOdd(num) {
    if (num % 2 == 0) {
        return true
    }
    return false;
}

let result = evenOdd(12);
if (result == true) {
    console.log("Even");

}
else {
    console.log("Odd")
}

