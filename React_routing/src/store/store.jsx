import { configureStore } from '@reduxjs/toolkit'
import Nav_button_Slice from './Nav_button_Slice'

export const store = configureStore({
  reducer: {
    islogin: Nav_button_Slice,
  },
})