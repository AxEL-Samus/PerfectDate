/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Attraction, DatesState, DateTypeSlice, RootObject } from './datesType';
import { AppThunk } from '../hook';
import axios from 'axios';

const initialState: DateTypeSlice = {
  date: [],
};

