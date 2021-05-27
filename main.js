function palindrome(str) {
    let re = /[\W_]/g
    let toLowerCase = str.toLowerCase().replace(re, '')
    let reverseStr = toLowerCase.split('').reverse().join('')
    console.log(toLowerCase, reverseStr)
    return reverseStr === toLowerCase
}
console.log(palindrome("A man, a plan, a canal. Panama"))
console.log(palindrome("Race car"))
console.log(palindrome("eat"))