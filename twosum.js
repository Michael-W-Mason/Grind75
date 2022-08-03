/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            return [hash[nums[i]], i];
        }
        else {
            hash[target - nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));