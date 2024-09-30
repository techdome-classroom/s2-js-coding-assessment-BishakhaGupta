/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of s) {
        if (map[char]) {
            // If it's an opening bracket, push the corresponding closing bracket onto the stack
            stack.push(char); // Push the opening bracket instead of the closing one
        } else {
            
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0;
};

module.exports = { isValid };
