import { combineReducers } from '@reduxjs/toolkit';
import pixelReducer from './pixel';

const rootReducer = combineReducers({
  pixel: pixelReducer,
});

export default rootReducer;
