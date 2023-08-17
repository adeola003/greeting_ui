import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/random_greeting');
  return response.data.greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    data: '',
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
