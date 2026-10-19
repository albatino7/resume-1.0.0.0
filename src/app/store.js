import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import uiReducer from '../features/ui/uiSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
    contact: contactReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
