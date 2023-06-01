import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IGeneralLayoutState } from './generalLayoutState.interface';

const initialState: IGeneralLayoutState = {
  menuSelectedKeys: [],
};

export const generalLayoutSlice = createSlice({
  name: 'generalLayout',
  initialState,
  reducers: {
    initializeSelectedKeys: (state) => {
      state.menuSelectedKeys = initialState.menuSelectedKeys;
    },

    setMenuSelectedKeys: (
      state,
      action: PayloadAction<IGeneralLayoutState>
    ) => {
      state.menuSelectedKeys = action.payload.menuSelectedKeys;
    },
  },
});
