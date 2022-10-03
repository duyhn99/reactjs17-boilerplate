import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  loadding: false,
  modal: {
    default: false,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startLoading(state) {
      state.loadding = true;
    },

    stopLoading(state) {
      state.loadding = false;
    },

    toggleModal(state, action) {
      const isOpenModal = state.modal[action.payload];
      if (typeof isOpenModal === 'undefined' || isOpenModal == null) {
        state.modal[action.payload] = true;
      } else {
        state.modal[action.payload] = !isOpenModal;
      }
    },
  },
});

// ===========================================================
// >>>> FOR EXPORTS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ===========================================================
const appState = (state) => state.app;
export const appSelector = {
  loadding: createSelector(appState, (app) => app.loadding),
  modal: (name) => createSelector(appState, (app) => app.modal[name]),
};
export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
