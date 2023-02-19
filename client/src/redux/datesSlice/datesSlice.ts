/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DatesState, DateTypeSlice } from './datesType';

const initialState: DateTypeSlice = {
  dates: [],
};

export const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setDsatesCards: (state, action: PayloadAction<DatesState[]>) => (state.dates = action.payload),
  },
});

export const { setDsatesCards } = datesSlice.reducer;

export default datesSlice.reducer;
