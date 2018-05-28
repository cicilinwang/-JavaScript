// 题目：Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// 解释：palindrome是回文数——数字不管是从前往后读还是从后往前读，都是同一个数
// for example: input 121, output true

// follow up:
// Coud you solve it without converting the integer to a string?

// 转换成字符串的写法
let isPalindrome = function(x) {
  let str = x.toString();
  return str === str.split('').reverse().join('');
}

// 不转换成字符串的写法
let isPalindrome = function(x) {
  let sum = 0;
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  while(x > sum) {
    sum = sum * 10 + x % 10;
    x = parseInt(x / 10);
  }
  if (x === sum || x === parseInt(sum / 10)) {
    return true;
  } else {
    return false;
  }
}

// 我的想法：
// 我刚开始做的时候，隐隐约约知道如果不转换成字符串的话，肯定用取余取整的方法做，但是细节还是没做出来。

















