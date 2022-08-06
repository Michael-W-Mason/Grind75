/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let hash = {};
    for (let i of s) {
        if (!hash[i]) {
            hash[i] = 1;
        }
        else {
            hash[i] = hash[i] + 1;
        }
    }
    let longestLength = 0;
    let keys = Object.keys(hash);
    let isSingle = false;
    let isOdd = false;
    for(let i of keys){
        if(hash[i] === 1){
            isSingle = true;
        }
        else if(hash[i] % 2 === 0){
            longestLength += hash[i];
        }
        else if(hash[i] % 2 !== 0){
            isOdd = true;
            longestLength += (hash[i] - 1);
        }
    }
    if(longestLength % 2 === 0 && isSingle){
        longestLength++;
    }
    else if (longestLength % 2 === 0 && isOdd){
        longestLength++;
    }
    return longestLength;
};

console.log(longestPalindrome('ababa'));