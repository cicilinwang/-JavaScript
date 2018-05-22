// 难度等级: easy
// 题目要求
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
// （给出一个非空数组digits，它代表一个非负的整数，给该整数加1）
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
// digits数组是按照最高位排在数组的最前面，数组的每一项只有一位数字
// You may assume the integer does not contain any leading zero, except the number 0 itself.
// leading zero的意思是：以0开头的整数，比如007，它就有两个leading zero，但数字0除外

// input: [1, 2, 3], 代表整数123
// output: [1, 2, 4]

// 所以题目的言外之意是：判断数组的最后一位是否是9，如果不是，直接加1，返回该数组；
// 如果是，则进1，然后判断数组的倒数第二位是否9，如果是的话，再次进位，以次类推
onePlus = function(digits) {
  if (!digits) return
  for (let i = digits.length; i > 0; i--) {
     digits[i - 1] = digits[i - 1] + 1;
    if (digits[i - 1] === 10) {
      digits[i - 1] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}

onePlus([1, 2, 9, 9]);
