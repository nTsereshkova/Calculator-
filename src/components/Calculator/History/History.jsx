import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { historyOutputChange } from '@/actions/actions'
import {
  HistoryTitleDiv,
  HistoryMemoryDiv,
  HistoryMemory,
} from './components'

const History = () => {
  const {
    calcHistory,
    isCalcFinished,
    historyArr,
  } = useSelector(state => state.btn)

  const [showHistory, setShowHistory] = useState(false)

  const dispatch = useDispatch()

  const { firstNumber, secondNumber, sign } = calcHistory

  useEffect(() => {
    if (isCalcFinished) {
      for (let i = 0; i < firstNumber.length; i++) {
        // только если уже есть второе число для вычилений
        if (secondNumber[i]) {
          const historyStr = `${firstNumber[i]} ${sign[i]} ${secondNumber[i]}`
          if (!historyArr.includes(historyStr)) {
            dispatch(historyOutputChange(historyStr))
          }
        }

        setShowHistory(true)
      }
    }
  }, [isCalcFinished, firstNumber.length])

  return (
    <HistoryTitleDiv>
      History
      {showHistory && (
        <HistoryMemoryDiv>
          {historyArr.map(item => (
            <HistoryMemory key={uuidv4()}>
              {item}
            </HistoryMemory>
          ))}
        </HistoryMemoryDiv>
      )}
    </HistoryTitleDiv>
  )
}
export default History
