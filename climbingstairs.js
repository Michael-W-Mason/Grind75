// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//     if(n <= 0 ) return 0;
//     if(n === 1) return 1;
//     else if(n === 2) return 2;
//     else return climbStairs(n - 1) + climbStairs(n - 2);
// };

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 4) {
        return n;
    }
    let first = 2;
    let second = 3;
    for (let i = 4; i < n; i++) {
        second = first + second;
        first = second - first;
    }
    return first + second;
};

console.log(climbStairs(44));