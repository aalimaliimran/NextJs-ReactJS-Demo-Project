import { createSlice } from '@reduxjs/toolkit';
import * as actionTypes from './actions';
/* Menu Toggle */
const uiSlice = createSlice(
  {
  name: 'ui',
  initialState: { menuIsVisible: true },
  reducers: {
    toggle(state) {
      state.menuIsVisible = !state.menuIsVisible;
    }
  },
},
{
  name: 'customization',
  initialState:  {
        isOpen: [], // for active default menu
        opened: true
    },
  reducers: { 
    customization (state = initialState, action) {
    let id;
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        default:
            return state;
    }
}
}
}
);

export const uiActions = uiSlice.actions;
export default uiSlice;
/* Menu Toggle */
