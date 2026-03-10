const nums = [2, 7, 11, 15];
const target = 9;
const solution = [];
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        solution.push(i);
        solution.push(j);
      }
    }
  }

  return solution;
}

twoSum(nums, target);
