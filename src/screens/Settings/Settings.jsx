import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearHistoryClick,
  themeModeChange,
} from '@/actions/actions'
import {
  SettingsDiv,
  SettingsTitle,
  SettingSelect,
  ClearHistoryBtn,
} from './components'

const Settings = () => {
  const dispatch = useDispatch()

  const theme = useSelector(state => state.theme.theme)

  const clearHistoryClickHandler = () => {
    dispatch(clearHistoryClick())
  }

  const selectThemeHandler = event => {
    dispatch(themeModeChange(event.target.value))
  }
  return (
    <React.Fragment>
      <SettingsTitle> Settings</SettingsTitle>
      <SettingsDiv>
        <SettingSelect
          onChange={selectThemeHandler}
          themeColor={theme}>
          <option value="light">Light Theme</option>
          <option value="colored">ColoredTheme</option>
          <option value="dark">Dark Theme</option>
        </SettingSelect>
        <ClearHistoryBtn onClick={clearHistoryClickHandler}>
          Clear All History
        </ClearHistoryBtn>
      </SettingsDiv>
    </React.Fragment>
  )
}
export default Settings
