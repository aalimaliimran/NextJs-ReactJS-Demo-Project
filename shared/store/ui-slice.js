import { createSlice } from '@reduxjs/toolkit';

/* Menu Toggle */
const uiSlice = createSlice({
  name: 'ui',
  initialState: { menuIsVisible: null },
  reducers: {
    toggle(state) {
      state.menuIsVisible = !state.menuIsVisible;
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
/* Menu Toggle */
