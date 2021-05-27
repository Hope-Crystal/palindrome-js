function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("madam"))
console.log(palindrome("racecar RaceCar rACEcAR"))
console.log(palindrome("eat"))