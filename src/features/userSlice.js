
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
     status: false,
    userData:null
    },
  reducers: {
    login: (state,action) => {
      state.status=true;
      state.userData=action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;