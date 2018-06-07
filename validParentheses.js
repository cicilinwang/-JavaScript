// 题目要求：
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// 注意：第一句话中的just characters，只能包含上面三种括号，不能包含其他字符


let isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            let temp = stack.pop();
            if (map[s[i]] !== temp) return false;
        } else stack.push(s[i])
    }
    return stack.length === 0;
}
// 大概的思路是这样的：用右括号去匹配左括号，如果输入的字符串满足要求，则stack的长度为0，反之，则不为0
