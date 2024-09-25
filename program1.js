/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if (s.length % 2 !== 0){  //this step is for checking whether the length of str is odd, if it's odd it can't be valid.
        return false;
    }
    //let's store the opening brack

    const Brack = [];

    //lets map the closing and opening brack

    const matchingBrack = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    //now we start looping
    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            Brack.push(char);  // if open brack are there, pushed into stack
        } else if(char === ')' || char ==='}' || char === ']'){ //if it's a closing brack, lets check it matchese or not!
            if(Brack.length === 0 || Brack.pop() !== matchingBrack[char]){
                return false;
            }
        }
    }
    return Brack.length === 0 // if stack gets empty it means all brackets were matched
};

//test-cases
console.log(isValid("()")); 
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

module.exports = { isValid };


