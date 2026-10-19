import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { contactService } from '../../services/contactService';

export const submitContactForm = createAsyncThunk(
  'contact/submitContactForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await contactService.submitMessage(formData);
      return response;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to send message. Please try again.');
    }
  }
);

const initialState = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  successMessage: null,
  lastSubmitted: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactStatus: (state) => {
      state.status = 'idle';
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.successMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.successMessage = action.payload.message;
        state.lastSubmitted = action.payload.data;
        state.error = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An unexpected error occurred.';
      });
  },
});

export const { resetContactStatus } = contactSlice.actions;

export const selectContactStatus = (state) => state.contact.status;
export const selectContactError = (state) => state.contact.error;
export const selectContactSuccessMessage = (state) => state.contact.successMessage;

export default contactSlice.reducer;
