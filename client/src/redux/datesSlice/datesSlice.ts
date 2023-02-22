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
    deleteOneCard: (state, action: PayloadAction<DatesState['id']>) => ({
      ...state,
      date: state.date.filter((el) => el.id !== action.payload),
    }),
    addDate: (state, action: PayloadAction<DatesState>) => [action.payload, ...state.date],
  },
});

export const { setDatesCards, deleteOneCard, addDateCard } = datesSlice.actions;

export const setDates = (): AppThunk => (dispatch) => {
  axios<DatesState[]>('/api/dates')
    .then((res) => dispatch(setDatesCards(res.data)))
    .catch(console.log);
};

export const deleteCard =
  (id: number): AppThunk =>
  (dispatch) => {
    axios
      .delete(`/api/dates/${id}`)
      .then(() => dispatch(deleteOneCard(id)))
      .catch(console.log);
  };

export const addDate =
  (reqbody: DatesState): AppThunk =>
  (dispatch) => {
    axios
      .post<DatesState>('/api/dates', reqbody)
      .then((res) => dispatch(addDateCard(res.data)))
      .catch(console.log);
  };

export default datesSlice.reducer;
