const hasMoreVowels = word => {
  wordLower = word.toLowerCase()
  let vowelCount = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let wordArr = wordLower.split('')
  for (let i = 0; i < wordArr.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
      if (vowels[k] === (wordArr[i])) {
        vowelCount++
      }
      }
    } if (vowelCount > wordArr.length / 2) {
      return true
    } else {
      return false
  }
}

console.log(hasMoreVowels("moose"))




// function hasMoreVowels(word) {
//   let vowelCount = 0
//   let nonVowelCount = 0
//   word = word.toLowerCase()
//   for (let i = 0; i < word.length; i++) {
//     if (
//         word[i] === 'a' ||
//         word[i] === 'e' ||
//         word[i] === 'i' ||
//         word[i] === 'o' ||
//         word[i] === 'u'
//     ) {
//         vowelCount++
//     } else {
//       nonVowelCount++
//     }
//   }
//   if (vowelCount > nonVowelCount) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(hasMoreVowels("moss"))
