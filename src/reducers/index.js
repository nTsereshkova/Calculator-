import { combineReducers } from 'redux'

import btn from './btnReducer'
import theme from './themeReducer'
import settings from './settingsReducer'

export const rootReducer = combineReducers({
  btn,
  theme,
  settings,
})
