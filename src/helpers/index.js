export function calcNumberFromString(string) {
  // попрбуем сделать и строки число
  let number = parseFloat(string)
  // проверяем, есть ли после него знаки
  // конвертируем назад первое число в строку
  const stringFromNumber = '' + number

  // если длина stringFromNumber ментше чем оригинальнпая строка, значит в выражении были знаки
  if (stringFromNumber.length < string.length) {
    // получаем знак, следующиц за первым числом
    const sign = string.slice(
      stringFromNumber.length,
      stringFromNumber.length + 1,
    )
    console.log(sign)

    // получаем второе число методом slice после знака до конца строки
    const secondNumberStr = string.slice(
      stringFromNumber.length + 1,
    )

    // пробуем сделать из него число
    const secondNumber = parseFloat(secondNumberStr)

    const stringFromSecondNumber = '' + secondNumber
    console.log(stringFromSecondNumber)
    if (
      stringFromSecondNumber.length < secondNumberStr.length
    ) {
      const whereToSliceFrom = stringFromNumber.length + 1

      number =
        number +
        calcNumberFromString(string.slice(whereToSliceFrom))
    } else {
      switch (sign) {
        case '+':
          console.log(number, secondNumber)
          number = number + secondNumber
          break

        case '-':
          number = number - secondNumber
          break

        case '*':
          number = number * secondNumber
          break
        case '/':
          number = number / secondNumber
          break
      }
    }
  }
  return number
}
