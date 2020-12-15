/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    let stack = [];
    let keyPair = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    let sa = s.split('');
    for (let index = 0; index < sa.length; index++) {
        const value = sa[index];
        if (keyPair.has(value)) {
            if (stack.length === 0 || stack[stack.length - 1] !== keyPair.get(value)) {
                return false;
            }
            stack.pop();
            //右边的
        } else {
            stack.push(value);
        }
    }
    return stack.length===0;

};

console.log(isValid("([}}])"));