import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { generalLayoutSlice } from './generalLayoutSlice';

export const store = configureStore({
  reducer: {
    generalLayout: generalLayoutSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
