/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Attraction, DatesState, DateTypeSlice, RootObject } from './datesType';
import { AppThunk } from '../hook';
import axios from 'axios';

const initialState: DateTypeSlice = {
  date: [],
};

export const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setDatesCards: (state, action: PayloadAction<RootObject[]>) => {
      state.date = action.payload;
    },
    deleteOneCard: (state, action: PayloadAction<RootObject['id']>) => ({
      ...state,
      date: state.date.filter((el) => el.id !== action.payload),
    }),
    addDateCard: (state, action: PayloadAction<RootObject>) => {
      [action.payload, ...state.date];
    },
  },
});

export const { setDatesCards, deleteOneCard, addDateCard } = datesSlice.actions;

export const setDates = (): AppThunk => (dispatch) => {
  axios<RootObject[]>('/api/dates')
    .then((res) => {
      console.log('=======>', res.data);
      dispatch(setDatesCards(res.data));
    })
    .catch(console.log);
};

export const deleteCard =
  (id: number): AppThunk =>
  (dispatch) => {
    axios
      .delete<RootObject['id']>(`/api/dates/${id}`)
      .then(() => dispatch(deleteOneCard(id)))
      .catch(console.log);
  };

export const addDate =
  (reqbody: RootObject): AppThunk =>
  (dispatch) => {
    axios
      .post<RootObject>('/api/dates', reqbody)
      .then((res) => dispatch(addDateCard(res.data)))
      .catch(console.log);
  };

export default datesSlice.reducer;
