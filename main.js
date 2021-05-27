function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    console.log(lowRegStr, reverseStr)
    return reverseStr === lowRegStr;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("madam"))
console.log(palindrome("Race car"))
console.log(palindrome("eat"))