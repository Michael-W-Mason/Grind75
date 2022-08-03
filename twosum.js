/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    for(let i =0; i < nums; i++){
        if(!hash[i]){
            hash[target - nums[i]] = i;
        }
        else if(){

        }
    }
};