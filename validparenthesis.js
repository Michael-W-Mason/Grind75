/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let open = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    let close = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (open[s[i]] !== undefined) {
            stack.push(s[i]);
        }
        if(close[s[i]] !== undefined){
            let lastOpen = stack.pop();
            if(close[s[i]] !== lastOpen){
                return false;
            }
        }
    }
    if(stack.length > 0){
        return false;
    }
    return true;
};

console.log(isValid('(]'));