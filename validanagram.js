/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let hash = {};
    if(s.length !== t.length){
        return false;
    }
    for(let i of s){
        if(!hash[i]){
            hash[i] = 1;
        }
        else{
            hash[i] = hash[i] + 1;
        }
    }
    for(let i of t){
        if(!hash[i]){
            return false;
        }
        if(hash[i] === 0){
            return false;
        }
        else{
            hash[i] = hash[i] - 1;
        }
    }
    return true;
};

console.log(isAnagram('ab', 'b'));