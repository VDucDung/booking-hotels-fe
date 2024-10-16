import { Action, Reducer, combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth';
import hotelReducer from './hotel';
import userReducer from './user';
import categoryReducer from './category';
import favoriteReducer from './favorite';

export * from './auth';
export * from './hotel';
export * from './user';
export * from './category';
export * from './favorite';

const productReducer = combineReducers({
  auth: authReducer,
  hotels: hotelReducer,
  favorites: favoriteReducer,
  users: userReducer,
  categories: categoryReducer
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState | undefined, action: Action) => {
  if (action.type === 'RESET') {
    // Clear session storage
    sessionStorage.clear();
    // Return a fresh state instead of mutating the existing one
    return productReducer(undefined, action);
  }
  return productReducer(state, action);
};

export default rootReducer;
