import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { 
    ui: uiSlice.reducer,
    customization: uiSlice.reducer
  },
});

export default store;
