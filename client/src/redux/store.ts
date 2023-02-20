import { configureStore } from '@reduxjs/toolkit';
import DatesSliceReducer from './datesSlice/datesSlice';
import userSliceReducer from './userSlice/userSlice';
import userFirestormReducer from './userSlice/fireStormSlice';

const store = configureStore({
  reducer: {
    dates: DatesSliceReducer,
    userSlice: userSliceReducer,
    userFirestorm: userFirestormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
