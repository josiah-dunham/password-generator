import { getRandomInteger, getRandomElelmentFromArray } from "../helpers/utils"
import { OPTIONS } from "../helpers/types"

// const uppercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("").map((l: string) => l.toUpperCase())
// const lowercaseLetter = "abcdefghijklmnopqrstuvwxyz".split("")
// const numbers = "0123456789".split("")
// const symbols = "!#$%^&*=<>.".split("")

const letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!#$%^&*=<>."

// const getRandomCharacter = (option: OPTIONS) => () =>
//   option === 0
//     ? getRandomElelmentFromArray(upperCase)
//     : option === 1
//     ? getRandomElelmentFromArray(lowerCase)
//     : option === 2
//     ? getRandomElelmentFromArray(numbers)
//     : getRandomElelmentFromArray(symbols)

// const flagsToMethodMap = {
//   uppercase: getRandomCharacter(OPTIONS.UPPER),
//   lowercase: getRandomCharacter(OPTIONS.LOWER),
//   numbers: getRandomCharacter(OPTIONS.DIGIT),
//   symbols: getRandomCharacter(OPTIONS.SYMBOL),
// }

const buildAllElements = (option: string) =>
  option === "uppercase"
    ? letters.toUpperCase()
    : option === "lowercase"
    ? letters
    : option === "numbers"
    ? numbers
    : symbols

const shuffleArray = (arr: string[]) => {
  let count = arr.length
  while (count) {
    arr.push(arr.splice(getRandomInteger(count), 1)[0])
    count -= 1
  }

  return arr
}

export const generatePassword = (options: any) => {
  const pwOptions = Object.keys(options)
  const passwordStrength = options.passwordStrength
  const allSetFlags = pwOptions
    .filter((f: string) => f !== "passwordStrength")
    .filter((f: string) => options[f])

  const elements = allSetFlags.map((f: string) => shuffleArray(buildAllElements(f).split("")))

  console.log(elements)

  let pw: string[] = []

  for (let s = 0; s < passwordStrength; s++) {
    const randomMethodIndex = getRandomInteger(allSetFlags.length)
    const randomElementIndex = getRandomInteger(
      elements[randomMethodIndex].length
    )
    pw.push(elements[randomMethodIndex][randomElementIndex])
  }
  return pw.join("")
}
