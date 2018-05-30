// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999

// Example
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

let romanToInt = function(str) {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  let sum = 0;
  s = str.replace(/IV|IX|XC|XL|CD|CM/gi, function(match, offset) {
    sum += map[match];
    return '' // 返回没有匹配到的字符串
  })
  for (let i = 0; i < s.length; i++) {
    sum += map[s[i]]; // s[i]除了对数组有用，对字符串也是有用的
  }
  return sum;
}

// 首先，肯定要定义一个对象代表这些罗马数字，查找6个组合罗马数字，并把他们匹配到对应的值，
// 用replace方法是一个比较好的选择。






