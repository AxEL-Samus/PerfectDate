/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hook';
import axios from 'axios';
import { AttractionDatesType, AttractionDatesTypeSlice } from './AttractionDatesType';

const initialState: AttractionDatesTypeSlice = {
  attractionDates: [],
};

export const AttractionDatesSlice = createSlice({
  name: 'attractionDates',
  initialState,
  reducers: {
    addAttractionDates: (state, action: PayloadAction<AttractionDatesType>) => {
      state.attractionDates.unshift(action.payload);
    },
  },
});

export const { addAttractionDates } = AttractionDatesSlice.actions;

export const postAttractionDates = (): AppThunk => (dispatch) => {
  axios
    .post<AttractionDatesType>('/api/attractiondates')
    .then((res) => dispatch(addAttractionDates(res.data)))
    .catch(console.log);
};

export default AttractionDatesSlice.reducer;
