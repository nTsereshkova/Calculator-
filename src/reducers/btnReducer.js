// import { handleActions } from 'redux-actions'
import {
  BTN_CLICK,
  HISTORY_OUTPUT_CHANGE,
  CLEAR_ALL_HISTORY_CLICK,
} from '@/actions/types'
import { calcNumberFromString } from '@/helpers'

const initState = {
  keypadArr: [
    'C',
    7,
    8,
    9,
    '*',
    '-',
    4,
    5,
    6,
    '/',
    '+',
    1,
    2,
    3,
    '=',
    '.',
    '(',
    0,
    ')',
    'CE',
  ],
  digits: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
  ],
  signs: ['+', '-', '*', '/', '='],
  others: ['C', 'CE'],
  brackets: ['(', ')'],
  firstNumber: '',
  secondNumber: '',
  sign: '',
  output: 0,
  isPositiveNumber: true,
  isCalcFinished: false,
  isBracketsOn: false,
  calcHistory: {
    firstNumber: [],
    secondNumber: [],
    sign: [],
    output: [],
  },
  historyArr: [],
}
const btnReducer = (state = initState, action) => {
  const {
    firstNumber,
    secondNumber,
    sign,
    isCalcFinished,
    isBracketsOn,
    isPositiveNumber,
  } = state

  switch (action.type) {
    case BTN_CLICK:
      // console.log('action payload', action.payload)
      if (action.payload === 'CE') {
        return {
          ...state,
          firstNumber: '',
          output: 0,
        }
      }
      if (action.payload === 'C') {
        return {
          ...state,
          firstNumber: '',
          secondNumber: '',
          output: 0,
          sign: '',
          isCalcFinished: false,
          isBracketsOn: false,
        }
      }

      if (state.brackets.includes(action.payload)) {
        // console.log('включились ли скобки')
        // случай для открывающей скобки
        if (action.payload === '(') {
          // здесь тоже нужно обнулить первое число на случай если не сделал сброс после равно
          return {
            ...state,
            firstNumber: '',
            isBracketsOn: true,
            output: `(`,
          }
        }

        // случай для закрывающей скобки
        if (action.payload === ')') {
          // console.log('выключаем режим скобокт')
          state.calcHistory.output.push(`(${firstNumber})`)
          return {
            ...state,
            isBracketsOn: false,
            output: state.output + ')',
          }
        }
      }

      // мы попадаем в этот блок только если вклбчены скобки
      if (isBracketsOn) {
        // console.log('режим скобочек ')
        // в любом слаучае мы вовзращаем на экран новый output
        return {
          ...state,
          firstNumber: firstNumber + action.payload,
          output: `( ${firstNumber + action.payload}`,
        }
      }

      // если нажата цифровая кнопка
      if (
        state.digits.includes(action.payload) &&
        !isBracketsOn
      ) {
        // проводим проверку на ввод первого числа
        if (
          secondNumber === '' &&
          sign === '' &&
          !isCalcFinished
        ) {
          // console.log('ввод первого числа')
          // ввод первого числа
          return {
            ...state,
            firstNumber: firstNumber + action.payload,
            output: firstNumber + action.payload,
            isCalcFinished: false,
          }
        } else if (isCalcFinished && sign === '') {
          // console.log(
          //   ' ввод после вычислений без обнуления',
          // )
          // ввод после вычислений без обнуления дисплея,позволяет сделать сброс первого числа
          // ввод след цифры пойдет в блок ввод первого числа
          return {
            ...state,
            firstNumber: action.payload,
            output: action.payload,
            isCalcFinished: false,
          }
        } else if (
          !isCalcFinished &&
          // firstNumber === '' &&
          !isPositiveNumber &&
          sign === '-' &&
          secondNumber === ''
        ) {
          // console.log(
          //   'блок для расчета с учетом знака минус  - работает только для первого числа ',
          // )
          return {
            ...state,
            firstNumber: -(firstNumber + action.payload),
            output: -(firstNumber + action.payload),
            isPositiveNumber: true,
          }
        } else {
          // console.log('ввод второго числа')
          // проводим проверку на ввод второго числа и вторичный ввод (после равно с рез выч нажать знак  и ввести второе число )
          return {
            ...state,
            secondNumber: secondNumber + action.payload,
            output: secondNumber + action.payload,
            isCalcFinished: false,
          }
        }
      }
      // если нажат знак вычисления
      if (
        state.signs.includes(action.payload) &&
        action.payload !== '=' &&
        !isBracketsOn
      ) {
        // частный случай - нажали знак минус самым первым для обозначения отрицательного числа
        if (
          action.payload === '-' &&
          firstNumber === '' &&
          secondNumber === ''
        ) {
          // console.log(
          //   'частный случай - нажали знак минус самым первым',
          // )
          return {
            ...state,
            isPositiveNumber: false,
            sign: action.payload,
            output: action.payload,
          }
        } else {
          // просто нажат знак вычисления
          // console.log('нажат знак вычисления')
          state.calcHistory.firstNumber.push(
            firstNumber || 0,
          )
          state.calcHistory.sign.push(action.payload)
          // "" на случай если без выпосления равчсетов нажали знак плюс число (""+1)
          return {
            ...state,
            firstNumber:
              calcNumberFromString(firstNumber) || '',
            sign: action.payload,
            output: action.payload,
            isCalcFinished: false,
            secondNumber: '',
          }
        }
      }
      // если нажат знак равно
      if (action.payload === '=') {
        state.calcHistory.secondNumber.push(
          secondNumber || firstNumber,
        )

        switch (sign) {
          case '+':
            return {
              ...state,
              output:
                +firstNumber +
                +(secondNumber || firstNumber),
              firstNumber:
                +firstNumber +
                +(secondNumber || firstNumber),
              isCalcFinished: true,
              isBracketsOn: false,
              sign: '',
              secondNumber: '',
            }
          case '-':
            return {
              ...state,
              output:
                +firstNumber -
                +(secondNumber || firstNumber),
              firstNumber:
                +firstNumber -
                +(secondNumber || firstNumber),
              isCalcFinished: true,
              isBracketsOn: false,
              sign: '',
              secondNumber: '',
            }
          case '*':
            return {
              ...state,
              output:
                +firstNumber *
                +(secondNumber || firstNumber),
              firstNumber:
                +firstNumber *
                +(secondNumber || firstNumber),
              isCalcFinished: true,
              isBracketsOn: false,
            }

          case '/':
            if (secondNumber === '0') {
              return {
                ...state,
                output: 'Ошибка, деление на 0',
                firstNumber: '',
                secondNumber: '',
                sign: '',
              }
            }
            return {
              ...state,
              output:
                +firstNumber /
                +(secondNumber || firstNumber),
              firstNumber:
                +firstNumber /
                +(secondNumber || firstNumber),
              isCalcFinished: true,
              isBracketsOn: false,
            }
        }
      }
      break

    case HISTORY_OUTPUT_CHANGE:
      return {
        ...state,
        historyArr: [...state.historyArr, action.payload],
      }

    case CLEAR_ALL_HISTORY_CLICK: {
      // console.log('cleared HISTORY')
      return {
        ...state,
        historyArr: [],
        isCalcFinished: false,
        output: 0,
        calcHistory: {
          firstNumber: [],
          secondNumber: [],
          sign: [],
        },
      }
    }
  }

  return state
}

export default btnReducer

// если создавать редьюсер через handleActions
// редьюсер создается автоматически через handleActions
// export default handleActions(
//   {
//     BTN_CLICK: (state, action) => {
//       return {
//         ...state,
//         firstNumber: state.firstNumber + action.payload,
//       }
//     },
//   },
//   INITIAL_STATE,
// )

// console.log(
//   'init state firstNumber',
//   INITIAL_STATE.firstNumber,
// )
