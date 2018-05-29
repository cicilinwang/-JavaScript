// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// ```
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// ```

let lognestCommonPrefix = function(strs) {
  if (!strs.length) return ''; // 我当时strs['']与strs[]混起来了，

  for (let i = 0; i < strs[0].length; i++) {
    //我当时考虑数组的每一项长度可能都不一样，这样我们选择的方法是可以以其中的一项为标准
    for (let str of strs) {
    // 既要循环数组又要循环数组的每一个元素，但我们只需要用一个循环的变量即可，所以第二个选择for of很恰当
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i) // 截取字符串的长度，slice是首选
      }
    }
  }
  return strs[0]; // 考虑特殊的情况，当数组的第一项为空字符串的时候
}