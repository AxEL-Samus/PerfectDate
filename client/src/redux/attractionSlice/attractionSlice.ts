/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hook';
import axios from 'axios';
import { AttractionType, AttractionTypeSlice } from './attractionType';

const initialState: AttractionTypeSlice = {
  attraction: [],
};

export const attractionSlice = createSlice({
  name: 'attraction',
  initialState,
  reducers: {
    setAttraction: (state, action: PayloadAction<AttractionType[]>) => {
      state.attraction = action.payload;
    },
  },
});

export const { setAttraction } = attractionSlice.actions;

export const getAttraction = (): AppThunk => (dispatch) => {
  axios<AttractionType[]>('/api/attraction')
    .then((res) => dispatch(setAttraction(res.data)))
    .catch(console.log);
};

export default attractionSlice.reducer;
