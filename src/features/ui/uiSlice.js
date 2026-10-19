import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileMenuOpen: false,
  activeSection: 'hero',
  isResumeModalOpen: false,
  selectedCategory: 'all',
  searchQuery: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    openResumeModal: (state) => {
      state.isResumeModalOpen = true;
    },
    closeResumeModal: (state) => {
      state.isResumeModalOpen = false;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  openMobileMenu,
  setActiveSection,
  openResumeModal,
  closeResumeModal,
  setSelectedCategory,
  setSearchQuery,
} = uiSlice.actions;

export const selectIsMobileMenuOpen = (state) => state.ui.isMobileMenuOpen;
export const selectActiveSection = (state) => state.ui.activeSection;
export const selectIsResumeModalOpen = (state) => state.ui.isResumeModalOpen;
export const selectSelectedCategory = (state) => state.ui.selectedCategory;
export const selectSearchQuery = (state) => state.ui.searchQuery;

export default uiSlice.reducer;
