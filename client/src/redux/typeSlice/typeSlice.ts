/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../hook';
import axios from 'axios';
import { TypeType, TypeTypeSlice } from '../typeSlice/typeType';

const initialState: TypeTypeSlice = {
  type: [],
};

export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<TypeType[]>) => {
      state.type = action.payload;
    },
  },
});

export const { setType } = typeSlice.actions;

export const getType = (): AppThunk => (dispatch) => {
  axios<TypeType[]>('/api/types')
    .then((res) => dispatch(setType(res.data)))
    .catch(console.log);
};

export default typeSlice.reducer;
