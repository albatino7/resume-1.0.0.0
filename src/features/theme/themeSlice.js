import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return JSON.parse(saved);
  } catch {
    // fallback
  }
  return 'dark';
};

const initialState = {
  mode: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('portfolio-theme', JSON.stringify(state.mode));
        if (state.mode === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error('Error persisting theme', e);
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      try {
        localStorage.setItem('portfolio-theme', JSON.stringify(state.mode));
        if (state.mode === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error('Error persisting theme', e);
      }
    }
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectThemeMode = (state) => state.theme.mode;
export default themeSlice.reducer;
