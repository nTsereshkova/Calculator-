import { THEME_MODE_CHANGE } from '@/actions/types'

const initState = {
  themes: ['light', 'dark', 'colored'],
  theme: 'light',
  defaultTheme: 'light',
}

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case THEME_MODE_CHANGE:
      // Здесь я получу значение селекта
      // console.log(action.payload)
      if (action.payload === 'dark') {
        return {
          ...state,
          theme: 'dark',
        }
      } else if (action.payload === 'colored') {
        return {
          ...state,
          theme: 'colored',
        }
      } else {
        return {
          ...state,
          theme: 'light',
        }
      }
  }

  return state
}

export default themeReducer
