function minMay (str) {
  const length = str.length
  let translation = ''
  let capitalize = true

  for (let i = 0; i < length; i++) {
    const char = str.charAt(i)
    translation += capitalize ? char.toUpperCase() : char.toLowerCase()
    capitalize = !capitalize
  }

  return translation
}

const reverse = (str) => str.split('').reverse().join('')

module.exports = function platzom (str) {
  let translation = str

  if (str.toLowerCase().endsWith('ar')) {
    console.log(translation)
    translation = str.slice(0, -2)
    console.log(translation)
  }

  if (str.toUpperCase().startsWith('Z')) {
    translation = translation + 'pe'
  }

  const length = translation.length

  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = firstHalf + '-' + secondHalf
  }

  if (str === reverse(str)) {
    return minMay(str)
  }

  return translation
}
