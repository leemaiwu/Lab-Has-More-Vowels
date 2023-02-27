// const hasMoreVowels = word => {
//   let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
//   let vowelCount = 0
//   let contCount = 0
//   let wordArr = [...word]
//   for (let i = 0; i < wordArr.length; i++) {
//     for (let k = 0; k < vowels.length; k++) {
//       if (wordArr[i] === (vowels[k])) {
//         vowelCount++
//       } else {
//         contCount++
//       }
//     } 
//   } if (vowelCount > contCount) {
//     return console.log("true")
//   } else {
//   return console.log("false") }
// }

// hasMoreVowels("moose")



function hasMoreVowels(word) {
  let vowelCount = 0
  let nonVowelCount = 0
  word = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    if (
        word[i] === 'a' ||
        word[i] === 'e' ||
        word[i] === 'i' ||
        word[i] === 'o' ||
        word[i] === 'u'
    ) {
        vowelCount++
    } else {
      nonVowelCount++
    }
  }
  if (vowelCount > nonVowelCount) {
    return true
  } else {
    return false
  }
}

console.log(hasMoreVowels("moss"))
