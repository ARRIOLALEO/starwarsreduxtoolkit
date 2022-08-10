import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

const URL = 'https://star-wars-character-search.glitch.me/api/search/';
export const callToApi = createAsyncThunk('call/api', async (name) => {
  const response = await fetch(URL + name).then((data) => data.json());
  return response.characters;
});
export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    add: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {
    [callToApi.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});
