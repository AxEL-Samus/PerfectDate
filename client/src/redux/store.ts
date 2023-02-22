import { configureStore } from '@reduxjs/toolkit';
import DatesSliceReducer from './datesSlice/datesSlice';
import userSliceReducer from './userSlice/userSlice';
import userFirestormReducer from './userSlice/fireStormSlice';
import attractionSliceReducer from './attractionSlice/attractionSlice';
import typeSliceReducer from './typeSlice/typeSlice';

const store = configureStore({
  reducer: {
    dates: DatesSliceReducer,
    userSlice: userSliceReducer,
    userFirestorm: userFirestormReducer,
    attraction: attractionSliceReducer,
    typeSlice: typeSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
