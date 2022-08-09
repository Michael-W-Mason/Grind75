/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let hash = {};
    for(let i of nums){
        if(!hash[i]){
            hash[i] = 1;
        }
        else{
            hash[i] = hash[i] + 1;
            if(hash[i] > Math.floor(nums.length / 2)){
                return i;
            }
        }
    }
    return nums[0];
};