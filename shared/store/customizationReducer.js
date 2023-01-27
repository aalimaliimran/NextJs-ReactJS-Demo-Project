// action - state management
import * as actionTypes from './actions';
import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
    isOpen: [], // for active default menu
    opened: true
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //



const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;

const customizationReducer = (state = initialState, action) => {
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
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        default:
            return state;
    }
};

export default customizationReducer;
