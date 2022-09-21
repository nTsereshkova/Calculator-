import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayDiv } from './components'

const Display = () => {
  const display = useSelector(state => state.btn.output)

  return <DisplayDiv> {display}</DisplayDiv>
}

export default Display
