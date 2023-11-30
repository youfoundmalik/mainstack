import { createSlice } from '@reduxjs/toolkit';

const systemReducer = createSlice({
  name: 'systemControllers',
  initialState: { currency: 'NGN' },
  reducers: {
    switch(state, actions) {
      state.currency = actions.payload;
    },
  },
});

export default systemReducer.reducer;
export const systemControllersActions = systemReducer.actions;
