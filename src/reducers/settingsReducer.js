import { SWITCH_HOME_SETTINGS_MODE_CLICK } from '@/actions/types'

const initState = {
  showSettings: false,
}

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case SWITCH_HOME_SETTINGS_MODE_CLICK:
      if (action.payload === true) {
        return {
          showSettings: true,
        }
      } else {
        return {
          showSettings: false,
        }
      }
  }
  return state
}

export default settingsReducer
