import React from 'react';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { store } from './store';
import { queryClient } from './queryClient';
import { selectThemeMode } from '../features/theme/themeSlice';

const ThemedToaster = () => {
  const theme = useSelector(selectThemeMode);
  return (
    <Toaster
      position="bottom-right"
      theme={theme}
      richColors
      closeButton
      toastOptions={{
        style: {
          background: theme === 'dark' ? '#171a15' : '#ffffff',
          color: theme === 'dark' ? '#f4f4ee' : '#1d201a',
          border: theme === 'dark' ? '1px solid #242a20' : '1px solid #e2e0d5',
          fontFamily: 'inherit',
        },
      }}
    />
  );
};

export const AppProviders = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ThemedToaster />
      </QueryClientProvider>
    </ReduxProvider>
  );
};
