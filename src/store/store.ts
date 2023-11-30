import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  //   systemControllers: systemReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
