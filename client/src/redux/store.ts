import { configureStore } from '@reduxjs/toolkit';
import DatesSliceReducer from './datesSlice/datesSlice';

const store = configureStore({
  reducer: {
    dates: DatesSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
