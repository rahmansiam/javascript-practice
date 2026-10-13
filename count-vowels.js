// Count vowels in a string

function countVowels(str) {
    let count = 0
    for (const val of str) {
        const ch = val.toLowerCase();
        if (ch === 'a' || ch === "e" || ch === 'i' || ch === 'o' || ch === 'u') {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels("SIAM"));
