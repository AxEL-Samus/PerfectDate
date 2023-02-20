/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DatesState, DateTypeSlice } from './datesType';
import { AppThunk } from '../hook';
import axios from 'axios';

const initialState: DateTypeSlice = {
  date: [],
};

export const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setDatesCards: (state, action: PayloadAction<DatesState[]>) => {
      state.date = action.payload;
    },
  },
});

export const { setDatesCards } = datesSlice.actions;

export const setDates = (): AppThunk => (dispatch) => {
  axios<DatesState[]>('/api/dates')
    .then((res) => dispatch(setDatesCards(res.data)))
    .catch(console.log);
};

export default datesSlice.reducer;
