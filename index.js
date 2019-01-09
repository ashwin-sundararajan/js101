function validateNumber(...args) {
  args.forEach(arg => {
    const maybeNum = Number(arg)
    if (Number.isNaN(maybeNum))
      throw new Error('Invalid argument, not a number')
  })
}

function max(num1, num2) {
  validateNumber(num1, num2)
  if (num1 > num2) return num1
  else return num2
}

function maxOfThree(num1, num2, num3) {
  validateNumber(num1, num2, num3)

  if (num1 >= num2) {
    if (num1 >= num3) return num1
    else return num3
  } else {
    if (num2 >= num3) return num2
    else return num3
  }
}

function isVowel(str) {
  if (str.length > 1) throw new Error('Too many characters provided')

  return /[aeiou]/.test(str.charAt(0).toLowerCase())
}

function translate(str) {
  if (typeof str !== 'string') throw new Error('Argument is not a string')

  return str
    .split('')
    .map(c => (/[aeiou ]/.test(c.toLowerCase()) ? c : c + 'o' + c))
    .join('')
}

function sum(arr) {
  validateNumber(...arr)
  return arr.reduce((a, b) => a + b)
}

function multiply(arr) {
  validateNumber(...arr)
  return arr.reduce((a, b) => a * b)
}

function reverse(str) {
  if (typeof str !== 'string') throw new Error('Argument is not a string')

  return str
    .split('')
    .reverse()
    .join('')
}

const engToSwed = {
  merry: 'god',
  christmas: 'jul',
  and: 'och',
  happy: 'gott',
  new: 'nytt',
  year: 'år'
}

const greeting = 'merry christmas and happy new year'
const greetingSwed = greeting
  .split(' ')
  .map(e => engToSwed[e])
  .join(' ')

function filterLongWords(arr, k) {
  return arr.filter(word => word.length > k)
}

function charFreq(str) {
  if (typeof str !== 'string') throw new Error('Argument is not a string')

  const result = {}

  for (let c of str) {
    result[c] = result[c] ? result[c] + 1 : 1
  }

  return result
}

// tests
console.log('max(2,3): ', max(2, 3))
console.log('max(1,2,3): ', max(1, 2, 3))
console.log('isVowel("A"): ', isVowel('A'))
console.log('isVowel("D"): ', isVowel('D'))
console.log('translate("this is fun"): ', translate('this is fun'))
console.log('sum([1,2,3]): ', sum([1, 2, 3]))
console.log('multiply([33,5,77]): ', multiply([33, 5, 77]))
console.log('reverse("Hello"): ', reverse('Hello'))
console.log('English: ', greeting)
console.log('Swedish: ', greetingSwed)
console.log(
  'filterLongWords(["hello", "goodbye", "blahblah"], 5): ',
  filterLongWords(['hello', 'goodbye', 'blahblah'], 5)
)
console.log(
  'charFreq("abbabcbdbabdbdbabababcbcbab"): ',
  charFreq('abbabcbdbabdbdbabababcbcbab')
)
