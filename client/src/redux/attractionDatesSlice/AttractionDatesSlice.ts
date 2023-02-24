/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hook';
import axios from 'axios';
import { AttractionDatesType, AttractionDatesTypeSlice } from './AttractionDatesType';
import { datesSlice } from '../datesSlice/datesSlice';
import { RootObject } from '../datesSlice/datesType';

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
export const { addDateCard } = datesSlice.actions;

export const postAttractionDates =
  ({ id1: attr1, id2: attr2, id3: attr3 }): AppThunk =>
  (dispatch) => {
    console.log('in slice');
    axios
      .post<AttractionDatesType>('/api/attractiondates', { id1: attr1, id2: attr2, id3: attr3 })
      .then((res) => {
        console.log('134652346======================.', res.data );
        dispatch(addAttractionDates(res.data));
        //dispatch(addDateCard(res.data));
      })
      .catch(console.log);
  };

export default AttractionDatesSlice.reducer;
