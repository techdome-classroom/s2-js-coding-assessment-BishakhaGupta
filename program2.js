var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const value = romanMap[s[i]];
        const nextValue = romanMap[s[i + 1]];

        if (nextValue && value < nextValue) {
            total -= value;
        } else {
            total += value;
        }
    }

    return total;
};

// Test cases
console.log(romanToInt("III"));       // Output: 3
console.log(romanToInt("LVIII"));     // Output: 58
console.log(romanToInt("MCMXCIV"));   // Output: 1994
