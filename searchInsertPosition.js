// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

  let searchInsert = function(nums, target) {
    let i = 0, index = 0;
    while(i < nums.length) {
      if(nums[i] < target) {
        index = i + 1;
      } else if(target === nums[i]){
        index = i;
      }
      i++;
    }
    return index;
  }