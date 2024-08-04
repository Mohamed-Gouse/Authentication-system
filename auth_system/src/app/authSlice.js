import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: JSON.parse(localStorage.getItem("access")) || null,
  refresh: JSON.parse(localStorage.getItem("refresh")) || null,
  role: JSON.parse(localStorage.getItem("role")) || null,
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
};

const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    login: (state, action) => {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.role = action.payload.role;
      state.isLogged = true;
      localStorage.setItem("access", JSON.stringify(state.access));
      localStorage.setItem("refresh", JSON.stringify(state.refresh));
      localStorage.setItem("role", JSON.stringify(state.role));
      localStorage.setItem("isLogged", JSON.stringify(state.isLogged));
    },
    logout: (state, action) => {
      state.access = null;
      state.refresh = null;
      state.role = "";
      state.isLogged = false;
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
