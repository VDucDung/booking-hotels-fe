import { Action, Reducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import authReducer from './auth'
import hotelReducer from './hotel'

export * from './auth'
export * from './hotel'


const productReducer = combineReducers({
  auth: authReducer,
  hotels: hotelReducer,
})
  
export type RootState = ReturnType<typeof productReducer>

const rootReducer: Reducer = (state: RootState, action: Action) => {
  if (action.type === 'RESET') {
    state = {} as RootState
    sessionStorage.clear()
  }
  return productReducer(state, action)
}
export default rootReducer
