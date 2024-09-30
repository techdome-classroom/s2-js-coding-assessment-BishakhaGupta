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
            
            stack.push(map[char]);
        } else {
            
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0;
};

module.exports = { isValid };





