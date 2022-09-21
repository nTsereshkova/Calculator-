import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { btnClick } from '@/actions/actions'
import { KeypadDiv, Key } from './components'

const Keypad = () => {
  // получаем массив клавиатуры для отображения
  const keypadArr = useSelector(
    state => state.btn.keypadArr,
  )

  const theme = useSelector(state => state.theme.theme)

  const dispatch = useDispatch()

  const buttonClickHandler = event => {
    dispatch(btnClick(event.target.textContent))
  }

  return (
    <KeypadDiv>
      {keypadArr.map(item => (
        <Key
          themeColor={theme}
          key={uuidv4()}
          onClick={buttonClickHandler}>
          {item}
        </Key>
      ))}
    </KeypadDiv>
  )
}

export default Keypad
