import React from 'react'
import { Display } from '@/components/Calculator/Display'
import { Keypad } from '@/components/Calculator/Keypad'
import { History } from '@/components/Calculator/History'
import {
  CalcDiv,
  DisplayKeypadDiv,
  HistoryDiv,
} from './components'

const Calculator = () => {
  return (
    <CalcDiv>
      <DisplayKeypadDiv>
        <Display />
        <Keypad />
      </DisplayKeypadDiv>
      <HistoryDiv>
        <History />
      </HistoryDiv>
    </CalcDiv>
  )
}
export default Calculator
