/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = { //Map all the roman nums to their int value.
        'I' :1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    //looping through the str, lets check each char.
    for(let i = 0; i < s.length; i++){
        const current = romanMap[s[i]];
        const next = romanMap[s[i+1]];
    // if the current val is less than the next, we sub it.like IV, IX, etc.
    if (current < next) {
        total -= current;
    } else {
        total += current;
    }
    }
    return total; //lets see the result.
};

//test-cases

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58 


module.exports={romanToInt}