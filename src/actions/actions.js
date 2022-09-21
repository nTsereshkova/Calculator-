import {
  BTN_CLICK,
  SWITCH_HOME_SETTINGS_MODE_CLICK,
  CLEAR_ALL_HISTORY_CLICK,
  THEME_MODE_CHANGE,
  HISTORY_OUTPUT_CHANGE,
} from './types'

// action creators
export const btnClick = btn => ({
  type: BTN_CLICK,
  payload: btn,
})

export const settingsModeClick = boolean => ({
  type: SWITCH_HOME_SETTINGS_MODE_CLICK,
  payload: boolean,
})

export const clearHistoryClick = () => ({
  type: CLEAR_ALL_HISTORY_CLICK,
})

export const themeModeChange = theme => ({
  type: THEME_MODE_CHANGE,
  payload: theme,
})

export const historyOutputChange = histoStr => ({
  type: HISTORY_OUTPUT_CHANGE,
  payload: histoStr,
})

// если создавать все через createAction
// import { createAction } from 'redux-actions'

// export const BTN_CLICK = 'BTN_CLICK'

// export const btnClick = createAction(BTN_CLICK)

// export const SWITCH_HOME_SETTINGS_MODE_CLICK =
//   'SWITCH_HOME_SETTINGS_MODE_CLICK'

// export const settingsModeClick = createAction(
//   SWITCH_HOME_SETTINGS_MODE_CLICK,
// )

// export const CLEAR_ALL_HISTORY_CLICK =
//   'CLEAR_ALL_HISTORY_CLICK'

// export const clearHistoryClick = createAction(
//   CLEAR_ALL_HISTORY_CLICK,
// )

// export const THEME_MODE_CHANGE = 'THEME_MODE_CHANGE'

// export const themeModeChange = createAction(
//   THEME_MODE_CHANGE,
// )
