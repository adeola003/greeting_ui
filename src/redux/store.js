import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice'; // Import the greetingSlice reducer

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
