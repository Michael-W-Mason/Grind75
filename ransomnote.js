/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let hash = {};
    for(let i of ransomNote){
        if(!hash[i]){
            hash[i] = 1;
        }
        else{
            hash[i] = hash[i] + 1;
        }
    }
    for(let i of magazine){
        if(hash[i] > 0){
            hash[i] = hash[i] - 1;
        }
        if(hash[i] == 0){
            delete hash[i];
        }
    }
    return Object.keys(hash).length === 0;
};

console.log(canConstruct('bumblebee', 'asdjkfhapsiduvhasp[divbadbumblebeeasdvlajk;hsdbvap'));