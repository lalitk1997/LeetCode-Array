/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let countPair = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(i<j && nums[i] === nums[j]){
                countPair++;
            }
        }
    }
    return countPair;
};