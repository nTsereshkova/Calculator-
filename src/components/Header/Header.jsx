import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { settingsModeClick } from '@/actions/actions'
import {
  HeaderDiv,
  AppName,
  ControlButtons,
  Btn,
} from './components'

const Header = ({ setIsSettingsOn }) => {
  const dispatch = useDispatch()

  const theme = useSelector(state => state.theme.theme)

  return (
    <HeaderDiv themeColor={theme}>
      <AppName> Calculator App</AppName>
      <ControlButtons>
        <Btn
          onClick={() =>
            dispatch(settingsModeClick(false))
          }>
          Home
        </Btn>
        <Btn
          onClick={() => dispatch(settingsModeClick(true))}>
          Settings
        </Btn>
      </ControlButtons>
    </HeaderDiv>
  )
}

export default Header
